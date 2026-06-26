'use client';

import { motion } from 'framer-motion';

const comparisons = [
  {
    feature: 'Visualization',
    keyboardSimulator: 'Interactive 3D with live key press',
    others: 'Static images or diagrams',
  },
  {
    feature: 'Keyboard Models',
    keyboardSimulator: '5 real laptop layouts',
    others: 'Generic QWERTY only',
  },
  {
    feature: 'Cost',
    keyboardSimulator: 'Free & open source (AGPL)',
    others: 'Paid or limited free',
  },
  {
    feature: 'Typing Feedback',
    keyboardSimulator: 'Real-time sync & hand animation',
    others: 'No live interaction',
  },
  {
    feature: 'Platform',
    keyboardSimulator: 'Windows, macOS, Linux, mobile',
    others: 'Web only or single platform',
  },
  {
    feature: 'Privacy',
    keyboardSimulator: '100% local, offline capable',
    others: 'Cloud-dependent',
  },
];

export default function Comparison() {
  return (
    <section className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">How We Compare</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            See why educators and developers choose Keyboard Simulator
          </p>
        </motion.div>

        <motion.div
          className="bg-card/40 backdrop-blur-md rounded-xl overflow-hidden border border-border/40"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-3 gap-4 p-4 sm:p-6 bg-accent/30 border-b border-border/40">
            <div className="font-bold text-foreground">Feature</div>
            <div className="font-bold text-primary text-center">Keyboard Simulator</div>
            <div className="font-bold text-foreground/70 text-center">Others</div>
          </div>

          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-3 gap-4 p-4 sm:p-6 border-b border-border/20 last:border-b-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="text-foreground font-medium text-sm sm:text-base">{item.feature}</div>
              <div className="text-center">
                <span className="text-primary font-semibold text-sm sm:text-base">{item.keyboardSimulator}</span>
              </div>
              <div className="text-center">
                <span className="text-foreground/60 text-sm sm:text-base">{item.others}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
