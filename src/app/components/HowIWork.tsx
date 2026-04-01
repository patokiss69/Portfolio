import { useLanguage } from '../hooks/useLanguage';

const ITEMS_ES = [
  'UX/UI para productos digitales con foco en claridad y usabilidad',
  'Sistemas de diseño y componentes reutilizables para consistencia y escala',
  'Definición de flujos de usuario y estructura de interfaces en escenarios complejos',
  'Colaboración cercana con equipos de desarrollo para asegurar calidad en la implementación',
  'Integración de herramientas de IA para mejorar procesos y eficiencia de diseño',
];

const ITEMS_EN = [
  'UX/UI for digital products, focused on clarity and usability',
  'Design systems and reusable components for consistency and scale',
  'User flow definition and interface structure for complex scenarios',
  'Close collaboration with development teams to ensure implementation quality',
  'Integration of AI tools to enhance design processes and efficiency',
];

export function HowIWork() {
  const { t, language } = useLanguage();

  const items = language === 'es' ? ITEMS_ES : ITEMS_EN;

  return (
    <section className="py-32 px-8 lg:px-16 bg-neutral-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mx-auto space-y-12">

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-neutral-400">
              {t('Metodología', 'Methodology')}
            </p>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
              {t('Cómo trabajo', 'How I Work')}
            </h2>
            <p className="text-base lg:text-lg text-neutral-500 leading-relaxed max-w-2xl pt-2">
              {t(
                'Mi enfoque se basa en estructura, claridad y escalabilidad, combinando diseño UX/UI con pensamiento sistémico y workflows potenciados por IA.',
                'My approach focuses on structure, clarity, and scalability, combining UX/UI design with system thinking and AI-enhanced workflows.'
              )}
            </p>
          </div>

          <ul className="space-y-5">
            {items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 text-base text-neutral-700 leading-relaxed"
              >
                <span className="mt-2 w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
