import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function TrustSection() {
  const { t } = useLanguage();

  const strengths = [
    {
      en: '20+ years professional experience',
      es: 'Más de 20 años de experiencia profesional'
    },
    {
      en: 'Reliable delivery and fast turnaround',
      es: 'Entrega confiable y rápida'
    },
    {
      en: 'Remote collaboration with international teams',
      es: 'Experiencia trabajando remotamente con equipos internacionales'
    },
    {
      en: 'Strong UX, web and visual design skills',
      es: 'Sólidas habilidades en UX, diseño web y visual'
    },
    {
      en: 'Fluent Spanish — professional English',
      es: 'Español nativo — inglés profesional'
    }
  ];

  return (
    <section className="py-24 px-8 lg:px-16 bg-neutral-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-neutral-900 flex-shrink-0 mt-0.5" />
              <p className="text-base text-neutral-700 leading-relaxed">
                {t(strength.es, strength.en)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
