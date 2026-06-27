import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/blogs';

interface BlogCardProps {
  post: BlogPostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-card/40 backdrop-blur-md rounded-xl border border-border/40 p-6 hover:border-primary/40 hover:bg-card/60 transition-all duration-300 flex flex-col h-full">
      <div className="flex items-center gap-1.5 text-xs font-medium text-foreground/50 mb-3">
        <Calendar className="w-3.5 h-3.5" />
        Keyboard & Typing
      </div>

      <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
        <Link href={`/blogs/${post.slug}`} className="hover:underline underline-offset-2">
          {post.title}
        </Link>
      </h2>

      <p className="text-sm md:text-base text-foreground/70 flex-1 line-clamp-3 mb-4">{post.excerpt}</p>

      <Link
        href={`/blogs/${post.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all duration-200 mt-auto"
      >
        Read article
        <ArrowRight className="w-4 h-4" />
      </Link>
    </article>
  );
}
