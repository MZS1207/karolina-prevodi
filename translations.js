// Translation System for Karolina Prevodi Website

const translations = {
    sr: {
        // Navigation
        'nav-home': 'Početna',
        'nav-services': 'Usluge',
        'nav-about': 'O meni',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Kontakt',

        // Hero Section
        'hero-badge': 'Besplatna procena u roku od 24 časa',
        'hero-title': 'Stručni prevodi <span class="highlight">srpski – engleski</span>',
        'hero-subtitle': 'Specijalizovani prevodi knjiga, medicinske dokumentacije i tehničkih materijala — precizno, poverljivo i u dogovorenom roku.',
        'btn-get-quote': 'Zatražite ponudu',
        'btn-view-work': 'Pogledajte rad',

        // Services Section
        'services-badge': 'Čime se bavim',
        'services-title': 'Usluge',
        'services-subtitle': 'Specijalizovane prevodilačke usluge za srpski i engleski jezik',
        'service-books-title': 'Prevođenje knjiga',
        'service-books-desc': 'Profesionalno prevođenje beletristike i publicistike, uz čuvanje autorovog glasa i kulturnih nijansi između srpskog i engleskog.',
        'service-medical-title': 'Medicina i farmacija',
        'service-medical-desc': 'Specijalizovano prevođenje medicinske dokumentacije, farmaceutskih materijala, informacija za pacijente i kliničkih istraživanja, uz preciznu medicinsku terminologiju.',
        'service-technical-title': 'Tehnička uputstva',
        'service-technical-desc': 'Precizno prevođenje uputstava za mašine, tehničkih specifikacija, korisničkih vodiča i inženjerske dokumentacije, uz pravilnu tehničku terminologiju.',
        'service-general-title': 'Opšte prevođenje',
        'service-general-desc': 'Kompletne prevodilačke usluge za različite tipove dokumenata, uključujući pravne, poslovne i akademske materijale.',
        'service-legal-title': 'Pravni dokumenti',
        'service-legal-desc': 'Profesionalno prevođenje pravnih dokumenata, ugovora, sudskih spisa, imigracionih dokumenata i zvaničnih potvrda, uz preciznu pravnu terminologiju.',
        'service-it-title': 'Mašinstvo i IT',
        'service-it-desc': 'Specijalizovano prevođenje za inženjering, građevinarstvo i IT sektor, uključujući tehničke specifikacije, softversku dokumentaciju i arhitektonske planove.',

        // About Section
        'about-badge': 'O meni',
        'about-title': 'O Karolini',
        'about-subtitle': 'Povezivanje kultura kroz jezik',
        'about-description': 'Profesionalni sam prevodilac sa višegodišnjim iskustvom u premošćavanju jezičkih i kulturnih razlika. Strast prema jezicima i pažnja prema detaljima garantuju da svaki prevod zadrži izvorno značenje, ton i kulturne nijanse.',
        'about-highlight-1-title': 'Uska specijalizacija',
        'about-highlight-1-desc': 'Fokus isključivo na srpsko-engleski jezički par znači dublje poznavanje terminologije i kulture oba jezika.',
        'about-highlight-2-title': 'Poverljivost',
        'about-highlight-2-desc': 'Svi dokumenti se tretiraju strogo poverljivo, uz mogućnost potpisivanja ugovora o poverljivosti (NDA).',
        'about-highlight-3-title': 'Poštovanje rokova',
        'about-highlight-3-desc': 'Rok se jasno dogovara pre početka rada — i isporuka stiže u tom roku.',

        // Service Features
        'feature-literary': 'Književna izvrsnost',
        'feature-cultural': 'Kulturna autentičnost',
        'feature-medical-accuracy': 'Medicinska preciznost',
        'feature-regulatory': 'Regulatorna usklađenost',
        'feature-technical': 'Tehničko znanje',
        'feature-precision': 'Zagarantovana preciznost',
        'feature-versatile': 'Svestrana ekspertiza',
        'feature-reliable': 'Pouzdan kvalitet',
        'feature-legal-accuracy': 'Pravna preciznost',
        'feature-confidentiality': 'Zagarantovana poverljivost',
        'feature-industry-expertise': 'Poznavanje industrije',
        'feature-technical-accuracy': 'Tehnička tačnost',

        // Portfolio Section
        'portfolio-title': 'Oblasti rada',
        'portfolio-subtitle': 'Tipovi projekata koje prevodim',
        'portfolio-book-title': 'Prevođenje romana i proze',
        'portfolio-book-desc': 'Prevođenje savremene proze između srpskog i engleskog, uz čuvanje književnog stila i kulturnog konteksta za međunarodnu publiku.',
        'portfolio-pharma-title': 'Farmaceutska dokumentacija',
        'portfolio-pharma-desc': 'Prevođenje informacija o lekovima, dokumentacije kliničkih ispitivanja i regulatornih materijala za farmaceutske kompanije.',
        'portfolio-technical-title': 'Tehnička uputstva i priručnici',
        'portfolio-technical-desc': 'Prevođenje korisničkih priručnika za industrijske mašine i bezbednosnih uputstava sa engleskog na srpski.',

        // Tags
        'tag-literary': 'Književno',
        'tag-sr-en': 'Srpski–engleski',
        'tag-fiction': 'Beletristika',
        'tag-pharmaceutical': 'Farmacija',
        'tag-en-sr': 'Engleski–srpski',
        'tag-regulatory': 'Regulatorno',
        'tag-technical': 'Tehničko',
        'tag-manuals': 'Priručnici',

        // Contact Section
        'contact-title': 'Kontaktirajte me',
        'contact-description': 'Pošaljite dokument ili opišite projekat — dobićete besplatnu, neobavezujuću procenu cene i roka u roku od 24 časa.',
        'contact-email-label': 'Email',
        'contact-phone-label': 'Telefon',
        'contact-chat-label': 'Brze poruke',
        'btn-whatsapp': 'WhatsApp',
        'btn-viber': 'Viber',
        'contact-hours-label': 'Radno vreme',
        'contact-hours-weekday': 'Ponedeljak – petak: 9:00 – 18:00',
        'contact-hours-weekend': 'Vikend: dostupno po dogovoru',

        // Form
        'form-name-label': 'Ime *',
        'form-email-label': 'Email *',
        'form-service-label': 'Tip usluge',
        'form-service-placeholder': 'Izaberite uslugu',
        'form-service-books': 'Prevođenje knjiga',
        'form-service-medical': 'Medicina i farmacija',
        'form-service-technical': 'Tehnička uputstva',
        'form-service-legal': 'Pravni dokumenti',
        'form-service-it': 'Mašinstvo i IT',
        'form-service-general': 'Opšte prevođenje',
        'form-service-other': 'Ostalo',
        'form-message-label': 'Poruka *',
        'form-name-placeholder': 'Unesite vaše ime',
        'form-email-placeholder': 'Unesite vaš email',
        'form-message-placeholder': 'Opišite vaš projekat ili postavite pitanje...',
        'form-attachment-label': 'Prilog (opciono)',
        'form-attachment-help': 'PDF, Word ili tekstualni fajlovi (najviše 10 MB)',
        'form-submit-btn': 'Pošaljite poruku',

        // Footer
        'footer-description': 'Profesionalne prevodilačke usluge za srpski i engleski jezik — knjige, medicina, tehnika i pravo.',
        'footer-services-heading': 'Usluge',
        'footer-books-link': 'Prevođenje knjiga',
        'footer-medical-link': 'Medicina i farmacija',
        'footer-technical-link': 'Tehnička uputstva',
        'footer-legal-link': 'Pravni dokumenti',
        'footer-it-link': 'Mašinstvo i IT',
        'footer-general-link': 'Opšte prevođenje',
        'footer-company-heading': 'Informacije',
        'footer-about-link': 'O meni',
        'footer-portfolio-link': 'Portfolio',
        'footer-contact-link': 'Kontakt',
        'footer-privacy-link': 'Politika privatnosti',
        'footer-copyright': '&copy; 2026 Karolina Lukač — Prevodi. Sva prava zadržana.',

        // Process Section
        'process-badge': 'Kako funkcioniše',
        'process-title': 'Proces prevođenja',
        'process-subtitle': 'Jednostavan i efikasan radni tok',
        'step-1-title': 'Konsultacija',
        'step-1-desc': 'Razgovaramo o zahtevima projekta, roku i specifičnim potrebama, kako bismo osigurali potpuno razumevanje.',
        'step-2-title': 'Ponuda i dogovor',
        'step-2-desc': 'Dobijate jasnu ponudu sa cenom i rokom isporuke — bez skrivenih troškova.',
        'step-3-title': 'Prevođenje',
        'step-3-desc': 'Profesionalno prevođenje sa pažnjom na kulturni kontekst, terminologiju i doslednost stila.',
        'step-4-title': 'Provera i isporuka',
        'step-4-desc': 'Završna provera kvaliteta i isporuka prevedenih dokumenata u željenom formatu, u dogovorenom roku.',

        // FAQ Section
        'faq-badge': 'Česta pitanja',
        'faq-title': 'Imate pitanja?',
        'faq-subtitle': 'Sve što treba da znate o saradnji',
        'faq-1-question': 'Između kojih jezika prevodite?',
        'faq-1-answer': 'Specijalizovana sam za srpsko-engleske i englesko-srpske prevode. Ova fokusirana ekspertiza omogućava prevode najvišeg kvaliteta, sa dubokim kulturnim razumevanjem i preciznom terminologijom.',
        'faq-2-question': 'Koliko traje tipičan prevod?',
        'faq-2-answer': 'Rok zavisi od dužine i složenosti dokumenta. Tipično, 1–5 stranica traje 2–3 dana, dok veći projekti mogu zahtevati 1–2 nedelje. Tačan rok uvek dobijate unapred, uz ponudu.',
        'faq-3-question': 'Da li radite prevode za službenu upotrebu?',
        'faq-3-answer': 'Radim prevode pravnih i zvaničnih dokumenata uz izjavu o tačnosti prevoda. Ako vam je potrebna i overa sudskog tumača, kontaktirajte me — pomoći ću vam da pronađete pravo rešenje za vaš slučaj.',
        'faq-4-question': 'Koliko košta prevod?',
        'faq-4-answer': 'Cena zavisi od obima, oblasti i roka, a obračunava se po prevodilačkoj strani (1.800 karaktera sa razmacima). Pošaljite dokument i dobićete besplatnu, neobavezujuću procenu u roku od 24 časa.',
        'faq-5-question': 'U kojim oblastima ste specijalizovani?',
        'faq-5-answer': 'Glavne specijalizacije su književna dela (beletristika i publicistika), medicinska i farmaceutska dokumentacija, tehnička uputstva i poslovni dokumenti.',
        'faq-6-question': 'Kako osiguravate kvalitet prevoda?',
        'faq-6-answer': 'Proces obuhvata istraživanje terminologije, kulturnu adaptaciju i više faza provere. Svaki prevod prolazi završnu lekturu radi tačnosti i doslednosti stila.',

        // CTA Section
        'cta-title': 'Spremni da srušite jezičke barijere?',
        'cta-subtitle': 'Pošaljite dokument danas — besplatna procena stiže u roku od 24 časa.',
        'cta-get-started': 'Zatražite ponudu',
        'cta-learn-more': 'Saznajte više',
        'cta-fast': 'Odgovor u roku od 24 časa',
        'cta-secure': 'Bezbedno i poverljivo',
        'cta-quality': 'Garantovan kvalitet'
    },

    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',

        // Hero Section
        'hero-badge': 'Free quote within 24 hours',
        'hero-title': 'Expert <span class="highlight">Serbian–English</span> translations',
        'hero-subtitle': 'Specialized translation of books, medical documentation and technical materials — accurate, confidential and always on time.',
        'btn-get-quote': 'Get a Quote',
        'btn-view-work': 'View Work',

        // Services Section
        'services-badge': 'What I Do',
        'services-title': 'Services',
        'services-subtitle': 'Specialized translation services for Serbian and English',
        'service-books-title': 'Book Translation',
        'service-books-desc': 'Professional translation of fiction and non-fiction books, preserving the author\'s voice and cultural nuances between Serbian and English.',
        'service-medical-title': 'Medical & Pharmaceutical',
        'service-medical-desc': 'Specialized translation of medical documents, pharmaceutical materials, patient information, and clinical research papers with precise medical terminology.',
        'service-technical-title': 'Technical Manuals',
        'service-technical-desc': 'Accurate translation of machine manuals, technical specifications, user guides, and engineering documentation with proper technical terminology.',
        'service-general-title': 'General Translation',
        'service-general-desc': 'Comprehensive translation services for various document types including legal, business, and academic materials.',
        'service-legal-title': 'Legal Documents',
        'service-legal-desc': 'Professional translation of legal documents, contracts, court papers, immigration documents, and official certificates with legal terminology accuracy.',
        'service-it-title': 'Engineering & IT',
        'service-it-desc': 'Specialized translation for engineering, construction, and IT sectors including technical specifications, software documentation, and architectural plans.',

        // About Section
        'about-badge': 'About Me',
        'about-title': 'About Karolina',
        'about-subtitle': 'Bridging cultures through language',
        'about-description': 'I\'m a professional translator with years of experience in bridging language and cultural gaps. My passion for languages and attention to detail ensure that every translation keeps the original meaning, tone, and cultural nuances.',
        'about-highlight-1-title': 'Focused specialization',
        'about-highlight-1-desc': 'Working exclusively with the Serbian–English language pair means deeper knowledge of the terminology and culture of both languages.',
        'about-highlight-2-title': 'Confidentiality',
        'about-highlight-2-desc': 'All documents are treated as strictly confidential, with an NDA available on request.',
        'about-highlight-3-title': 'Deadlines respected',
        'about-highlight-3-desc': 'The deadline is agreed before work begins — and delivery arrives on time.',

        // Service Features
        'feature-literary': 'Literary Excellence',
        'feature-cultural': 'Cultural Authenticity',
        'feature-medical-accuracy': 'Medical Precision',
        'feature-regulatory': 'Regulatory Compliance',
        'feature-technical': 'Technical Expertise',
        'feature-precision': 'Precision Guaranteed',
        'feature-versatile': 'Versatile Expertise',
        'feature-reliable': 'Reliable Quality',
        'feature-legal-accuracy': 'Legal Precision',
        'feature-confidentiality': 'Confidentiality Assured',
        'feature-industry-expertise': 'Industry Expertise',
        'feature-technical-accuracy': 'Technical Accuracy',

        // Portfolio Section
        'portfolio-title': 'Areas of Work',
        'portfolio-subtitle': 'Types of projects I translate',
        'portfolio-book-title': 'Fiction & Prose Translation',
        'portfolio-book-desc': 'Translation of contemporary prose between Serbian and English, preserving literary style and cultural context for international readers.',
        'portfolio-pharma-title': 'Pharmaceutical Documentation',
        'portfolio-pharma-desc': 'Translation of medicine information, clinical trial documentation, and regulatory materials for pharmaceutical companies.',
        'portfolio-technical-title': 'Technical Manuals & Guides',
        'portfolio-technical-desc': 'Translation of user manuals for industrial machinery and safety instructions from English into Serbian.',

        // Tags
        'tag-literary': 'Literary',
        'tag-sr-en': 'Serbian–English',
        'tag-fiction': 'Fiction',
        'tag-pharmaceutical': 'Pharmaceutical',
        'tag-en-sr': 'English–Serbian',
        'tag-regulatory': 'Regulatory',
        'tag-technical': 'Technical',
        'tag-manuals': 'Manuals',

        // Contact Section
        'contact-title': 'Get in Touch',
        'contact-description': 'Send your document or describe your project — you\'ll receive a free, no-obligation quote with price and deadline within 24 hours.',
        'contact-email-label': 'Email',
        'contact-phone-label': 'Phone',
        'contact-chat-label': 'Quick Chat',
        'btn-whatsapp': 'WhatsApp',
        'btn-viber': 'Viber',
        'contact-hours-label': 'Business Hours',
        'contact-hours-weekday': 'Monday – Friday: 9:00 – 18:00',
        'contact-hours-weekend': 'Weekend: available by appointment',

        // Form
        'form-name-label': 'Name *',
        'form-email-label': 'Email *',
        'form-service-label': 'Service Type',
        'form-service-placeholder': 'Select a service',
        'form-service-books': 'Book Translation',
        'form-service-medical': 'Medical & Pharmaceutical',
        'form-service-technical': 'Technical Manuals',
        'form-service-legal': 'Legal Documents',
        'form-service-it': 'Engineering & IT',
        'form-service-general': 'General Translation',
        'form-service-other': 'Other',
        'form-message-label': 'Message *',
        'form-name-placeholder': 'Enter your name',
        'form-email-placeholder': 'Enter your email',
        'form-message-placeholder': 'Describe your project or ask a question...',
        'form-attachment-label': 'Attachment (optional)',
        'form-attachment-help': 'PDF, Word, or text files (max 10 MB)',
        'form-submit-btn': 'Send Message',

        // Footer
        'footer-description': 'Professional Serbian–English translation services — books, medical, technical and legal.',
        'footer-services-heading': 'Services',
        'footer-books-link': 'Book Translation',
        'footer-medical-link': 'Medical & Pharmaceutical',
        'footer-technical-link': 'Technical Manuals',
        'footer-legal-link': 'Legal Documents',
        'footer-it-link': 'Engineering & IT',
        'footer-general-link': 'General Translation',
        'footer-company-heading': 'Information',
        'footer-about-link': 'About',
        'footer-portfolio-link': 'Portfolio',
        'footer-contact-link': 'Contact',
        'footer-privacy-link': 'Privacy Policy',
        'footer-copyright': '&copy; 2026 Karolina Lukač — Prevodi. All rights reserved.',

        // Process Section
        'process-badge': 'How It Works',
        'process-title': 'Translation Process',
        'process-subtitle': 'Simple and efficient workflow',
        'step-1-title': 'Consultation',
        'step-1-desc': 'We discuss your project requirements, timeline, and specific needs to ensure perfect understanding.',
        'step-2-title': 'Quote & Agreement',
        'step-2-desc': 'You receive a clear quote with price and delivery deadline — no hidden costs.',
        'step-3-title': 'Translation',
        'step-3-desc': 'Professional translation with attention to cultural context, terminology, and style consistency.',
        'step-4-title': 'Review & Delivery',
        'step-4-desc': 'Final quality review and delivery of your translated documents in your preferred format, on time.',

        // FAQ Section
        'faq-badge': 'FAQ',
        'faq-title': 'Common Questions',
        'faq-subtitle': 'Everything you need to know about working together',
        'faq-1-question': 'What languages do you translate between?',
        'faq-1-answer': 'I specialize in Serbian–English and English–Serbian translations. This focused expertise allows me to provide the highest quality translations with deep cultural understanding and precise terminology.',
        'faq-2-question': 'How long does a typical translation take?',
        'faq-2-answer': 'Turnaround depends on document length and complexity. Typically, 1–5 pages take 2–3 days, while larger projects may require 1–2 weeks. You always get the exact deadline upfront, with the quote.',
        'faq-3-question': 'Do you translate documents for official use?',
        'faq-3-answer': 'I translate legal and official documents with a statement of translation accuracy. If you also need a certified court interpreter\'s seal, contact me — I\'ll help you find the right solution for your case.',
        'faq-4-question': 'How much does a translation cost?',
        'faq-4-answer': 'The price depends on volume, subject area and deadline, and is calculated per standard page (1,800 characters with spaces). Send your document and you\'ll receive a free, no-obligation quote within 24 hours.',
        'faq-5-question': 'What fields do you specialize in?',
        'faq-5-answer': 'My main specializations are literary works (fiction and non-fiction), medical and pharmaceutical documentation, technical manuals, and business documents.',
        'faq-6-question': 'How do you ensure translation quality?',
        'faq-6-answer': 'The process includes terminology research, cultural adaptation, and multiple review stages. Every translation goes through a final proofread for accuracy and style consistency.',

        // CTA Section
        'cta-title': 'Ready to Break Language Barriers?',
        'cta-subtitle': 'Send your document today — a free quote arrives within 24 hours.',
        'cta-get-started': 'Get a Quote',
        'cta-learn-more': 'Learn More',
        'cta-fast': 'Reply within 24 hours',
        'cta-secure': 'Secure & Confidential',
        'cta-quality': 'Quality Guaranteed'
    }
};

// Language Switcher Class
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('selectedLanguage') || 'sr';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.translatePage(this.currentLang);
        this.updateLanguageButton();
        this.updateActiveOption(this.currentLang);
        this.updateDocumentMeta(this.currentLang);
    }

    setupEventListeners() {
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');

        if (languageBtn && languageDropdown) {
            languageBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                languageDropdown.classList.toggle('show');
            });

            const languageOptions = languageDropdown.querySelectorAll('.language-option');
            languageOptions.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const lang = option.dataset.lang;
                    this.switchLanguage(lang);
                    languageDropdown.classList.remove('show');
                });
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                languageDropdown.classList.remove('show');
            });
        }
    }

    switchLanguage(lang) {
        if (lang !== this.currentLang) {
            this.currentLang = lang;
            localStorage.setItem('selectedLanguage', lang);
            this.translatePage(lang);
            this.updateLanguageButton();
            this.updateActiveOption(lang);
            this.updateDocumentMeta(lang);
        }
    }

    translatePage(lang) {
        const elements = document.querySelectorAll('[data-translate]');

        elements.forEach(element => {
            const key = element.dataset.translate;
            const translation = translations[lang]?.[key];

            if (translation) {
                // Handle HTML content for elements that can contain HTML
                if (['H1', 'H2', 'H3', 'P', 'SPAN', 'A'].includes(element.tagName)) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        this.updateFormElements(lang);
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }

    updateFormElements(lang) {
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.dataset.translatePlaceholder;
            const translation = translations[lang]?.[key];
            if (translation) {
                element.placeholder = translation;
            }
        });
    }

    updateLanguageButton() {
        const currentLangSpan = document.querySelector('.current-lang');
        if (currentLangSpan) {
            currentLangSpan.textContent = this.currentLang.toUpperCase();
        }
    }

    updateActiveOption(lang) {
        const options = document.querySelectorAll('.language-option');
        options.forEach(option => {
            option.classList.toggle('active', option.dataset.lang === lang);
        });
    }

    updateDocumentMeta(lang) {
        // <html lang="...">
        document.documentElement.lang = lang === 'sr' ? 'sr' : 'en';

        // Page title
        document.title = lang === 'sr'
            ? 'Karolina Lukač — Prevodilac za srpski i engleski | Karolina Prevodi'
            : 'Karolina Lukač — Serbian-English Translator | Karolina Prevodi';

        // Meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = lang === 'sr'
                ? 'Profesionalni prevodi srpski-engleski: knjige, medicinska dokumentacija, tehnička uputstva i pravni dokumenti. Besplatna procena u roku od 24 časa.'
                : 'Professional Serbian-English translation: books, medical documentation, technical manuals and legal documents. Free quote within 24 hours.';
        }
    }
}

// Initialize language switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();
});

// Export for use in other scripts
window.LanguageSwitcher = LanguageSwitcher;
window.translations = translations;
