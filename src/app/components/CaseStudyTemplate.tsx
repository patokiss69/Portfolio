import { useLanguage } from '../hooks/useLanguage';
import { Target, UserCheck, Workflow, Lightbulb, CheckCircle, TrendingUp } from 'lucide-react';

interface CaseStudySection {
  titleEs: string;
  titleEn: string;
  icon: React.ComponentType<{ className?: string }>;
  contentEs: string;
  contentEn: string;
}

interface CaseStudyTemplateProps {
  projectTitle?: string;
  sections?: CaseStudySection[];
}

export function CaseStudyTemplate({ projectTitle, sections }: CaseStudyTemplateProps) {
  const { t } = useLanguage();

  const defaultSections: CaseStudySection[] = [
    {
      titleEs: 'Resumen',
      titleEn: 'Overview',
      icon: Target,
      contentEs: 'Descripción general del proyecto, objetivos y contexto.',
      contentEn: 'Project overview, objectives and context.'
    },
    {
      titleEs: 'Problema',
      titleEn: 'Problem',
      icon: Target,
      contentEs: 'Desafíos y problemática que se buscó resolver.',
      contentEn: 'Challenges and problems to be solved.'
    },
    {
      titleEs: 'Mi Rol',
      titleEn: 'Role',
      icon: UserCheck,
      contentEs: 'Responsabilidades y funciones dentro del proyecto.',
      contentEn: 'Responsibilities and functions within the project.'
    },
    {
      titleEs: 'Proceso',
      titleEn: 'Process',
      icon: Workflow,
      contentEs: 'Metodología y pasos seguidos durante el desarrollo.',
      contentEn: 'Methodology and steps followed during development.'
    },
    {
      titleEs: 'Decisiones de Diseño',
      titleEn: 'Design Decisions',
      icon: Lightbulb,
      contentEs: 'Fundamentos detrás de las decisiones de diseño principales.',
      contentEn: 'Rationale behind key design decisions.'
    },
    {
      titleEs: 'Solución',
      titleEn: 'Solution',
      icon: CheckCircle,
      contentEs: 'Implementación final y características principales.',
      contentEn: 'Final implementation and key features.'
    },
    {
      titleEs: 'Impacto',
      titleEn: 'Impact',
      icon: TrendingUp,
      contentEs: 'Resultados medibles y retroalimentación de usuarios.',
      contentEn: 'Measurable results and user feedback.'
    }
  ];

  const displaySections = sections || defaultSections;

  return (
    <section className="py-32 px-8 lg:px-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {projectTitle && (
          <div className="mb-16">
            <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
              {t('Caso de Estudio', 'Case Study')}
            </p>
            <h1 className="text-5xl lg:text-6xl font-medium tracking-tight">
              {projectTitle}
            </h1>
          </div>
        )}

        <div className="space-y-16">
          {displaySections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-neutral-900" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-medium mb-4">
                      {t(section.titleEs, section.titleEn)}
                    </h2>
                    <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
                      <p>{t(section.contentEs, section.contentEn)}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
