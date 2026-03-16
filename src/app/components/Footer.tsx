import { useLanguage } from '../hooks/useLanguage';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-8 lg:px-16 bg-white border-t border-neutral-200">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            {t(
              `© ${new Date().getFullYear()} Patricio Funes. Todos los derechos reservados.`,
              `© ${new Date().getFullYear()} Patricio Funes. All rights reserved.`
            )}
          </p>
          <p className="text-sm text-neutral-500">
            {t(
              'Diseñador UX/UI Senior · Diseño de Producto · Diseño Web',
              'Senior UX/UI Designer · Product Design · Web Design'
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
