import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../hooks/useLanguage';
import { ExternalLink } from 'lucide-react';

export function ProjectsGrouped() {
  const { t } = useLanguage();

  const highlightProject = {
    title: 'FundsWin',
    url: 'https://fundswin.ai',
    descriptionEs: 'Plataforma fintech que centraliza herramientas de análisis para instituciones públicas. Creé el sistema de diseño completo, estructuré patrones de interfaz reutilizables y diseñé flujos de usuario para facilitar el acceso a datos complejos de financiación.',
    descriptionEn: 'Fintech platform that centralizes analysis tools for public institutions. Created the complete design system, structured reusable interface patterns and designed user flows to simplify access to complex funding data.',
    category: t('Productos Digitales y Plataformas', 'Digital Products & Platforms'),
    type: t('Diseño de Producto, Sistema de Diseño', 'Product Design, Design System'),
    skills: 'UX/UI, Design Systems, Information Architecture',
    contributions: t(
      'Sistema de diseño escalable, arquitectura de información, patrones de interfaz',
      'Scalable design system, information architecture, interface patterns'
    ),
    imageUrl: 'https://images.unsplash.com/photo-1726056652641-de93ec003289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3Mjk4MzE4M3ww&ixlib=rb-4.1.0&q=80&w=1080'
  };

  const digitalProducts = [
    {
      title: 'FundsWin',
      description: t(
        'Simplifiqué el acceso a datos financieros complejos mediante una arquitectura clara y patrones consistentes',
        'Simplified access to complex financial data through clear architecture and consistent patterns'
      ),
      type: t('Diseño de Producto', 'Product Design'),
      skills: 'UX/UI, Design Systems, Information Architecture',
      contributions: t(
        'Sistema de diseño escalable, flujos de usuario optimizados',
        'Scalable design system, optimized user flows'
      ),
      imageUrl: 'https://images.unsplash.com/photo-1726056652641-de93ec003289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3Mjk4MzE4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      url: 'https://fundswin.ai'
    }
  ];

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
      imageUrl: 'https://ezink.com/muestra/pf/pemf.jpg'
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
      imageUrl: 'https://ezink.com/muestra/pf/delta.jpg'
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
      imageUrl: 'https://ezink.com/muestra/pf/gps.jpg'
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
                <h3 className="text-4xl lg:text-5xl font-semibold mb-4">
                  {highlightProject.title}
                </h3>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  {t(highlightProject.descriptionEs, highlightProject.descriptionEn)}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-neutral-400 mb-1">{t('Tipo de trabajo', 'Type of work')}</p>
                  <p className="text-base">{highlightProject.type}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-400 mb-1">{t('Habilidades clave', 'Key skills')}</p>
                  <p className="text-base">{highlightProject.skills}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-400 mb-1">{t('Contribuciones', 'Contributions')}</p>
                  <p className="text-base">{highlightProject.contributions}</p>
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
                alt={highlightProject.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Digital Products & Platforms */}
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
        </div>
      </div>
    </section>
  );
}