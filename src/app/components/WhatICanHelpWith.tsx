import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function WhatICanHelpWith() {
  const { t, language } = useLanguage();

  const servicesEs = [
    'Diseño o rediseño de sitios web',
    'Landing pages orientadas a conversión',
    'Flujos de diseño asistidos por IA para entregas más rápidas',
    'Diseño UX/UI para aplicaciones web',
    'Modernización de interfaces desactualizadas',
    'Soporte de diseño para equipos de desarrollo',
    'Trabajo freelance o por contrato continuo',
    'Mejora de usabilidad y claridad',
    'Creación de presencia digital profesional'
  ];

  const servicesEn = [
    'Website design or redesign',
    'Landing pages focused on conversion',
    'AI-assisted design workflows for faster delivery',
    'UX/UI design for web applications',
    'Modernization of outdated interfaces',
    'Design support for development teams',
    'Ongoing freelance or contract design work',
    'Improving usability and clarity',
    'Creating professional digital presence'
  ];

  const services = language === 'es' ? servicesEs : servicesEn;

  return (
    <section className="py-24 px-8 lg:px-16 bg-neutral-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
              {t('En qué puedo ayudarte', 'What I Can Help With')}
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed max-w-lg">
              {t(
                'Ayudo a empresas a resolver desafíos reales de diseño digital, desde mejoras puntuales hasta proyectos completos.',
                'I help businesses solve practical digital design challenges, from quick improvements to full projects.'
              )}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[var(--bs-magenta,#D81B60)] shrink-0 mt-0.5" />
                  <span className="text-lg text-neutral-800 leading-tight pt-0.5">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
