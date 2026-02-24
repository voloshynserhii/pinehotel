import Image from 'next/image';
import { cn } from '@/lib/utils';
import { BookingBar, PageTabs } from '@/components';

interface HeroProps {
  title: string;
  subtitle?: string;
  videoSrc?: string;
  imgSrc?: string;
  isDark?: boolean;
}

export function Hero({
  title,
  subtitle,
  imgSrc = 'https://www.collealberti.com/images/header-country-house.jpg',
  videoSrc = "https://media.istockphoto.com/id/1622710632/es/v%C3%ADdeo/hermoso-patio-de-campo-en-toscana-rodeado-de-campos-de-cipr%C3%A9s-t%C3%ADpicos-de-toscana.mp4?s=mp4-640x640-is&k=20&c=Y6LioyhiolLeza5ivi8xqSLcZ40-dYPX_nF_6qfuOKw=",
  isDark = false,
}: HeroProps) {
  return (
    <>
      <section
        className={cn(
          'w-full relative h-[85vh]',
          isDark ? 'bg-stone-900 text-cream-50' : 'bg-cream-50 text-stone-900'
        )}
      >
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt="Background"
            fill
            style={{ objectFit: 'cover' }}
            className="z-0"
            priority
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover z-0"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        {/*         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-11/12 max-w-4xl text-center bg-white px-6 sm:px-12 py-8 rounded-lg backdrop-blur-sm bg-opacity-30">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-10 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div> */}

        <div className="absolute bottom-[50px] left-0 w-full z-10 px-[5%] flex items-center justify-center">
          <BookingBar />
        </div>

      </section>

      <div className='hidden lg:block'>
        <PageTabs />
      </div>
    </>
  );
}
