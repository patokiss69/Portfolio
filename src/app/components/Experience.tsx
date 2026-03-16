import { useLanguage } from '../hooks/useLanguage';

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      titleEs: 'UX/UI Lead – Diseño de Producto Integrado con IA',
      titleEn: 'UX/UI Lead – AI-Integrated Product Design',
      company: 'FundsWin (ex Acceleralia)',
      location: t('Barcelona, España', 'Barcelona, Spain'),
      period: t('Mayo 2025 — Marzo 2026', 'May 2025 — March 2026'),
      descriptionEs: 'Diseño de interfaces y experiencias digitales centradas en el usuario para productos web y aplicaciones. Integración de herramientas de Inteligencia Artificial en el proceso de diseño para optimizar investigación, ideación, prototipado y generación de contenido visual. Colaboración con equipos multidisciplinarios para desarrollar soluciones digitales funcionales, intuitivas y escalables.',
      descriptionEn: 'Designed user-centered interfaces and digital experiences for web products and applications. Integrated Artificial Intelligence tools into the design workflow to enhance research, ideation, prototyping and visual content generation. Collaborated with multidisciplinary teams to develop functional, intuitive and scalable digital solutions.',
      highlights: [
        { es: 'Sistema de diseño unificado', en: 'Unified design system' },
        { es: 'Flujos asistidos por IA', en: 'AI-assisted workflows' },
        { es: 'Arquitectura de UX escalable', en: 'Scalable UX architecture' }
      ]
    },
    {
      titleEs: 'Senior Web Designer | UX/UI',
      titleEn: 'Senior Web Designer | UX/UI',
      company: 'EZINK',
      location: 'Santa Fe',
      period: t('Marzo 2009 — Marzo 2025', 'March 2009 — March 2025'),
      descriptionEs: 'Diseño de identidades de marca, banners y sitios web para más de 50 clientes, aumentando el tráfico web en un 35% promedio. Gestión de diseño HTML y CSS para sitios web y aplicaciones web. Desarrollo de interfaces responsivas y funcionales. Realización de pruebas de usabilidad que mejoraron la retención de usuarios en 25%.',
      descriptionEn: 'Designed brand identities, banners and websites for more than 50 clients, increasing website traffic by 35% on average. Managed HTML and CSS implementation for websites and web applications. Ensured responsive and functional layouts. Conducted usability testing that improved user retention by 25%.',
      highlights: [
        { es: 'Más de 50 proyectos de clientes', en: '50+ client projects' },
        { es: '+35% tráfico web promedio', en: '+35% average web traffic' },
        { es: '+25% retención de usuarios', en: '+25% user retention' }
      ]
    },
    {
      titleEs: 'Web | UI/UX Designer',
      titleEn: 'Web | UI/UX Designer',
      company: 'RCnet',
      location: 'Santa Fe',
      period: t('Marzo 2007 — Febrero 2009', 'March 2007 — February 2009'),
      descriptionEs: 'Creación de identidades de marca, banners y diseños web para más de 25 clientes, mejorando el engagement de usuarios en 30%. Diseño web en HTML y CSS, implementación de diseño responsivo y mejoras de interfaz y experiencia de usuario.',
      descriptionEn: 'Created brand identities, banners and websites for more than 25 clients, improving user engagement metrics by 30%. HTML and CSS web layouts, responsive design implementation, and UI/UX improvements.',
      highlights: [
        { es: '25+ proyectos completados', en: '25+ projects completed' },
        { es: '+30% engagement de usuarios', en: '+30% user engagement' }
      ]
    },
    {
      titleEs: 'Diseñador Gráfico Freelance',
      titleEn: 'Freelance Graphic Designer',
      company: 'Freelance',
      location: 'Santa Fe',
      period: t('Enero 2004 — Julio 2007', 'January 2004 — July 2007'),
      descriptionEs: 'Desarrollo de branding para más de 30 empresas, incrementando el reconocimiento de marca en un 40% promedio. Diseño de papelería, folletos, carteles, libros y revistas.',
      descriptionEn: 'Developed branding for more than 30 companies, increasing brand recognition by 40% on average. Designed stationery, brochures, posters, books and magazines.',
      highlights: [
        { es: '30+ marcas desarrolladas', en: '30+ brands developed' },
        { es: '+40% reconocimiento de marca', en: '+40% brand recognition' }
      ]
    },
    {
      titleEs: 'Instructor de Diseño Gráfico',
      titleEn: 'Graphic Design Instructor',
      company: 'Instituto Educativo Privado IAC',
      location: 'Santa Fe',
      period: t('Marzo 2002 — Diciembre 2005', 'March 2002 — December 2005'),
      descriptionEs: 'Formación en diseño gráfico para más de 200 estudiantes, enseñando fundamentos de diseño, Photoshop e Illustrator. Logrando 95% de satisfacción y 80% de inserción laboral en 6 meses.',
      descriptionEn: 'Delivered graphic design training to more than 200 students, teaching design fundamentals, Photoshop and Illustrator. Achieved 95% student satisfaction and 80% job placement within 6 months.',
      highlights: [
        { es: '200+ estudiantes capacitados', en: '200+ students trained' },
        { es: '95% satisfacción', en: '95% satisfaction' },
        { es: '80% inserción laboral', en: '80% job placement' }
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 px-8 lg:px-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            {t('Carrera', 'Career')}
          </p>
          <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight">
            {t('Experiencia', 'Experience')}
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-8 bottom-8 w-px bg-neutral-200 hidden lg:block"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative lg:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-0 top-8 w-3 h-3 rounded-full bg-neutral-900 -translate-x-[5px] hidden lg:block"></div>

                <div className="group">
                  <div className="mb-4">
                    <h3 className="text-2xl lg:text-3xl font-medium mb-2">
                      {t(exp.titleEs, exp.titleEn)}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-neutral-600">
                      <p className="text-lg font-medium">{exp.company}</p>
                      <span className="hidden sm:inline text-neutral-400">·</span>
                      <p className="text-sm">{exp.location}</p>
                      <span className="hidden sm:inline text-neutral-400">·</span>
                      <span className="text-sm text-neutral-500">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-neutral-600 leading-relaxed max-w-3xl mb-4">
                    {t(exp.descriptionEs, exp.descriptionEn)}
                  </p>
                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="flex flex-wrap gap-3">
                      {exp.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="px-4 py-2 bg-neutral-50 text-sm text-neutral-700 rounded-full"
                        >
                          {t(highlight.es, highlight.en)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}