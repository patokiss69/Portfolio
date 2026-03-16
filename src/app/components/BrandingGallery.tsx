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
        <div className="mb-12">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2">
            {t('Identidad Visual', 'Visual Identity')}
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
            {t('Identidad de Marca', 'Brand Identity')}
          </h2>
          <p className="text-neutral-600 max-w-2xl">
            {t(
              'Proyectos de identidad seleccionados como parte de soluciones digitales más amplias.',
              'Selected identity projects supporting broader digital solutions.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brandingImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-xl bg-white flex items-center justify-center p-6 border border-neutral-100"
            >
              <ImageWithFallback
                src={image}
                alt={`Brand identity ${index + 1}`}
                className="w-full h-full object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}