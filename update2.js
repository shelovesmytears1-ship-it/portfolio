const fs = require('fs');

// --- UPDATE CSS ---
let css = fs.readFileSync('style.css', 'utf8');

css = css.replace('#hero {', '#hero {\n  background-image: url("images/hero.png");\n  background-size: cover;\n  background-position: center;\n  position: relative;');
css = css.replace('.hero-content {', '#hero::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: var(--bg);\n  opacity: 0.85;\n  z-index: 0;\n}\n.hero-content {\n  position: relative;\n  z-index: 1;');

css = css.replace('grid-template-columns: 1fr 1fr;\n  gap: 4rem;', 'grid-template-columns: 0.8fr 1.2fr;\n  gap: 4rem;\n  align-items: center;');
css = css.replace('.about-stats {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}', '.about-image img {\n  width: 100%;\n  aspect-ratio: 4/5;\n  object-fit: cover;\n  border-radius: 24px;\n  filter: grayscale(20%) contrast(1.1);\n}\n.about-stats {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 3rem;\n  margin-top: 3rem;\n}');

css = css.replace('.portfolio-card {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}', '.portfolio-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  padding: 1.5rem;\n  cursor: pointer;\n  text-decoration: none;\n  display: block;\n  color: var(--text-main);\n  transition: border-color 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.portfolio-card:hover {\n  border-color: var(--accent);\n  transform: translateY(-4px);\n}');

css = css.replace('.portfolio-card:hover .portfolio-visual {\n  border-color: var(--accent);\n}', '');
css = css.replace('.portfolio-visual {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  aspect-ratio: 4/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.5rem;\n  transition: border-color 0.4s ease;\n  position: relative;\n  overflow: hidden;\n}', '.portfolio-visual {\n  background: var(--bg);\n  border-radius: 12px;\n  aspect-ratio: 16/10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.5rem;\n  position: relative;\n  overflow: hidden;\n}');

fs.writeFileSync('style.css', css);


// --- UPDATE JS ---
let js = fs.readFileSync('script.js', 'utf8');

const links = [
  'https://shelovesmytears1-ship-it.github.io/apartment-renovation/',
  'https://shelovesmytears1-ship-it.github.io/cleaning/',
  'https://shelovesmytears1-ship-it.github.io/lawyer/',
  'https://shelovesmytears1-ship-it.github.io/modular-houses/',
  'https://shelovesmytears1-ship-it.github.io/smm/',
  'https://shelovesmytears1-ship-it.github.io/spa/',
  'https://shelovesmytears1-ship-it.github.io/tire-service/'
];

let pIndex = 0;
js = js.replace(/desc: "(.*?)", icon:/g, (match, desc) => {
  let rep = `desc: "${desc}", link: "${links[pIndex % 7]}", icon:`;
  pIndex++;
  return rep;
});

js = js.replace(/<div class="portfolio-card"/g, '<a href="${p.link}" target="_blank" class="portfolio-card"');
// Change closing div to closing a tag for portfolio cards
js = js.replace(/    <\/div>\n  `\)\.join\(''\);/g, '    </a>\n  `).join(\'\');');

// Replace review avatar with image
js = js.replace(/<div class="avatar">\$\{r.name.charAt\(0\)\}<\/div>/g, '<div class="avatar" style="background:transparent;"><img src="images/review.jpeg" alt="" style="width:100%; height:100%; object-fit:cover; border-radius:50%;"></div>');

fs.writeFileSync('script.js', js);
