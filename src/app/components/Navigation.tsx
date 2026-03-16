import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Languages } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-neutral-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center text-lg font-bold hover:bg-neutral-800 transition-all"
          >
            PF
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('work')}
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {t('Proyectos', 'Projects')}
            </button>
            <button
              onClick={() => scrollToSection('available')}
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {t('Disponibilidad', 'Availability')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {t('Acerca', 'About')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-neutral-900 text-white text-sm rounded-full hover:bg-neutral-800 transition-colors"
            >
              {t('Contacto', 'Contact')}
            </button>
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-full hover:bg-neutral-100 transition-colors text-sm"
            >
              <Languages className="w-4 h-4" />
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}