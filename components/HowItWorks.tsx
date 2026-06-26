'use client';

import { motion } from 'framer-motion';
import { Keyboard, FileText, Eye, Settings, type LucideIcon } from 'lucide-react';

const steps: { icon: LucideIcon; title: string; description: string; color: string }[] = [
  {
    icon: Keyboard,
    title: 'Choose a Keyboard Model',
    description:
      'Select from five real laptop layouts — Asus UX370UAR, Dell Latitude, HP EliteBook, Toshiba Portege, and more.',
    color: 'text-blue-500',
  },
  {
    icon: FileText,
    title: 'Type in the Editor',
    description:
      'Use the document editor to enter text. Every keystroke is mirrored on the 3D keyboard with visual key press feedback.',
    color: 'text-purple-500',
  },
  {
    icon: Eye,
    title: 'Explore in 3D',
    description:
      'Rotate and zoom the keyboard view. Enable keyboard sync to reflect your physical keyboard input in real time.',
    color: 'text-orange-500',
  },
  {
    icon: Settings,
    title: 'Customize Your Experience',
    description:
      'Switch themes, toggle hand animation, mouse controls, Fn shortcuts, fullscreen mode, and system indicators.',
    color: 'text-green-500',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Get started with keyboard simulation in four simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-background rounded-full flex items-center justify-center font-bold text-xl z-10">
                {index + 1}
              </div>
              <div className="bg-card/40 backdrop-blur-md rounded-xl p-6 pt-8 border border-border/40 h-full">
                <step.icon className={`w-12 h-12 ${step.color} mb-4`} />
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                  <svg className="w-8 h-8 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
