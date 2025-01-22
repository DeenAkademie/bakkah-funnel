import Header from './components/Header';
import Hero from './components/Hero';
import CTA from './components/CTA';
import AnimatedSection from './components/AnimatedSection';
import Footer from './components/Footer';
import GuideSection from './components/GuideSection';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main>
        <Toaster position='top-center' richColors />
        <Hero />
        <CTA />
        <AnimatedSection />
        <GuideSection /> {/* Neue Section hier */}
        <section id='about' className='py-20'>
          {/* Über uns Inhalt */}
        </section>
        <section id='contact' className='py-20'>
          {/* Kontakt Inhalt */}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
