'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Gamepad2, ArrowRight } from 'lucide-react';
import { GAMES, getGameUrl } from '@/lib/games';
import { GAMES_URL } from '@/lib/constants';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Games() {
  return (
    <section id="games" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Keyboard Games</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
            Twenty focused games in the web app — each built for one skill: typing speed, accuracy, shortcuts,
            layouts, reaction time, and more.
          </p>
          <motion.a
            href={GAMES_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-xl font-semibold text-lg transition-colors"
          >
            <Gamepad2 className="text-xl" />
            Browse All Games
            <ExternalLink className="w-4 h-4 opacity-80" />
          </motion.a>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {GAMES.map((game) => (
            <motion.a
              key={game.slug}
              href={getGameUrl(game.slug)}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemAnimation}
              whileHover={{ y: -2 }}
              className="group bg-card/40 backdrop-blur-md rounded-xl p-5 border border-border/40 hover:border-primary/40 hover:bg-card/60 transition-all duration-300 flex flex-col h-full"
            >
              <game.icon className="w-9 h-9 text-primary mb-3 shrink-0" aria-hidden="true" />
              <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {game.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed flex-1">{game.description}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-4">
                Play
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-foreground/60 text-sm mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Each game opens in the Keyboard Simulator web app — no download required.
        </motion.p>
      </div>
    </section>
  );
}
