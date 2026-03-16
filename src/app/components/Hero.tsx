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
                <p className="text-sm uppercase tracking-wider text-neutral-500">
                  {t('Diseñador Senior UX/UI & Web', 'Senior UX/UI & Web Designer')}
                </p>
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-none">
                  Patricio Funes
                </h1>
                <p className="text-xl lg:text-2xl text-neutral-600 max-w-2xl leading-relaxed">
                  {t(
                    'Más de 20 años diseñando sitios web, productos digitales y experiencias de usuario para empresas de todo el mundo.',
                    '20+ years of experience designing effective websites, digital products and user experiences for businesses worldwide.'
                  )}
                </p>
              </div>

              <div className="space-y-6 max-w-2xl">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {t(
                    'Disponible para trabajo remoto por contrato o freelance — desde landing pages hasta plataformas complejas.',
                    'Available for remote contract and freelance work — from landing pages to complex platforms.'
                  )}
                </p>
                <p className="text-sm text-neutral-500">
                  {t(
                    'Basado en Argentina — trabajo con clientes de todo el mundo',
                    'Based in Argentina — working globally'
                  )}
                </p>
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