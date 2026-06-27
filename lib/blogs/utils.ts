export function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function excerptFromContent(content: string, maxLength = 180): string {
  const plain = content.replace(/\s+/g, ' ').trim();
  if (plain.length <= maxLength) return plain;
  const truncated = plain.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}…`;
}

export function paginate<T>(items: T[], page: number, perPage: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    currentPage,
    totalPages,
    totalItems: items.length,
    perPage,
  };
}

export function searchPosts<
  T extends { title: string; excerpt: string; content?: string; searchText?: string },
>(posts: T[], query: string): T[] {
  const q = query.trim().toLowerCase();
  if (!q) return posts;
  return posts.filter((post) => {
    if (post.searchText?.includes(q)) return true;
    return (
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.content?.toLowerCase().includes(q)
    );
  });
}
