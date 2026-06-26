'use client';

import { motion } from 'framer-motion';
import { Keyboard, Monitor, Smartphone, Laptop } from 'lucide-react';
import { KEYBOARD_MODELS } from '@/lib/constants';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const platforms = [
  { icon: Monitor, name: 'Windows', color: 'text-blue-500' },
  { icon: Monitor, name: 'Linux', color: 'text-orange-500' },
  { icon: Laptop, name: 'macOS', color: 'text-gray-400' },
  { icon: Smartphone, name: 'Android', color: 'text-green-500' },
  { icon: Smartphone, name: 'iOS', color: 'text-indigo-500' },
  ...KEYBOARD_MODELS.map((name, i) => ({
    icon: Keyboard,
    name,
    color: ['text-cyan-500', 'text-purple-500', 'text-pink-500', 'text-teal-500', 'text-amber-500'][i],
  })),
];

export default function Platforms() {
  return (
    <section id="platforms" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Platforms & Keyboard Models
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Cross-platform apps with five authentic laptop keyboard layouts
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              whileHover={{ scale: 1.02 }}
              className="bg-card/40 backdrop-blur-md rounded-xl p-4 text-center border border-border/40 hover:border-primary/40 transition-all duration-300"
            >
              <platform.icon className={`w-8 h-8 mx-auto mb-2 ${platform.color}`} />
              <p className="text-sm text-foreground/80 font-medium">{platform.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
