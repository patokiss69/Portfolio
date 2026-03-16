import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  type?: string;
  skills?: string;
  contributions?: string;
  imageUrl: string;
  url?: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  type,
  skills,
  contributions,
  imageUrl,
  url,
  featured = false
}: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <div className="group">
      <div className="space-y-4">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight group-hover:text-neutral-600 transition-colors">
            {title}
          </h3>
          
          <p className="text-base text-neutral-600 leading-relaxed">
            {description}
          </p>

          {type && (
            <div>
              <p className="text-sm text-neutral-500">
                <span className="font-medium">{t('Tipo:', 'Type:')}</span> {type}
              </p>
            </div>
          )}

          {contributions && (
            <div>
              <p className="text-sm text-neutral-600">
                <span className="font-medium">{t('Contribuciones:', 'Contributions:')}</span> {contributions}
              </p>
            </div>
          )}

          {skills && (
            <div>
              <p className="text-sm text-neutral-500">
                <span className="font-medium">{t('Habilidades:', 'Skills:')}</span> {skills}
              </p>
            </div>
          )}

          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neutral-900 hover:text-neutral-600 transition-colors font-medium pt-2"
            >
              {t('Ver detalles', 'View details')}
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}