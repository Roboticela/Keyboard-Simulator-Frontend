'use client';

import { Mail, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GITHUB_REPO, SITE_NAME, APP_URL, SUPPORT_URL } from '@/lib/constants';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const hashLink = (hash: string, label: string) =>
    isHome ? (
      <a href={hash} className="text-sm text-foreground/70 hover:text-primary transition-colors">
        {label}
      </a>
    ) : (
      <Link href={`/${hash}`} className="text-sm text-foreground/70 hover:text-primary transition-colors">
        {label}
      </Link>
    );

  return (
    <footer className="py-12 px-4 bg-card/30 border-t border-border/40 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            {isHome ? (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="flex items-center gap-2 mb-4 cursor-pointer"
              >
                <img src="/favicon.svg" alt={SITE_NAME} className="w-6 h-6 shrink-0" />
                <span className="text-lg font-semibold text-foreground">{SITE_NAME}</span>
              </a>
            ) : (
              <Link href="/" className="flex items-center gap-2 mb-4">
                <img src="/favicon.svg" alt={SITE_NAME} className="w-6 h-6 shrink-0" />
                <span className="text-lg font-semibold text-foreground">{SITE_NAME}</span>
              </Link>
            )}
            <p className="text-sm text-foreground/60 mb-4">
              Interactive 3D keyboard simulation for learning, teaching, and demos. Free and open source.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="mailto:support@roboticela.com"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Product</h3>
            <ul className="space-y-2">
              <li>
                {isHome ? (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToTop();
                    }}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors cursor-pointer"
                  >
                    Home
                  </a>
                ) : (
                  <Link href="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Home
                  </Link>
                )}
              </li>
              <li>{hashLink('#features', 'Features')}</li>
              <li>{hashLink('#demo', 'Demo')}</li>
              <li>{hashLink('#downloads', 'Download')}</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={SUPPORT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Support
                  <ExternalLink className="w-3 h-3 shrink-0 opacity-70" />
                </a>
              </li>
              <li>{hashLink('#story', 'Story')}</li>
              <li>{hashLink('#about', 'About')}</li>
              <li>
                <a
                  href={GITHUB_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`${APP_URL}/privacy`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href={`${APP_URL}/terms`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60 text-center md:text-left">
            ©{new Date().getFullYear()} Roboticela. All rights reserved.
          </p>
          <p className="text-sm text-foreground/60 text-center md:text-right">
            App licensed under AGPL-3.0 • Made with ❤️ by Roboticela
          </p>
        </div>
      </div>
    </footer>
  );
}
