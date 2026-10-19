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

const results = {};

for (const slug of pages) {
  const content = fs.readFileSync(`temp_${slug}.html`, 'utf8');
  results[slug] = {
    tables: []
  };

  const tables = content.match(/<table[\s\S]*?<\/table>/gi) || [];
  tables.forEach((t, i) => {
    const titleMatch = t.match(/<th[^>]*colspan[^>]*>([\s\S]*?)<\/th>/i) || t.match(/<caption>([\s\S]*?)<\/caption>/i);
    const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : `Table ${i + 1}`;
    
    // Extract headers
    let headers = [];
    const theadMatch = t.match(/<thead[\s\S]*?<\/thead>/i);
    if (theadMatch) {
      const ths = theadMatch[0].match(/<th[^>]*>([\s\S]*?)<\/th>/gi) || [];
      headers = ths.map(h => h.replace(/<[^>]+>/g, '').trim());
    }

    // Extract rows
    const trs = t.match(/<tr[\s\S]*?<\/tr>/gi) || [];
    const rows = [];
    trs.forEach(tr => {
      // skip header row if inside thead or if only th
      const tds = tr.match(/<(?:td|th)[^>]*>([\s\S]*?)<\/(?:td|th)>/gi) || [];
      const cells = tds.map(c => c.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
      if (cells.length > 0) {
        rows.push(cells);
      }
    });

    results[slug].tables.push({
      title,
      headers: headers.length > 0 ? headers : (rows.length > 0 ? rows[0] : []),
      rows: headers.length > 0 ? rows : rows.slice(1)
    });
  });
}

fs.writeFileSync('tables_extracted.json', JSON.stringify(results, null, 2));
console.log('Saved tables_extracted.json');
