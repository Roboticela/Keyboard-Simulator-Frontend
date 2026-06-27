import type { ReactNode } from 'react';

function isUrl(part: string): boolean {
  return (
    part.startsWith('http://') ||
    part.startsWith('https://') ||
    part.includes('keyboard-simulator.roboticela.com')
  );
}

function linkifyText(text: string): ReactNode[] {
  const urlPattern = /(https?:\/\/[^\s]+|(?:app\.)?keyboard-simulator\.roboticela\.com[^\s]*)/g;
  const parts = text.split(urlPattern);

  return parts.map((part, index) => {
    if (isUrl(part)) {
      const href = part.startsWith('http') ? part : `https://${part}`;
      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline underline-offset-2"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

export default function BlogContent({ content }: { content: string }) {
  const paragraphs = content.split(/\n\n+/).filter(Boolean);

  return (
    <div className="space-y-5 text-foreground/85 leading-relaxed text-base md:text-lg">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{linkifyText(paragraph.trim())}</p>
      ))}
    </div>
  );
}
