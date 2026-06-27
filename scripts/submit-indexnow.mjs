/**
 * Submit all site URLs to IndexNow after a production deploy.
 * Usage: INDEXNOW_KEY=... INDEXNOW_SUBMIT=true node scripts/submit-indexnow.mjs
 */

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const SITE_URL = process.env.SITE_URL ?? 'https://keyboard-simulator.roboticela.com';

async function main() {
  if (process.env.INDEXNOW_SUBMIT !== 'true') {
    console.log('INDEXNOW_SUBMIT is not "true" — skipping submission (dry run).');
    process.exit(0);
  }

  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    console.error('INDEXNOW_KEY is required.');
    process.exit(1);
  }

  const host = new URL(SITE_URL).host;
  const sitemapUrl = `${SITE_URL}/sitemap.xml`;
  const sitemapRes = await fetch(sitemapUrl);

  if (!sitemapRes.ok) {
    console.error(`Failed to fetch sitemap: ${sitemapRes.status}`);
    process.exit(1);
  }

  const xml = await sitemapRes.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  if (urls.length === 0) {
    console.error('No URLs found in sitemap.');
    process.exit(1);
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host,
      key,
      keyLocation: `${SITE_URL}/${key}.txt`,
      urlList: urls,
    }),
  });

  console.log(`IndexNow: submitted ${urls.length} URLs — HTTP ${response.status}`);
  process.exit(response.ok || response.status === 202 ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
