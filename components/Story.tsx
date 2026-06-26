'use client';

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const paragraphs = [
  {
    text: (
      <>
        It all started on a regular day when I was teaching{' '}
        <strong className="text-foreground">Sawaira Jaffar</strong> and{' '}
        <strong className="text-foreground">Sana Jaffar</strong>. We were working on understanding
        keyboards — everything from the different layouts to where the function keys are located, and
        even the proper way to position your fingers on the keys. But there was a big problem. We
        weren&apos;t all available at the same physical location. We needed to learn remotely, but
        without an actual keyboard in front of us, it was really difficult to explain and demonstrate
        everything properly.
      </>
    ),
    delay: 0.1,
  },
  {
    text: (
      <>
        That&apos;s when the idea hit me. What if there was an app that could simulate a real
        keyboard? Something that anyone could access from anywhere, showing all the different aspects
        of a keyboard — the QWERTY layout, the function keys at the top, the number pad on the side,
        and even guidance on proper finger placement.
      </>
    ),
    delay: 0.15,
  },
  {
    text: (
      <>
        The more I thought about it, the more I realized how useful this could be. Even if we were all
        in the same place, getting access to different keyboard layouts would be really hard. You
        can&apos;t just go out and buy a Dvorak keyboard or a Colemak keyboard whenever you want to
        learn about them. And what about regional layouts like AZERTY or other international keyboards?
        It would cost a fortune and take up so much space to have all those physical keyboards
        available.
      </>
    ),
    delay: 0.2,
  },
  {
    text: (
      <>
        With a simulator, all of these layouts could be available in one place, accessible to anyone
        with a device. Students could explore different keyboard types without needing to buy expensive
        hardware.
      </>
    ),
    delay: 0.25,
  },
  {
    text: (
      <>
        I want to thank <strong className="text-foreground">Shehram Riaz</strong> for his contribution
        in making different keyboard designs for the app, which really helped make it look better and
        more polished.
      </>
    ),
    delay: 0.3,
  },
  {
    text: (
      <>
        Looking back, it&apos;s funny how the best ideas come from real problems. I never imagined
        that a remote teaching session with Sawaira and Sana would lead to creating an actual
        application. But sometimes that&apos;s how it works — you face a challenge, and you figure out
        a solution that ends up helping way more people than you expected.
      </>
    ),
    delay: 0.35,
  },
];

export default function Story() {
  return (
    <section id="story" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-card/40 border border-border/40 mb-6">
            <BookOpen className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            The Story Behind Keyboard Simulator
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            How a remote teaching challenge became an app for learners everywhere
          </p>
        </motion.div>

        <motion.div
          className="bg-card/40 backdrop-blur-md rounded-xl p-6 sm:p-8 md:p-10 border border-border/40 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: paragraph.delay }}
              className="text-foreground/80 text-base md:text-lg leading-relaxed"
            >
              {paragraph.text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
