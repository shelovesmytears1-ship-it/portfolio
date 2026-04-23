const fs = require('fs');

// --- UPDATE HTML ---
let html = fs.readFileSync('index.html', 'utf8');

const marqueeHTML = `
    <div class="tech-marquee" dir="ltr">
      <div class="tech-marquee-inner">
        <span>HTML</span><span class="dot">•</span>
        <span>CSS / SASS</span><span class="dot">•</span>
        <span>JavaScript</span><span class="dot">•</span>
        <span>React</span><span class="dot">•</span>
        <span>HTML</span><span class="dot">•</span>
        <span>CSS / SASS</span><span class="dot">•</span>
        <span>JavaScript</span><span class="dot">•</span>
        <span>React</span><span class="dot">•</span>
        <span>HTML</span><span class="dot">•</span>
        <span>CSS / SASS</span><span class="dot">•</span>
        <span>JavaScript</span><span class="dot">•</span>
        <span>React</span><span class="dot">•</span>
        <span>HTML</span><span class="dot">•</span>
        <span>CSS / SASS</span><span class="dot">•</span>
        <span>JavaScript</span><span class="dot">•</span>
        <span>React</span><span class="dot">•</span>
      </div>
    </div>
`;

if(!html.includes('tech-marquee')) {
    html = html.replace('</section>\n\n    <section id="about"', '</section>\n' + marqueeHTML + '\n    <section id="about"');
    fs.writeFileSync('index.html', html);
}

// --- UPDATE CSS ---
let css = fs.readFileSync('style.css', 'utf8');

// Fix Hero Background
css = css.replace('#hero {\n  min-height: 100dvh;\n  background-image: url("images/hero.png");\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}', '#hero {\n  min-height: 100dvh;\n  display: flex;\n  align-items: center;\n  padding-top: 100px;\n  position: relative;\n  overflow: hidden;\n}');
css = css.replace('#hero::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: var(--bg);\n  opacity: 0.85;\n  z-index: 0;\n}', '#hero::before {\n  content: "";\n  position: absolute;\n  inset: -10%;\n  background-image: url("images/hero.png");\n  background-size: cover;\n  background-position: center;\n  z-index: 0;\n}\n#hero::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: var(--bg);\n  opacity: 0.85;\n  z-index: 1;\n}');
css = css.replace('.hero-content {\n  max-width: 800px;\n  position: relative;\n  z-index: 1;\n}', '.hero-content {\n  max-width: 800px;\n  position: relative;\n  z-index: 2;\n}');

// Add Marquee CSS
if(!css.includes('.tech-marquee')) {
    css += `

/* Tech Marquee */
.tech-marquee {
  width: 100%;
  padding: 3rem 0;
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  overflow: hidden;
  white-space: nowrap;
  display: flex;
}
.tech-marquee-inner {
  display: flex;
  gap: 3rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 2px;
  animation: scrollText 15s linear infinite;
}
.tech-marquee-inner .dot {
  color: var(--accent);
}
@keyframes scrollText {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;
}

fs.writeFileSync('style.css', css);

// --- UPDATE JS ---
let js = fs.readFileSync('script.js', 'utf8');

js = js.replace('projects: { value: 7, label: "zrealizowanych projektów", suffix: "+" }', 'projects: { value: 100, label: "terminowość projektów", suffix: "%" }');
js = js.replace('projects: { value: 7, label: "projects delivered", suffix: "+" }', 'projects: { value: 100, label: "on-time delivery", suffix: "%" }');
js = js.replace('projects: { value: 7, label: "проектов сдано", suffix: "+" }', 'projects: { value: 100, label: "соблюдение дедлайнов", suffix: "%" }');

fs.writeFileSync('script.js', js);
