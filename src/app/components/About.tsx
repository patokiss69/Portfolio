import { useLanguage } from '../hooks/useLanguage';
import { GraduationCap, Languages } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 px-8 lg:px-16 bg-neutral-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-wider text-neutral-500">
              {t('Sobre mí', 'About Me')}
            </p>
            <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight">
              {t('Sobre mí', 'About Me')}
            </h2>
          </div>

          <div className="space-y-8 text-lg text-neutral-700 leading-relaxed">
            <p>
              {t(
                'Soy un diseñador digital senior radicado en Argentina con más de dos décadas de experiencia en diseño web, UX/UI y de productos digitales.',
                "I'm a senior digital designer based in Argentina with over two decades of experience in web, UX/UI and product design."
              )}
            </p>
            <p>
              {t(
                'He trabajado con empresas, agencias y equipos multidisciplinarios en proyectos que van desde sitios corporativos hasta plataformas digitales complejas.',
                'I have worked with businesses, agencies and multidisciplinary teams on projects ranging from corporate websites to complex digital platforms.'
              )}
            </p>
            <p>
              {t(
                'Mi enfoque es crear soluciones claras, efectivas y centradas en el usuario que respondan a necesidades reales de negocio.',
                'I focus on creating clear, effective and user-centered solutions that support real business needs.'
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}