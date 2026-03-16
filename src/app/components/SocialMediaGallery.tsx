import { useLanguage } from '../hooks/useLanguage';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SocialMediaGallery() {
  const { t } = useLanguage();

  const socialMediaImages = [
    'https://ezink.com/muestra/pf/r-varios.jpg',
    'https://ezink.com/muestra/pf/r-tour.jpg',
    'https://ezink.com/muestra/pf/r-monacal.jpg'
  ];

  return (
    <section className="py-32 px-8 lg:px-16 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            {t('Marketing Digital', 'Digital Marketing')}
          </p>
          <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight">
            {t('Diseño de Redes Sociales', 'Social Media Design')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialMediaImages.map((image, index) => (
            <div
              key={index}
              className="group aspect-square overflow-hidden rounded-2xl bg-neutral-50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <ImageWithFallback
                src={image}
                alt={`Social media design ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}