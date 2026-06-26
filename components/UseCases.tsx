'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Users, Accessibility, Video, Globe, Heart, type LucideIcon } from 'lucide-react';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const useCases: { icon: LucideIcon; title: string; description: string; color: string }[] = [
  {
    icon: GraduationCap,
    title: 'Students & Learners',
    description:
      'Master keyboard layouts, finger placement, and function keys with an interactive 3D view — no physical keyboard required.',
    color: 'text-blue-500',
  },
  {
    icon: Users,
    title: 'Teachers & Instructors',
    description:
      'Demonstrate laptop keyboards remotely. Perfect for typing lessons, IT training, and computer literacy courses.',
    color: 'text-purple-500',
  },
  {
    icon: Accessibility,
    title: 'Accessibility Testing',
    description:
      'Visualize key states, lock indicators, and input feedback for accessibility research and UX evaluation.',
    color: 'text-green-500',
  },
  {
    icon: Video,
    title: 'Tutorials & Content Creators',
    description:
      'Record polished keyboard demos with animated hands, themes, and fullscreen mode for videos and presentations.',
    color: 'text-orange-500',
  },
  {
    icon: Globe,
    title: 'Remote Collaboration',
    description:
      'Teach and learn from anywhere. Show exactly which keys to press when you cannot share a physical device.',
    color: 'text-pink-500',
  },
  {
    icon: Heart,
    title: 'Keyboard Enthusiasts',
    description:
      'Explore different laptop keyboard designs and layouts. Compare models side by side in a beautiful 3D environment.',
    color: 'text-red-500',
  },
];

export default function UseCases() {
  return (
    <section className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Perfect For Everyone</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            From classrooms to content studios — Keyboard Simulator adapts to your workflow
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              whileHover={{ scale: 1.02 }}
              className="bg-card/40 backdrop-blur-md rounded-xl p-6 border border-border/40 hover:border-primary/40 transition-all duration-300 h-full"
            >
              <useCase.icon className={`w-12 h-12 mb-4 ${useCase.color}`} />
              <h3 className="text-xl font-semibold text-foreground mb-2">{useCase.title}</h3>
              <p className="text-foreground/70">{useCase.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
