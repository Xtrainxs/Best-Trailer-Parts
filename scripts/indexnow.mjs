// IndexNow submitter for Best Trailer Parts.
//
// Pings IndexNow (consumed by Bing, Yandex, and others) so search engines
// re-crawl changed/new pages almost immediately instead of waiting for the
// next scheduled crawl.
//
// Usage:
//   node scripts/indexnow.mjs                 -> submits the whole sitemap
//   node scripts/indexnow.mjs /about /categories/trailer-jacks   -> specific paths
//
// The key file must stay live at:
//   https://besttrailerparts.net/7ccbd90872894cb3d93ca5de3c3a4152.txt

const HOST = 'besttrailerparts.net';
const KEY = '7ccbd90872894cb3d93ca5de3c3a4152';
const ORIGIN = `https://${HOST}`;

async function getSitemapUrls() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`, { headers: { 'Cache-Control': 'no-cache' } });
  const xml = await res.text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  const args = process.argv.slice(2);
  const urlList = args.length
    ? args.map((p) => (p.startsWith('http') ? p : `${ORIGIN}${p.startsWith('/') ? '' : '/'}${p}`))
    : await getSitemapUrls();

  if (!urlList.length) {
    console.error('No URLs to submit.');
    process.exit(1);
  }

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `${ORIGIN}/${KEY}.txt`,
    urlList,
  };

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });

  console.log(`Submitted ${urlList.length} URL(s) to IndexNow -> HTTP ${res.status}`);
  if (res.status !== 200 && res.status !== 202) {
    console.log('Response:', await res.text());
  }
}

main().catch((err) => {
  console.error('IndexNow submission failed:', err);
  process.exit(1);
});
