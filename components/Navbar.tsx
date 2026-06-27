'use client';

import { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { SiteLogo } from './SiteLogo';
import { GITHUB_REPO, SITE_NAME, SUPPORT_URL } from '@/lib/constants';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isBlog = pathname === '/blogs' || pathname.startsWith('/blogs/');

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/blogs', label: 'Blog' },
    { href: '#games', label: 'Games' },
    { href: '#downloads', label: 'Download' },
    { href: '#story', label: 'Story' },
    { href: '#about', label: 'About' },
    { href: SUPPORT_URL, label: 'Support' },
  ].filter((link) => !(isBlog && link.href === '/blogs'));

  const renderNavLink = (link: (typeof navLinks)[number]) => {
    if (link.href.startsWith('http')) {
      return (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="text-foreground/80 hover:text-primary transition-all duration-200 cursor-pointer text-sm md:text-base inline-flex items-center gap-1"
        >
          {link.label}
          <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" />
        </a>
      );
    }

    if (link.href === '/') {
      return isHome ? (
        <a
          key={link.href}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
            closeMenu();
          }}
          className="text-foreground/80 hover:text-primary transition-all duration-200 cursor-pointer text-sm md:text-base"
        >
          {link.label}
        </a>
      ) : (
        <Link
          key={link.href}
          href="/"
          onClick={closeMenu}
          className="text-foreground/80 hover:text-primary transition-all duration-200 cursor-pointer text-sm md:text-base"
        >
          {link.label}
        </Link>
      );
    }

    if (link.href.startsWith('/')) {
      return (
        <Link
          key={link.href}
          href={link.href}
          onClick={closeMenu}
          className="text-foreground/80 hover:text-primary transition-all duration-200 cursor-pointer text-sm md:text-base"
        >
          {link.label}
        </Link>
      );
    }

    return isHome ? (
      <a
        key={link.href}
        href={link.href}
        onClick={closeMenu}
        className="text-foreground/80 hover:text-primary transition-all duration-200 cursor-pointer text-sm md:text-base"
      >
        {link.label}
      </a>
    ) : (
      <Link
        key={link.href}
        href={`/${link.href}`}
        onClick={closeMenu}
        className="text-foreground/80 hover:text-primary transition-all duration-200 cursor-pointer text-sm md:text-base"
      >
        {link.label}
      </Link>
    );
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-card/70 backdrop-blur-md border-b border-border/40"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 flex items-center justify-between gap-2 overflow-x-hidden relative z-50">
        {isHome ? (
          <a
            href="#main-content"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="flex items-center gap-1.5 sm:gap-2 md:gap-3 min-w-0 flex-1 cursor-pointer"
            aria-label={`${SITE_NAME} home`}
          >
            <SiteLogo
              imageClassName="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 shrink-0"
              nameClassName="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-foreground truncate"
            />
          </a>
        ) : (
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 md:gap-3 min-w-0 flex-1"
            aria-label={`${SITE_NAME} home`}
          >
            <SiteLogo
              imageClassName="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 shrink-0"
              nameClassName="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-foreground truncate"
            />
          </Link>
        )}

        <div className="hidden lg:flex items-center gap-4 md:gap-6 shrink-0">
          {navLinks.map(renderNavLink)}
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/80 rounded-xl transition-colors"
          >
            <FaGithub className="text-lg" />
            <span className="text-foreground font-semibold">GitHub</span>
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0 relative z-50">
          <div className="lg:hidden shrink-0">
            <ThemeToggle />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors shrink-0 relative z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
          <div className="hidden lg:block shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-20 lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden fixed top-[73px] left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border/40 z-30 max-h-[calc(100vh-73px)] overflow-y-auto"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
                {navLinks.map((link) => {
                  if (link.href.startsWith('http')) {
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="flex px-4 py-3 text-foreground/80 hover:text-primary hover:bg-accent rounded-xl transition-all duration-200 cursor-pointer text-base items-center gap-1.5"
                      >
                        {link.label}
                        <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" />
                      </a>
                    );
                  }
                  if (link.href === '/') {
                    return isHome ? (
                      <a
                        key={link.href}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToTop();
                          closeMenu();
                        }}
                        className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-accent rounded-xl transition-all duration-200 cursor-pointer text-base"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        href="/"
                        onClick={closeMenu}
                        className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-accent rounded-xl transition-all duration-200 cursor-pointer text-base"
                      >
                        {link.label}
                      </Link>
                    );
                  }
                  if (link.href.startsWith('/')) {
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-accent rounded-xl transition-all duration-200 cursor-pointer text-base"
                      >
                        {link.label}
                      </Link>
                    );
                  }
                  return isHome ? (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-accent rounded-xl transition-all duration-200 cursor-pointer text-base"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={`/${link.href}`}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-accent rounded-xl transition-all duration-200 cursor-pointer text-base"
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <a
                  href={GITHUB_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center gap-2 px-4 py-3 bg-accent hover:bg-accent/80 rounded-xl transition-colors"
                >
                  <FaGithub className="text-lg" />
                  <span className="text-foreground font-semibold">GitHub</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
