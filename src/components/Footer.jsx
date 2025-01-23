const Footer = () => {
  return (
    <footer id='about' className='bg-[#F5F5F0] py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Logo & Beschreibung */}
          <div className='col-span-1 md:col-span-2 space-y-4'>
            <div className='flex-shrink-0 cursor-pointer'>
              <img
                src='/bakkah-logo.svg'
                alt='Hadsch & Umra Logo'
                className='h-8 w-auto'
              />
            </div>
            <p className='text-gray-600 max-w-md'>
              Ihr vertrauenswürdiger Partner für Hadsch und Umra Reisen. Wir
              begleiten Sie auf Ihrer spirituellen Reise.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#services'
                  className='text-gray-600 hover:text-primary'
                >
                  Über uns
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='text-gray-600 hover:text-primary'
                >
                  Leistungen
                </a>
              </li>
              <li>
                <a href='#about' className='text-gray-600 hover:text-primary'>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Kontakt</h4>
            <ul className='space-y-2 text-gray-600'>
              <li>
                Email:{' '}
                <a
                  href='mailto:info@bakkah-reisen.de'
                  className='font-bold hover:text-[#C6A866] transition-colors'
                >
                  info@bakkah-reisen.de
                </a>
              </li>
              <li>
                Tel:{' '}
                <a
                  href='tel:+491632087738'
                  className='font-bold hover:text-[#C6A866] transition-colors'
                >
                  +49 163 208 7738
                </a>
              </li>
              <li>
                Folge uns auf:{' '}
                <a
                  href='https://www.instagram.com/bakkah_reisen_official/'
                  className='font-bold hover:text-[#C6A866] transition-colors'
                >
                  bakkah_reisen_official
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-16 pt-8 border-t border-gray-200'>
          <p className='text-center text-gray-600'>
            © {new Date().getFullYear()} Bakkah Reisen. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
