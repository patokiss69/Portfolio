import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onViewWork: () => void;
  onContact: () => void;
}

export function Hero({ onViewWork, onContact }: HeroProps) {
  const { t } = useLanguage();

  const scrollToFeatured = () => {
    const element = document.getElementById('work');
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

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
                <p className="text-xl lg:text-2xl font-medium text-neutral-900">
                  Patricio Funes
                </p>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-none">
                  {t('UX/UI Lead & Diseñador de Producto', 'UX/UI Lead & Product Designer')}
                </h1>
                <p className="text-xl lg:text-2xl text-neutral-600 max-w-2xl leading-relaxed">
                  {t(
                    'Diseño experiencias digitales escalables, sistemas de diseño y workflows con IA para productos y plataformas digitales.',
                    'I design scalable digital experiences, design systems, and AI-driven workflows for digital products and platforms.'
                  )}
                </p>
                <p className="text-base text-neutral-500 max-w-xl leading-relaxed">
                  {t(
                    'Más de 20 años de experiencia evolucionando desde el diseño visual hacia el diseño de producto, enfocado en estructurar experiencias, simplificar procesos y crear soluciones consistentes y funcionales.',
                    '20+ years of experience evolving from visual design into product design, focused on structuring user experiences, simplifying workflows, and building consistent, functional solutions.'
                  )}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={scrollToFeatured}
                  className="px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all inline-flex items-center gap-2 group"
                >
                  {t('Ver caso destacado', 'View Featured Case')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={onViewWork}
                  className="px-8 py-4 border-2 border-neutral-900 text-neutral-900 rounded-full hover:bg-neutral-900 hover:text-white transition-all"
                >
                  {t('Ver proyectos', 'View Projects')}
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