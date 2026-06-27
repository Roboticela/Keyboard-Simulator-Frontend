import { SITE_URL } from '@/lib/constants';
import { getAllPostSlugs } from '@/lib/blogs';

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

function getHost(): string {
  return new URL(SITE_URL).host;
}

function getKey(): string | undefined {
  return process.env.INDEXNOW_KEY;
}

export function getIndexNowKeyLocation(key: string): string {
  return `${SITE_URL}/${key}.txt`;
}

export function getAllSiteUrls(): string[] {
  const blogUrls = getAllPostSlugs().map((slug) => `${SITE_URL}/blogs/${slug}`);
  return [SITE_URL, `${SITE_URL}/blogs`, ...blogUrls];
}

export async function submitToIndexNow(urls: string[]): Promise<{
  ok: boolean;
  status: number;
  urlCount: number;
}> {
  const key = getKey();
  if (!key) {
    return { ok: false, status: 0, urlCount: urls.length };
  }

  const host = getHost();
  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host,
      key,
      keyLocation: getIndexNowKeyLocation(key),
      urlList: urls.slice(0, 10_000),
    }),
  });

  return {
    ok: response.ok || response.status === 202,
    status: response.status,
    urlCount: urls.length,
  };
}

export async function submitAllSiteUrlsToIndexNow() {
  return submitToIndexNow(getAllSiteUrls());
}
