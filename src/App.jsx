import { Toaster } from 'sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import CTA from './components/CTA';
import Footer from './components/Footer';
import GuideSection from './components/GuideSection';
import AnimatedSection from './components/AnimatedSection';
import { Routes, Route } from 'react-router-dom';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <div className='min-h-screen flex flex-col'>
            <Toaster />
            <Header />
            <Hero />
            <CTA />
            <AnimatedSection />
            <GuideSection />
            <Footer />
          </div>
        }
      />
      <Route path='/impressum' element={<Impressum />} />
      <Route path='/datenschutz' element={<Datenschutz />} />
    </Routes>
  );
}

export default App;
