import { useLanguage } from '../hooks/useLanguage';

export function CaseStudy() {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-8 lg:px-16 bg-neutral-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="space-y-24">
          {/* Header */}
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-wider text-neutral-500">
              {t('Plantilla de Caso de Estudio', 'Case Study Template')}
            </p>
            <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight">
              {t('Análisis Profundo de Proyecto', 'Project Deep Dive')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl">
              {t(
                'Cada proyecto sigue un enfoque estructurado desde la identificación del problema hasta el impacto medible, asegurando soluciones de diseño centradas en el usuario.',
                'Each project follows a structured approach from problem identification to measurable impact, ensuring user-centered design solutions.'
              )}
            </p>
          </div>

          {/* Case Study Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-white text-xl font-medium">
                1
              </div>
              <h3 className="text-3xl font-medium">{t('Problema', 'Problem')}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {t(
                  'Identificación clara de los puntos de dolor del usuario, desafíos del negocio y oportunidades de mejora a través de investigación y entrevistas con stakeholders.',
                  'Clear identification of user pain points, business challenges, and opportunities for improvement through research and stakeholder interviews.'
                )}
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-white text-xl font-medium">
                2
              </div>
              <h3 className="text-3xl font-medium">{t('Rol', 'Role')}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {t(
                  'Definición de responsabilidades incluyendo investigación UX, diseño UI, prototipado, pruebas de usuario y colaboración con equipos de desarrollo.',
                  'Definition of responsibilities including UX research, UI design, prototyping, user testing, and collaboration with development teams.'
                )}
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-white text-xl font-medium">
                3
              </div>
              <h3 className="text-3xl font-medium">{t('Proceso', 'Process')}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {t(
                  'Proceso de diseño integral desde investigación y wireframing hasta prototipado, iteraciones de pruebas e implementación final.',
                  'Comprehensive design process from research and wireframing to prototyping, testing iterations, and final implementation.'
                )}
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-white text-xl font-medium">
                4
              </div>
              <h3 className="text-3xl font-medium">{t('Decisiones de Diseño', 'Design Decisions')}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {t(
                  'Decisiones clave de UX y UI respaldadas por investigación de usuarios, principios de usabilidad y pensamiento estratégico para resolver necesidades específicas de usuario y negocio.',
                  'Key UX and UI decisions backed by user research, usability principles, and strategic thinking to solve specific user and business needs.'
                )}
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-white text-xl font-medium">
                5
              </div>
              <h3 className="text-3xl font-medium">{t('Solución', 'Solution')}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {t(
                  'Producto final mostrando el diseño implementado, componentes de interfaz y mejoras en la experiencia de usuario.',
                  'Final product showcasing the implemented design, interface components, and user experience improvements.'
                )}
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-white text-xl font-medium">
                6
              </div>
              <h3 className="text-3xl font-medium">{t('Impacto', 'Impact')}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {t(
                  'Resultados medibles incluyendo mejora en la satisfacción del usuario, aumento en tasas de conversión, reducción de solicitudes de soporte y crecimiento del negocio.',
                  'Measurable results including improved user satisfaction, increased conversion rates, reduced support requests, and business growth.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}