import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onViewWork: () => void;
  onContact: () => void;
}

export function Hero({ onViewWork, onContact }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 px-8 lg:px-16"
    >
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-wider text-neutral-500 font-medium">
                  {t('Diseñador Senior UX/UI & Web', 'Senior UX/UI & Web Designer')}
                </p>
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-none">
                  Patricio Funes
                </h1>
                <p className="text-xl lg:text-2xl text-neutral-600 max-w-2xl leading-relaxed">
                  {t(
                    'Ayudo a empresas a diseñar sitios web, productos digitales y experiencias de usuario efectivas para el mundo real.',
                    'Helping businesses design effective websites, digital products and user experiences that work in the real world.'
                  )}
                </p>
                <p className="text-sm lg:text-base text-neutral-500 max-w-xl leading-relaxed font-medium">
                  {t(
                    'Uso herramientas de IA para acelerar diseño, investigación y producción manteniendo resultados de alta calidad centrados en el usuario.',
                    'Leveraging AI tools to accelerate design, research and production while maintaining high-quality human-centered results.'
                  )}
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100/80 rounded-full text-sm font-medium text-neutral-700">
                  <span className="w-2 h-2 rounded-full bg-[var(--bs-success,#16a34a)] animate-pulse shadow-[0_0_8px_var(--bs-success,#16a34a)]"></span>
                  <span>
                    {t(
                      'Actualmente disponible para proyectos remotos en todo el mundo.',
                      'Currently available for remote projects worldwide.'
                    )}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={onViewWork}
                  className="px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all inline-flex items-center gap-2 group"
                >
                  {t('Ver proyectos', 'View Projects')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={onContact}
                  className="px-8 py-4 border-2 border-neutral-900 text-neutral-900 rounded-full hover:bg-neutral-900 hover:text-white transition-all"
                >
                  {t('Contactar', 'Contact Me')}
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 p-4">
              <ImageWithFallback
                src="https://ezink.com/muestra/pf/pato.jpg"
                alt="Patricio Funes"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}