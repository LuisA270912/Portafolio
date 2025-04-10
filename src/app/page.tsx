import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Education from '@/components/Education/Education';
import Experience from '@/components/Experience/Experience';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
