import { SITE_NAME } from '@/lib/constants';

const BRAND_SUFFIX = ` | ${SITE_NAME}`;
const MAX_TITLE_LENGTH = 60;
const META_DESC_MIN = 150;
const META_DESC_MAX = 160;

export function truncateText(text: string, maxLength: number): string {
  const plain = text.replace(/\s+/g, ' ').trim();
  if (plain.length <= maxLength) return plain;
  const truncated = plain.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}…`;
}

/** SEO page title — keeps total length ≤ 60 characters. */
export function buildSeoTitle(pageTitle: string): { absolute: string } {
  const suffix = BRAND_SUFFIX;
  const maxPageTitleLength = MAX_TITLE_LENGTH - suffix.length;

  if (pageTitle.length <= maxPageTitleLength) {
    return { absolute: `${pageTitle}${suffix}` };
  }

  const shortened = truncateText(pageTitle, maxPageTitleLength).replace(/…$/, '');
  return { absolute: `${shortened}${suffix}` };
}

/** Unique meta description targeting 150–160 characters. */
export function buildMetaDescription(title: string, content: string): string {
  const plain = content.replace(/\s+/g, ' ').trim();
  const lead = truncateText(plain, 110).replace(/…$/, '');

  const prefix = `${title}. `;
  let description = `${prefix}${lead}`;

  if (description.length < META_DESC_MIN && plain.length > lead.length) {
    description = truncateText(`${prefix}${plain}`, META_DESC_MAX);
  }

  if (description.length > META_DESC_MAX) {
    description = truncateText(description, META_DESC_MAX);
  }

  return description;
}

/** Visible excerpt for cards and article headers (shorter than meta description). */
export function buildExcerpt(content: string, maxLength = 200): string {
  return truncateText(content.replace(/\s+/g, ' ').trim(), maxLength);
}

export const HOME_SEO = {
  title: buildSeoTitle('3D Keyboard Simulator for Typing Practice'),
  description:
    'Free 3D keyboard simulator with live typing feedback, five laptop models, animated hands, and eight themes. Learn touch typing, teach remotely, or explore layouts.',
};

export const BLOG_INDEX_SEO = {
  title: buildSeoTitle('Keyboard & Typing Guides and Tutorials'),
  description:
    'Expert guides on touch typing, laptop keyboard layouts, shortcuts, ergonomics, and using the 3D Keyboard Simulator for learning, teaching, and productivity.',
};
