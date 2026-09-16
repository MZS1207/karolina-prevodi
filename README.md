# Karolina Prevodi

Bilingual Serbian / English website for Karolina Lukač’s translation services. Plain HTML, CSS, and JavaScript; no build step.

## Local preview

```sh
python3 -m http.server 8080
```

Open http://localhost:8080.

## Content and design

- `index.html`: service overview, profile, process, two-step inquiry, and FAQ. Serbian is readable without JavaScript; an email alternative is shown if scripts are unavailable.
- `translations.js`: matching Serbian and English text. Edit both translations and the default HTML when changing copy. Language preference is kept locally; blocked storage does not break the site.
- `styles.css`: responsive paper / forest-green visual identity, original typographic artwork, mobile navigation, keyboard focus, and reduced-motion support.
- `script.js`: language switching, mobile navigation, inquiry validation and delivery.
- `privacy.html`: privacy information.

The profile uses existing site information. The monogram is intentional; no fabricated portrait, credentials, clients, testimonials, or portfolio claims were added.

## Inquiries

Service cards preselect the relevant field. The first step collects service, language direction, optional deadline, and project description. The second collects name, email, and consent. Both steps are included in the request.

The existing Formspree endpoint is preserved: `https://formspree.io/f/xpqoegvn`. Successful HTTP responses show confirmation; network failures, errors, and a 20-second timeout preserve the inquiry and show an email alternative. Duplicate submissions are disabled while sending. Attachments are sent by email; the page does not assume paid file-upload support on the Formspree account.

The endpoint’s account ownership, activation, and real inbox delivery must be checked by its owner before launch. Development checks use simulated responses and do not send emails.

## Validation

Checked in the browser on desktop and mobile, including navigation, service selection, validation, and switching languages without losing input. Isolated DOM tests cover complete payloads, both form steps, duplicate prevention, success, HTTP and network errors, recovery, translation keys, IDs, and anchor targets.

## Deployment

The existing GitHub Pages workflow publishes the static repository. No production deployment is performed as part of local editing. Review the canonical URL, social image, and Formspree account when publishing to a different domain.

## Agency CV

The downloadable CVs are `output/pdf/Karolina-Lukac-Translator-CV-EN.pdf` and `output/pdf/Karolina-Lukac-Translator-CV-SR.pdf`. The selected site language controls the download URL, filename and language label; Serbian is the default without JavaScript. The download card is in the About section, with translated labels and a same-origin download link. The PDF contains selectable text and clickable contact links.

To regenerate it, run `python3 scripts/build_cv.py --lang en` or `python3 scripts/build_cv.py --lang sr` with ReportLab installed. Serbian copy is maintained in `scripts/cv_sr.json`. The builder uses Arial and Georgia TrueType fonts from macOS; set `CV_FONT_DIR` to a folder containing `Arial.ttf`, `Arial Bold.ttf` and `Georgia.ttf` elsewhere. Render and inspect the PDF after editing. Content is limited to the existing site and the public LinkedIn details available during this project; unknown employment dates, degrees, clients and proficiency in CAT tools are not invented. CAT tools are explicitly described as training.
