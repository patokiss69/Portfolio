import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface AvailableForWorkProps {
  onContact: () => void;
}

export function AvailableForWork({ onContact }: AvailableForWorkProps) {
  const { t } = useLanguage();

  const services = [
    {
      en: 'Website design and redesign',
      es: 'Diseño o rediseño de sitios web'
    },
    {
      en: 'Landing pages and conversion-focused pages',
      es: 'Landing pages orientadas a conversión'
    },
    {
      en: 'UX/UI design for web applications',
      es: 'Diseño UX/UI para aplicaciones web'
    },
    {
      en: 'Product interfaces',
      es: 'Interfaces de producto'
    },
    {
      en: 'Design support for development teams',
      es: 'Soporte de diseño para equipos de desarrollo'
    },
    {
      en: 'Ongoing design work',
      es: 'Trabajo de diseño continuo'
    }
  ];

  return (
    <section id="available" className="py-32 px-8 lg:px-16 bg-neutral-900 text-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight">
              {t('Disponible para trabajo remoto', 'Available for Remote Work')}
            </h2>
            <p className="text-xl text-neutral-300 leading-relaxed">
              {t(
                'Actualmente disponible para proyectos remotos en todo el mundo.',
                'Currently available for remote projects worldwide.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            <div className="md:col-span-2 mb-4">
              <p className="text-lg font-medium text-neutral-200">
                {t('Puedo ayudar con:', 'I can help with:')}
              </p>
            </div>
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0"></div>
                <p className="text-base text-neutral-300">
                  {t(service.es, service.en)}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <button
              onClick={onContact}
              className="px-8 py-4 bg-white text-neutral-900 rounded-full hover:bg-neutral-100 transition-all inline-flex items-center gap-2 group"
            >
              {t('Hablemos de tu proyecto', "Let's discuss your project")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
