import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import MultiStepForm from '@/components/MultiStepForm/MultiStepForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className='fixed w-full top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0 cursor-pointer'>
            <img
              src='/bakkah-logo.svg'
              alt='Hadsch & Umra Logo'
              className='h-8 w-auto'
            />
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center justify-center space-x-8'>
            <button
              onClick={() => scrollToSection('about')}
              className='text-foreground/60 hover:text-foreground transition-colors'
            >
              Über uns
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className='text-foreground/60 hover:text-foreground transition-colors'
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className='text-foreground/60 hover:text-foreground transition-colors'
            >
              Kontakt
            </button>
          </nav>

          {/* CTA Button */}
          <div className='hidden md:block'>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className='bg-[#C6A866] hover:bg-[#B69856] text-white px-8 py-6 rounded-full text-lg'>
                  Jetzt Anmelden
                </Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[900px] w-full min-h-screen sm:min-h-[80vh] p-0'>
                <div className='h-full flex flex-col'>
                  <DialogHeader className='px-6 pt-6 sm:px-8 sm:pt-8'>
                    <DialogTitle className='text-2xl sm:text-3xl font-bold'>
                      Anmeldeformular
                    </DialogTitle>
                  </DialogHeader>
                  <div className='flex-1 overflow-y-auto px-6 py-4 sm:px-8'>
                    <MultiStepForm onClose={() => setOpen(false)} />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-2 rounded-md hover:bg-accent'
          >
            {isMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <button
              onClick={() => scrollToSection('about')}
              className='block w-full text-left px-3 py-2 rounded-md text-base hover:bg-accent'
            >
              Über uns
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className='block w-full text-left px-3 py-2 rounded-md text-base hover:bg-accent'
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className='block w-full text-left px-3 py-2 rounded-md text-base hover:bg-accent'
            >
              Kontakt
            </button>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className='w-full mt-4 bg-[#C6A866] hover:bg-[#B69856]'>
                  Jetzt Anmelden
                </Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[900px] w-full min-h-screen sm:min-h-[80vh] p-0'>
                <div className='h-full flex flex-col'>
                  <DialogHeader className='px-6 pt-6 sm:px-8 sm:pt-8'>
                    <DialogTitle className='text-2xl sm:text-3xl font-bold'>
                      Anmeldeformular
                    </DialogTitle>
                  </DialogHeader>
                  <div className='flex-1 overflow-y-auto px-6 py-4 sm:px-8'>
                    <MultiStepForm onClose={() => setOpen(false)} />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
