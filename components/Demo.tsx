'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { APP_URL, SITE_NAME } from '@/lib/constants';

export default function Demo() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <section id="demo" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">See It In Action</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            Try {SITE_NAME} — use the web version or download the desktop app
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="text-xl" />
              {isDesktop ? 'Open in New Tab' : 'Launch Simulator'}
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-card/40 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-border/40"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="aspect-video w-full bg-accent/10 border border-border rounded-lg overflow-hidden">
            {isDesktop ? (
              <iframe
                src={APP_URL}
                className="w-full h-full"
                title={SITE_NAME}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <img src="/favicon.svg" alt={`${SITE_NAME} Demo`} className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4" />
                  <p className="text-foreground/70 text-lg">Interactive Simulator</p>
                  <p className="text-foreground/50 text-sm mt-2">Click &quot;Launch Simulator&quot; to try it</p>
                </div>
              </div>
            )}
          </div>
          <p className="text-center text-foreground/60 text-sm mt-4">
            {isDesktop
              ? 'Interactive preview — click "Open in New Tab" for full experience'
              : 'Click the button above to launch the simulator in a new tab'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
