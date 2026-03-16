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
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
              <ImageWithFallback
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--bs-magenta,#D81B60)] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">
                  {t('SITIO EN VIVO', 'LIVE SITE')}
                </span>
              </div>
            </a>
          ) : (
            <ImageWithFallback
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="space-y-3">
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer" className="block group/title">
              <h3 className="text-2xl font-semibold tracking-tight group-hover/title:text-[var(--bs-magenta,#D81B60)] transition-colors inline-flex items-center gap-2">
                {title}
                <ExternalLink className="w-4 h-4 opacity-0 -translate-y-1 group-hover/title:opacity-100 group-hover/title:translate-y-0 transition-all" />
              </h3>
            </a>
          ) : (
            <h3 className="text-2xl font-semibold tracking-tight">
              {title}
            </h3>
          )}
          
          <p className="text-base text-neutral-600 leading-relaxed">
            {description}
          </p>

          {type && (
            <div>
              <p className="text-sm text-neutral-500">
                <span className="font-medium text-neutral-700">{t('Tipo:', 'Type:')}</span> {type}
              </p>
            </div>
          )}

          {contributions && (
            <div>
              <p className="text-sm text-neutral-600">
                <span className="font-medium text-neutral-700">{t('Contribuciones:', 'Contributions:')}</span> {contributions}
              </p>
            </div>
          )}

          {skills && (
            <div>
              <p className="text-sm text-neutral-500">
                <span className="font-medium text-neutral-700">{t('Habilidades:', 'Skills:')}</span> {skills}
              </p>
            </div>
          )}

          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--bs-magenta,#D81B60)] hover:text-black transition-colors font-semibold pt-2 border-b border-transparent hover:border-[var(--bs-magenta,#D81B60)]"
            >
              {t('Ver sitio', 'Visit site')}
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}