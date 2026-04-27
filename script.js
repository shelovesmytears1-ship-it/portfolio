/* script.js */

const translations = {
  pl: {
    nav: { about: "O mnie", portfolio: "Portfolio", services: "Usługi", contact: "Kontakt", contactBtn: "Współpraca" },
    hero: {
      name: "Daniil Menshov",
      subtitle: "Tworzę landing page, które sprzedają.",
      phrases: [
        "Remont. Uroda. Prawnicy.",
        "Fitness. Dostawa. Sprzątanie.",
        "Szybko. Pięknie. Z konwersją."
      ],
      cta: "Zobacz portfolio",
      status: "Dostępny do pracy",
      scroll: "Przewiń w dół"
    },
    about: {
      title: "O mnie",
      text: "Developer pochodzący z Ukrainy, specjalizujący się w tworzeniu landing page'y dla biznesu. Główna zasada pracy to ścisła dyscyplina w terminach i nacisk na wyniki. Nie tworzę stron, które „tylko ładnie wyglądają”, ale nie generują zapytań. Zamiast tego głęboko wnikam w niszę klienta i stawiam na techniczną doskonałość. Szczególną uwagę zwracam na optymalizację: moje strony ładują się w 0.5 sekundy, ponieważ w biznesie każda sekunda oczekiwania to straceni klienci.",
      stats: {
        projects: { value: 100, label: "terminowość projektów", suffix: "%" },
        delivery: { value: 5, label: "dni na wdrożenie", prefix: "3–" },
        code: { value: 0, label: "kreatorów w stacku", suffix: "" }
      }
    },
    services: {
      title: "Co robię",
      items: [
        {
          title: "Landing pod klucz",
          desc: "Projektowanie UI/UX, nowoczesny kod, pełna responsywność i optymalizacja.",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`
        },
        {
          title: "Złożona logika",
          desc: "Integracja formularzy, kalkulatorów kosztów i systemów rezerwacji.",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
        },
        {
          title: "Strony wielojęzyczne",
          desc: "Gotowe rozwiązania z obsługą języków PL, EN i RU bez przeładowania strony.",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
        }
      ]
    },
    portfolio: {
      title: "Wybrane prace",
      filters: {
        all: "Wszystkie",
        services: "Usługi",
        beauty: "Uroda",
        auto: "Motoryzacja",
        realestate: "Nieruchomości"
      },
      projects: [
        { title: "Remonty mieszkań", niche: "Usługi", filter: "services", desc: "Nowoczesny landing page dla firmy remontowej z galerią realizacji.", link: "https://shelovesmytears1-ship-it.github.io/apartment-renovation/", icon: `<img src="img/apartment renovation.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Budowa zaufania i prezentacja portfolio usług budowlanych.", conv: "+18%", speed: "0.6s" },
        { title: "Firma sprzątająca", niche: "Usługi", filter: "services", desc: "Strona z kalkulatorem usług sprzątania.", link: "https://shelovesmytears1-ship-it.github.io/cleaning/", icon: `<img src="img/cleaning.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Wdrożenie interaktywnego kalkulatora cen dla klientów.", conv: "+32%", speed: "0.5s" },
        { title: "Usługi prawne", niche: "Usługi", filter: "services", desc: "Minimalistyczna wizytówka dla kancelarii adwokackiej.", link: "https://shelovesmytears1-ship-it.github.io/lawyer/", icon: `<img src="img/lawyer website.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Stworzenie surowego, profesjonalnego wizerunku premium.", conv: "+15%", speed: "0.4s" },
        { title: "Domy modułowe", niche: "Nieruchomości", filter: "realestate", desc: "Prezentacja domów z systemem konfiguracji i wyceny.", link: "https://shelovesmytears1-ship-it.github.io/modular-houses/", icon: `<img src="img/modular houses.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Wizualizacja modeli domów i system generowania leadów.", conv: "+22%", speed: "0.8s" },
        { title: "Agencja SMM", niche: "Usługi", filter: "services", desc: "Kreatywny landing page dla agencji marketingowej.", link: "https://shelovesmytears1-ship-it.github.io/smm/", icon: `<img src="img/smm.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Zaprojektowanie dynamicznego UX, który zatrzymuje uwagę.", conv: "+28%", speed: "0.6s" },
        { title: "Salon SPA", niche: "Uroda", filter: "beauty", desc: "Elegancka strona z możliwością rezerwacji wizyt online.", link: "https://shelovesmytears1-ship-it.github.io/spa/", icon: `<img src="img/spa.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Integracja z systemem rezerwacji w eleganckim UI.", conv: "+40%", speed: "0.7s" },
        { title: "Serwis opon", niche: "Motoryzacja", filter: "auto", desc: "Serwis wulkanizacyjny z cennikiem i formularzem zgłoszeniowym.", link: "https://shelovesmytears1-ship-it.github.io/tire-service/", icon: `<img src="img/tire-service.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Optymalizacja pod urządzenia mobilne i szybkość działania.", conv: "+35%", speed: "0.5s" }
      ],
      viewBtn: "Zobacz"
    },
    faq: {
      title: "FAQ",
      items: [
        { q: "Jak wygląda proces płatności?", a: "Zazwyczaj pobieram 50% zaliczki przed rozpoczęciem prac, a pozostałe 50% po akceptacji gotowej strony." },
        { q: "Czy pomagasz z domeną i hostingiem?", a: "Tak, w pełni konfiguruję domenę, SSL oraz hosting. Strona będzie od razu gotowa do działania." },
        { q: "Czy będę mógł sam edytować stronę?", a: "Oczywiście, na życzenie mogę wdrożyć łatwy w obsłudze system zarządzania treścią (CMS)." }
      ]
    },
    process: {
      title: "Jak pracuję",
      steps: [
        { title: "Zgłoszenie", desc: "Omawiamy Twoje cele i analizujemy konkurencję." },
        { title: "Brief i specyfikacja", desc: "Ustalamy strukturę strony i wymagania techniczne." },
        { title: "Programowanie", desc: "Projektuję interfejs i piszę czysty, zoptymalizowany kod." },
        { title: "Wdrożenie", desc: "Przenoszę stronę na serwer i wprowadzam darmowe poprawki." }
      ]
    },
    pricing: {
      title: "Pakiety",
      packages: [
        { name: "Start", price: "800 zł", features: ["5 bloków", "Responsywność", "Formularz kontaktowy", "Czas: 3 dni"], popular: false },
        { name: "Business", price: "1400 zł", features: ["Do 8 bloków", "Kalkulator / filtry", "Subtelne animacje", "Czas: 5 dni"], popular: true, badge: "Wybierany najczęściej" },
        { name: "Pro", price: "2200 zł", features: ["Wielojęzyczność (PL/EN/RU)", "Złożona logika", "Priorytetowe wsparcie", "Czas: 7 dni"], popular: false }
      ]
    },
    reviews: {
      title: "Opinie",
      items: [
        { text: "Strona wygląda bardzo profesjonalnie. Klienci chwalą prostotę i wygodę. Polecam!", name: "Michał Kowalczyk", company: "Founder StroyPro" },
        { text: "Szybka realizacja i świetny design. Konwersja z reklam wzrosła dwukrotnie.", name: "Anna Sokołowska", company: "Manager Estetica SPA" },
        { text: "Czysty kod i pełne zrozumienie biznesu. Otrzymałem stronę dokładnie taką, jak chciałem.", name: "Tomasz Wiśniewski", company: "CEO AdCreative" }
      ]
    },
    contact: {
      title: "Rozpocznijmy projekt",
      subtitle: "Wypełnij formularz poniżej, a ja skontaktuję się z Tobą w celu omówienia szczegółów.",
      form: {
        nameLabel: "Twoje imię",
        contactTypeLabel: "Jak się skontaktować?",
        contactTypeOptions: { tg: "Telegram", email: "Email", inst: "Instagram" },
        contactLabel: "Dane kontaktowe",
        budgetLabel: "Budżet",
        budgetOptions: { b1: "Do $300", b2: "$300 - $800", b3: "Powyżej $800" },
        linkLabel: "Link do strony (jeśli istnieje)",
        descLabel: "Opis projektu",
        submit: "Wyślij zapytanie"
      },
      altText: "Lub napisz do mnie bezpośrednio:"
    }
  },

  en: {
    nav: { about: "About", portfolio: "Work", services: "Services", contact: "Contact", contactBtn: "Let's Talk" },
    hero: {
      name: "Daniil Menshov",
      subtitle: "Building high-converting landing pages.",
      phrases: [
        "Renovation. Beauty. Lawyers.",
        "Fitness. Delivery. Cleaning.",
        "Fast. Beautiful. High conversion."
      ],
      cta: "View works",
      status: "Available for freelance",
      scroll: "Scroll to explore"
    },
    about: {
      title: "About me",
      text: "A developer originally from Ukraine, specializing in building landing pages for businesses. My core principle is strict adherence to deadlines and a focus on results. I don't build sites that 'just look pretty' but fail to generate leads. Instead, I dive deep into the client's niche and prioritize technical excellence. I pay special attention to optimization: my sites load in 0.5 seconds, because in business, every second of delay costs you clients.",
      stats: {
        projects: { value: 100, label: "on-time delivery", suffix: "%" },
        delivery: { value: 5, label: "days delivery", prefix: "3–" },
        code: { value: 0, label: "page builders used", suffix: "" }
      }
    },
    services: {
      title: "Services",
      items: [
        {
          title: "Turnkey Landing",
          desc: "UI/UX design, modern codebase, fully responsive and optimized.",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`
        },
        {
          title: "Complex Logic",
          desc: "Integration of lead forms, cost calculators, and booking systems.",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
        },
        {
          title: "Multilingual Sites",
          desc: "Seamless PL, EN, and RU language support without page reloads.",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
        }
      ]
    },
    portfolio: {
      title: "Selected Works",
      filters: { all: "All", services: "Services", beauty: "Beauty", auto: "Auto", realestate: "Real Estate" },
      projects: [
        { title: "Apartment Renovation", niche: "Services", filter: "services", desc: "Modern landing page for a renovation company with a portfolio gallery.", link: "https://shelovesmytears1-ship-it.github.io/apartment-renovation/", icon: `<img src="img/apartment renovation.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Building trust and showcasing construction portfolios.", conv: "+18%", speed: "0.6s" },
        { title: "Cleaning Company", niche: "Services", filter: "services", desc: "Service site with a dynamic pricing calculator.", link: "https://shelovesmytears1-ship-it.github.io/cleaning/", icon: `<img src="img/cleaning.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Implementing an interactive price calculator for clients.", conv: "+32%", speed: "0.5s" },
        { title: "Legal Services", niche: "Services", filter: "services", desc: "Minimalist digital presence for a law firm.", link: "https://shelovesmytears1-ship-it.github.io/lawyer/", icon: `<img src="img/lawyer website.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Creating a strict, professional premium identity.", conv: "+15%", speed: "0.4s" },
        { title: "Modular Houses", niche: "Real Estate", filter: "realestate", desc: "Housing presentation with configuration and pricing tools.", link: "https://shelovesmytears1-ship-it.github.io/modular-houses/", icon: `<img src="img/modular houses.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Visualizing home models with a lead generation system.", conv: "+22%", speed: "0.8s" },
        { title: "SMM Agency", niche: "Services", filter: "services", desc: "Creative landing page for a digital marketing agency.", link: "https://shelovesmytears1-ship-it.github.io/smm/", icon: `<img src="img/smm.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Designing a dynamic UX that captures attention.", conv: "+28%", speed: "0.6s" },
        { title: "SPA Salon", niche: "Beauty", filter: "beauty", desc: "Elegant website with online appointment booking.", link: "https://shelovesmytears1-ship-it.github.io/spa/", icon: `<img src="img/spa.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Integration with a booking system in an elegant UI.", conv: "+40%", speed: "0.7s" },
        { title: "Tire Service", niche: "Auto", filter: "auto", desc: "Automotive service landing page with request forms.", link: "https://shelovesmytears1-ship-it.github.io/tire-service/", icon: `<img src="img/tire-service.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Mobile optimization and fast loading speeds.", conv: "+35%", speed: "0.5s" }
      ],
      viewBtn: "View"
    },
    faq: {
      title: "FAQ",
      items: [
        { q: "What is the payment process?", a: "I usually request a 50% deposit before starting, and the remaining 50% after the final site is approved." },
        { q: "Do you help with domain and hosting?", a: "Yes, I fully configure your domain, SSL, and hosting. Your site will be completely ready to launch." },
        { q: "Will I be able to edit the site myself?", a: "Absolutely, I can integrate an easy-to-use CMS upon request." }
      ]
    },
    process: {
      title: "How I work",
      steps: [
        { title: "Request", desc: "We discuss your goals and analyze the competition." },
        { title: "Brief & Specs", desc: "Defining the site structure and technical requirements." },
        { title: "Development", desc: "Designing the interface and writing clean, optimized code." },
        { title: "Delivery", desc: "Deploying the site to your server and making final revisions." }
      ]
    },
    pricing: {
      title: "Pricing",
      packages: [
        { name: "Start", price: "800 zł", features: ["5 sections", "Responsive design", "Contact form", "Timeline: 3 days"], popular: false },
        { name: "Business", price: "1400 zł", features: ["Up to 8 sections", "Calculator / filters", "Subtle animations", "Timeline: 5 days"], popular: true, badge: "Most Popular" },
        { name: "Pro", price: "2200 zł", features: ["Multilingual (PL/EN/RU)", "Complex logic", "Priority support", "Timeline: 7 days"], popular: false }
      ]
    },
    reviews: {
      title: "Reviews",
      items: [
        { text: "The site looks incredibly professional. Clients praise its simplicity. Highly recommended!", name: "Michael Kowalczyk", company: "Founder StroyPro" },
        { text: "Fast delivery and great design. Our ad conversion rate doubled.", name: "Anna Sokolowska", company: "Manager Estetica SPA" },
        { text: "Clean code and deep understanding of business needs. Got exactly what I wanted.", name: "Thomas Wisniewski", company: "CEO AdCreative" }
      ]
    },
    contact: {
      title: "Let's start your project",
      subtitle: "Fill out the form below and I will contact you to discuss the details.",
      form: {
        nameLabel: "Your name",
        contactTypeLabel: "How to contact you?",
        contactTypeOptions: { tg: "Telegram", email: "Email", inst: "Instagram" },
        contactLabel: "Contact details",
        budgetLabel: "Budget",
        budgetOptions: { b1: "Under $300", b2: "$300 - $800", b3: "$800+" },
        linkLabel: "Current website URL (optional)",
        descLabel: "Project description",
        submit: "Send request"
      },
      altText: "Or write to me directly:"
    }
  },

  ru: {
    nav: { about: "Обо мне", portfolio: "Работы", services: "Услуги", contact: "Контакты", contactBtn: "Обсудить проект" },
    hero: {
      name: "Daniil Menshov",
      subtitle: "Разработка продающих лендингов для бизнеса.",
      phrases: [
        "Ремонт. Красота. Юристы.",
        "Фитнес. Доставка. Клининг.",
        "Быстро. Красиво. С конверсией."
      ],
      cta: "Посмотреть работы",
      status: "Открыт к проектам",
      scroll: "Скролл вниз"
    },
    about: {
      title: "Обо мне",
      text: "Разработчик родом из Украины, специализируюсь на создании лендингов для бизнеса. Главный принцип работы — строгая дисциплина в сроках и упор на результат. Я не делаю сайты, которые «просто красиво выглядят», но не приносят заявок. Вместо этого я глубоко вникаю в нишу клиента и делаю ставку на техническое совершенство. Особое внимание уделяю оптимизации: мои сайты грузятся за 0.5 секунд, потому что в бизнесе каждая секунда ожидания стоит потерянных клиентов.",
      stats: {
        projects: { value: 100, label: "соблюдение дедлайнов", suffix: "%" },
        delivery: { value: 5, label: "дней на разработку", prefix: "3–" },
        code: { value: 0, label: "конструкторов в стеке", suffix: "" }
      }
    },
    services: {
      title: "Что я делаю",
      items: [
        {
          title: "Лендинг под ключ",
          desc: "Проектирование UI/UX, современный код, адаптивная верстка.",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`
        },
        {
          title: "Сложная логика",
          desc: "Внедрение калькуляторов, сложных форм и систем бронирования.",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
        },
        {
          title: "Мультиязычность",
          desc: "Реализация поддержки PL, EN и RU без перезагрузки страниц.",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
        }
      ]
    },
    portfolio: {
      title: "Портфолио",
      filters: { all: "Все", services: "Услуги", beauty: "Красота", auto: "Авто", realestate: "Недвижимость" },
      projects: [
        { title: "Ремонт квартир", niche: "Услуги", filter: "services", desc: "Стильный лендинг строительной компании с галереей работ.", link: "https://shelovesmytears1-ship-it.github.io/apartment-renovation/", icon: `<img src="img/apartment renovation.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Упаковка сложной ниши и презентация портфолио работ.", conv: "+18%", speed: "0.6s" },
        { title: "Клининговая компания", niche: "Услуги", filter: "services", desc: "Сайт услуг с калькулятором стоимости уборки.", link: "https://shelovesmytears1-ship-it.github.io/cleaning/", icon: `<img src="img/cleaning.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Внедрение интерактивного калькулятора расчета стоимости.", conv: "+32%", speed: "0.5s" },
        { title: "Юридические услуги", niche: "Услуги", filter: "services", desc: "Строгая минималистичная визитка для адвокатского бюро.", link: "https://shelovesmytears1-ship-it.github.io/lawyer/", icon: `<img src="img/lawyer website.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Создание строгого премиального имиджа для B2B сегмента.", conv: "+15%", speed: "0.4s" },
        { title: "Модульные дома", niche: "Недвижимость", filter: "realestate", desc: "Презентация домов с функционалом подбора комплектации.", link: "https://shelovesmytears1-ship-it.github.io/modular-houses/", icon: `<img src="img/modular houses.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Визуализация домов и система сбора заявок на расчет.", conv: "+22%", speed: "0.8s" },
        { title: "SMM Агентство", niche: "Услуги", filter: "services", desc: "Креативный лендинг для агентства интернет-маркетинга.", link: "https://shelovesmytears1-ship-it.github.io/smm/", icon: `<img src="img/smm.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Разработка сочного и динамичного дизайна для захвата внимания.", conv: "+28%", speed: "0.6s" },
        { title: "SPA Салон", niche: "Красота", filter: "beauty", desc: "Элегантный сайт с возможностью онлайн-записи.", link: "https://shelovesmytears1-ship-it.github.io/spa/", icon: `<img src="img/spa.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Интеграция с системой бронирования и удержание эстетики.", conv: "+40%", speed: "0.7s" },
        { title: "Шиномонтаж", niche: "Авто", filter: "auto", desc: "Лендинг автосервиса с прайсом и формой заявки.", link: "https://shelovesmytears1-ship-it.github.io/tire-service/", icon: `<img src="img/tire-service.webp" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Максимальная оптимизация под мобайл для экстренных вызовов.", conv: "+35%", speed: "0.5s" }
      ],
      viewBtn: "Смотреть"
    },
    faq: {
      title: "Частые вопросы",
      items: [
        { q: "Как происходит оплата?", a: "Обычно мы работаем по предоплате 50% перед стартом, а оставшиеся 50% оплачиваются после утверждения готового сайта." },
        { q: "Ты помогаешь с доменом и хостингом?", a: "Да, я полностью беру на себя настройку домена, SSL-сертификата и хостинга. Сайт будет готов к запуску." },
        { q: "Смогу ли я сам редактировать сайт?", a: "Конечно, по твоему желанию я могу прикрутить удобную админку (CMS) для управления контентом." }
      ]
    },
    process: {
      title: "Как я работаю",
      steps: [
        { title: "Заявка", desc: "Обсуждаем задачи вашего бизнеса и анализируем конкурентов." },
        { title: "Бриф и ТЗ", desc: "Утверждаем структуру, тексты и технические требования." },
        { title: "Разработка", desc: "Рисую чистый дизайн и пишу оптимизированный код." },
        { title: "Сдача и правки", desc: "Запускаем сайт на вашем хостинге, вносим финальные штрихи." }
      ]
    },
    pricing: {
      title: "Цены",
      packages: [
        { name: "Старт", price: "800 zł", features: ["5 блоков", "Адаптивность", "Форма заявки", "Срок: 3 дня"], popular: false },
        { name: "Бизнес", price: "1400 zł", features: ["До 8 блоков", "Калькулятор / фильтры", "Анимации", "Срок: 5 дней"], popular: true, badge: "Популярный" },
        { name: "Про", price: "2200 zł", features: ["Мультиязычность (PL/EN/RU)", "Сложная логика", "Приоритет", "Срок: 7 дней"], popular: false }
      ]
    },
    reviews: {
      title: "Отзывы",
      items: [
        { text: "Сайт выглядит очень дорого. Клиентам легко пользоваться. Однозначно рекомендую!", name: "Михаил Ковальчук", company: "Основатель StroyPro" },
        { text: "Сделано быстро и со вкусом. Конверсия с контекстной рекламы выросла в два раза.", name: "Анна Соколова", company: "Управляющая Estetica SPA" },
        { text: "Идеально чистый код и полное погружение в бизнес. Получил ровно то, что хотел.", name: "Томаш Вишневский", company: "CEO AdCreative" }
      ]
    },
    contact: {
      title: "ЕСТЬ ИДЕЯ ПРОЕКТА?",
      subtitle: "Заполни форму ниже, и я свяжусь с тобой для обсуждения деталей.",
      form: {
        nameLabel: "Твоё имя",
        contactTypeLabel: "Как с тобой связаться?",
        contactTypeOptions: { tg: "Telegram", email: "Email", inst: "Instagram" },
        contactLabel: "Контактные данные",
        budgetLabel: "Бюджет",
        budgetOptions: { b1: "До $300", b2: "$300 - $800", b3: "От $800" },
        linkLabel: "Ссылка на сайт (если есть)",
        descLabel: "Описание задачи",
        submit: "Отправить заявку"
      },
      altText: "Или напиши мне напрямую:"
    }
  }
};

// Solution texts per project (keyed by link, language-independent since they're in UI language)
const projectSolutions = {
  'https://shelovesmytears1-ship-it.github.io/apartment-renovation/': {
    pl: 'Zaprojektowałem strukturę landinga opartą na dowodach społecznych: galeria realizacji z filtrowaniem, sekcja z etapami pracy i formularz wyceny. Zaimplementowałem kompresjS zdjęć i lazy loading.',
    en: 'Designed a social-proof-first layout: filterable gallery, a step-by-step process section, and a quote form. Implemented image compression and lazy loading for fast delivery.',
    ru: 'Разработал структуру на соцдоказательстве: фильтруемая галерея работ, блок процесса и форма расчёта. Сжатие изображений и lazy loading для быстрой загрузки.'
  },
  'https://shelovesmytears1-ship-it.github.io/cleaning/': {
    pl: 'Stworzyłem interaktywny kalkulator wyceny czyszczenia oparty na metrażu i rodzaju pomieszczeń. Kalkulator działa bez przeładowania i natychmiast pokazuje szacowaną cenę.',
    en: 'Built an interactive cleaning price calculator based on room type and area. Works client-side, giving instant price estimates without any page reloads.',
    ru: 'Создал интерактивный калькулятор стоимости уборки по типу помещения и метражу. Работает на стороне клиента и мгновенно выдаёт примерную цену.'
  },
  'https://shelovesmytears1-ship-it.github.io/lawyer/': {
    pl: 'Skupiłem się na budowaniu zaufania: surowa typografia, stonowane kolory i konkretne dane (lata praktyki, liczba spraw). Minimalizm celowo komunikuje profesjonalizm premium.',
    en: 'Trust-building was the focus: strict typography, muted palette, and concrete credentials. The minimalist design intentionally signals premium legal expertise.',
    ru: 'Ставка на доверие: строгая типографика, сдержанная палитра и конкретные данные (годы практики, выигранные дела). Минимализм здесь намеренно сигнализирует премиальную экспертизу.'
  },
  'https://shelovesmytears1-ship-it.github.io/modular-houses/': {
    pl: 'Zaprojektowałem system konfiguracji domów z dynamicznym formularzem leadów. Wizualizacje ładują się progresywnie, co zapewnia szybkość mimo dużych plików graficznych.',
    en: 'Designed a home configuration system with a dynamic lead-gen form. Visuals are progressively loaded to maintain speed despite large asset sizes.',
    ru: 'Разработал систему конфигурации домов с динамичной формой сбора заявок. Визуализации загружаются прогрессивно, чтобы не жертвовать скоростью.'
  },
  'https://shelovesmytears1-ship-it.github.io/smm/': {
    pl: 'Postawiłem na dynamikę: animowane wejścia sekcji, efekty hover na kartach i biegnący pasek usług. UX sprawia, że strona “żyje” i zatrzymuje uwagę.',
    en: 'Prioritized motion: animated section entries, card hover effects, and a services ticker strip. The UX makes the page feel alive and keeps visitors engaged.',
    ru: 'Ставка на динамику: анимированные входы, эффекты hover на карточках и бегущая строка услуг. UX заставляет страницу «жить» и удерживает внимание.'
  },
  'https://shelovesmytears1-ship-it.github.io/spa/': {
    pl: 'Zintegrowałem formularz rezerwacji z walidacją daty i czasu. Projekt odzwierciedla estetykę salonu — miękkie tło, delikatna typografia i animacje oparte na opacity.',
    en: 'Integrated an appointment booking form with date/time validation. The design mirrors the salon aesthetics — soft tones, delicate typography, and opacity-based animations.',
    ru: 'Встроил форму онлайн-записи с валидацией даты и времени. Дизайн отражает эстетику салона — мягкие тона, деликатная типографика и анимации на opacity.'
  },
  'https://shelovesmytears1-ship-it.github.io/tire-service/': {
    pl: 'Priorytetem była mobilna wersja — klienci dzwonią z drogi. Skompresowałem obrazy do WebP, uprościłem nawigację i dodałem stały przycisk „Zadzwoń” widoczny przez cały czas.',
    en: 'Mobile-first was critical — customers call from the road. Converted all images to WebP, simplified navigation, and added a persistent ‘Call Now’ button always on screen.',
    ru: 'Главное — мобильная версия: клиенты звонят с дороги. Все изображения перевёл в WebP, упростил навигацию и добавил постоянную кнопку «Позвонить».'
  }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'ru';
let currentFilter = 'all';

// Element References
const langButtons = document.querySelectorAll('.lang-switcher button');
const typewriterEl = document.getElementById('typewriter');
let typeTimeout;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  initScrollAnimations();
  initHeaderScroll();
  
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
    btn.addEventListener('click', (e) => {
      langButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      setLanguage(e.target.dataset.lang);
    });
  });

  // Handle Form Submission to Telegram Bot
  const form = document.getElementById('contact-form');
  if(form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // === ТВОИ ДАННЫЕ TELEGRAM ===
      const BOT_TOKEN = '8245844398:AAFFFFA3L17q1sUPKJNN7U7zXESjNAe83QE';
      const CHAT_ID = '1327146718';
      // ============================

      const btnSpan = form.querySelector('.submit-btn span');
      const origText = btnSpan.textContent;
      btnSpan.textContent = 'Отправка...';
      
      // Собираем данные
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      const escapeHTML = (str) => {
        return (str || '').toString()
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      };
      
      // Формируем красивое сообщение
      const text = `
🔥 <b>Новая заявка с портфолио!</b>

👤 <b>Имя:</b> ${escapeHTML(data.name)}
📞 <b>Связь (${escapeHTML(data.contactType)}):</b> ${escapeHTML(data.contact)}
💰 <b>Бюджет:</b> ${escapeHTML(data.budget)}
🌐 <b>Сайт:</b> ${data.link ? escapeHTML(data.link) : 'Нет'}

📝 <b>Задача:</b>
${escapeHTML(data.desc)}
      `;

      try {
        if (BOT_TOKEN === 'ТВОЙ_ТОКЕН_ОТ_BOTFATHER') {
          alert('Бро, ты забыл вставить токен и chat_id в script.js!');
          btnSpan.textContent = origText;
          return;
        }

        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
            parse_mode: 'HTML'
          })
        });

        if (response.ok) {
          alert('Заявка успешно отправлена! Я свяжусь с вами в ближайшее время.');
          form.reset();
        } else {
          const errData = await response.text();
          alert('Ошибка API: ' + errData);
        }
      } catch (error) {
        console.error(error);
        alert('Сетевая ошибка. Попробуйте еще раз или напишите напрямую.');
      } finally {
        btnSpan.textContent = origText;
      }
    });
  }
});

// Set Language
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  const t = translations[lang];

  // Simple static text replacements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keys = el.dataset.i18n.split('.');
    let value = t;
    keys.forEach(k => value = value[k]);
    if (value) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-nav]').forEach(el => {
    const key = el.dataset.i18nNav;
    if (t.nav && t.nav[key]) el.textContent = t.nav[key];
  });

  // Render Dynamic Sections
  startTypewriter(t.hero.phrases);
  renderStats(t.about.stats);
  renderServices(t.services.items);
  renderPortfolio(t.portfolio);
  renderProcess(t.process.steps);
  if(t.tech) renderTech(t.tech.items);
  if(t.features) renderFeatures(t.features.items);
  if(t.anatomy) renderAnatomy(t.anatomy);
  renderFaq(t.faq.items);
  renderReviews(t.reviews.items);
}

// Render Functions
function renderStats(stats) {
  const container = document.getElementById('stats-container');
  container.innerHTML = Object.values(stats).map(stat => `
    <div class="stat-item">
      <h3>${stat.prefix || ''}<span class="count-up" data-val="${stat.value}">0</span>${stat.suffix || ''}</h3>
      <p>${stat.label}</p>
    </div>
  `).join('');
  initCountUp();
}

function renderServices(items) {
  const container = document.getElementById('services-container');
  container.innerHTML = items.map((item, i) => `
    <div class="card" style="animation: fadeUp 0.5s ease forwards ${i * 0.12}s; opacity:0; transform:translateY(20px);">
      <div class="service-icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `).join('');
}

function renderPortfolio(portfolio) {
  const filtersContainer = document.getElementById('filters-container');
  filtersContainer.innerHTML = Object.entries(portfolio.filters).map(([key, label]) => `
    <button class="filter-btn ${currentFilter === key ? 'active' : ''}" data-filter="${key}">${label}</button>
  `).join('');

  const grid = document.getElementById('portfolio-container');
  const filteredProjects = currentFilter === 'all' 
    ? portfolio.projects 
    : portfolio.projects.filter(p => p.filter === currentFilter);

  grid.innerHTML = filteredProjects.map((p, i) => `
    <div class="portfolio-card" style="animation: fadeUp 0.5s ease forwards ${i * 0.1}s; opacity:0; transform:translateY(20px);" data-link="${p.link}" data-title="${p.title}" data-desc="${p.desc}" data-icon='${p.icon}' data-task="${p.task}" data-conv="${p.conv}" data-speed="${p.speed}">
      <div class="portfolio-visual">
        ${p.icon}
      </div>
      <div class="portfolio-info">
        <p>${p.niche}</p>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <span class="view-link">Case Study &rarr;</span>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentFilter = e.target.dataset.filter;
      renderPortfolio(portfolio);
    });
  });

  // Modal logic attachment
  document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
      openModal(card.dataset.title, card.dataset.desc, card.dataset.link, card.dataset.icon, card.dataset.task, card.dataset.conv, card.dataset.speed);
    });
  });
}

function openModal(title, desc, link, iconHtml, task, conv, speed) {
  const modal = document.getElementById('case-study-modal');
  if(!modal) return;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-visual').innerHTML = iconHtml;
  document.getElementById('modal-task').textContent = task;
  document.getElementById('modal-res-1').textContent = conv;
  document.getElementById('modal-res-2').textContent = speed;
  document.getElementById('modal-link').href = link;

  // Look up solution text for current language, fallback to card desc
  const solutionEl = document.getElementById('modal-solution');
  const solutions = projectSolutions[link];
  solutionEl.textContent = (solutions && solutions[currentLang])
    ? solutions[currentLang]
    : desc;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function initModal() {
  const modal = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('modal-close');
  if(!modal || !closeBtn) return;

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', (e) => {
    if(e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}
document.addEventListener('DOMContentLoaded', initModal);

let processObserver;
function renderProcess(steps) {
  const container = document.getElementById('process-container');
  
  let stickyHtml = `
    <div class="process-left">
      <div class="sticky-number" id="sticky-num">01</div>
      <h3 class="sticky-title" id="sticky-title">${steps[0].title}</h3>
    </div>
  `;

  let scrollHtml = `
    <div class="process-right">
      ${steps.map((step, i) => `
        <div class="process-step" data-num="0${i + 1}" data-title="${step.title}">
          <h4 class="step-mobile-title">0${i + 1} — ${step.title}</h4>
          <p class="step-desc">${step.desc}</p>
        </div>
      `).join('')}
    </div>
  `;

  container.innerHTML = `<div class="process-layout">${stickyHtml}${scrollHtml}</div>`;

  setTimeout(initProcessObserver, 100);
}

function initProcessObserver() {
  const steps = document.querySelectorAll('.process-step');
  const stickyNum = document.getElementById('sticky-num');
  const stickyTitle = document.getElementById('sticky-title');
  if(!stickyNum) return;

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0
  };

  if(processObserver) {
    processObserver.disconnect();
  }

  processObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const newNum = entry.target.getAttribute('data-num');
        const newTitle = entry.target.getAttribute('data-title');
        
        if(stickyNum.textContent !== newNum) {
          stickyNum.classList.add('updating');
          stickyTitle.classList.add('updating');
          
          setTimeout(() => {
            stickyNum.textContent = newNum;
            stickyTitle.textContent = newTitle;
            stickyNum.classList.remove('updating');
            stickyTitle.classList.remove('updating');
          }, 300);
        }
      }
    });
  }, observerOptions);

  steps.forEach(step => processObserver.observe(step));
}

// ── Tech Stack: full data (shared across all languages) ──────────────────
const TECH_DATA = [
  {
    name: "HTML / CSS",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="10 13 8 15 10 17"/><polyline points="14 13 16 15 14 17"/></svg>`,
    color: "#E44D26",
    tag: "Foundation",
    short: {
      ru: "Семантика, доступность и адаптивный дизайн",
      en: "Semantics, a11y & responsive design",
      pl: "Semantyka, a11y i responsywny design"
    },
    desc: {
      ru: "Фундамент любого проекта. Пишу семантичный, доступный HTML и чистый CSS с анимациями и адаптивной вёрсткой без лишних фреймворков.",
      en: "The foundation of every project. I write semantic, accessible HTML and clean CSS with animations and responsive layouts — no bloat.",
      pl: "Fundament każdego projektu. Piszę semantyczny HTML i czysty CSS z animacjami i responsywnym layoutem."
    },
    uses: {
      ru: ["Семантическая разметка", "CSS Grid & Flexbox", "Анимации & переходы", "Адаптивная вёрстка"],
      en: ["Semantic markup", "CSS Grid & Flexbox", "Animations & transitions", "Responsive design"],
      pl: ["Semantyczny markup", "CSS Grid & Flexbox", "Animacje i przejścia", "Responsywny design"]
    }
  },
  {
    name: "JavaScript",
    svg: `<svg viewBox="0 0 448 512" fill="currentColor"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.4 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>`,
    color: "#F7DF1E",
    tag: "Core Logic",
    short: {
      ru: "Ядро интерактива и сложной логики UI",
      en: "Core interactivity & complex logic",
      pl: "Rdzeń interakcji i złożonej logiki"
    },
    desc: {
      ru: "Ядро интерактивности. Строю сложные UI-логики, анимации, работу с API и всё что делает сайт живым — без фреймворков, если они не нужны.",
      en: "The core of interactivity. I build complex UI logic, animations, API integrations — vanilla when possible, frameworks when needed.",
      pl: "Rdzeń interaktywności. Buduję złożoną logikę UI, animacje i integracje API — vanilla, gdy to możliwe."
    },
    uses: {
      ru: ["DOM-манипуляции", "Fetch API & формы", "Мультимедиа & Canvas", "Intersection Observer"],
      en: ["DOM manipulation", "Fetch API & forms", "Multimedia & Canvas", "Intersection Observer"],
      pl: ["Manipulacja DOM", "Fetch API i formularze", "Multimedia i Canvas", "Intersection Observer"]
    }
  },
  {
    name: "React",
    svg: `<svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="0" cy="0" r="2.05"/><g id="j"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>`,
    color: "#61DAFB",
    tag: "UI Framework",
    short: {
      ru: "Современные SPA и архитектура",
      en: "Modern SPAs and architecture",
      pl: "Nowoczesne SPA i architektura"
    },
    desc: {
      ru: "Использую для более сложных SPA и компонентных систем. Хуки, контекст, оптимизация — знаю как и когда применять.",
      en: "Used for complex SPAs and component-driven systems. Hooks, context, performance optimization — I know when and how to apply them.",
      pl: "Używam do złożonych SPA i systemów komponentowych. Hooki, context i optymalizacja wydajności."
    },
    uses: {
      ru: ["Компонентная архитектура", "React Hooks", "Context API", "Vite + React"],
      en: ["Component architecture", "React Hooks", "Context API", "Vite + React"],
      pl: ["Architektura komponentowa", "React Hooks", "Context API", "Vite + React"]
    }
  },
  {
    name: "GSAP",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    color: "#8AC640",
    tag: "Animation",
    short: {
      ru: "Premium 3D и scroll-анимации",
      en: "Premium 3D & scroll animations",
      pl: "Premium 3D i animacje scroll"
    },
    desc: {
      ru: "Главный инструмент для premium-анимаций. ScrollTrigger, timeline, stagger — именно GSAP делает сайты с эффектом вау.",
      en: "My go-to for premium animations. ScrollTrigger, timelines, staggers — GSAP is what gives sites that wow factor.",
      pl: "Moje główne narzędzie do premium animacji. ScrollTrigger, timeline, stagger — to GSAP daje efekt WOW."
    },
    uses: {
      ru: ["ScrollTrigger", "Timeline последовательности", "Stagger эффекты", "Сложный Parallax"],
      en: ["ScrollTrigger", "Timeline sequences", "Stagger effects", "Complex Parallax"],
      pl: ["ScrollTrigger", "Sekwencje timeline", "Efekty stagger", "Złożony Parallax"]
    }
  },
  {
    name: "Tailwind",
    svg: `<svg viewBox="0 0 54 33" fill="currentColor"><path d="M26.6 0C21.6 0 18.3 2.5 16.6 7.5C18.6 4.5 21.1 3.3 24.1 3.8C25.8 4.1 27.1 5.3 28.5 6.8C31 9.4 34 12.5 40 12.5C45 12.5 48.3 10 50 5C48 8 45.5 9.2 42.5 8.7C40.8 8.4 39.5 7.2 38.1 5.7C35.6 3.1 32.6 0 26.6 0ZM13.3 16.7C8.3 16.7 5 19.2 3.3 24.2C5.3 21.2 7.8 20 10.8 20.5C12.5 20.8 13.8 22 15.2 23.5C17.7 26.1 20.7 29.2 26.7 29.2C31.7 29.2 35 26.7 36.7 21.7C34.7 24.7 32.2 25.9 29.2 25.4C27.5 25.1 26.2 23.9 24.8 22.4C22.3 19.8 19.3 16.7 13.3 16.7Z"/></svg>`,
    color: "#38BDF8",
    tag: "CSS Utility",
    short: {
      ru: "Сверхбыстрая разработка интерфейсов",
      en: "Lightning fast UI development",
      pl: "Błyskawiczny rozwój UI"
    },
    desc: {
      ru: "Utility-first CSS для быстрой прототипации и масштабируемых проектов. Ускоряет разработку не теряя контроля над дизайном.",
      en: "Utility-first CSS for fast prototyping and scalable projects. Speeds up development without sacrificing design control.",
      pl: "Utility-first CSS do szybkiego prototypowania. Przyspiesza development bez utraty kontroli nad designem."
    },
    uses: {
      ru: ["Быстрый UI прототипинг", "JIT-компиляция", "Кастомный конфиг", "Адаптивные утилиты"],
      en: ["Rapid UI prototyping", "JIT compilation", "Custom config", "Responsive utilities"],
      pl: ["Szybkie prototypowanie UI", "Kompilacja JIT", "Własna konfiguracja", "Responsywne narzędzia"]
    }
  },
  {
    name: "Node.js",
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
    color: "#68A063",
    tag: "Backend",
    short: {
      ru: "Серверная логика, API и деплой",
      en: "Server logic, APIs and deployment",
      pl: "Logika serwera, API i deployment"
    },
    desc: {
      ru: "Backend для телеграм-ботов, API, обработки форм и деплоя. Всё что нужно чтобы сайт не только красиво выглядел, но и работал.",
      en: "Backend for Telegram bots, APIs, form handling, and deployment. Everything to make the site not just pretty but functional.",
      pl: "Backend do bot\u00f3w Telegram, API, obs\u0142ugi formularzy i deploymentu. Wszystko, co sprawia, \u017ce strona dzia\u0142a."
    },
    uses: {
      ru: ["Express.js API", "Telegram Bot API", "Webhook обработчики", "Netlify / Vercel"],
      en: ["Express.js API", "Telegram Bot API", "Webhook handlers", "Netlify / Vercel"],
      pl: ["Express.js API", "Telegram Bot API", "Obs\u0142uga webhook\u00f3w", "Netlify / Vercel"]
    }
  }
];

const TECH_ITEMS = TECH_DATA.map(d => ({ name: d.name, badge: d.badge, color: d.color }));

function renderTech(items) {
  var track1 = document.getElementById('tech-carousel-track');
  var track2 = document.getElementById('tech-carousel-track-2');
  if (!track1 || !track2) return;

  function hexToRgb(hex) {
    var r = parseInt(hex.slice(1,3), 16);
    var g = parseInt(hex.slice(3,5), 16);
    var b = parseInt(hex.slice(5,7), 16);
    return r + ',' + g + ',' + b;
  }

  // Create the HTML for the pills
  var pillsHtml = '';
  // Duplicate enough times to fill the screen twice over
  var extendedData = TECH_DATA.concat(TECH_DATA).concat(TECH_DATA).concat(TECH_DATA);

  for (var i = 0; i < extendedData.length; i++) {
    var tech = extendedData[i];
    var originalIdx = i % TECH_DATA.length;
    var rgb = hexToRgb(tech.color);

    pillsHtml += '<div class="tech-pill"'
      + ' data-tech-index="' + originalIdx + '"'
      + ' style="'
      + '--tc-base:' + tech.color + ';'
      + '--tc-glow:rgba(' + rgb + ',0.25);'
      + '">'
      + '<div class="tech-pill-icon">' + (tech.svg || '') + '</div>'
      + '<div class="tech-pill-name">' + tech.name + '</div>'
      + '<div class="tech-pill-tag">' + tech.tag + '</div>'
      + '</div>';
  }

  // Remove CSS animation classes for JS control
  track1.className = 'tech-carousel-track';
  track2.className = 'tech-carousel-track';
  
  track1.innerHTML = pillsHtml;
  track2.innerHTML = pillsHtml;

  // Attach all interactivity after render
  setTimeout(initTechCards, 50);
}

function initTechCards() {
  var pills = document.querySelectorAll('.tech-pill');
  pills.forEach(function(pill) {
    var idx = parseInt(pill.dataset.techIndex, 10);
    pill.addEventListener('click', function() { openTechModal(idx); });
  });

  // JS Infinite Marquee with Wheel support
  var track1 = document.getElementById('tech-carousel-track');
  var track2 = document.getElementById('tech-carousel-track-2');
  var wrapper = document.getElementById('tech-carousel-wrapper');
  
  if (!track1 || !track2 || !wrapper) return;

  var pos1 = 0;
  var pos2 = 0;
  var speed = 0.5; // Base speed
  var hoverMultiplier = 1;
  var targetMultiplier = 1;
  var loopWidth = 0;

  function updateLoopWidth() {
    // Since we concat 4 times, 1/4th of the scroll width is the loop point
    loopWidth = track1.scrollWidth / 4;
  }
  updateLoopWidth();
  window.addEventListener('resize', updateLoopWidth);

  wrapper.addEventListener('mouseenter', function() { targetMultiplier = 0.2; });
  wrapper.addEventListener('mouseleave', function() { targetMultiplier = 1; });

  wrapper.addEventListener('wheel', function(e) {
    e.preventDefault();
    pos1 -= e.deltaY * 0.5;
    pos2 += e.deltaY * 0.5; 
  }, { passive: false });

  function renderLoop() {
    if (loopWidth === 0) updateLoopWidth(); // Safety check

    hoverMultiplier += (targetMultiplier - hoverMultiplier) * 0.1;
    pos1 -= speed * hoverMultiplier;
    pos2 += speed * hoverMultiplier;

    if (pos1 <= -loopWidth) pos1 += loopWidth;
    if (pos1 > 0) pos1 -= loopWidth;

    if (pos2 >= loopWidth) pos2 -= loopWidth;
    if (pos2 < 0) pos2 += loopWidth;

    track1.style.transform = 'translate3d(' + pos1 + 'px, 0, 0)';
    track2.style.transform = 'translate3d(' + (pos2 - loopWidth) + 'px, 0, 0)';

    requestAnimationFrame(renderLoop);
  }
  
  requestAnimationFrame(renderLoop);
}

// ── Tech Modal ────────────────────────────────────────────────
function ensureTechModal() {
  if (document.getElementById('tech-modal-overlay')) return;
  var overlay = document.createElement('div');
  overlay.className = 'tech-modal-overlay';
  overlay.id = 'tech-modal-overlay';
  overlay.innerHTML =
    '<div class="tech-modal" id="tech-modal" role="dialog" aria-modal="true">'
    + '<div class="tech-modal-header-bg" id="tm-header-bg"></div>'
    + '<button class="tech-modal-close" id="tm-close" aria-label="Close">&times;</button>'
    + '<div class="tech-modal-head">'
    + '<div class="tech-modal-badge" id="tm-badge"></div>'
    + '<div class="tech-modal-head-text">'
    + '<div class="tech-modal-name" id="tm-name"></div>'
    + '<span class="tech-modal-tag" id="tm-tag"></span>'
    + '</div></div>'
    + '<div class="tech-modal-body">'
    + '<p class="tech-modal-desc" id="tm-desc"></p>'
    + '<div>'
    + '<div class="tech-modal-use-title" id="tm-uses-title">Применяю для</div>'
    + '<div class="tech-modal-uses" id="tm-uses"></div>'
    + '</div>'
    + '<button class="tech-modal-back" id="tm-back">Назад</button>'
    + '</div>'
    + '</div>';
  document.body.appendChild(overlay);

  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeTechModal();
  });
  document.getElementById('tm-close').addEventListener('click', closeTechModal);
  document.getElementById('tm-back').addEventListener('click', closeTechModal);

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closeTechModal();
  });
}

function openTechModal(idx) {
  ensureTechModal();
  var tech = TECH_DATA[idx];
  var lang = currentLang || 'ru';

  function hexToRgb(hex) {
    var r = parseInt(hex.slice(1,3), 16);
    var g = parseInt(hex.slice(3,5), 16);
    var b = parseInt(hex.slice(5,7), 16);
    return r + ',' + g + ',' + b;
  }
  var rgb = hexToRgb(tech.color);

  var modal = document.getElementById('tech-modal');
  modal.style.setProperty('--tm-color', tech.color);
  modal.style.setProperty('--tm-color-shadow', 'rgba(' + rgb + ',0.4)');

  // Coloured gradient header
  document.getElementById('tm-header-bg').style.background =
    'linear-gradient(135deg, rgba(' + rgb + ',0.15) 0%, transparent 70%)';

  // SVG icon in modal
  var badgeEl = document.getElementById('tm-badge');
  badgeEl.innerHTML = tech.svg;
  badgeEl.style.color = tech.color;
  badgeEl.style.filter = 'drop-shadow(0 4px 14px rgba(' + rgb + ',0.5))';

  document.getElementById('tm-name').textContent = tech.name;
  document.getElementById('tm-tag').textContent = tech.tag;
  document.getElementById('tm-tag').style.color = tech.color;
  document.getElementById('tm-tag').style.borderColor = 'rgba(' + rgb + ',0.35)';
  document.getElementById('tm-desc').textContent = (tech.desc && (tech.desc[lang] || tech.desc.en)) || '';

  // Localize labels
  var labels = {
    ru: { uses: 'Применяю для', back: 'Назад' },
    en: { uses: 'Used for', back: 'Back' },
    pl: { uses: 'Używam do', back: 'Wróć' }
  };
  var lbl = labels[lang] || labels.ru;
  document.getElementById('tm-uses-title').textContent = lbl.uses;
  document.getElementById('tm-back').textContent = lbl.back;

  var uses = (tech.uses && (tech.uses[lang] || tech.uses.en)) || [];
  document.getElementById('tm-uses').innerHTML = uses.map(function(u) {
    return '<div class="tech-modal-use-item">' + u + '</div>';
  }).join('');

  document.getElementById('tech-modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeTechModal() {
  const overlay = document.getElementById('tech-modal-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function renderFeatures(items) {
  const container = document.getElementById('features-container');
  const visualBg = document.getElementById('feature-visual-bg');
  if(!container || !visualBg) return;
  
  container.innerHTML = items.map((item, i) => `
    <div class="feature-item ${i === 0 ? 'active' : ''}" data-index="${i}">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `).join('');

  const images = [
    'images/Prototyping.webp',
    'images/texts.webp',
    'images/design (UIUX).webp',
    'images/Dynamics.webp',
    'images/Code and deployment.webp'
  ];

  visualBg.innerHTML = images.map((src, i) => `
    <div class="feature-img ${i === 0 ? 'active' : ''}" style="background-image: url('${src}')"></div>
  `).join('');

  const featureItems = container.querySelectorAll('.feature-item');
  const featureImages = visualBg.querySelectorAll('.feature-img');

  featureItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      featureItems.forEach(el => el.classList.remove('active'));
      featureImages.forEach(el => el.classList.remove('active'));
      
      item.classList.add('active');
      const idx = item.dataset.index;
      if (featureImages[idx]) {
        featureImages[idx].classList.add('active');
      }
    });
  });
}

function renderReviews(reviews) {
  const container = document.getElementById('reviews-container');
  const avatars = ['images/Michael.webp', 'images/review.webp', 'images/Tomas.webp'];
  
  container.innerHTML = reviews.map((r, i) => `
    <div class="card review-card">
      <p class="review-text">"${r.text}"</p>
      <div class="review-author">
        <div class="avatar" style="background:transparent;"><img src="${avatars[i]}" alt="Reviewer Avatar" loading="lazy" style="width:100%; height:100%; object-fit:cover; border-radius:50%;"></div>
        <div class="author-info">
          <h4>${r.name}</h4>
          <p>${r.company}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function renderSocialLinks(links) {
  document.getElementById('social-container').innerHTML = `
    <a href="#">${links.telegram}</a>
    <a href="#">${links.whatsapp}</a>
  `;
}

// Typewriter Effect
function startTypewriter(phrases) {
  clearTimeout(typeTimeout);
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 30 : 70;

    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500; // Pause before new word
    }

    typeTimeout = setTimeout(type, typeSpeed);
  }
  
  type();
}

// Scroll Animations & Header
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// CountUp Logic
function initCountUp() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const val = parseInt(target.dataset.val);
        animateValue(target, 0, val, 2000);
        obs.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.count-up').forEach(el => observer.observe(el));
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Keyframes for JS added animations
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

/* ── Anatomy Section ─────────────────────────────────────────── */
let anatomyObserver = null;

function renderAnatomy(anatomy) {
  const right = document.getElementById('anatomy-right');
  if (!right) return;

  right.innerHTML = anatomy.items.map((item, i) => {
    const color = ZONE_CSS_COLORS[item.zone] || 'var(--accent)';
    return `
      <div class="anatomy-item" 
           data-zone="${item.zone}" 
           style="--zone-color: ${color}; transition-delay: ${i * 0.07}s;">
        <div class="anatomy-item-header">
          <span class="anatomy-item-num">${item.num}</span>
          <span class="anatomy-item-title">${item.title}</span>
          <span class="anatomy-item-metric">${item.metric}</span>
        </div>
        <p class="anatomy-item-desc">${item.desc}</p>
      </div>
    `;
  }).join('');

  // Disconnect previous observer if language changed
  if (anatomyObserver) {
    anatomyObserver.disconnect();
    anatomyObserver = null;
  }

  // Small delay so DOM is ready
  setTimeout(initAnatomyObserver, 80);
  setTimeout(initMobileAnatomySwipe, 120);
}

function initAnatomyObserver() {
  const items    = document.querySelectorAll('.anatomy-item');
  const zones    = document.querySelectorAll('.wf-zone');
  const svgEl    = document.getElementById('anatomy-connectors');
  const wfEl     = document.getElementById('anatomy-wf');
  const speedFill = document.getElementById('wf-speed-fill');
  let speedAnimated = false;

  if (!items.length || !zones.length) return;

  // ── Helper: draw one SVG connector line ───────────────────────
  function drawConnector(zoneIndex, itemEl) {
    if (!svgEl || !wfEl) return;
    // Remove existing line for this zone
    const old = svgEl.querySelector(`line[data-zone="${zoneIndex}"]`);
    if (old) old.remove();

    const zoneEl = wfEl.querySelector(`.wf-zone[data-zone="${zoneIndex}"]`);
    if (!zoneEl || !itemEl) return;

    const wfRect   = wfEl.getBoundingClientRect();
    const zoneRect = zoneEl.getBoundingClientRect();
    const itemRect = itemEl.getBoundingClientRect();

    // Source: right edge center of zone (inside SVG coordinate space)
    const x1 = zoneRect.right - wfRect.left;
    const y1 = zoneRect.top - wfRect.top + zoneRect.height / 2;

    // Destination: left edge center of item (relative to wf)
    // items are in a different column, so relative to viewport then to wf
    const x2 = itemRect.left - wfRect.left;
    const y2 = itemRect.top - wfRect.top + itemRect.height / 2;

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', ZONE_COLORS_SOLID[zoneIndex] || 'rgba(255,255,255,0.3)');
    line.setAttribute('data-zone', zoneIndex);
    svgEl.appendChild(line);

    // Trigger opacity transition
    requestAnimationFrame(() => line.classList.add('visible'));
    return line;
  }

  // ── Helper: remove a connector ─────────────────────────────────
  function removeConnector(zoneIndex) {
    if (!svgEl) return;
    const line = svgEl.querySelector(`line[data-zone="${zoneIndex}"]`);
    if (line) {
      line.classList.remove('visible');
      setTimeout(() => line.remove(), 450);
    }
  }

  // ── Helper: activate zone + item ──────────────────────────────
  function activateZone(zoneIndex, itemEl) {
    // Deactivate all
    zones.forEach(z => z.classList.remove('wf-active'));
    items.forEach(it => it.classList.remove('active'));
    if (svgEl) {
      svgEl.querySelectorAll('line').forEach(l => {
        l.classList.remove('visible');
        setTimeout(() => l.remove(), 450);
      });
    }

    // Activate current zone
    const zoneEl = wfEl ? wfEl.querySelector(`.wf-zone[data-zone="${zoneIndex}"]`) : null;
    if (zoneEl) {
      zoneEl.classList.add('wf-active');
    }
    itemEl.classList.add('active');

    // Draw connector (only on desktop where SVG is visible)
    if (window.innerWidth > 1024) {
      drawConnector(zoneIndex, itemEl);
    }

    // Speed bar animation for zone 6
    if (zoneIndex === 6 && speedFill && !speedAnimated) {
      speedAnimated = true;
      speedFill.style.width = '0%';
      requestAnimationFrame(() => {
        setTimeout(() => { speedFill.style.width = '18%'; }, 100);
      });
    }
  }

  // ── Entry animation observer (one-shot reveal) ────────────────
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(item => revealObserver.observe(item));

  // ── Active zone observer (continuous, center of viewport) ─────
  const activeObserver = new IntersectionObserver((entries) => {
    if (window.innerWidth <= 1024) return; // Disable scroll-based activation on mobile
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const zoneIndex = parseInt(entry.target.dataset.zone, 10);
        activateZone(zoneIndex, entry.target);
      }
    });
  }, {
    rootMargin: '-35% 0px -45% 0px',
    threshold: 0
  });

  items.forEach(item => activeObserver.observe(item));
  anatomyObserver = activeObserver;

  // Redraw connectors on resize (layout shift)
  window.addEventListener('resize', () => {
    const activeItem = document.querySelector('.anatomy-item.active');
    if (activeItem && window.innerWidth > 1024) {
      const zoneIndex = parseInt(activeItem.dataset.zone, 10);
      drawConnector(zoneIndex, activeItem);
    } else if (svgEl) {
      svgEl.querySelectorAll('line').forEach(l => l.remove());
    }
  }, { passive: true });
}

/* ── Mobile Swipe Carousel (Variant B) ─────────────────────── */
let mobileSwipeCleanup = null;

function initMobileAnatomySwipe() {
  if (window.innerWidth > 1024) return;

  const right = document.getElementById('anatomy-right');
  if (!right) return;

  // Run cleanup from previous call (language switch)
  if (mobileSwipeCleanup) { mobileSwipeCleanup(); mobileSwipeCleanup = null; }

  const items = Array.from(right.querySelectorAll('.anatomy-item'));
  if (!items.length) return;

  // ── Build track wrapper ──────────────────────────────────────
  const track = document.createElement('div');
  track.className = 'anatomy-mobile-track';
  items.forEach(item => track.appendChild(item));
  right.appendChild(track);

  // Make all items immediately visible (bypass desktop stagger)
  items.forEach(item => {
    item.classList.add('visible');
    item.style.transitionDelay = '0s';
  });

  // ── Build nav row ─────────────────────────────────────────────
  const nav = document.createElement('div');
  nav.className = 'anatomy-mobile-nav';
  nav.innerHTML = `
    <button class="anatomy-mobile-btn" id="anat-prev" aria-label="Previous">&#8592;</button>
    <div class="anatomy-mobile-dots" id="anat-dots"></div>
    <button class="anatomy-mobile-btn" id="anat-next" aria-label="Next">&#8594;</button>
  `;
  right.appendChild(nav);

  // ── Build dots ────────────────────────────────────────────────
  const dotsContainer = document.getElementById('anat-dots');
  items.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'anatomy-dot';
    dot.setAttribute('aria-hidden', 'true');
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.querySelectorAll('.anatomy-dot'));
  const prevBtn = document.getElementById('anat-prev');
  const nextBtn = document.getElementById('anat-next');
  const zones = document.querySelectorAll('.wf-zone');
  const wfEl = document.getElementById('anatomy-wf');
  const speedFill = document.getElementById('wf-speed-fill');
  let speedAnimated = false;
  let current = 0;

  // ── goTo: slide + highlight ───────────────────────────────────
  function goTo(index) {
    if (index < 0 || index >= items.length) return;
    current = index;

    // Slide track
    track.style.transform = `translateX(-${current * 100}%)`;

    // Dots
    const zoneColor = ZONE_CSS_COLORS[parseInt(items[current].dataset.zone, 10)] || 'var(--accent)';
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
      if (i === current) dot.style.setProperty('--zone-color', zoneColor);
    });

    // Wireframe zone
    const zoneIndex = parseInt(items[current].dataset.zone, 10);
    zones.forEach(z => z.classList.remove('wf-active'));
    items.forEach(it => it.classList.remove('active'));

    const activeZone = wfEl ? wfEl.querySelector(`.wf-zone[data-zone="${zoneIndex}"]`) : null;
    if (activeZone) {
      activeZone.classList.add('wf-active');
      // Scroll the wireframe container manually to avoid page scroll jump
      if (wfEl) {
        wfEl.scrollTo({ top: activeZone.offsetTop - 10, behavior: 'smooth' });
      }
    }
    items[current].classList.add('active');

    // Speed bar for zone 6
    if (zoneIndex === 6 && speedFill && !speedAnimated) {
      speedAnimated = true;
      speedFill.style.width = '0%';
      requestAnimationFrame(() => setTimeout(() => { speedFill.style.width = '18%'; }, 100));
    }

    // Button states
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === items.length - 1;
  }

  // ── Touch swipe detection ─────────────────────────────────────
  let touchStartX = 0;
  let touchStartY = 0;
  let isSwiping = false;

  function onTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isSwiping = false;
  }
  function onTouchMove(e) {
    const dx = Math.abs(e.touches[0].clientX - touchStartX);
    const dy = Math.abs(e.touches[0].clientY - touchStartY);
    // If horizontal swipe is dominant, mark as swiping
    if (dx > dy && dx > 8) isSwiping = true;
  }
  function onTouchEnd(e) {
    if (!isSwiping) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) {
      goTo(diff > 0 ? current + 1 : current - 1);
    }
    isSwiping = false;
  }

  track.addEventListener('touchstart', onTouchStart, { passive: true });
  track.addEventListener('touchmove',  onTouchMove,  { passive: true });
  track.addEventListener('touchend',   onTouchEnd,   { passive: true });

  // ── Arrow buttons ─────────────────────────────────────────────
  function onPrev() { goTo(current - 1); }
  function onNext() { goTo(current + 1); }
  prevBtn.addEventListener('click', onPrev);
  nextBtn.addEventListener('click', onNext);

  // ── Keyboard arrow support ────────────────────────────────────
  function onKeyDown(e) {
    if (!document.getElementById('anatomy-right')) return;
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(current - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current + 1); }
  }
  document.addEventListener('keydown', onKeyDown);

  // ── Init first slide ──────────────────────────────────────────
  goTo(0);

  // ── Cleanup function (called on language switch / re-render) ──
  mobileSwipeCleanup = () => {
    track.removeEventListener('touchstart', onTouchStart);
    track.removeEventListener('touchmove',  onTouchMove);
    track.removeEventListener('touchend',   onTouchEnd);
    prevBtn.removeEventListener('click', onPrev);
    nextBtn.removeEventListener('click', onNext);
    document.removeEventListener('keydown', onKeyDown);
  };
}

function renderFaq(items) {
  const container = document.getElementById('faq-container');
  if(!container) return;
  container.innerHTML = items.map(item => `
    <div class="faq-item">
      <button class="faq-question">${item.q}</button>
      <div class="faq-answer"><p>${item.a}</p></div>
    </div>
  `).join('');

  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      const isActive = parent.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
      if(!isActive) parent.classList.add('active');
    });
  });
}

// Local Time Clock
function updateClock() {
  const timeEl = document.getElementById('local-time');
  if(!timeEl) return;
  const now = new Date();
  const options = { timeZone: 'Europe/Warsaw', hour: '2-digit', minute: '2-digit', hour12: true };
  const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
  timeEl.textContent = `Warsaw, PL • ${timeString}`;
}
setInterval(updateClock, 1000);
updateClock();

// Inject translations — TECH_ITEMS already defined above via TECH_DATA
translations.ru.tech = { title: "Стек технологий", items: TECH_ITEMS };
translations.pl.tech = { title: "Technologie", items: TECH_ITEMS };
translations.en.tech = { title: "Tech Stack", items: TECH_ITEMS };

translations.pl.nav = { about: "O mnie", portfolio: "Prace", services: "Usługi", contact: "Kontakt" };
translations.en.nav = { about: "About me", portfolio: "Works", services: "Services", contact: "Contact" };
translations.ru.nav = { about: "Обо мне", portfolio: "Работы", services: "Услуги", contact: "Контакт" };

// Zone hex colors (solid versions for JS connector lines)
const ZONE_COLORS_SOLID = [
  'rgba(139,156,182,0.7)',   // 0 nav
  'rgba(168,148,182,0.7)',   // 1 hero
  'rgba(139,182,160,0.7)',   // 2 cta
  'rgba(182,167,139,0.7)',   // 3 social
  'rgba(139,170,182,0.7)',   // 4 features
  'rgba(182,139,145,0.7)',   // 5 mobile
  'rgba(182,175,139,0.7)',   // 6 speed
  'rgba(152,139,182,0.7)'    // 7 footer
];
// CSS custom property values for --zone-color on list items
const ZONE_CSS_COLORS = [
  'rgba(139,156,182,0.9)',
  'rgba(168,148,182,0.9)',
  'rgba(139,182,160,0.9)',
  'rgba(182,167,139,0.9)',
  'rgba(139,170,182,0.9)',
  'rgba(182,139,145,0.9)',
  'rgba(182,175,139,0.9)',
  'rgba(152,139,182,0.9)'
];

translations.ru.anatomy = {
  title: "Анатомия идеального лендинга",
  items: [
    { zone: 0, num: "①", title: "Навигация",            metric: "sticky",   desc: "Минимум отвлечений. Один логотип, три-четыре ссылки. Sticky-хедер держит CTA в пределах досягаемости на любой прокрутке." },
    { zone: 1, num: "②", title: "Первый экран",          metric: "3 сек.",   desc: "У посетителя 3 секунды, чтобы понять оффер. Сильный заголовок, чёткий подзаголовок и один следующий шаг — без лишнего шума." },
    { zone: 2, num: "③", title: "CTA-кнопка",            metric: "контраст", desc: "Контрастная, с глаголом действия. Повторяется каждые 2–3 секции. Никакого «Узнать больше» — только конкретное действие." },
    { zone: 3, num: "④", title: "Социальное доказательство", metric: "↑ доверие", desc: "Отзывы, логотипы клиентов и цифры — максимально близко к герою. Доверие строится до того, как пользователь дочитает лендинг." },
    { zone: 4, num: "⑤", title: "Блоки преимуществ",    metric: "3–5 шт.",  desc: "Закрывают возражения. Каждый блок — одна идея: иконка, заголовок, одно предложение. Читается за секунду, убеждает надолго." },
    { zone: 5, num: "⑥", title: "Мобильная адаптация",  metric: "60%+ трафика", desc: "Свыше 60% трафика — с телефонов. Отдельная верстка под мобайл: тапабельные зоны, читаемые шрифты, скорость без компромиссов." },
    { zone: 6, num: "⑦", title: "Скорость загрузки",    metric: "< 1 сек.", desc: "Каждая лишняя секунда — минус 7% конверсии. WebP, lazy-loading, минифицированный код. Мои сайты грузятся за 0.5–0.8 сек." },
    { zone: 7, num: "⑧", title: "Финальный призыв",     metric: "якорный CTA", desc: "Последний шанс конвертировать. Форма заявки или кнопка с якорем — без вариантов, без выбора. Один путь — одно действие." }
  ]
};
translations.pl.anatomy = {
  title: "Anatomia idealnego landing page",
  items: [
    { zone: 0, num: "①", title: "Nawigacja",             metric: "sticky",      desc: "Minimum rozproszenia. Logo, trzy–cztery linki. Sticky header trzyma CTA w zasięgu na każdym etapie scrollowania." },
    { zone: 1, num: "②", title: "Pierwszy ekran",        metric: "3 sek.",      desc: "Odwiedzający ma 3 sekundy na zrozumienie oferty. Mocny nagłówek, konkretny podtytuł i jeden kolejny krok — bez zbędnego szumu." },
    { zone: 2, num: "③", title: "Przycisk CTA",          metric: "kontrast",    desc: "Kontrastowy, z czasownikiem działania. Powtarza się co 2–3 sekcje. Żadnych 'Dowiedz się więcej' — tylko konkretne działanie." },
    { zone: 3, num: "④", title: "Dowód społeczny",       metric: "↑ zaufanie",  desc: "Opinie, logotypy klientów i liczby — jak najbliżej hero. Zaufanie buduje się, zanim użytkownik doczyta landing do końca." },
    { zone: 4, num: "⑤", title: "Bloki korzyści",        metric: "3–5 szt.",    desc: "Odpowiadają na obiekcje. Każdy blok — jedna idea: ikona, nagłówek, jedno zdanie. Czyta się w sekundę, przekonuje na długo." },
    { zone: 5, num: "⑥", title: "Responsywność",         metric: "60%+ ruchu",  desc: "Ponad 60% ruchu pochodzi z telefonów. Osobny layout mobilny: strefy dotykowe, czytelne fonty, prędkość bez kompromisów." },
    { zone: 6, num: "⑦", title: "Szybkość ładowania",   metric: "< 1 sek.",    desc: "Każda dodatkowa sekunda to minus 7% konwersji. WebP, lazy-loading, zminifikowany kod. Moje strony ładują się w 0,5–0,8 sek." },
    { zone: 7, num: "⑧", title: "Końcowe wezwanie",      metric: "kotwica CTA", desc: "Ostatnia szansa na konwersję. Formularz lub przycisk z kotwicą — bez opcji, bez wyboru. Jedna ścieżka — jedna akcja." }
  ]
};
translations.en.anatomy = {
  title: "Anatomy of a Perfect Landing",
  items: [
    { zone: 0, num: "①", title: "Navigation",            metric: "sticky",      desc: "Minimum distraction. One logo, three–four links. A sticky header keeps the CTA reachable at any scroll depth." },
    { zone: 1, num: "②", title: "Hero Section",          metric: "3 sec.",      desc: "Visitors decide in 3 seconds. A strong headline, a clear subline, and one next step — no noise, no clutter." },
    { zone: 2, num: "③", title: "CTA Button",            metric: "contrast",    desc: "High-contrast, action verb. Repeated every 2–3 sections. No 'Learn more' — only a specific, inevitable action." },
    { zone: 3, num: "④", title: "Social Proof",          metric: "↑ trust",     desc: "Reviews, client logos, and numbers — as close to the hero as possible. Trust is built before users finish reading." },
    { zone: 4, num: "⑤", title: "Benefit Blocks",       metric: "3–5 items",   desc: "They close objections. Each block — one idea: icon, headline, one sentence. Read in a second, convincing for a lifetime." },
    { zone: 5, num: "⑥", title: "Mobile Adaptation",    metric: "60%+ traffic", desc: "Over 60% of traffic is mobile. A dedicated mobile layout: tappable zones, readable fonts, speed without compromise." },
    { zone: 6, num: "⑦", title: "Load Speed",           metric: "< 1 sec.",    desc: "Every extra second costs −7% conversion. WebP, lazy-loading, minified code. My sites load in 0.5–0.8 sec." },
    { zone: 7, num: "⑧", title: "Final Call-to-Action", metric: "anchor CTA",  desc: "Last chance to convert. A form or anchored button — no alternatives, no choices. One path, one action." }
  ]
};

translations.ru.features = { title: "Что входит в работу?", items: [{ title: "1. Анализ и структура", desc: "Изучаю ваш бизнес и конкурентов. Создаю логичный прототип." }, { title: "2. Копирайтинг", desc: "Пишу тексты, которые продают вашу услугу, а не просто занимают место." }, { title: "3. Премиальный дизайн", desc: "Рисую современный интерфейс с акцентом на типографику и композицию." }, { title: "4. Плавные анимации", desc: "Добавляю микро-взаимодействия и GSAP анимации для вау-эффекта." }, { title: "5. Запуск", desc: "Сажаю сайт на хостинг, подключаю домен и формы заявок." }] };
translations.pl.features = { title: "Co obejmuje praca?", items: [{ title: "1. Analiza i struktura", desc: "Badam biznes i konkurencję. Tworzę logiczny prototyp." }, { title: "2. Copywriting", desc: "Piszę teksty, które sprzedają usługę." }, { title: "3. Design Premium", desc: "Rysuję nowoczesny interfejs z naciskiem na typografię." }, { title: "4. Płynne animacje", desc: "Dodaję mikrointerakcje dla efektu WOW." }, { title: "5. Wdrożenie", desc: "Konfiguruję hosting, domenę i formularze." }] };
translations.en.features = { title: "What's included?", items: [{ title: "1. Analysis & Structure", desc: "Business and competitor research. Logical prototyping." }, { title: "2. Copywriting", desc: "Writing copy that actually sells your service." }, { title: "3. Premium Design", desc: "Modern interface focusing on typography and composition." }, { title: "4. Smooth Animations", desc: "Micro-interactions and GSAP animations for the WOW effect." }, { title: "5. Deployment", desc: "Hosting setup, domain configuration, and form integration." }] };

// Custom Cursor — only on desktop (pointer: fine)
(function initCustomCursor() {
  // Only run if the device has a precise pointer (mouse), not touch
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const dot = document.getElementById('cursor-dot');
  const outline = document.getElementById('cursor-outline');
  if (!dot || !outline) return;

  // Add class so CSS can hide native cursor
  document.body.classList.add('custom-cursor');

  let mouseX = 0, mouseY = 0;
  let outlineX = 0, outlineY = 0;
  let rafId;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // Dot follows instantly
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  // Outline follows with smooth lerp
  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.12;
    outlineY += (mouseY - outlineY) * 0.12;
    outline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
    rafId = requestAnimationFrame(animateOutline);
  }
  animateOutline();

  // Grow on interactive elements
  const hoverTargets = 'a, button, .portfolio-card, .filter-btn, .submit-btn, .alt-btn, .modal-close';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) {
      dot.classList.add('cursor-grow');
      outline.classList.add('cursor-grow');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) {
      dot.classList.remove('cursor-grow');
      outline.classList.remove('cursor-grow');
    }
  });

  // Hide cursor when it leaves the window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    outline.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    outline.style.opacity = '1';
  });
})();




