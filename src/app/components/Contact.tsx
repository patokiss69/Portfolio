import { Mail, Linkedin, ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mx-auto space-y-16">

          {/* Closing statement */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              {t(
                'Construyamos mejores experiencias digitales.',
                "Let's build better digital experiences."
              )}
            </h2>
            <p className="text-base lg:text-lg text-neutral-500 leading-relaxed max-w-xl">
              {t(
                'Disponible para UX/UI, diseño de producto, sistemas de diseño y workflows digitales con IA.',
                "I'm available for UX/UI, product design, design systems, and AI-enhanced digital workflows."
              )}
            </p>
          </div>

          {/* Primary CTA */}
          <div className="space-y-8">
            <a
              href="mailto:patokiss2007@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all group text-base font-medium"
            >
              {t('Contactar', 'Get in Touch')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="mailto:patokiss2007@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                <Mail className="w-4 h-4" />
                patokiss2007@gmail.com
              </a>
            </div>

            <p className="text-xs text-neutral-400">
              {t(
                'Responde habitualmente dentro de 24–48 horas.',
                'Typically responds within 24–48 hours.'
              )}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all"
              aria-label="Behance"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}