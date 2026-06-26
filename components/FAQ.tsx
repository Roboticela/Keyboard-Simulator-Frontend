'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { GITHUB_REPO } from '@/lib/constants';

const faqs = [
  {
    question: 'What is Keyboard Simulator?',
    answer:
      'Keyboard Simulator is a cross-platform desktop application that provides an interactive 3D visualization of laptop keyboards. Type in the built-in editor and watch keys press in real time with animated hands, themes, and system indicators.',
  },
  {
    question: 'Which keyboard models are supported?',
    answer:
      'Five laptop layouts: Asus UX370UAR, Dell Latitude 5300 2-in-1, Dell Latitude E7270, HP EliteBook 820 G4, and Toshiba Portege X30-E. More models are planned for future releases.',
  },
  {
    question: 'Is Keyboard Simulator free?',
    answer:
      'Yes! It is completely free and open source under the AGPL-3.0 license. Download, use, and modify it freely — commercial use is allowed with license compliance.',
  },
  {
    question: 'Does my data get sent to any servers?',
    answer:
      'No. All data is stored locally on your device. Your privacy is our priority. The application works entirely offline after installation.',
  },
  {
    question: 'Does keyboard sync work with all keyboards?',
    answer:
      'Keyboard sync works with most standard keyboards. It captures keyboard events from your system and reflects them in the 3D visualization in real time.',
  },
  {
    question: 'Which platforms are supported?',
    answer:
      'Windows, macOS, Linux, Android, and iOS. Download the installer for your platform from the Downloads section or GitHub Releases.',
  },
  {
    question: 'Web vs desktop app?',
    answer:
      'The web version runs in your browser at app.keyboard-simulator.roboticela.com — no install needed. The desktop app is available for download if you prefer a native application.',
  },
  {
    question: 'Can I add my own keyboard model?',
    answer:
      'Yes! The project is open source. You can add custom keyboard models by creating a new component and configuration file. See the GitHub repository for details.',
  },
  {
    question: 'How do I contribute?',
    answer: `Visit the GitHub repository at ${GITHUB_REPO} to report issues, suggest features, or submit pull requests. We welcome community contributions!`,
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-card/40 backdrop-blur-md rounded-xl border border-border/40 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent/20 transition-colors"
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-foreground/70 transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-4"
        >
          <p className="text-foreground/70">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-foreground/70">Everything you need to know about Keyboard Simulator</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
