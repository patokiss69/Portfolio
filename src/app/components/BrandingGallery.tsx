import { useLanguage } from '../hooks/useLanguage';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BrandingGallery() {
  const { t } = useLanguage();

  const brandingImages = [
    'https://ezink.com/muestra/pf/l-opinafe.jpg',
    'https://ezink.com/muestra/pf/l-jauchen.jpg',
    'https://ezink.com/muestra/pf/l-ezink.jpg',
    'https://ezink.com/muestra/pf/l-aquieventos.jpg',
    'https://ezink.com/muestra/pf/l-adiario.jpg',
    'https://ezink.com/muestra/pf/l-30dn.jpg'
  ];

  return (
    <section className="py-32 px-8 lg:px-16 bg-neutral-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            {t('Identidad Visual', 'Visual Identity')}
          </p>
          <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight">
            {t('Identidad de Marca', 'Brand Identity')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandingImages.map((image, index) => (
            <div
              key={index}
              className="group aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-8 flex items-center justify-center"
            >
              <ImageWithFallback
                src={image}
                alt={`Brand identity ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}