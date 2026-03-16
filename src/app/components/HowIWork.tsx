import { useLanguage } from '../hooks/useLanguage';

export function HowIWork() {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-wider text-neutral-500">
              {t('Metodología', 'Methodology')}
            </p>
            <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight">
              {t('Cómo trabajo', 'How I Work')}
            </h2>
          </div>

          <div className="space-y-8 text-lg text-neutral-700 leading-relaxed">
            <p>
              {t(
                'Mi enfoque se centra en comprender los objetivos del negocio, las necesidades de los usuarios y las limitaciones técnicas antes de diseñar soluciones.',
                'My approach focuses on understanding business goals, user needs and technical constraints before designing solutions.'
              )}
            </p>
            <p>
              {t(
                'Trabajo de forma iterativa, con comunicación clara y colaboración cercana con desarrolladores para asegurar que los diseños sean prácticos y realizables.',
                'I work iteratively, communicate clearly and collaborate closely with developers to ensure designs are practical and buildable.'
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
