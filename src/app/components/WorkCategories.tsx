import { useLanguage } from '../hooks/useLanguage';
import { Palette, Briefcase, Share2, Grid } from 'lucide-react';

export function WorkCategories() {
  const { t } = useLanguage();

  const categories = [
    {
      titleEs: 'Diseño Web & UX/UI',
      titleEn: 'Web Design & UX/UI',
      descriptionEs: 'Enfoque profesional principal.',
      descriptionEn: 'Primary professional focus.',
      icon: Grid,
      color: 'bg-blue-50 text-blue-900'
    },
    {
      titleEs: 'Identidad de Marca',
      titleEn: 'Brand Identity',
      descriptionEs: 'Diseño de logotipos y proyectos de identidad de marca.',
      descriptionEn: 'Logo design and brand identity projects.',
      icon: Palette,
      color: 'bg-purple-50 text-purple-900'
    },
    {
      titleEs: 'Diseño de Redes Sociales',
      titleEn: 'Social Media Design',
      descriptionEs: 'Contenido visual y diseño de campañas.',
      descriptionEn: 'Visual content and campaign design.',
      icon: Share2,
      color: 'bg-pink-50 text-pink-900'
    },
    {
      titleEs: 'Otros Trabajos de Diseño',
      titleEn: 'Other Design Work',
      descriptionEs: 'Proyectos adicionales gráficos y creativos.',
      descriptionEn: 'Additional graphic and creative projects.',
      icon: Briefcase,
      color: 'bg-amber-50 text-amber-900'
    }
  ];

  return (
    <section id="categories" className="py-32 px-8 lg:px-16 bg-neutral-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            {t('Categorías', 'Categories')}
          </p>
          <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight">
            {t('Áreas de Trabajo', 'Work Categories')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.titleEn}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-medium mb-2">
                  {t(category.titleEs, category.titleEn)}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {t(category.descriptionEs, category.descriptionEn)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}