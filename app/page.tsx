import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import { HOME_SEO } from '@/lib/seo';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: HOME_SEO.title,
  description: HOME_SEO.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: HOME_SEO.title.absolute,
    description: HOME_SEO.description,
    url: SITE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_SEO.title.absolute,
    description: HOME_SEO.description,
  },
};

export default function Page() {
  return <HomePage />;
}
