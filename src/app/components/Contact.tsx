import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight">
              {t('Contacto', 'Contact')}
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              {t(
                'Disponible para oportunidades remotas en todo el mundo.',
                'Open to remote opportunities worldwide.'
              )}
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <a
                href="mailto:patriciofunes@gmail.com"
                className="inline-flex items-center gap-3 text-2xl font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
                patriciofunes@gmail.com
              </a>
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