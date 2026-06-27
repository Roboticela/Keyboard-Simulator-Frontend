export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  number: number;
  searchText?: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
