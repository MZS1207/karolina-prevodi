// Translation System for Karolina Prevodi Website

const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Serbian-English <span class="highlight">Translation Expert</span>',
        'hero-subtitle': 'Specialized translation services for books, medical documents, and technical materials with cultural precision.',
        'btn-get-quote': 'Get Quote',
        'btn-view-work': 'View Work',
        
        // Services Section
        'services-badge': 'What We Do',
        'services-title': 'Our Services',
        'services-subtitle': 'Specialized Serbian-English translation services',
        'service-books-title': 'Book Translation',
        'service-books-desc': 'Professional translation of fiction and non-fiction books, preserving the author\'s voice and cultural nuances between Serbian and English.',
        'service-medical-title': 'Medical & Pharmaceutical',
        'service-medical-desc': 'Specialized translation of medical documents, pharmaceutical materials, patient information, and clinical research papers with precise medical terminology.',
        'service-technical-title': 'Technical Manuals',
        'service-technical-desc': 'Accurate translation of machine manuals, technical specifications, user guides, and engineering documentation with proper technical terminology.',
        'service-general-title': 'General Translation',
        'service-general-desc': 'Comprehensive Serbian-English translation services for various document types including legal, business, and academic materials.',
        'service-legal-title': 'Legal Documents',
        'service-legal-desc': 'Professional translation of legal documents, contracts, court papers, immigration documents, and official certificates with legal terminology accuracy.',
        'service-it-title': 'Engineering & IT',
        'service-it-desc': 'Specialized translation for engineering, construction, and IT sectors including technical specifications, software documentation, and architectural plans.',
        
        // About Section
        'about-badge': 'About Me',
        'about-title': 'About Karolina',
        'about-subtitle': 'Passionate about bridging cultures through language',
        'about-description': 'I\'m a professional translator with years of experience in bridging communication gaps between languages and cultures. My passion for languages and attention to detail ensures that every translation maintains the original meaning, tone, and cultural nuances.',
        'stat-projects-number': '500+',
        'stat-projects-label': 'Projects Completed',
        'stat-langs-number': '15+',
        'stat-langs-label': 'Language Pairs',
        'stat-satisfaction-number': '98%',
        'stat-satisfaction-label': 'Client Satisfaction',
        'skills-title': 'Language Expertise',
        'skill-english': 'English',
        'skill-serbian': 'Serbian',
        
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
        'portfolio-title': 'Recent Projects',
        'portfolio-subtitle': 'Showcasing specialized translation work',
        'portfolio-book-title': 'Fiction Novel Translation',
        'portfolio-book-desc': 'Complete translation of a contemporary Serbian fiction novel into English, preserving literary style and cultural context for international readership.',
        'portfolio-pharma-title': 'Pharmaceutical Documentation',
        'portfolio-pharma-desc': 'Translation of pharmaceutical product information, clinical trial documentation, and regulatory compliance materials for international pharmaceutical companies.',
        'portfolio-technical-title': 'Machine Manual Translation',
        'portfolio-technical-desc': 'Technical translation of industrial machinery user manuals and safety instructions from English to Serbian for manufacturing facility implementation.',
        
        // Tags
        'tag-literary': 'Literary',
        'tag-sr-en': 'Serbian-English',
        'tag-fiction': 'Fiction',
        'tag-pharmaceutical': 'Pharmaceutical',
        'tag-en-sr': 'English-Serbian',
        'tag-regulatory': 'Regulatory',
        'tag-technical': 'Technical',
        'tag-manuals': 'Manuals',
        
        // Contact Section
        'contact-title': 'Get in Touch',
        'contact-description': 'Ready to break down language barriers? Contact me for a free consultation and quote for your translation needs.',
        'contact-email-label': 'Email',
        'contact-phone-label': 'Phone',
        'contact-hours-label': 'Business Hours',
        'contact-hours-weekday': 'Monday - Friday: 9:00 - 18:00',
        'contact-hours-weekend': 'Weekend: Available by appointment',
        
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
        'form-message-placeholder': 'Enter your message...',
        'form-attachment-label': 'Attachment (Optional)',
        'form-attachment-help': 'PDF, Word, or text files (max 10MB)',
        'form-submit-btn': 'Send Message',
        
        // Footer
        'footer-description': 'Professional Serbian-English translation services connecting languages and cultures worldwide.',
        'footer-services-heading': 'Services',
        'footer-books-link': 'Book Translation',
        'footer-medical-link': 'Medical & Pharmaceutical',
        'footer-technical-link': 'Technical Manuals',
        'footer-legal-link': 'Legal Documents',
        'footer-it-link': 'Engineering & IT',
        'footer-general-link': 'General Translation',
        'footer-company-heading': 'Company',
        'footer-about-link': 'About',
        'footer-portfolio-link': 'Portfolio',
        'footer-contact-link': 'Contact',
        'footer-privacy-link': 'Privacy Policy',
        'footer-copyright': '&copy; 2024 Karolina Prevodi. All rights reserved.',
        
        // Testimonials Section
        'testimonials-badge': 'Client Testimonials',
        'testimonials-title': 'What Clients Say',
        'testimonials-subtitle': 'Real feedback from satisfied clients',
        'testimonial-1-text': 'Karolina\'s translation of our medical documentation was exceptional. Her attention to detail and understanding of complex terminology saved us weeks of work.',
        'testimonial-1-name': 'Medical Director',
        'testimonial-1-title': 'Leading Healthcare Company',
        'testimonial-2-text': 'The literary translation Karolina provided for our novel was beautiful. She captured the essence and cultural nuances perfectly.',
        'testimonial-2-name': 'Publishing Director',
        'testimonial-2-title': 'International Publishing House',
        'testimonial-3-text': 'Technical manuals translated with precision and accuracy. Karolina understands engineering terminology and delivers on time.',
        'testimonial-3-name': 'Technical Manager',
        'testimonial-3-title': 'Engineering Corporation',
        
        // Process Section
        'process-badge': 'How It Works',
        'process-title': 'Translation Process',
        'process-subtitle': 'Simple and efficient workflow',
        'step-1-title': 'Consultation',
        'step-1-desc': 'We discuss your project requirements, timeline, and specific needs to ensure perfect understanding.',
        'step-2-title': 'Quote & Agreement',
        'step-2-desc': 'Receive a detailed quote with timeline and deliverables. Clear terms and competitive pricing.',
        'step-3-title': 'Translation',
        'step-3-desc': 'Professional translation with attention to cultural context, terminology, and style consistency.',
        'step-4-title': 'Review & Delivery',
        'step-4-desc': 'Quality assurance review and timely delivery of your translated documents in your preferred format.',
        
        // FAQ Section
        'faq-badge': 'Frequently Asked Questions',
        'faq-title': 'Common Questions',
        'faq-subtitle': 'Everything you need to know about our services',
        'faq-1-question': 'What languages do you translate between?',
        'faq-1-answer': 'I specialize in Serbian-English and English-Serbian translations. This focused expertise allows me to provide the highest quality translations with deep cultural understanding and precise terminology.',
        'faq-2-question': 'How long does a typical translation take?',
        'faq-2-answer': 'Turnaround time depends on document length and complexity. Typically, 1-5 pages take 2-3 days, while larger projects may require 1-2 weeks. I always provide clear timelines in our initial consultation.',
        'faq-3-question': 'Do you provide certified translations?',
        'faq-3-answer': 'Yes, I provide certified translations for legal documents, immigration papers, and official purposes. All certified translations include a statement of accuracy and my professional credentials.',
        'faq-4-question': 'What industries do you specialize in?',
        'faq-4-answer': 'My main specializations include literary works (fiction and non-fiction), medical and pharmaceutical documents, technical manuals, and general business documents. I have extensive experience in each of these areas.',
        'faq-5-question': 'How do you ensure translation quality?',
        'faq-5-answer': 'I follow a rigorous quality process including terminology research, cultural adaptation, multiple review stages, and client feedback incorporation. Every translation is proofread for accuracy and style consistency.',
        
        // CTA Section
        'cta-title': 'Ready to Break Language Barriers?',
        'cta-subtitle': 'Get your professional Serbian-English translation today. Fast, accurate, and culturally aware.',
        'cta-get-started': 'Get Started',
        'cta-learn-more': 'Learn More',
        'cta-fast': 'Fast Turnaround',
        'cta-secure': 'Secure & Confidential',
        'cta-quality': 'Quality Guaranteed'
    },
    
    sr: {
        // Navigation
        'nav-home': 'Po\u010detna',
        'nav-services': 'Usluge',
        'nav-about': 'O meni',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Kontakt',
        
        // Hero Section
        'hero-title': 'Srpsko-Engleski <span class="highlight">Ekspert za Prevo\u0111enje</span>',
        'hero-subtitle': 'Specijalizovane prevodila\u010dke usluge za knjige, medicinske dokumente i tehni\u010dke materijale sa kulturnom precizno\u0161\u0107u.',
        'btn-get-quote': 'Zatra\u017eite Ponudu',
        'btn-view-work': 'Pogledajte Rad',
        
        // Services Section
        'services-badge': '\u0160to radimo',
        'services-title': 'Na\u0161e Usluge',
        'services-subtitle': 'Specijalizovane prevodila\u010dke usluge srpski-engleski',
        'service-books-title': 'Prevo\u0111enje Knjiga',
        'service-books-desc': 'Profesionalno prevo\u0111enje beletristike i non-fiction knjiga, sa \u010duvanjem autorovog glasa i kulturnih nijansi izme\u0111u srpskog i engleskog.',
        'service-medical-title': 'Medicinsko i Farmaceutsko',
        'service-medical-desc': 'Specijalizovano prevo\u0111enje medicinskih dokumenata, farmaceutskih materijala, informacija za pacijente i klini\u010dkih istra\u017eivanja sa preciznom medicinskom terminologijom.',
        'service-technical-title': 'Tehni\u010dki Priru\u010dnici',
        'service-technical-desc': 'Precizno prevo\u0111enje uputstva za ma\u0161ine, tehni\u010dkih specifikacija, korisni\u010dkih vodi\u010da i in\u017eenjerske dokumentacije sa pravilnom tehni\u010dkom terminologijom.',
        'service-general-title': 'Op\u0161te Prevo\u0111enje',
        'service-general-desc': 'Kompletne prevodila\u010dke usluge srpski-engleski za razli\u010dite tipove dokumenata uklju\u010duju\u0107i pravne, poslovne i akademske materijale.',
        'service-legal-title': 'Pravni Dokumenti',
        'service-legal-desc': 'Profesionalno prevo\u0111enje pravnih dokumenata, ugovora, sudskih spisa, imigracionih dokumenata i zvani\u010dnih sertifikata sa preciznom pravnom terminologijom.',
        'service-it-title': 'Ma\u0161instvo & IT',
        'service-it-desc': 'Specijalizovano prevo\u0111enje za in\u017eenjering, gradjevinu i IT sektore uklju\u010duju\u0107i tehni\u010dke specifikacije, softversku dokumentaciju i arhitektonske planove.',
        
        // About Section
        'about-badge': 'O meni',
        'about-title': 'O Karolini',
        'about-subtitle': 'Strastvena u povezivanju kultura kroz jezik',
        'about-description': 'Profesionalni prevodilac sa godinama iskustva u premo\u0161avanju komunikacijskih jazova izme\u0111u jezika i kultura. Moja strast prema jezicima i pa\u017enja prema detaljima osiguravaju da svaki prevod zadr\u017ei originalno zna\u010denje, ton i kulturne nijanse.',
        'stat-projects-number': '500+',
        'stat-projects-label': 'Zavr\u0161enih Projekata',
        'stat-langs-number': '15+',
        'stat-langs-label': 'Jezickih Parova',
        'stat-satisfaction-number': '98%',
        'stat-satisfaction-label': 'Zadovoljstvo Klijenata',
        'skills-title': 'Jezici',
        'skill-english': 'Engleski',
        'skill-serbian': 'Srpski',
        
        // Service Features
        'feature-literary': 'Knji\u017eevna Izvrsnost',
        'feature-cultural': 'Kulturna Autenti\u010dnost',
        'feature-medical-accuracy': 'Medicinska Preciznost',
        'feature-regulatory': 'Regulatorna Uskla\u010denost',
        'feature-technical': 'Tehni\u010dko Znanje',
        'feature-precision': 'Preciznost Zagarantovana',
        'feature-versatile': 'Svestranost Ekspertize',
        'feature-reliable': 'Pouzdan Kvalitet',
        'feature-legal-accuracy': 'Pravna Preciznost',
        'feature-confidentiality': 'Poverljivost Zagarantovana',
        'feature-industry-expertise': 'Industrijska Ekspertiza',
        'feature-technical-accuracy': 'Tehni\u010dka Ta\u010dnost',
        
        // Portfolio Section
        'portfolio-title': 'Nedavni Projekti',
        'portfolio-subtitle': 'Prikazivanje specijalizovanih prevoda',
        'portfolio-book-title': 'Prevo\u0111enje Beletristike',
        'portfolio-book-desc': 'Kompletno prevo\u0111enje savremene srpske beletristike na engleski, sa \u010duvanjem knji\u017eevnog stila i kulturnog konteksta za me\u0111unarodnu publiku.',
        'portfolio-pharma-title': 'Farmaceutska Dokumentacija',
        'portfolio-pharma-desc': 'Prevo\u0111enje informacija o proizvodima, dokumentacije klini\u010dkih ispitivanja i materijala za uskla\u010denje sa regulatorima za me\u0111unarodne farmaceutske kompanije.',
        'portfolio-technical-title': 'Prevo\u0111enje Tehni\u010dkih Priru\u010dnika',
        'portfolio-technical-desc': 'Tehni\u010dko prevo\u0111enje korisni\u010dkih priru\u010dnika za industrijske ma\u0161ine i sigurnosnih uputstava sa engleskog na srpski za implementaciju u proizvodnim objektima.',
        
        // Tags
        'tag-literary': 'Knji\u017eevno',
        'tag-sr-en': 'Srpski-Engleski',
        'tag-fiction': 'Beletristika',
        'tag-pharmaceutical': 'Farmaceutsko',
        'tag-en-sr': 'Engleski-Srpski',
        'tag-regulatory': 'Regulatorno',
        'tag-technical': 'Tehni\u010dko',
        'tag-manuals': 'Priru\u010dnici',
        
        // Contact Section
        'contact-title': 'Kontaktirajte Nas',
        'contact-description': 'Spremni da sru\u0161ite jezi\u010dke barijere? Kontaktirajte me za besplatnu konsultaciju i ponudu za va\u0161e prevodila\u010dke potrebe.',
        'contact-email-label': 'Email',
        'contact-phone-label': 'Telefon',
        'contact-hours-label': 'Radno Vreme',
        'contact-hours-weekday': 'Ponedeljak - Petak: 9:00 - 18:00',
        'contact-hours-weekend': 'Vikend: Dostupno po dogovoru',
        
        // Form
        'form-name-label': 'Ime *',
        'form-email-label': 'Email *',
        'form-service-label': 'Tip Usluge',
        'form-service-placeholder': 'Izaberite uslugu',
        'form-service-books': 'Prevo\u0111enje Knjiga',
        'form-service-medical': 'Medicinsko i Farmaceutsko',
        'form-service-technical': 'Tehni\u010dki Priru\u010dnici',
        'form-service-legal': 'Pravni Dokumenti',
        'form-service-it': 'Ma\u0161instvo & IT',
        'form-service-general': 'Op\u0161te Prevo\u0111enje',
        'form-service-other': 'Ostalo',
        'form-message-label': 'Poruka *',
        'form-name-placeholder': 'Unesite va\u0161e ime',
        'form-email-placeholder': 'Unesite va\u0161 email',
        'form-message-placeholder': 'Unesite va\u0161u poruku...',
        'form-attachment-label': 'Prilog (Opciono)',
        'form-attachment-help': 'PDF, Word ili tekstualni fajlovi (max 10MB)',
        'form-submit-btn': 'Po\u0161aljite Poruku',
        
        // Footer
        'footer-description': 'Profesionalne prevodila\u010dke usluge srpski-engleski koje povezuju jezike i kulture \u0161irom sveta.',
        'footer-services-heading': 'Usluge',
        'footer-books-link': 'Prevo\u0111enje Knjiga',
        'footer-medical-link': 'Medicinsko i Farmaceutsko',
        'footer-technical-link': 'Tehni\u010dki Priru\u010dnici',
        'footer-legal-link': 'Pravni Dokumenti',
        'footer-it-link': 'Ma\u0161instvo & IT',
        'footer-general-link': 'Op\u0161te Prevo\u0111enje',
        'footer-company-heading': 'Kompanija',
        'footer-about-link': 'O meni',
        'footer-portfolio-link': 'Portfolio',
        'footer-contact-link': 'Kontakt',
        'footer-privacy-link': 'Politika Privatnosti',
        'footer-copyright': '&copy; 2024 Karolina Prevodi. Sva prava zadr\u017eena.',
        
        // Testimonials Section
        'testimonials-badge': 'Reference Klijenata',
        'testimonials-title': '\u0160to Klijenti Ka\u017eu',
        'testimonials-subtitle': 'Stvarni utisci od zadovoljnih klijenata',
        'testimonial-1-text': 'Karolinin prevod na\u0161e medicinske dokumentacije bio je izvanredan. Njena pa\u017enja prema detaljima i razumevanje slo\u017eene terminologije u\u0161tedela nam je nedeljama rada.',
        'testimonial-1-name': 'Medicinski Direktor',
        'testimonial-1-title': 'Vode\u0107a Zdravstvena Kompanija',
        'testimonial-2-text': 'Knji\u017eevni prevod koji nam je Karolina pru\u017eila za roman bio je prelep. Uhvatila je su\u0161tinu i kulturne nijanse savr\u0161eno.',
        'testimonial-2-name': 'Izdava\u010dki Direktor',
        'testimonial-2-title': 'Me\u0111unarodna Izdava\u010dka Ku\u0107a',
        'testimonial-3-text': 'Tehni\u010dki priru\u010dnici prevedeni sa precizno\u0161\u0107u i ta\u010dno\u0161\u0107u. Karolina razume in\u017eenjersku terminologiju i isporu\u010duje na vreme.',
        'testimonial-3-name': 'Tehni\u010dki Menad\u017eer',
        'testimonial-3-title': 'In\u017eenjerska Korporacija',
        
        // Process Section
        'process-badge': 'Kako Funkioni\u0161e',
        'process-title': 'Proces Prevo\u0111enja',
        'process-subtitle': 'Jednostavan i efikasan radni tok',
        'step-1-title': 'Konsultacija',
        'step-1-desc': 'Razgovaramo o zahtevima va\u0161eg projekta, roku i specifi\u010dnim potrebama da bismo osigurali savr\u0161eno razumevanje.',
        'step-2-title': 'Ponuda i Ugovor',
        'step-2-desc': 'Dobijate detaljnu ponudu sa rokovima i isporukama. Jasni uslovi i konkurentna cena.',
        'step-3-title': 'Prevo\u0111enje',
        'step-3-desc': 'Profesionalno prevo\u0111enje sa pa\u017enjom na kulturni kontekst, terminologiju i doslednost stila.',
        'step-4-title': 'Provera i Isporuka',
        'step-4-desc': 'Provera kvaliteta i pravovremena isporuka va\u0161ih prevedenih dokumenata u \u017eeljenom formatu.',
        
        // FAQ Section
        'faq-badge': '\u010cesto Postavljena Pitanja',
        'faq-title': 'Uobi\u010dajena Pitanja',
        'faq-subtitle': 'Sve \u0161to trebate da znate o na\u0161im uslugama',
        'faq-1-question': 'Izme\u0111u kojih jezika prevodite?',
        'faq-1-answer': 'Specijalizujem se za srpsko-engleske i englesko-srpske prevode. Ova fokusirana ekspertiza mi omogu0107ava da pru\u017eim prevode najvi\u0161eg kvaliteta sa dubokim kulturnim razumevanjem i preciznom terminologijom.',
        'faq-2-question': 'Koliko traje tipi\u010dan prevod?',
        'faq-2-answer': 'Vreme isporuke zavisi od du\u017eine i slo\u017eenosti dokumenta. Tipi\u010dno, 1-5 stranica traje 2-3 dana, dok ve\u0107i projekti mogu zahtevati 1-2 nedelje. Uvek pru\u017eam jasne rokove u na\u0161oj po\u010detnoj konsultaciji.',
        'faq-3-question': 'Da li pru\u017eate sertifikovane prevode?',
        'faq-3-answer': 'Da, pru\u017eam sertifikovane prevode za pravne dokumente, imigraciona papire i zvani\u010dne svrhe. Svi sertifikovani prevodi uklju\u010duju izjavu o ta\u010dnosti i moje profesionalne kredencijale.',
        'faq-4-question': 'U kojim industrijama se specijalizujete?',
        'faq-4-answer': 'Moje glavne specijalizacije uklju\u010duju knji\u017eevna dela (beletristika i non-fiction), medicinske i farmaceutske dokumente, tehni\u010dke priru\u010dnike i op\u0161te poslovne dokumente. Imam ekstenzivno iskustvo u svakoj od ovih oblasti.',
        'faq-5-question': 'Kako osiguravate kvalitet prevoda?',
        'faq-5-answer': 'Pratim strogi proces kvaliteta uklju\u010duju\u0107i istra\u017eivanje terminologije, kulturnu adaptaciju, vi\u0161e faza provere i uklju\u010divanje povratnih informacija klijenata. Svaki prevod je proveren za ta\u010dnost i doslednost stila.',
        
        // CTA Section
        'cta-title': 'Spremni da Sru\u0161ite Jezi\u010dke Barijere?',
        'cta-subtitle': 'Naru\u010dite va\u0161 profesionalni srpsko-engleski prevod danas. Brz, ta\u010dan i kulturno svestan.',
        'cta-get-started': 'Zapo\u010dnite',
        'cta-learn-more': 'Saznajte Vi\u0161e',
        'cta-fast': 'Brza Isporuka',
        'cta-secure': 'Bezbedno i Poverljivo',
        'cta-quality': 'Kvalitet Zagarantovan'
    }
};

// Language Switcher Class
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('selectedLanguage') || 'en';
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.translatePage(this.currentLang);
        this.updateLanguageButton();
    }
    
    setupEventListeners() {
        // Language button click
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');
        
        if (languageBtn && languageDropdown) {
            languageBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                languageDropdown.classList.toggle('show');
            });
            
            // Language option clicks
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
            
            // Update HTML lang attribute
            document.documentElement.lang = lang === 'sr' ? 'sr-RS' : 'en';
            
            // Update page title
            this.updatePageTitle(lang);
        }
    }
    
    translatePage(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        
        elements.forEach(element => {
            const key = element.dataset.translate;
            const translation = translations[lang]?.[key];
            
            if (translation) {
                // Handle HTML content for elements that can contain HTML
                if (element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || 
                    element.tagName === 'P' || element.tagName === 'SPAN' || element.tagName === 'A') {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Update form placeholders and attributes
        this.updateFormElements(lang);
        
        // Trigger custom event for other scripts
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }
    
    updateFormElements(lang) {
        // Update form placeholders using translations
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageTextarea = document.getElementById('message');
        
        if (nameInput) {
            nameInput.placeholder = translations[lang]?.['form-name-placeholder'] || '';
        }
        
        if (emailInput) {
            emailInput.placeholder = translations[lang]?.['form-email-placeholder'] || '';
        }
        
        if (messageTextarea) {
            messageTextarea.placeholder = translations[lang]?.['form-message-placeholder'] || '';
        }
        
        // Update elements with data-translate-placeholder attribute
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
    
    updatePageTitle(lang) {
        const title = lang === 'sr' 
            ? 'Karolina Prevodi - Profesionalne Usluge Prevo\u0111enja'
            : 'Karolina Prevodi - Professional Translation Services';
        document.title = title;
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = lang === 'sr'
                ? 'Profesionalne prevodila\u010dke usluge od Karoline. Prevodi visokog kvaliteta za dokumente, veb sajtove i vi\u0161e.'
                : 'Professional translation services by Karolina. High-quality translations for documents, websites, and more.';
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
