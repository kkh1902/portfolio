'use client';

import Navigation from '@/components/Navigation';
import AboutMe from '@/components/AboutMe';
import WhyChooseMe from '@/components/WhyChooseMe';
import Stacks from '@/components/Stacks';
import Projects from '@/components/Projects';
import Career from '@/components/Career';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 네비게이션 */}
      <Navigation />
      
      {/* 메인 섹션들 */}
      <AboutMe />
      <WhyChooseMe />
      <Stacks />
      <Projects />
      <Career />
      <Contact />
      
      {/* 푸터 */}
      <Footer />
    </main>
  );
}
