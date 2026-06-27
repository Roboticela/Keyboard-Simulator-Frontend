'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const Stats = dynamic(() => import('@/components/Stats'));
const Features = dynamic(() => import('@/components/Features'));
const Story = dynamic(() => import('@/components/Story'));
const HowItWorks = dynamic(() => import('@/components/HowItWorks'));
const Demo = dynamic(() => import('@/components/Demo'));
const Games = dynamic(() => import('@/components/Games'));
const UseCases = dynamic(() => import('@/components/UseCases'));
const Downloads = dynamic(() => import('@/components/Downloads'));
const WhyChoose = dynamic(() => import('@/components/WhyChoose'));
const Platforms = dynamic(() => import('@/components/Platforms'));
const TechnologyStack = dynamic(() => import('@/components/TechnologyStack'));
const Comparison = dynamic(() => import('@/components/Comparison'));
const SystemRequirements = dynamic(() => import('@/components/SystemRequirements'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const About = dynamic(() => import('@/components/About'));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300 overflow-x-hidden w-full max-w-full">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <Features />
        <Story />
        <HowItWorks />
        <Demo />
        <Games />
        <UseCases />
        <Downloads />
        <WhyChoose />
        <Platforms />
        <TechnologyStack />
        <Comparison />
        <SystemRequirements />
        <FAQ />
        <About />
      </main>
      <Footer />
    </div>
  );
}
