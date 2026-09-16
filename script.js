// Static, bilingual site. No build step or client-side framework required.
(() => {
  const dictionary = window.siteTranslations;
  let language = "sr";
  try {
    language = localStorage.getItem("selectedLanguage") === "en" ? "en" : "sr";
  } catch {
    /* Storage is optional. */
  }
  let submitting = false;
  const text = (sr, en) => (language === "sr" ? sr : en);
  const menu = document.querySelector(".nav-menu");
  const menuButton = document.querySelector(".menu-toggle");
  const closeMenu = () => {
    menu?.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  };
  menuButton?.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  document
    .querySelectorAll(".nav-link")
    .forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const open = menu?.classList.contains("is-open");
      closeMenu();
      if (open) menuButton.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav")) closeMenu();
  });

  const form = document.getElementById("contactForm");
  const first = document.getElementById("form-step-one");
  const second = document.getElementById("form-step-two");
  const status = document.getElementById("form-status");
  const submit = document.getElementById("submit-button");
  let step = 1;
  let statusKind = "";
  function updateSummary() {
    if (!form) return;
    const service = form.elements.service;
    const direction = form.elements.direction;
    document.getElementById("request-summary").textContent =
      `${service.selectedOptions[0].textContent} · ${direction.selectedOptions[0].textContent}${form.elements.deadline.value ? " · " + new Intl.DateTimeFormat(language === "sr" ? "sr-Latn" : "en-GB").format(new Date(form.elements.deadline.value + "T12:00:00")) : ""}`;
  }
  function setStep(next, focus = true) {
    step = next;
    first.hidden = next !== 1;
    second.hidden = next !== 2;
    // Disabled controls do not block native validation on the visible step.
    first.disabled = next !== 1;
    second.disabled = next !== 2;
    document.getElementById("step-count").textContent = `${next} / 2`;
    document
      .getElementById("progress-one")
      .classList.toggle("is-current", next === 1);
    document
      .getElementById("progress-two")
      .classList.toggle("is-current", next === 2);
    updateSummary();
    if (focus) {
      document
        .querySelector(".form-panel")
        .scrollIntoView({ behavior: "auto", block: "start" });
      (next === 1 ? form.elements.service : form.elements.name).focus({
        preventScroll: true,
      });
    }
  }
  function showStatus(kind) {
    statusKind = kind;
    status.hidden = false;
    status.className = kind === "error" ? "error" : "";
    status.replaceChildren(
      document.createTextNode(
        kind === "success"
          ? text(
              "Hvala! Vaš upit je uspešno poslat. Javiću vam se sa predlogom cene i roka.",
              "Thank you! Your inquiry has been sent. I’ll get back to you with a price and timeline.",
            )
          : text(
              "Upit nije poslat. Pokušajte ponovo ili pošaljite projekat direktno na ",
              "Your inquiry wasn’t sent. Try again or email your project directly to ",
            ),
      ),
    );
    if (kind === "error") {
      const link = document.createElement("a");
      link.href = "mailto:karolinalukac@gmail.com";
      link.textContent = "karolinalukac@gmail.com";
      status.append(link, ".");
    }
  }
  function applyLanguage(next) {
    language = next;
    document.documentElement.lang = next;
    if (dictionary)
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const value = dictionary[next][element.dataset.i18n];
        if (value) element.innerHTML = value; // Local, authored strings only.
      });
    document
      .querySelectorAll("[data-lang]")
      .forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.lang === next),
        ),
      );
    document.title = text(
      "Karolina Lukač — Prevodi srpski i engleski",
      "Karolina Lukač — Serbian & English Translation",
    );
    const description = document.querySelector('meta[name="description"]');
    if (dictionary && description)
      description.content = text(
        "Prevodi knjiga, medicinske, tehničke i poslovne dokumentacije. Srpski i engleski, ličan pristup i besplatna procena u roku od 24 časa.",
        "Books, medical, technical and business translation. Serbian and English, a personal approach, and a free quote within 24 hours.",
      );
    menuButton?.setAttribute(
      "aria-label",
      text("Otvori navigaciju", "Open navigation"),
    );
    try {
      localStorage.setItem("selectedLanguage", next);
    } catch {
      /* Private browsing remains supported. */
    }
    updateSummary();
    if (statusKind) showStatus(statusKind);
  }
  document.querySelectorAll("[data-lang]").forEach((button) =>
    button.addEventListener("click", () => {
      if (!submitting) applyLanguage(button.dataset.lang);
    }),
  );
  if (dictionary) applyLanguage(language);
  document
    .getElementById("year")
    ?.replaceChildren(String(new Date().getFullYear()));
  if (!form) return;
  setStep(1, false);
  const validStep = (fieldset) =>
    Array.from(fieldset.querySelectorAll("input, select, textarea")).every(
      (input) => input.reportValidity(),
    );
  document.getElementById("next-step").addEventListener("click", () => {
    if (validStep(first)) setStep(2);
  });
  document.getElementById("previous-step").addEventListener("click", () => {
    if (!submitting) setStep(1);
  });
  document.querySelectorAll("[data-service]").forEach((link) =>
    link.addEventListener("click", () => {
      if (submitting) return;
      form.elements.service.value = link.dataset.service;
      setStep(1, false);
    }),
  );
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (submitting) return;
    if (step === 1) {
      if (validStep(first)) setStep(2);
      return;
    }
    if (!validStep(second)) return;
    // Include both steps in the request, even though only one is visible.
    first.disabled = false;
    const data = new FormData(form);
    first.disabled = true;
    if (data.get("_gotcha")) return;
    data.set("service", form.elements.service.selectedOptions[0].textContent);
    data.set(
      "direction",
      form.elements.direction.selectedOptions[0].textContent,
    );
    data.set("site_language", language);
    submitting = true;
    second.disabled = true;
    document
      .querySelectorAll("[data-lang]")
      .forEach((button) => (button.disabled = true));
    status.hidden = true;
    submit.textContent = text("Slanje…", "Sending…");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStep(1, false);
      showStatus("success");
    } catch {
      showStatus("error");
    } finally {
      clearTimeout(timeout);
      submitting = false;
      second.disabled = step !== 2;
      document
        .querySelectorAll("[data-lang]")
        .forEach((button) => (button.disabled = false));
      submit.innerHTML = `<span>${text("Pošaljite upit", "Send your inquiry")}</span><span aria-hidden="true">↗</span>`;
      status.focus({ preventScroll: true });
      status.scrollIntoView({ behavior: "auto", block: "nearest" });
    }
  });
})();
