// Karolina Prevodi — site scripts

document.addEventListener('DOMContentLoaded', () => {
    const currentLang = () => localStorage.getItem('selectedLanguage') || 'sr';

    // ---------- Mobile menu ----------
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            const open = navMenu.classList.toggle('active');
            mobileMenu.classList.toggle('active', open);
            mobileMenu.setAttribute('aria-expanded', String(open));
        });

        const closeMenu = () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
            mobileMenu.setAttribute('aria-expanded', 'false');
        };

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !navMenu.contains(e.target)) {
                closeMenu();
            }
        });
    }

    // ---------- Smooth scrolling (skip empty "#" anchors) ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ---------- Single, rAF-throttled scroll handler ----------
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const revealElements = document.querySelectorAll('.reveal');

    const onScroll = () => {
        // Header style
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.92)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = '#ffffff';
                header.style.backdropFilter = 'none';
            }
        }

        // Active nav link
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 200) {
                current = section.id;
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });

        // Reveal animations
        revealElements.forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight - 150) {
                element.classList.add('active');
            }
        });
    };

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                onScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    onScroll();

    // ---------- FAQ accordion ----------
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            faqItems.forEach(other => {
                other.classList.remove('active');
                other.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
            });
            if (!isOpen) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // ---------- Contact form (Formspree) ----------
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            const lang = currentLang();

            const errors = validateForm(data, lang);
            if (errors.length > 0) {
                showMessage(errors.join('\n'), 'error');
                return;
            }

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = lang === 'sr' ? 'Slanje...' : 'Sending...';
            submitButton.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    showMessage(lang === 'sr'
                        ? 'Poruka je uspešno poslata! Javiću vam se uskoro.'
                        : 'Message sent successfully! I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Formspree error:', error);
                showMessage(lang === 'sr'
                    ? 'Nažalost, došlo je do greške pri slanju poruke. Pokušajte ponovo.'
                    : 'Sorry, there was an error sending your message. Please try again.', 'error');
            } finally {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }

    function validateForm(data, lang) {
        const errors = [];

        if (!data.name || data.name.trim().length < 2) {
            errors.push(lang === 'sr'
                ? 'Molimo unesite vaše ime (najmanje 2 karaktera)'
                : 'Please enter your name (at least 2 characters)');
        }

        if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            errors.push(lang === 'sr'
                ? 'Molimo unesite važeću email adresu'
                : 'Please enter a valid email address');
        }

        if (!data.message || data.message.trim().length < 10) {
            errors.push(lang === 'sr'
                ? 'Molimo unesite poruku (najmanje 10 karaktera)'
                : 'Please enter a message (at least 10 characters)');
        }

        return errors;
    }

    function showMessage(message, type) {
        const existingMessage = document.querySelector('.message');
        if (existingMessage) existingMessage.remove();

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        messageDiv.textContent = message;

        contactForm.parentNode.insertBefore(messageDiv, contactForm);

        setTimeout(() => {
            if (messageDiv.parentNode) messageDiv.remove();
        }, 6000);
    }
});
