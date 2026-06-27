import { GAMES_URL } from '@/lib/constants';

export function getGameUrl(slug: string): string {
  return `${GAMES_URL}/${slug}`;
}

export { GAMES } from './games';
export type { GameEntry } from './games';
