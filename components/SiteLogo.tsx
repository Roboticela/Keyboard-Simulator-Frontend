import { SITE_NAME } from '@/lib/constants';

interface SiteLogoProps {
  className?: string;
  imageClassName?: string;
  showName?: boolean;
  nameClassName?: string;
}

/** Logo mark with adjacent site name — image is decorative (alt left empty). */
export function SiteLogo({
  className = 'flex items-center gap-2',
  imageClassName = 'w-6 h-6 shrink-0',
  showName = true,
  nameClassName = 'text-lg font-semibold text-foreground',
}: SiteLogoProps) {
  return (
    <span className={className}>
      <img src="/favicon.svg" alt="" aria-hidden="true" className={imageClassName} />
      {showName && <span className={nameClassName}>{SITE_NAME}</span>}
    </span>
  );
}
