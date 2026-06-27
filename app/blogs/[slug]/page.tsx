import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogContent from '@/components/blogs/BlogContent';
import { getAdjacentPosts, getAllPostSlugs, getPostBySlug } from '@/lib/blogs';
import { SITE_NAME } from '@/lib/constants';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: `Blog – ${SITE_NAME}` };

  return {
    title: `${post.title} – ${SITE_NAME} Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(slug);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 overflow-x-hidden w-full max-w-full">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>

          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed border-l-4 border-primary/50 pl-4">
              {post.excerpt}
            </p>
          </header>

          <div className="bg-card/30 backdrop-blur-md rounded-xl border border-border/40 p-6 md:p-10 mb-12">
            <BlogContent content={post.content} />
          </div>

          <nav
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-border/40"
            aria-label="Article navigation"
          >
            {prev ? (
              <Link
                href={`/blogs/${prev.slug}`}
                className="group p-5 rounded-xl bg-card/40 border border-border/40 hover:border-primary/40 hover:bg-card/60 transition-all"
              >
                <span className="text-xs font-medium text-foreground/50 uppercase tracking-wider">Previous</span>
                <p className="mt-1 text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/blogs/${next.slug}`}
                className="group p-5 rounded-xl bg-card/40 border border-border/40 hover:border-primary/40 hover:bg-card/60 transition-all sm:text-right"
              >
                <span className="text-xs font-medium text-foreground/50 uppercase tracking-wider">Next</span>
                <p className="mt-1 text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </nav>

          <div className="mt-10 text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent/80 text-foreground font-semibold transition-colors"
            >
              Browse all articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
