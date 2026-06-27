'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Users, Shield, TrendingUp } from 'lucide-react';
import { GITHUB_REPO } from '@/lib/constants';

const values = [
  {
    icon: Heart,
    title: 'Open Source',
    description:
      'Built with love for the community. Free forever under AGPL-3.0 and open to contributions from everyone.',
  },
  {
    icon: Users,
    title: 'Built for Learning',
    description:
      'Born from real teaching needs — designed to make keyboard education accessible whether you are in the same room or across the world.',
  },
  {
    icon: Shield,
    title: 'Privacy Focused',
    description:
      'All processing happens locally on your device. No accounts, no tracking, no data leaving your machine.',
  },
  {
    icon: TrendingUp,
    title: 'Continuously Improving',
    description:
      'Regular updates with new keyboard models, features, and performance improvements driven by community feedback.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">About Keyboard Simulator</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Keyboard Simulator brings laptop keyboards to life with beautiful 3D graphics, real-time typing
            feedback, and rich customization. Perfect for demonstrations, tutorials, accessibility testing,
            or exploring different keyboard layouts.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/40 backdrop-blur-md rounded-xl p-6 border border-border/40"
            >
              <value.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
              <p className="text-foreground/70">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Image
            src="/CompanyLogo.png"
            alt="Roboticela"
            width={200}
            height={222}
            className="w-40 h-auto mx-auto mb-6 opacity-90"
          />
          <p className="text-foreground/70 mb-4">
            Built by{' '}
            <a
              href="https://github.com/Roboticela"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Roboticela
            </a>
          </p>
          <p className="text-foreground/50 text-sm">
            Licensed under AGPL-3.0 •{' '}
            <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              View on GitHub
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
