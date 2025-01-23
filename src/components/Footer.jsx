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
              <li>Email: info@bakkah-reisen.de</li>
              <li>Tel: +49 123 456 789</li>
              <li>Adresse: Musterstraße 123, 12345 Stadt</li>
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
