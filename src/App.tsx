import { useState, useEffect } from 'react'; 
import { ThemeProvider } from './components/ThemeProvider'; 
import { Navigation } from './components/Navigation'; 
import { Hero } from './components/Hero'; 
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Impact } from './components/Impact';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Blog } from './components/Blog';


function AppContent() {
  const [activeSection, setActiveSection] = useState('home');
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'impact', 'testimonials',  'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects onOpenCaseStudy={() => setShowCaseStudy(true)} />
      <Impact />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <CaseStudyModal isOpen={showCaseStudy} onClose={() => setShowCaseStudy(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
