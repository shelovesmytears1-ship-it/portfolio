const fs = require('fs');

// --- UPDATE HTML ---
let html = fs.readFileSync('index.html', 'utf8');

if (!html.includes('id="faq"')) {
  const faqHTML = `
    <section id="faq" class="fade-up">
      <h2 data-i18n="faq.title" class="section-title"></h2>
      <div class="faq-container" id="faq-container"></div>
    </section>
  `;
  html = html.replace('<section id="contact"', faqHTML + '\n    <section id="contact"');
  fs.writeFileSync('index.html', html);
}

// --- UPDATE CSS ---
let css = fs.readFileSync('style.css', 'utf8');

// Reduce Marquee padding
css = css.replace('.tech-marquee {\n  width: 100%;\n  padding: 3rem 0;', '.tech-marquee {\n  width: 100%;\n  padding: 1.5rem 0;');

// Add scale to Hero to fix frames
css = css.replace('#hero::before {\n  content: "";\n  position: absolute;\n  inset: -10%;\n  background-image: url("images/hero.png");\n  background-size: cover;\n  background-position: center;\n  z-index: 0;\n}', '#hero::before {\n  content: "";\n  position: absolute;\n  inset: -10%;\n  background-image: url("images/hero.png");\n  background-size: cover;\n  background-position: center;\n  z-index: 0;\n  transform: scale(1.2);\n}');

// Add FAQ CSS & Glow
if (!css.includes('.faq-container')) {
  css += `

/* FAQ Section */
.faq-container {
  max-width: 800px;
  margin: 0 auto;
}
.faq-item {
  border-bottom: 1px solid var(--border);
}
.faq-question {
  width: 100%;
  background: transparent;
  border: none;
  color: var(--text-main);
  font-size: 1.25rem;
  font-weight: 500;
  padding: 1.5rem 0;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font);
}
.faq-question::after {
  content: "+";
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  color: var(--accent);
}
.faq-item.active .faq-question::after {
  transform: rotate(45deg);
}
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
  color: var(--text-muted);
}
.faq-item.active .faq-answer {
  max-height: 200px;
  padding-bottom: 1.5rem;
}

/* Subtle Background Glow */
body::before {
  content: "";
  position: fixed;
  top: -20%; left: -10%;
  width: 50%; height: 50%;
  background: radial-gradient(circle, rgba(120, 120, 255, 0.04) 0%, transparent 60%);
  z-index: -1;
  pointer-events: none;
}
body::after {
  content: "";
  position: fixed;
  bottom: -20%; right: -10%;
  width: 50%; height: 50%;
  background: radial-gradient(circle, rgba(255, 120, 200, 0.03) 0%, transparent 60%);
  z-index: -1;
  pointer-events: none;
}
`;
}

fs.writeFileSync('style.css', css);

// --- UPDATE JS ---
let js = fs.readFileSync('script.js', 'utf8');

// 1. LocalStorage Logic
js = js.replace("let currentLang = 'ru';", "let currentLang = localStorage.getItem('portfolio_lang') || 'ru';");
js = js.replace("currentLang = lang;\n  const t = translations[lang];", "currentLang = lang;\n  localStorage.setItem('portfolio_lang', lang);\n  const t = translations[lang];");

// Make sure the right button is active on load
js = js.replace("langButtons.forEach(btn => {\n    btn.addEventListener", "langButtons.forEach(btn => {\n    btn.classList.toggle('active', btn.dataset.lang === currentLang);\n    btn.addEventListener");

// 2. Add FAQ Data
if (!js.includes("faq: {")) {
  // PL
  js = js.replace('process: {', 'faq: {\n      title: "FAQ",\n      items: [\n        { q: "Jak wygląda proces płatności?", a: "Zazwyczaj pobieram 50% zaliczki przed rozpoczęciem prac, a pozostałe 50% po akceptacji gotowej strony." },\n        { q: "Czy pomagasz z domeną i hostingiem?", a: "Tak, w pełni konfiguruję domenę, SSL oraz hosting. Strona będzie od razu gotowa do działania." },\n        { q: "Czy będę mógł sam edytować stronę?", a: "Oczywiście, na życzenie mogę wdrożyć łatwy w obsłudze system zarządzania treścią (CMS)." }\n      ]\n    },\n    process: {');
  // EN
  js = js.replace('process: {', 'faq: {\n      title: "FAQ",\n      items: [\n        { q: "What is the payment process?", a: "I usually request a 50% deposit before starting, and the remaining 50% after the final site is approved." },\n        { q: "Do you help with domain and hosting?", a: "Yes, I fully configure your domain, SSL, and hosting. Your site will be completely ready to launch." },\n        { q: "Will I be able to edit the site myself?", a: "Absolutely, I can integrate an easy-to-use CMS upon request." }\n      ]\n    },\n    process: {');
  // RU
  js = js.replace('process: {', 'faq: {\n      title: "Частые вопросы",\n      items: [\n        { q: "Как происходит оплата?", a: "Обычно мы работаем по предоплате 50% перед стартом, а оставшиеся 50% оплачиваются после утверждения готового сайта." },\n        { q: "Ты помогаешь с доменом и хостингом?", a: "Да, я полностью беру на себя настройку домена, SSL-сертификата и хостинга. Сайт будет готов к запуску." },\n        { q: "Смогу ли я сам редактировать сайт?", a: "Конечно, по твоему желанию я могу прикрутить удобную админку (CMS) для управления контентом." }\n      ]\n    },\n    process: {');
}

// 3. Add renderFaq call
if (!js.includes("renderFaq(t.faq.items);")) {
  js = js.replace("renderPricing(t.pricing.packages);", "renderPricing(t.pricing.packages);\n  renderFaq(t.faq.items);");
}

// 4. Add renderFaq function
if (!js.includes("function renderFaq")) {
  const renderFaqFunc = `
function renderFaq(items) {
  const container = document.getElementById('faq-container');
  if(!container) return;
  container.innerHTML = items.map(item => \`
    <div class="faq-item">
      <button class="faq-question">\${item.q}</button>
      <div class="faq-answer"><p>\${item.a}</p></div>
    </div>
  \`).join('');

  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      const isActive = parent.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
      if(!isActive) parent.classList.add('active');
    });
  });
}
`;
  js += renderFaqFunc;
}

fs.writeFileSync('script.js', js);
