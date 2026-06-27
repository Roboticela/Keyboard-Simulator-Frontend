import { BLOG_CONTENT } from './content';
import { BLOG_POSTS_META } from './posts';
import { BlogPost, BlogPostMeta } from './types';
import { excerptFromContent } from './utils';

function withExcerpt(meta: BlogPostMeta, content: string): BlogPostMeta {
  return {
    ...meta,
    excerpt: meta.excerpt || excerptFromContent(content),
    searchText: `${meta.title} ${content}`.toLowerCase(),
  };
}

function getContent(slug: string): string | undefined {
  return BLOG_CONTENT[slug];
}

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS_META.map((meta) => {
    const content = getContent(meta.slug) ?? '';
    return {
      ...withExcerpt(meta, content),
      content,
    };
  }).filter((post) => post.content);
}

export function getAllPostsMeta(): BlogPostMeta[] {
  return BLOG_POSTS_META.map((meta) => {
    const content = getContent(meta.slug);
    if (!content) return meta;
    return withExcerpt(meta, content);
  });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const meta = BLOG_POSTS_META.find((post) => post.slug === slug);
  const content = getContent(slug);
  if (!meta || !content) return undefined;
  return { ...withExcerpt(meta, content), content };
}

export function getAdjacentPosts(slug: string): {
  prev: BlogPostMeta | null;
  next: BlogPostMeta | null;
} {
  const index = BLOG_POSTS_META.findIndex((post) => post.slug === slug);
  if (index === -1) return { prev: null, next: null };
  const metas = getAllPostsMeta();
  return {
    prev: index > 0 ? metas[index - 1] : null,
    next: index < metas.length - 1 ? metas[index + 1] : null,
  };
}
