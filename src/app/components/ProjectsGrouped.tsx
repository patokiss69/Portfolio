import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../hooks/useLanguage';
import { ExternalLink } from 'lucide-react';

export function ProjectsGrouped() {
  const { t, language } = useLanguage();

  const highlightProject = {
    titleEs: 'FundsWin — Plataforma de gestión de financiación pública impulsada por IA',
    titleEn: 'FundsWin — AI-Powered Public Funding Management Platform',
    url: 'https://fundswin.ai',
    descriptionEs: 'FundsWin es una plataforma SaaS especializada diseñada para gestionar subvenciones y licitaciones públicas dentro de un único sistema estructurado.\n\nCentraliza oportunidades, requisitos, documentación y flujos de trabajo, ayudando a las organizaciones a navegar procesos complejos de financiación pública con mayor claridad, coordinación y control.\n\nLa plataforma integra múltiples módulos para subvenciones, licitaciones y análisis documental, permitiendo a los equipos detectar oportunidades, analizar requisitos y coordinar la preparación desde un solo entorno.',
    descriptionEn: 'FundsWin is a specialized SaaS platform designed to manage public grants and government tenders within a single structured system.\n\nIt centralizes opportunities, requirements, documentation and workflows, helping organizations navigate complex public funding processes with greater clarity, coordination and control.\n\nThe platform integrates multiple modules for grants, tenders and document analysis, allowing teams to detect opportunities, analyze requirements and coordinate preparation work from one environment.',
    category: t('Productos Digitales y Plataformas', 'Digital Products & Platforms'),
    type: t('Diseño de SaaS, Producto Digital', 'SaaS Design, Digital Product'),
    skills: 'UX/UI, Design Systems, SaaS Architecture',
    myRoleEs: 'Lideré el diseño UX/UI de la plataforma, definiendo la arquitectura de interfaz, los patrones de interacción y un sistema de diseño escalable para asegurar consistencia entre módulos.\n\nMi trabajo se centró en transformar procesos altamente burocráticos y basados en documentación en flujos de trabajo estructurados y fáciles de usar que reducen fricción y mejoran la eficiencia operativa.',
    myRoleEn: 'I led the UX/UI design of the platform, defining the interface architecture, interaction patterns and a scalable design system to ensure consistency across modules.\n\nMy work focused on transforming highly bureaucratic and document-heavy processes into structured, user-friendly workflows that reduce friction and improve operational efficiency.',
    aiIntegrationEs: 'Se integraron herramientas de IA a lo largo del flujo de trabajo para apoyar la investigación, la exploración de conceptos, la estructuración de contenidos y el prototipado rápido.\n\nEsto permitió iteraciones más ágiles, mayor exploración de soluciones y una colaboración más eficiente manteniendo principios de diseño centrados en el usuario.',
    aiIntegrationEn: 'AI tools were integrated throughout the workflow to support research, concept exploration, content structuring and rapid prototyping.\n\nThis enabled faster iteration, broader solution testing and more efficient collaboration while maintaining human-centered design principles.',
    capabilitiesEs: [
      'Gestión centralizada de oportunidades, documentos y seguimiento',
      'Flujos estructurados para procesos de financiación complejos',
      'Coordinación de equipos, tareas y documentación',
      'Módulos integrados para subvenciones, licitaciones y análisis documental',
      'Mayor claridad y control en todo el proceso',
    ],
    capabilitiesEn: [
      'Centralized management of opportunities, documents and tracking',
      'Structured workflows for complex funding processes',
      'Coordination of teams, tasks and documentation',
      'Integrated modules for grants, tenders and document analysis',
      'Improved clarity and control across the entire process',
    ],
    contributionsEs: [
      'Diseño UX/UI y arquitectura de interfaz',
      'Definición de sistema de diseño escalable',
      'Flujos de interacción para procesos administrativos complejos',
      'Colaboración con equipos multidisciplinarios',
      'Flujos de diseño asistidos por IA',
    ],
    contributionsEn: [
      'UX/UI design and interface architecture',
      'Scalable design system definition',
      'Interaction flows for complex administrative processes',
      'Collaboration with multidisciplinary teams',
      'AI-assisted design workflows',
    ],
    imageUrl: '/Portfolio/assets/fundswin-mockup.jpg'
  };

  const digitalProducts: any[] = [];

  const websites = [
    {
      title: 'PEMF Camati',
      description: t(
        'Comuniqué tecnología médica compleja de forma accesible para profesionales de salud y pacientes potenciales',
        'Communicated complex medical technology in an accessible way for health professionals and potential patients'
      ),
      type: t('Diseño Web', 'Web Design'),
      skills: 'UX/UI, Content Structure, Responsive Design',
      contributions: t(
        'Jerarquía de contenido clara, navegación simplificada, diseño responsive',
        'Clear content hierarchy, simplified navigation, responsive design'
      ),
      imageUrl: 'https://ezink.com/muestra/pf/pemf.jpg',
      url: 'https://pemfcamati.com/'
    },
    {
      title: 'Santo Tomé al Día',
      description: t(
        'Mejoré la experiencia de lectura y navegación de contenidos para un portal con alta frecuencia de actualización',
        'Improved reading experience and content navigation for a portal with high update frequency'
      ),
      type: t('Diseño Web', 'Web Design'),
      skills: 'UX/UI, Content Design, Performance',
      contributions: t(
        'Arquitectura de contenido escalable, tipografía legible, carga optimizada',
        'Scalable content architecture, readable typography, optimized loading'
      ),
      imageUrl: 'https://ezink.com/muestra/pf/stmald.jpg',
      url: 'https://santotomealdia.com.ar/'
    },
    {
      title: t('Jardín Margarita Pautasso', 'Kindergarten Margarita Pautasso'),
      description: t(
        'Facilité la comunicación entre la institución educativa y las familias con una estructura clara y navegación intuitiva',
        'Facilitated communication between educational institution and families with clear structure and intuitive navigation'
      ),
      type: t('Diseño Web', 'Web Design'),
      skills: 'UX/UI, Responsive Design, Accessibility',
      contributions: t(
        'Organización de información educativa, accesibilidad mejorada, diseño mobile-first',
        'Educational information organization, improved accessibility, mobile-first design'
      ),
      imageUrl: 'https://ezink.com/muestra/pf/pautasso.jpg',
      url: 'https://jardinmargaritaadepautasso.com.ar/'
    },
    {
      title: 'Grupo Delta Seguridad',
      description: t(
        'Transmití confianza y profesionalismo para empresa de seguridad mediante presentación clara de servicios y credenciales',
        'Conveyed trust and professionalism for security company through clear presentation of services and credentials'
      ),
      type: t('Diseño Web', 'Web Design'),
      skills: 'UX/UI, Corporate Design, Conversion',
      contributions: t(
        'Arquitectura de servicios clara, jerarquía visual profesional, llamadas a acción efectivas',
        'Clear service architecture, professional visual hierarchy, effective calls to action'
      ),
      imageUrl: 'https://ezink.com/muestra/pf/delta.jpg',
      url: 'https://grupodelta.com.ar/'
    },
    {
      title: 'Genacol',
      description: t(
        'Diseñé landing page enfocada en conversión con presentación clara del producto y beneficios clave',
        'Designed conversion-focused landing page with clear product presentation and key benefits'
      ),
      type: t('Landing Page', 'Landing Page'),
      skills: 'Landing Page Design, Conversion Design, Visual Hierarchy',
      contributions: t(
        'Flujo de conversión optimizado, jerarquía visual clara, diseño persuasivo',
        'Optimized conversion flow, clear visual hierarchy, persuasive design'
      ),
      imageUrl: 'https://ezink.com/muestra/pf/genacol.jpg'
    },
    {
      title: 'GPS Turismo',
      description: t(
        'Estructuré información de destinos y servicios turísticos para facilitar la toma de decisiones de viajeros',
        'Structured destination and tourism service information to facilitate traveler decision-making'
      ),
      type: t('Diseño Web', 'Web Design'),
      skills: 'UX/UI, Information Architecture, Responsive Design',
      contributions: t(
        'Organización de ofertas turísticas, búsqueda simplificada, diseño responsive',
        'Tourism offer organization, simplified search, responsive design'
      ),
      imageUrl: 'https://ezink.com/muestra/pf/gps.jpg',
      url: 'https://gpsturismo.com.ar/'
    }
  ];

  return (
    <section id="work" className="py-32 px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto space-y-24">
        {/* Header */}
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-wider text-neutral-500">
            {t('Proyectos', 'Projects')}
          </p>
          <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight">
            {t('Proyectos seleccionados', 'Selected Projects')}
          </h2>
        </div>

        {/* Featured Project */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-12 lg:p-16 flex flex-col justify-center text-white space-y-8">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-wider text-neutral-400">
                  {t('Proyecto Destacado', 'Featured Project')}
                </p>
                <h3 className="text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
                  {t(highlightProject.titleEs, highlightProject.titleEn)}
                </h3>
                <div className="space-y-4 text-lg text-neutral-300 leading-relaxed font-light">
                  {t(highlightProject.descriptionEs, highlightProject.descriptionEn).split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <h4 className="text-sm uppercase tracking-wider text-neutral-400 font-semibold">
                    {t('Mi rol', 'My Role')}
                  </h4>
                  <div className="text-base text-neutral-300 leading-relaxed space-y-3">
                    {t(highlightProject.myRoleEs, highlightProject.myRoleEn).split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-4">
                  <h4 className="text-sm uppercase tracking-wider text-neutral-400 font-semibold">
                    {t('Integración de IA en el proceso de diseño', 'AI Integration in the Design Process')}
                  </h4>
                  <div className="text-base text-neutral-300 leading-relaxed space-y-3">
                    {t(highlightProject.aiIntegrationEs, highlightProject.aiIntegrationEn).split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm text-neutral-400 mb-2 uppercase tracking-wide">{t('Tipo de trabajo', 'Type of work')}</p>
                    <p className="text-base text-white">{highlightProject.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 mb-2 uppercase tracking-wide">{t('Habilidades clave', 'Key skills')}</p>
                    <p className="text-base text-white">{highlightProject.skills}</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-neutral-400 mb-4 uppercase tracking-wide">{t('Capacidades clave de la plataforma', 'Key Platform Capabilities')}</p>
                  <ul className="grid grid-cols-1 gap-y-3">
                    {(language === 'es' ? highlightProject.capabilitiesEs : highlightProject.capabilitiesEn).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-neutral-300">
                        <span className="text-[var(--bs-magenta,#D81B60)] mt-1.5">•</span>
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-neutral-400 mb-4 uppercase tracking-wide">{t('Contribuciones clave', 'Key Contributions')}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {(language === 'es' ? highlightProject.contributionsEs : highlightProject.contributionsEn).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-neutral-300">
                        <span className="text-[var(--bs-magenta,#D81B60)] mt-1.5">•</span>
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {highlightProject.url && (
                <a
                  href={highlightProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-neutral-300 transition-colors w-fit"
                >
                  {t('Ver sitio', 'Visit site')}
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="aspect-video lg:aspect-auto">
              <img
                src={highlightProject.imageUrl}
                alt={t(highlightProject.titleEs, highlightProject.titleEn)}
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