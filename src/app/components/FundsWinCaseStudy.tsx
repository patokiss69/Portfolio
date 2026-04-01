import { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface FundsWinCaseStudyProps {
  onClose: () => void;
}

const SECTIONS = [
  {
    id: 'overview',
    labelEs: 'Overview',
    labelEn: 'Overview',
    titleEs: 'Overview',
    titleEn: 'Overview',
    contentEs:
      'FundsWin es un ecosistema digital enfocado en soluciones de financiamiento público, compuesto por múltiples herramientas que deben funcionar como una plataforma unificada.',
    contentEn:
      'FundsWin is a digital ecosystem focused on public funding solutions, composed of multiple tools that need to work as a unified platform.',
  },
  {
    id: 'context',
    labelEs: 'Contexto',
    labelEn: 'Context',
    titleEs: 'Contexto',
    titleEn: 'Context',
    contentEs:
      'La plataforma requería una experiencia de usuario consistente entre distintas herramientas, cada una con su propia funcionalidad, manteniendo al mismo tiempo una estructura e interacción unificada.',
    contentEn:
      'The platform required a consistent user experience across different tools, each with its own functionality, while maintaining a unified structure and interaction model.',
  },
  {
    id: 'problem',
    labelEs: 'Problema',
    labelEn: 'Problem',
    titleEs: 'Problema',
    titleEn: 'Problem',
    contentEs:
      'Sin una UX unificada y un sistema de diseño, la plataforma corría el riesgo de volverse inconsistente, difícil de escalar y compleja de usar, especialmente al incorporar nuevas herramientas y funcionalidades.',
    contentEn:
      'Without a unified UX and design system, the platform risked becoming inconsistent, difficult to scale, and complex to use, especially as new tools and features were added.',
  },
  {
    id: 'role',
    labelEs: 'Rol',
    labelEn: 'Role',
    titleEs: 'Rol',
    titleEn: 'Role',
    contentEs:
      'Trabajé como único diseñador UX/UI, responsable de definir la experiencia de usuario, la estructura de interfaces y el sistema de diseño en toda la plataforma.',
    contentEn:
      'I worked as the sole UX/UI designer, responsible for defining the user experience, interface structure, and design system across the entire platform.',
  },
];

const APPROACH_ITEMS_ES = [
  'Estructurar flujos de usuario entre herramientas',
  'Definir patrones de interacción consistentes',
  'Crear componentes reutilizables',
  'Asegurar la escalabilidad de la interfaz',
];

const APPROACH_ITEMS_EN = [
  'Structuring user flows across tools',
  'Defining consistent interaction patterns',
  'Creating reusable components',
  'Ensuring scalability of the interface',
];

export function FundsWinCaseStudy({ onClose }: FundsWinCaseStudyProps) {
  const { t, language } = useLanguage();

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              ← {t('Volver', 'Back')}
            </button>
            <span className="text-neutral-200">|</span>
            <span className="text-sm font-medium text-neutral-900">FundsWin</span>
          </div>
          <button
            onClick={onClose}
            aria-label={t('Cerrar', 'Close')}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5 text-neutral-700" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[860px] mx-auto px-8 lg:px-0 py-20 space-y-24">

        {/* Hero */}
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-neutral-400">
            {t('Caso de estudio', 'Case Study')}
          </p>
          <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            FundsWin
          </h1>
          <p className="text-xl text-neutral-500 leading-relaxed max-w-xl">
            {t(
              'Diseño de producto, sistemas y flujos para una plataforma de financiamiento público.',
              'Product design, systems, and flows for a public funding platform.'
            )}
          </p>

          {/* Meta strip */}
          <div className="flex flex-wrap gap-x-12 gap-y-4 pt-4 border-t border-neutral-100">
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-400 mb-1">{t('Rol', 'Role')}</p>
              <p className="text-sm font-medium text-neutral-800">
                {t('UX/UI Lead — Diseñador único', 'UX/UI Lead — Sole designer')}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-400 mb-1">{t('Área', 'Area')}</p>
              <p className="text-sm font-medium text-neutral-800">
                {t('Product Design · Design System · UX', 'Product Design · Design System · UX')}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-400 mb-1">{t('Plataforma', 'Platform')}</p>
              <a
                href="https://fundswin.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-800 inline-flex items-center gap-1 hover:text-neutral-500 transition-colors"
              >
                fundswin.ai <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Sections: Overview, Context, Problem, Role */}
        {SECTIONS.map((section) => (
          <div key={section.id} className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              {t(section.labelEs, section.labelEn)}
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">
              {t(section.titleEs, section.titleEn)}
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed max-w-prose">
              {t(section.contentEs, section.contentEn)}
            </p>
          </div>
        ))}

        {/* Approach */}
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              {t('Enfoque', 'Approach')}
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">
              {t('Enfoque', 'Approach')}
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed max-w-prose">
              {t(
                'Abordé el proyecto desde una perspectiva sistémica, enfocándome en:',
                'I approached the project from a system-level perspective, focusing on:'
              )}
            </p>
          </div>
          <ul className="space-y-3">
            {(language === 'es' ? APPROACH_ITEMS_ES : APPROACH_ITEMS_EN).map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-neutral-700">
                <span className="mt-2 w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            {t('Solución', 'Solution')}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            {t('Solución', 'Solution')}
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed max-w-prose">
            {t(
              'La solución consistió en diseñar un sistema de diseño unificado, estandarizar comportamientos de interfaz y simplificar flujos complejos para mejorar la usabilidad y consistencia en toda la plataforma.',
              'The solution involved designing a unified design system, standardizing interface behaviors, and simplifying complex workflows to improve usability and consistency across the platform.'
            )}
          </p>
        </div>

        {/* Impact */}
        <div className="space-y-4 pb-4 border-b border-neutral-100">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            {t('Impacto', 'Impact')}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            {t('Impacto', 'Impact')}
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed max-w-prose">
            {t(
              'Este enfoque mejoró la consistencia entre herramientas, permitió escalar la plataforma de forma ordenada y optimizó los procesos internos y la experiencia de usuario.',
              'This approach improved consistency across tools, enabled scalable growth of the platform, and optimized internal workflows and user experience.'
            )}
          </p>
        </div>

        {/* Footer CTA */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <button
            onClick={onClose}
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            ← {t('Volver al portfolio', 'Back to portfolio')}
          </button>
          <a
            href="https://fundswin.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors"
          >
            {t('Ver plataforma', 'Visit platform')}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
