import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../hooks/useLanguage';
import { ExternalLink } from 'lucide-react';

export function SelectedWork() {
  const { t } = useLanguage();

  const highlightProject = {
    title: 'FundsWin',
    url: 'https://fundswin.ai',
    descriptionEs: 'Ecosistema de soluciones digitales impulsadas por IA enfocado en plataformas de financiación pública. El proyecto implicó diseñar un sistema de diseño escalable, definir patrones de interfaz y construir la arquitectura UX para múltiples herramientas impulsadas por IA dentro de la plataforma.',
    descriptionEn: 'AI-powered ecosystem of digital solutions focused on public funding platforms. The project involved designing a scalable design system, defining interface patterns and building the UX architecture for multiple AI-powered tools inside the platform.',
    tags: ['UX/UI', t('Sistema de Diseño', 'Design System'), t('Diseño de Producto', 'Product Design'), 'Fintech', 'AI'],
    imageUrl: 'https://images.unsplash.com/photo-1726056652641-de93ec003289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3Mjk4MzE4M3ww&ixlib=rb-4.1.0&q=80&w=1080'
  };

  const portfolioProjects = [
    {
      title: 'PEMF Camati',
      description: t(
        'Sitio web profesional para empresa de tecnología de terapia electromagnética.',
        'Professional website for electromagnetic therapy technology company.'
      ),
      tags: [t('Diseño Web', 'Web Design'), 'UX/UI', t('Salud', 'Health')],
      imageUrl: 'https://ezink.com/muestra/pf/pemf.jpg'
    },
    {
      title: 'Santo Tomé al Día',
      description: t(
        'Portal de noticias local con diseño editorial y experiencia de lectura optimizada.',
        'Local news portal with editorial design and optimized reading experience.'
      ),
      tags: [t('Diseño Web', 'Web Design'), t('Editorial', 'Editorial'), 'UX/UI'],
      imageUrl: 'https://ezink.com/muestra/pf/stmald.jpg',
      url: 'https://santotomealdia.com.ar/'
    },
    {
      title: t('Jardín N°1179 Margarita A. de Pautasso', 'Jardín N°1179 Margarita A. de Pautasso'),
      description: t(
        'Sitio web institucional para jardín de infantes con información educativa, actividades y comunicación con familias.',
        'Institutional website for kindergarten with educational information, activities and family communication.'
      ),
      tags: [t('Instituciones Educativas', 'Educational Institutions'), t('Educación', 'Education'), 'UX/UI'],
      imageUrl: 'https://ezink.com/muestra/pf/pautasso.jpg',
      url: 'https://jardinmargaritaadepautasso.com.ar/'
    },
    {
      title: t('Grupo Delta | Seguridad y Vigilancia CCTV', 'Grupo Delta | Security and CCTV Surveillance'),
      description: t(
        'Sitio web corporativo para empresa de seguridad y vigilancia con presentación de servicios, alarmas y sistemas CCTV.',
        'Corporate website for security and surveillance company with services presentation, alarms and CCTV systems.'
      ),
      tags: [t('Empresa', 'Corporate'), t('Seguridad', 'Security'), 'UX/UI', t('Diseño Web', 'Web Design')],
      imageUrl: 'https://ezink.com/muestra/pf/delta.jpg',
      url: 'https://grupodelta.com.ar/'
    },
    {
      title: 'Genacol',
      description: t(
        'Sitio ecommerce orientado a catálogo de productos medicinales con estructura clara de producto y navegación simple.',
        'Ecommerce site focused on medicinal product catalog with clear product structure and simple navigation.'
      ),
      tags: ['Ecommerce', t('Catálogo', 'Catalog'), 'UX/UI'],
      imageUrl: 'https://ezink.com/muestra/pf/genacol.jpg'
    },
    {
      title: 'GPS Turismo',
      description: t(
        'Sitio web para empresa de turismo con catálogo de destinos y paquetes turísticos organizado para facilitar la exploración.',
        'Tourism company website with destinations and travel packages catalog organized to facilitate exploration.'
      ),
      tags: [t('Turismo', 'Tourism'), t('Catálogo', 'Catalog'), 'UX/UI', t('Diseño Web', 'Web Design')],
      imageUrl: 'https://ezink.com/muestra/pf/gps.jpg',
      url: 'https://gpsturismo.com.ar/'
    }
  ];

  return (
    <section id="work" className="py-32 px-8 lg:px-16 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            {t('Portafolio', 'Portfolio')}
          </p>
          <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight">
            {t('Trabajos Destacados', 'Selected Work')}
          </h2>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <div className="bg-neutral-50 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto relative overflow-hidden">
                <img
                  src={highlightProject.imageUrl}
                  alt={highlightProject.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
                  {t('Proyecto Destacado', 'Featured Project')}
                </p>
                <h3 className="text-4xl lg:text-5xl font-medium mb-4">
                  {highlightProject.title}
                </h3>
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  {t(highlightProject.descriptionEs, highlightProject.descriptionEn)}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {highlightProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white text-sm text-neutral-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={highlightProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-900 hover:opacity-70 transition-opacity"
                >
                  {t('Ver proyecto', 'View project')}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* More projects link */}
        <div className="text-center">
          <a
            href="https://ezink.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all"
          >
            {t('Ver más proyectos en EZINK', 'View more projects at EZINK')}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}