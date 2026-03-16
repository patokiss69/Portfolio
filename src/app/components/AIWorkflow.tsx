import { Sparkles } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function AIWorkflow() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-8 lg:px-16 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[var(--bs-magenta,#D81B60)]/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-8 h-8 text-[var(--bs-magenta,#D81B60)]" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
                {t('IA y flujo de diseño moderno', 'AI & Modern Design Workflow')}
              </h2>
              <div className="space-y-4 text-xl lg:text-2xl text-neutral-600 leading-relaxed font-light">
                <p>
                  {t(
                    'Integro herramientas avanzadas de IA en el proceso de diseño para apoyar investigación, exploración de conceptos, generación de contenido y prototipado rápido.',
                    'I integrate advanced AI tools into the design process to support research, concept exploration, content generation and rapid prototyping.'
                  )}
                </p>
                <p>
                  {t(
                    'Esto permite entregas más rápidas manteniendo decisiones basadas en necesidades reales de los usuarios.',
                    'This enables faster turnaround while keeping design decisions grounded in real user needs.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
