/* script.js */

const translations = {
  pl: {
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
        languages: { value: 3, label: "obsługiwane języki", suffix: "" }
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
        { title: "Remonty mieszkań", niche: "Usługi", filter: "services", desc: "Nowoczesny landing page dla firmy remontowej z galerią realizacji.", link: "https://shelovesmytears1-ship-it.github.io/apartment-renovation/", icon: `<img src="img/apartment renovation.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Budowa zaufania i prezentacja portfolio usług budowlanych.", conv: "+18%", speed: "0.6s" },
        { title: "Firma sprzątająca", niche: "Usługi", filter: "services", desc: "Strona z kalkulatorem usług sprzątania.", link: "https://shelovesmytears1-ship-it.github.io/cleaning/", icon: `<img src="img/cleaning.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Wdrożenie interaktywnego kalkulatora cen dla klientów.", conv: "+32%", speed: "0.5s" },
        { title: "Usługi prawne", niche: "Usługi", filter: "services", desc: "Minimalistyczna wizytówka dla kancelarii adwokackiej.", link: "https://shelovesmytears1-ship-it.github.io/lawyer-website/", icon: `<img src="img/lawyer website.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Stworzenie surowego, profesjonalnego wizerunku premium.", conv: "+15%", speed: "0.4s" },
        { title: "Domy modułowe", niche: "Nieruchomości", filter: "realestate", desc: "Prezentacja domów z systemem konfiguracji i wyceny.", link: "https://shelovesmytears1-ship-it.github.io/modular-houses/", icon: `<img src="img/modular houses.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Wizualizacja modeli domów i system generowania leadów.", conv: "+22%", speed: "0.8s" },
        { title: "Agencja SMM", niche: "Usługi", filter: "services", desc: "Kreatywny landing page dla agencji marketingowej.", link: "https://shelovesmytears1-ship-it.github.io/smm/", icon: `<img src="img/smm.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Zaprojektowanie dynamicznego UX, który zatrzymuje uwagę.", conv: "+28%", speed: "0.6s" },
        { title: "Salon SPA", niche: "Uroda", filter: "beauty", desc: "Elegancka strona z możliwością rezerwacji wizyt online.", link: "https://shelovesmytears1-ship-it.github.io/spa/", icon: `<img src="img/spa.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Integracja z systemem rezerwacji w eleganckim UI.", conv: "+40%", speed: "0.7s" },
        { title: "Serwis opon", niche: "Motoryzacja", filter: "auto", desc: "Serwis wulkanizacyjny z cennikiem i formularzem zgłoszeniowym.", link: "https://shelovesmytears1-ship-it.github.io/tire-service/", icon: `<img src="img/tire-service.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Optymalizacja pod urządzenia mobilne i szybkość działania.", conv: "+35%", speed: "0.5s" }
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
        { text: "Strona wygląda bardzo profesjonalnie. Klienci chwalą prostotę i wygodę. Polecam!", name: "Michał K.", company: "Firma budowlana" },
        { text: "Szybka realizacja i świetny design. Konwersja z reklam wzrosła dwukrotnie.", name: "Anna S.", company: "Salon SPA" },
        { text: "Czysty kod i pełne zrozumienie biznesu. Otrzymałem stronę dokładnie taką, jak chciałem.", name: "Tomasz W.", company: "Agencja reklamowa" }
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
        languages: { value: 3, label: "supported languages", suffix: "" }
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
        { title: "Apartment Renovation", niche: "Services", filter: "services", desc: "Modern landing page for a renovation company with a portfolio gallery.", link: "https://shelovesmytears1-ship-it.github.io/apartment-renovation/", icon: `<img src="img/apartment renovation.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Building trust and showcasing construction portfolios.", conv: "+18%", speed: "0.6s" },
        { title: "Cleaning Company", niche: "Services", filter: "services", desc: "Service site with a dynamic pricing calculator.", link: "https://shelovesmytears1-ship-it.github.io/cleaning/", icon: `<img src="img/cleaning.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Implementing an interactive price calculator for clients.", conv: "+32%", speed: "0.5s" },
        { title: "Legal Services", niche: "Services", filter: "services", desc: "Minimalist digital presence for a law firm.", link: "https://shelovesmytears1-ship-it.github.io/lawyer-website/", icon: `<img src="img/lawyer website.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Creating a strict, professional premium identity.", conv: "+15%", speed: "0.4s" },
        { title: "Modular Houses", niche: "Real Estate", filter: "realestate", desc: "Housing presentation with configuration and pricing tools.", link: "https://shelovesmytears1-ship-it.github.io/modular-houses/", icon: `<img src="img/modular houses.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Visualizing home models with a lead generation system.", conv: "+22%", speed: "0.8s" },
        { title: "SMM Agency", niche: "Services", filter: "services", desc: "Creative landing page for a digital marketing agency.", link: "https://shelovesmytears1-ship-it.github.io/smm/", icon: `<img src="img/smm.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Designing a dynamic UX that captures attention.", conv: "+28%", speed: "0.6s" },
        { title: "SPA Salon", niche: "Beauty", filter: "beauty", desc: "Elegant website with online appointment booking.", link: "https://shelovesmytears1-ship-it.github.io/spa/", icon: `<img src="img/spa.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Integration with a booking system in an elegant UI.", conv: "+40%", speed: "0.7s" },
        { title: "Tire Service", niche: "Auto", filter: "auto", desc: "Automotive service landing page with request forms.", link: "https://shelovesmytears1-ship-it.github.io/tire-service/", icon: `<img src="img/tire-service.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Mobile optimization and fast loading speeds.", conv: "+35%", speed: "0.5s" }
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
        { text: "The site looks incredibly professional. Clients praise its simplicity. Highly recommended!", name: "Michael K.", company: "Construction firm" },
        { text: "Fast delivery and great design. Our ad conversion rate doubled.", name: "Anna S.", company: "SPA Salon" },
        { text: "Clean code and deep understanding of business needs. Got exactly what I wanted.", name: "Thomas W.", company: "Ad Agency" }
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
        languages: { value: 3, label: "языка поддержки", suffix: "" }
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
        { title: "Ремонт квартир", niche: "Услуги", filter: "services", desc: "Стильный лендинг строительной компании с галереей работ.", link: "https://shelovesmytears1-ship-it.github.io/apartment-renovation/", icon: `<img src="img/apartment renovation.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Упаковка сложной ниши и презентация портфолио работ.", conv: "+18%", speed: "0.6s" },
        { title: "Клининговая компания", niche: "Услуги", filter: "services", desc: "Сайт услуг с калькулятором стоимости уборки.", link: "https://shelovesmytears1-ship-it.github.io/cleaning/", icon: `<img src="img/cleaning.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Внедрение интерактивного калькулятора расчета стоимости.", conv: "+32%", speed: "0.5s" },
        { title: "Юридические услуги", niche: "Услуги", filter: "services", desc: "Строгая минималистичная визитка для адвокатского бюро.", link: "https://shelovesmytears1-ship-it.github.io/lawyer-website/", icon: `<img src="img/lawyer website.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Создание строгого премиального имиджа для B2B сегмента.", conv: "+15%", speed: "0.4s" },
        { title: "Модульные дома", niche: "Недвижимость", filter: "realestate", desc: "Презентация домов с функционалом подбора комплектации.", link: "https://shelovesmytears1-ship-it.github.io/modular-houses/", icon: `<img src="img/modular houses.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Визуализация домов и система сбора заявок на расчет.", conv: "+22%", speed: "0.8s" },
        { title: "SMM Агентство", niche: "Услуги", filter: "services", desc: "Креативный лендинг для агентства интернет-маркетинга.", link: "https://shelovesmytears1-ship-it.github.io/smm/", icon: `<img src="img/smm.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Разработка сочного и динамичного дизайна для захвата внимания.", conv: "+28%", speed: "0.6s" },
        { title: "SPA Салон", niche: "Красота", filter: "beauty", desc: "Элегантный сайт с возможностью онлайн-записи.", link: "https://shelovesmytears1-ship-it.github.io/spa/", icon: `<img src="img/spa.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Интеграция с системой бронирования и удержание эстетики.", conv: "+40%", speed: "0.7s" },
        { title: "Шиномонтаж", niche: "Авто", filter: "auto", desc: "Лендинг автосервиса с прайсом и формой заявки.", link: "https://shelovesmytears1-ship-it.github.io/tire-service/", icon: `<img src="img/tire-service.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project" loading="lazy">`, task: "Максимальная оптимизация под мобайл для экстренных вызовов.", conv: "+35%", speed: "0.5s" }
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
        { text: "Сайт выглядит очень дорого. Клиентам легко пользоваться. Однозначно рекомендую!", name: "Михаил К.", company: "Строительная фирма" },
        { text: "Сделано быстро и со вкусом. Конверсия с контекстной рекламы выросла в два раза.", name: "Анна С.", company: "SPA Салон" },
        { text: "Идеально чистый код и полное погружение в бизнес. Получил ровно то, что хотел.", name: "Томаш В.", company: "Рекламное агентство" }
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
  document.getElementById('modal-solution').textContent = desc;
  document.getElementById('modal-visual').innerHTML = iconHtml;
  document.getElementById('modal-task').textContent = task;
  document.getElementById('modal-res-1').textContent = conv;
  document.getElementById('modal-res-2').textContent = speed;
  document.getElementById('modal-link').href = link;
  
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

function renderTech(items) {
  const container = document.getElementById('tech-container');
  if(!container) return;
  container.innerHTML = items.map((item, i) => {
    const name = typeof item === 'string' ? item : item.name;
    const badge = typeof item === 'object' && item.badge
      ? `<span class="tech-badge" style="--badge-color: ${item.color}">${item.badge}</span>`
      : '';
    return `<div class="tech-item" style="animation: fadeUp 0.5s ease forwards ${i * 0.05}s; opacity:0; transform:translateY(20px);">${badge}${name}</div>`;
  }).join('');
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
    'images/Prototyping.png',
    'images/texts.png',
    'images/design (UIUX).png',
    'images/Dynamics.png',
    'images/Code and deployment.png'
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
  const avatars = ['images/Michael.png', 'images/review.jpeg', 'images/Tomas.png'];
  
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

// Inject translations
const TECH_ITEMS = [
  { name: "HTML / CSS", badge: "HT", color: "#E44D26" },
  { name: "JavaScript", badge: "JS", color: "#F7DF1E" },
  { name: "React", badge: "Re", color: "#61DAFB" },
  { name: "GSAP", badge: "GS", color: "#8AC640" },
  { name: "Tailwind", badge: "TW", color: "#38BDF8" },
  { name: "Node.js", badge: "No", color: "#68A063" }
];
translations.ru.tech = { title: "Стек технологий", items: TECH_ITEMS };
translations.pl.tech = { title: "Technologie", items: TECH_ITEMS };
translations.en.tech = { title: "Tech Stack", items: TECH_ITEMS };

translations.pl.nav = { about: "O mnie", portfolio: "Prace", services: "Usługi", contact: "Kontakt" };
translations.en.nav = { about: "About me", portfolio: "Works", services: "Services", contact: "Contact" };
translations.ru.nav = { about: "Обо мне", portfolio: "Работы", services: "Услуги", contact: "Контакт" };

translations.ru.anatomy = { title: "Анатомия идеального лендинга", speed: { title: "Скорость загрузки", desc: "Оптимизация изображений и кода для загрузки < 1 сек." }, ui: { title: "Уникальный UI", desc: "Никаких шаблонов. Дизайн, который запоминается." }, conv: { title: "Продуманная конверсия", desc: "Правильные акценты и призывы к действию." } };
translations.pl.anatomy = { title: "Anatomia idealnego landing page", speed: { title: "Szybkość ładowania", desc: "Optymalizacja dla ładowania < 1 sek." }, ui: { title: "Unikalny UI", desc: "Bez szablonów. Design, który zapada w pamięć." }, conv: { title: "Wysoka konwersja", desc: "Właściwe akcenty i wezwania do działania." } };
translations.en.anatomy = { title: "Anatomy of a Perfect Landing", speed: { title: "Load Speed", desc: "Optimized for < 1 sec load time." }, ui: { title: "Unique UI", desc: "No templates. Memorable design." }, conv: { title: "High Conversion", desc: "Proper emphasis and calls to action." } };

translations.ru.features = { title: "Что входит в работу?", items: [{ title: "1. Анализ и структура", desc: "Изучаю ваш бизнес и конкурентов. Создаю логичный прототип." }, { title: "2. Копирайтинг", desc: "Пишу тексты, которые продают вашу услугу, а не просто занимают место." }, { title: "3. Премиальный дизайн", desc: "Рисую современный интерфейс с акцентом на типографику и композицию." }, { title: "4. Плавные анимации", desc: "Добавляю микро-взаимодействия и GSAP анимации для вау-эффекта." }, { title: "5. Запуск", desc: "Сажаю сайт на хостинг, подключаю домен и формы заявок." }] };
translations.pl.features = { title: "Co obejmuje praca?", items: [{ title: "1. Analiza i struktura", desc: "Badam biznes i konkurencję. Tworzę logiczny prototyp." }, { title: "2. Copywriting", desc: "Piszę teksty, które sprzedają usługę." }, { title: "3. Design Premium", desc: "Rysuję nowoczesny interfejs z naciskiem na typografię." }, { title: "4. Płynne animacje", desc: "Dodaję mikrointerakcje dla efektu WOW." }, { title: "5. Wdrożenie", desc: "Konfiguruję hosting, domenę i formularze." }] };
translations.en.features = { title: "What's included?", items: [{ title: "1. Analysis & Structure", desc: "Business and competitor research. Logical prototyping." }, { title: "2. Copywriting", desc: "Writing copy that actually sells your service." }, { title: "3. Premium Design", desc: "Modern interface focusing on typography and composition." }, { title: "4. Smooth Animations", desc: "Micro-interactions and GSAP animations for the WOW effect." }, { title: "5. Deployment", desc: "Hosting setup, domain configuration, and form integration." }] };

