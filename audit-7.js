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

for (const slug of pages) {
  const content = fs.readFileSync(`temp_${slug}.html`, 'utf8');
  console.log(`\n================== ${slug} ==================`);

  // Headings
  const headings = content.match(/<h[1-5][^>]*>([\s\S]*?)<\/h[1-5]>/gi) || [];
  const cleanHeadings = headings
    .map(h => h.replace(/<[^>]+>/g, '').trim())
    .filter(h => h && !h.includes('Useful Links') && !h.includes('pavitraind.com') && !h.includes('Company') && !h.includes('Quick Contact') && !h.includes('Need Help Selecting'));
  console.log('Key Headings:', cleanHeadings);

  // Images in content
  const imgs = content.match(/https:\/\/pavitraind\.com\/wp-content\/uploads\/[^\s"'<>]+\.(?:jpg|jpeg|png|webp)/gi) || [];
  const uniqueImgs = [...new Set(imgs)].filter(img => !img.includes('logo') && !img.includes('cropped-') && !img.includes('icon') && !img.includes('-150x150') && !img.includes('-300x300') && !img.includes('-768x768'));
  console.log('Images:', uniqueImgs);

  // Tables
  const tables = content.match(/<table[\s\S]*?<\/table>/gi) || [];
  console.log(`Tables count: ${tables.length}`);
  tables.forEach((t, i) => {
    const rows = t.match(/<tr[\s\S]*?<\/tr>/gi) || [];
    console.log(`Table ${i + 1} (${rows.length} rows):`);
    rows.slice(0, 3).forEach(r => console.log('  ' + r.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()));
    if (rows.length > 3) console.log(`  ... and ${rows.length - 3} more rows`);
  });
}
