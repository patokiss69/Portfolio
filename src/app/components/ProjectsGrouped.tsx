import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../hooks/useLanguage';
import { ExternalLink } from 'lucide-react';

interface ProjectsGroupedProps {
  onOpenCaseStudy: () => void;
}

export function ProjectsGrouped({ onOpenCaseStudy }: ProjectsGroupedProps) {
  const { t, language } = useLanguage();

  const highlightProject = {
    url: 'https://fundswin.ai',
    imageUrl: '/Portfolio/assets/fundswin-mockup.jpg',
    sectionTitleEs: 'Caso destacado — FundsWin',
    sectionTitleEn: 'Featured Case — FundsWin',
    contextEs: 'Plataforma de soluciones digitales enfocadas en financiamiento público.',
    contextEn: 'Digital ecosystem focused on public funding solutions.',
    roleEs: 'Único diseñador UX/UI responsable del diseño completo del producto.',
    roleEn: 'Sole UX/UI designer responsible for the full product design.',
    workEs: [
      'Definición de flujos de usuario',
      'Diseño de interfaces',
      'Creación de sistema de diseño',
      'Estructuración de múltiples herramientas',
    ],
    workEn: [
      'User flows definition',
      'Interface design',
      'Design system creation',
      'Multi-tool structure',
    ],
    impactEs: [
      'Mejora en consistencia del producto',
      'Escalabilidad del sistema',
      'Optimización de procesos y experiencia de usuario',
    ],
    impactEn: [
      'Improved product consistency',
      'System scalability',
      'Better workflows and usability',
    ],
  };

  const digitalProducts: any[] = [];

  const websites = [
    {
      title: 'PEMF Camati',
      description: t(
        'Comuniqué tecnología médica compleja de forma accesible para profesionales de salud y pacientes potenciales.',
        'Communicated complex medical technology in a clear and accessible way for healthcare professionals and potential patients.'
      ),
      type: t('Diseño Web', 'Web Design'),
      skills: 'UX/UI, Content Structure, Responsive Design',
      contributions: t(
        'Jerarquía de contenido clara · Navegación simplificada · Diseño responsive',
        'Clear content hierarchy · Simplified navigation · Responsive design'
      ),
      imageUrl: 'https://ezink.com/muestra/pf/pemf.jpg',
      url: 'https://pemfcamati.com/'
    },
    {
      title: 'Santo Tomé al Día',
      description: t(
        'Mejoré la experiencia de lectura y navegación de contenidos para un portal con alta frecuencia de actualización.',
        'Improved reading experience and content navigation for a high-frequency news platform.'
      ),
      type: t('Diseño Web', 'Web Design'),
      skills: 'UX/UI, Content Design, Performance',
      contributions: t(
        'Arquitectura de contenido escalable · Tipografía legible · Carga optimizada',
        'Scalable content architecture · Readable typography · Optimized loading performance'
      ),
      imageUrl: 'https://ezink.com/muestra/pf/stmald.jpg',
      url: 'https://santotomealdia.com.ar/'
    },
    {
      title: t('Jardín Margarita Pautasso', 'Jardín Margarita Pautasso'),
      description: t(
        'Facilité la comunicación entre la institución educativa y las familias con una estructura clara y navegación intuitiva.',
        'Structured communication between the educational institution and families through clear information architecture and intuitive navigation.'
      ),
      type: t('Diseño Web', 'Web Design'),
      skills: 'UX/UI, Responsive Design, Accessibility',
      contributions: t(
        'Organización de información educativa · Accesibilidad mejorada · Diseño mobile-first',
        'Educational content organization · Improved accessibility · Mobile-first design'
      ),
      imageUrl: 'https://ezink.com/muestra/pf/pautasso.jpg',
      url: 'https://jardinmargaritaadepautasso.com.ar/'
    },
    {
      title: 'Grupo Delta Seguridad',
      description: t(
        'Transmití confianza y profesionalismo para empresa de seguridad mediante presentación clara de servicios y credenciales.',
        'Designed a website to convey trust and professionalism through clear presentation of services and credentials.'
      ),
      type: t('Diseño Web', 'Web Design'),
      skills: 'UX/UI, Corporate Design, Conversion',
      contributions: t(
        'Arquitectura de servicios clara · Jerarquía visual profesional · Llamadas a acción efectivas',
        'Clear service architecture · Professional visual hierarchy · Effective call-to-actions'
      ),
      imageUrl: 'https://ezink.com/muestra/pf/delta.jpg',
      url: 'https://grupodelta.com.ar/'
    },
    {
      title: 'Genacol',
      description: t(
        'Diseñé landing page enfocada en conversión con presentación clara del producto y beneficios clave.',
        'Designed a conversion-focused landing page with clear product presentation and key benefit communication.'
      ),
      type: t('Landing Page', 'Landing Page'),
      skills: 'Landing Page Design, Conversion Design, Visual Hierarchy',
      contributions: t(
        'Flujo de conversión optimizado · Jerarquía visual clara · Diseño persuasivo',
        'Optimized conversion flow · Clear visual hierarchy · Persuasive design'
      ),
      imageUrl: 'https://ezink.com/muestra/pf/genacol.jpg'
    },
    {
      title: 'GPS Turismo',
      description: t(
        'Estructuré información de destinos y servicios turísticos para facilitar la toma de decisiones de viajeros.',
        'Structured travel information and services to support user decision-making through clear organization and navigation.'
      ),
      type: t('Diseño Web', 'Web Design'),
      skills: 'UX/UI, Information Architecture, Responsive Design',
      contributions: t(
        'Organización de ofertas turísticas · Búsqueda simplificada · Diseño responsive',
        'Organization of tourism offerings · Simplified navigation · Responsive design'
      ),
      imageUrl: 'https://ezink.com/muestra/pf/gps.jpg',
      url: 'https://gpsturismo.com.ar/'
    }
  ];

  return (
    <section id="work" className="py-32 px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto space-y-24">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight">
            {t('Proyectos seleccionados', 'Selected Projects')}
          </h2>
        </div>

        {/* Featured Case — FundsWin */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-12 lg:p-16 flex flex-col justify-center text-white space-y-8">

              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-semibold leading-tight">
                  {t(highlightProject.sectionTitleEs, highlightProject.sectionTitleEn)}
                </h3>

                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-wider text-neutral-400">{t('Contexto', 'Context')}</p>
                  <p className="text-base text-neutral-300">
                    {t(highlightProject.contextEs, highlightProject.contextEn)}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-wider text-neutral-400">{t('Rol', 'Role')}</p>
                  <p className="text-base text-neutral-300">
                    {t(highlightProject.roleEs, highlightProject.roleEn)}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <p className="text-sm uppercase tracking-wider text-neutral-400">{t('Trabajo', 'Work')}</p>
                  <ul className="space-y-2">
                    {(language === 'es' ? highlightProject.workEs : highlightProject.workEn).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-neutral-300 text-base">
                        <span className="mt-2 w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <p className="text-sm uppercase tracking-wider text-neutral-400">{t('Impacto', 'Impact')}</p>
                  <ul className="space-y-2">
                    {(language === 'es' ? highlightProject.impactEs : highlightProject.impactEn).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-neutral-300 text-base">
                        <span className="mt-2 w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={onOpenCaseStudy}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full text-white hover:bg-white hover:text-neutral-900 transition-all w-fit text-sm font-medium"
              >
                {t('Ver caso', 'View Case Study')}
              </button>
            </div>

            <div className="aspect-video lg:aspect-auto">
              <img
                src={highlightProject.imageUrl}
                alt="FundsWin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Digital Products & Platforms */}
        {digitalProducts.length > 0 && (
          <div className="space-y-12">
            <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight">
              {t('Productos Digitales y Plataformas', 'Digital Products & Platforms')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {digitalProducts.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  type={project.type}
                  skills={project.skills}
                  contributions={project.contributions}
                  imageUrl={project.imageUrl}
                  url={project.url}
                />
              ))}
            </div>
          </div>
        )}

        {/* Websites & Marketing */}
        <div className="space-y-12">
          <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            {t('Sitios Web y Marketing', 'Websites & Marketing')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websites.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                type={project.type}
                skills={project.skills}
                contributions={project.contributions}
                imageUrl={project.imageUrl}
                url={project.url}
              />
            ))}
          </div>

          <div className="pt-12 flex flex-col items-center">
            <a
              href="https://ezink.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-neutral-200 text-neutral-900 hover:bg-black hover:text-white hover:border-black transition-all duration-300 font-medium group flex items-center gap-2"
            >
              {t('Ver más trabajos', 'View more projects')}
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}