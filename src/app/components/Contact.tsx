import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-7xl font-semibold tracking-tight">
              {t('Hablemos de tu proyecto', 'Let’s talk about your project')}
            </h2>
            <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              {t(
                'Si necesitas un diseñador confiable para proyectos web, UX o digitales, no dudes en contactarme.',
                'If you need a reliable designer for web, UX or digital work, feel free to reach out.'
              )}
            </p>
          </div>

          <div className="space-y-12 pt-8">
            <div className="inline-block">
              <a
                href="mailto:patokiss2007@gmail.com"
                className="group relative inline-flex items-center gap-4 text-3xl lg:text-5xl font-medium text-neutral-900 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--bs-naranja,#FF6400)]/10 text-[var(--bs-naranja,#FF6400)] flex items-center justify-center group-hover:bg-[var(--bs-naranja,#FF6400)] group-hover:text-white transition-colors duration-300">
                   <Mail className="w-8 h-8" />
                </div>
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[var(--bs-naranja,#FF6400)] after:transition-transform after:duration-300 group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
                  patokiss2007@gmail.com
                </span>
              </a>
              <p className="mt-6 text-sm text-neutral-500 font-medium">
                {t(
                  'Responde habitualmente dentro de 24–48 horas',
                  'Typically responds within 24–48 hours'
                )}
              </p>
            </div>

            <div className="flex items-center justify-center gap-6 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-neutral-900 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-neutral-900 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}