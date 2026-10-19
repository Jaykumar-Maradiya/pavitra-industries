import fs from 'fs';

const pages = [
  'cooling-tower-motor',
  'sepration-vibrator-motor',
  'custmize-motor',
  'top-flange-vibratory-motors',
  'double-flange-vibratory-motor',
  'center-flange-vibratory-motor',
  'micro-vibratory-motor'
];

const files = fs.readdirSync('public/images/source');

for (const slug of pages) {
  const content = fs.readFileSync(`temp_${slug}.html`, 'utf8');
  console.log(`\n=== ${slug} ===`);
  const imgs = content.match(/https:\/\/pavitraind\.com\/wp-content\/uploads\/[^\s"'<>]+\.(?:jpg|jpeg|png|webp)/gi) || [];
  const unique = [...new Set(imgs)].filter(img => !img.includes('logo') && !img.includes('cropped-') && !img.includes('icon'));
  
  unique.forEach(url => {
    const filename = url.split('/').pop().replace(/-\d+x\d+/, '');
    const found = files.find(f => f.includes(filename.replace('.jpg','').replace('.webp','').replace('.png','')));
    console.log(`  ${url.split('/').pop()} => ${found ? 'FOUND: ' + found : 'MISSING'}`);
  });
}
