import { NextResponse } from 'next/server';
import { submitAllSiteUrlsToIndexNow, submitToIndexNow } from '@/lib/seo';

function isAuthorized(request: Request): boolean {
  const secret = process.env.INDEXNOW_SUBMIT_SECRET;
  if (!secret) return false;
  const auth = request.headers.get('authorization');
  return auth === `Bearer ${secret}`;
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!process.env.INDEXNOW_KEY) {
    return NextResponse.json({ error: 'INDEXNOW_KEY is not configured' }, { status: 500 });
  }

  try {
    const body = await request.json().catch(() => ({}));
    const urls = Array.isArray(body?.urls) ? (body.urls as string[]) : null;
    const result = urls ? await submitToIndexNow(urls) : await submitAllSiteUrlsToIndexNow();

    return NextResponse.json({
      success: result.ok,
      status: result.status,
      urlCount: result.urlCount,
    });
  } catch {
    return NextResponse.json({ error: 'IndexNow submission failed' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  return POST(request);
}
