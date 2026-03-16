import { useLanguage } from '../hooks/useLanguage';

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      titleEs: 'UX / Producto',
      titleEn: 'UX / Product',
      skills: [
        'UX/UI Design',
        { es: 'Diseño de Producto', en: 'Product Design' },
        { es: 'Experiencia de Usuario (UX)', en: 'User Experience (UX)' },
        { es: 'Diseño de Interfaz (UI)', en: 'User Interface Design (UI)' },
        { es: 'Diseño de Interacción', en: 'Interaction Design' },
        { es: 'Sistemas de Diseño', en: 'Design Systems' },
        'Wireframing',
        { es: 'Prototipado', en: 'Prototyping' },
        { es: 'Pruebas de Usabilidad', en: 'Usability Testing' },
        { es: 'Arquitectura de Información', en: 'Information Architecture' },
        { es: 'Flujos de Usuario', en: 'User Flows' },
        { es: 'Diseño Responsivo', en: 'Responsive Design' },
        { es: 'Diseño de Producto Digital', en: 'Digital Product Design' }
      ]
    },
    {
      titleEs: 'Diseño y Branding',
      titleEn: 'Design & Branding',
      skills: [
        { es: 'Identidad de Marca', en: 'Brand Identity' },
        { es: 'Diseño Visual', en: 'Visual Design' },
        { es: 'Diseño Gráfico', en: 'Graphic Design' },
        { es: 'Dirección Creativa', en: 'Creative Direction' },
        { es: 'Diseño Web', en: 'Web Design' }
      ]
    },
    {
      titleEs: 'Técnico',
      titleEn: 'Technical',
      skills: [
        'HTML',
        'CSS'
      ]
    },
    {
      titleEs: 'IA y Habilidades Emergentes',
      titleEn: 'AI & Emerging Skills',
      skills: [
        { es: 'Diseño Asistido por IA', en: 'AI-Assisted Design' },
        { es: 'IA Generativa', en: 'Generative AI' },
        { es: 'Creación de Contenido con IA', en: 'AI Content Creation' },
        { es: 'Flujos de Trabajo de Diseño con IA', en: 'AI Design Workflows' },
        { es: 'Herramientas de IA para Diseño', en: 'AI Tools for Design' }
      ]
    },
    {
      titleEs: 'Herramientas',
      titleEn: 'Tools',
      skills: [
        'Figma',
        'Adobe XD',
        'Adobe Illustrator',
        'Adobe Photoshop',
        'Visual Studio Code',
        'Cursor',
        'Google AI Studio',
        'Slack'
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 px-8 lg:px-16 bg-neutral-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            {t('Experiencia', 'Expertise')}
          </p>
          <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight">
            {t('Habilidades', 'Skills')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.titleEn}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-medium mb-6 pb-4 border-b border-neutral-200">
                {t(category.titleEs, category.titleEn)}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, index) => {
                  const skillText = typeof skill === 'string' 
                    ? skill 
                    : t(skill.es, skill.en);
                  
                  return (
                    <li key={index} className="text-neutral-700 flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 mr-3 flex-shrink-0"></span>
                      <span>{skillText}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}