import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  isDark?: boolean;
}

export function Hero({ title, subtitle, backgroundImage, isDark = false }: HeroProps) {
  return (
    <section
      className={cn(
        'w-full py-24 md:py-32 lg:py-40',
        isDark ? 'bg-stone-900 text-cream-50' : 'bg-cream-50 text-stone-900'
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
            }
          : undefined
      }
    >
      <div className="container mx-auto px-gutter text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
