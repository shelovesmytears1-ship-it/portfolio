const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

content = content.replace(/name: "Alex\."/g, 'name: "Daniil Menshov"');
content = content.replace('z Polski', 'z Ukrainy');
content = content.replace('from Poland', 'from Ukraine');
content = content.replace('из Польши', 'из Украины');

const imgs = [
  '<img src="images/renovation.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project">',
  '<img src="images/cleaning.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project">',
  '<img src="images/lawyer.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project">',
  '<img src="images/modular.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project">',
  '<img src="images/smm.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project">',
  '<img src="images/spa.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project">',
  '<img src="images/tire.png" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Project">'
];

let pIndex = 0;
// Note: SVG icon in the portfolio arrays
content = content.replace(/icon: `<svg.*?<\/svg>`/g, (match) => {
  if (match.includes('stroke-width="1"')) {
    let rep = 'icon: `' + imgs[pIndex % 7] + '`';
    pIndex++;
    return rep;
  }
  return match;
});

fs.writeFileSync('script.js', content);
