import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import MultiStepForm from '@/components/MultiStepForm/MultiStepForm';
import { Button } from './ui/button';
import { useState } from 'react';

const guides = [
  {
    name: 'Abul Baraa',
    shortName: 'AB',
    image: '/guide1.webp',
    description:
      'Abul Baraa ist ein erfahrener Reiseführer mit umfassendem Wissen über historische und spirituelle Stätten. Er hat zahlreiche Pilgerreisen geleitet und ist bekannt für seine engagierte und persönliche Betreuung.',
  },
  {
    name: 'Abu Hamza',
    shortName: 'AH',
    image: '/guide2.jpeg',
    description:
      'Abu Hamza ist ein erfahrener Reiseführer mit umfassendem Wissen über historische und spirituelle Stätten. Er hat zahlreiche Pilgerreisen geleitet und ist bekannt für seine engagierte und persönliche Betreuung.',
  },
];

const GuideSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState(guides[0]);

  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto space-y-12'>
          {guides.map((guide) => (
            <div
              key={guide.shortName}
              className='bg-[#F5F5F0] rounded-3xl p-8 md:p-12'
            >
              <div className='flex flex-col md:flex-row items-center gap-12'>
                {/* Bild */}
                <div className='w-full md:w-1/3'>
                  <div className='aspect-[3/4] w-[280px] mx-auto rounded-2xl overflow-hidden'>
                    <img
                      src={guide.image}
                      alt={`Reiseführer ${guide.name}`}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className='w-full md:w-2/3 space-y-6'>
                  <h2 className='text-4xl md:text-5xl font-bold'>
                    {guide.name}
                  </h2>
                  <h3 className='text-xl md:text-2xl text-gray-700'>
                    Reiseführer für Hadsch und Umra Reisen
                  </h3>
                  <p className='text-gray-600 text-lg leading-relaxed'>
                    {guide.description}
                  </p>
                  <div className='pt-4'>
                    <Dialog
                      open={open && selectedGuide.name === guide.name}
                      onOpenChange={(isOpen) => {
                        setOpen(isOpen);
                        if (isOpen) setSelectedGuide(guide);
                      }}
                    >
                      <DialogTrigger asChild>
                        <Button className='bg-[#C6A866] hover:bg-[#B69856] text-white px-8 py-6 rounded-full text-lg'>
                          Jetzt Anmelden
                        </Button>
                      </DialogTrigger>
                      <DialogContent className='sm:max-w-[900px] w-full h-[90vh] sm:h-[80vh] p-0 overflow-hidden'>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
