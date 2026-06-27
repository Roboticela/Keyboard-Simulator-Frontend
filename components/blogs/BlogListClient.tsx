'use client';

import { useCallback, useEffect, useMemo, useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import BlogCard from './BlogCard';
import type { BlogPostMeta } from '@/lib/blogs';
import { BLOGS_PER_PAGE, paginate, searchPosts } from '@/lib/blogs';

interface BlogListClientProps {
  posts: BlogPostMeta[];
}

export default function BlogListClient({ posts }: BlogListClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const initialQuery = searchParams.get('q') ?? '';
  const initialPage = Math.max(1, parseInt(searchParams.get('page') ?? '1', 10) || 1);

  const [query, setQuery] = useState(initialQuery);
  const [page, setPage] = useState(initialPage);

  const updateUrl = useCallback(
    (nextQuery: string, nextPage: number) => {
      const params = new URLSearchParams();
      if (nextQuery.trim()) params.set('q', nextQuery.trim());
      if (nextPage > 1) params.set('page', String(nextPage));
      const qs = params.toString();
      startTransition(() => {
        router.replace(qs ? `/blogs?${qs}` : '/blogs', { scroll: false });
      });
    },
    [router]
  );

  useEffect(() => {
    setQuery(initialQuery);
    setPage(initialPage);
  }, [initialQuery, initialPage]);

  const filteredPosts = useMemo(() => searchPosts(posts, query), [posts, query]);

  const { items, currentPage, totalPages } = useMemo(() => {
    const result = paginate(filteredPosts, page, BLOGS_PER_PAGE);
    if (page > result.totalPages && result.totalPages > 0) {
      return paginate(filteredPosts, result.totalPages, BLOGS_PER_PAGE);
    }
    return result;
  }, [filteredPosts, page]);

  useEffect(() => {
    if (page > totalPages && totalPages > 0) {
      setPage(totalPages);
      updateUrl(query, totalPages);
    }
  }, [page, totalPages, query, updateUrl]);

  const handleSearch = (value: string) => {
    setQuery(value);
    setPage(1);
    updateUrl(value, 1);
  };

  const goToPage = (nextPage: number) => {
    setPage(nextPage);
    updateUrl(query, nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="relative max-w-xl mx-auto mb-10">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40 pointer-events-none" />
        <input
          type="search"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search articles by title or topic…"
          className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-card/50 border border-border/40 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
          aria-label="Search blog articles"
        />
        {query && (
          <button
            type="button"
            onClick={() => handleSearch('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg text-foreground/50 hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 bg-card/30 rounded-xl border border-border/40">
          <p className="text-foreground/70 text-lg mb-2">No articles found</p>
          <p className="text-foreground/50 text-sm">Try a different search term or browse all articles.</p>
          {query && (
            <button
              type="button"
              onClick={() => handleSearch('')}
              className="mt-4 px-4 py-2 rounded-xl bg-accent hover:bg-accent/80 text-foreground text-sm font-medium transition-colors"
            >
              Clear search
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <nav
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          aria-label="Blog pagination"
        >
          <button
            type="button"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage <= 1}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card/50 border border-border/40 text-foreground text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-accent transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                type="button"
                onClick={() => goToPage(pageNum)}
                className={`min-w-[2.5rem] h-10 px-3 rounded-xl text-sm font-medium transition-colors ${
                  pageNum === currentPage
                    ? 'bg-primary text-background'
                    : 'bg-card/50 border border-border/40 text-foreground/70 hover:bg-accent hover:text-foreground'
                }`}
                aria-current={pageNum === currentPage ? 'page' : undefined}
              >
                {pageNum}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card/50 border border-border/40 text-foreground text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-accent transition-colors"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </nav>
      )}
    </div>
  );
}
