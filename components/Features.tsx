'use client';

import { motion } from 'framer-motion';
import {
  Keyboard,
  FileText,
  Hand,
  Palette,
  Lock,
  Monitor,
  Download,
  Link,
  Maximize2,
  type LucideIcon,
} from 'lucide-react';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const features = [
  {
    icon: Keyboard,
    title: '5 Laptop Keyboard Models',
    description:
      'Explore Asus, Dell, HP, and Toshiba layouts with accurate key placement and realistic styling for each device.',
    color: 'text-blue-500',
  },
  {
    icon: Monitor,
    title: '3D Interactive Visualization',
    description:
      'Powered by React Three Fiber — rotate, zoom, and watch keys press with smooth real-time feedback.',
    color: 'text-cyan-500',
  },
  {
    icon: FileText,
    title: 'Live Document Editor',
    description:
      'Type in the built-in editor and see every keystroke reflected on the 3D keyboard instantly.',
    color: 'text-green-500',
  },
  {
    icon: Hand,
    title: 'Animated Typing Hands',
    description:
      'Optional hand visualization follows your typing, making remote lessons and demos far more intuitive.',
    color: 'text-purple-500',
  },
  {
    icon: Lock,
    title: 'Lock & System Indicators',
    description:
      'Caps Lock, Num Lock, Scroll Lock LEDs plus battery, WiFi, Bluetooth, and volume status controls.',
    color: 'text-orange-500',
  },
  {
    icon: Palette,
    title: '8 Custom Themes',
    description:
      'Navy, Dark, Light, Sunset, Ocean, Forest, Purple Dream, and Midnight — switch seamlessly anytime.',
    color: 'text-pink-500',
  },
  {
    icon: Download,
    title: 'Web & Desktop',
    description:
      'Use the simulator in your browser or download the desktop app. No account required. Free and open source.',
    color: 'text-teal-500',
  },
  {
    icon: Link,
    title: 'Keyboard Sync',
    description:
      'Mirror your physical keyboard in real time. Every key you press on your device is reflected instantly on the 3D model.',
    color: 'text-indigo-500',
  },
  {
    icon: Maximize2,
    title: 'Fullscreen & View Controls',
    description:
      'Enter immersive fullscreen mode, rotate and zoom the 3D keyboard, and reset the camera view with one click.',
    color: 'text-amber-500',
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <motion.div
      variants={itemAnimation}
      whileHover={{ scale: 1.02 }}
      className="bg-card/40 backdrop-blur-md rounded-xl p-6 border border-border/40 hover:border-primary/40 transition-all duration-300"
    >
      <div className={`${color} mb-4`}>
        <Icon className="w-12 h-12" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Powerful Features</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Everything you need for realistic keyboard simulation and visualization
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
