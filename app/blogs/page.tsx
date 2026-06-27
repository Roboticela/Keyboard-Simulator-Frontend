import type { Metadata } from 'next';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogListClient from '@/components/blogs/BlogListClient';
import { getAllPostsMeta } from '@/lib/blogs';
import { BLOG_INDEX_SEO } from '@/lib/seo';

interface BlogsPageProps {
  searchParams: Promise<{ page?: string; q?: string }>;
}

export async function generateMetadata({ searchParams }: BlogsPageProps): Promise<Metadata> {
  const { page, q } = await searchParams;
  const pageNum = Math.max(1, parseInt(page ?? '1', 10) || 1);
  const isFiltered = pageNum > 1 || Boolean(q?.trim());

  return {
    title: BLOG_INDEX_SEO.title,
    description: BLOG_INDEX_SEO.description,
    alternates: {
      canonical: '/blogs',
    },
    robots: isFiltered
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title: BLOG_INDEX_SEO.title.absolute,
      description: BLOG_INDEX_SEO.description,
      url: '/blogs',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: BLOG_INDEX_SEO.title.absolute,
      description: BLOG_INDEX_SEO.description,
    },
  };
}

export default function BlogsPage() {
  const posts = getAllPostsMeta();

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 overflow-x-hidden w-full max-w-full">
      <Navbar />
      <main id="main-content" className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Keyboard & Typing Blog</h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              In-depth guides on keyboards, touch typing, laptop layouts, and getting the most from the Keyboard
              Simulator.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="text-center py-12 text-foreground/60">Loading articles…</div>
            }
          >
            <BlogListClient posts={posts} />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}
