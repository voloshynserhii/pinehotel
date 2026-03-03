'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { BookingBar, PageTabs } from '@/components';
import { useEffect, useState } from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showBookingBar?: boolean;
  videoSrc?: string;
  imgSrc?: string;
  mobileImgSrc?: string;
  isDark?: boolean;
  posterSrc?: string;
}
const defaultImage = 'https://www.collealberti.com/images/header-country-house.jpg';

export function Hero({
  title,
  subtitle,
  showBookingBar,
  imgSrc = defaultImage,
  mobileImgSrc,
  videoSrc,
  isDark = false,
  posterSrc,
}: HeroProps) {
  const [effectiveImgSrc, setEffectiveImgSrc] = useState(imgSrc);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && mobileImgSrc) {
        setEffectiveImgSrc(mobileImgSrc);
      } else {
        setEffectiveImgSrc(imgSrc);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // run on initial render

    return () => window.removeEventListener('resize', handleResize);
  }, [imgSrc, mobileImgSrc]);

  return (
    <div className="relative lg:pb-4">
      <section
        className={cn(
          'w-full relative h-[70vh] lg:h-[85vh]',
          isDark ? 'bg-stone-900 text-cream-50' : 'bg-cream-50 text-stone-900'
        )}
      >
        {videoSrc ? (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={posterSrc}
              crossOrigin="anonymous"
              className="w-full h-full object-cover z-0 hidden md:block"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {(imgSrc || posterSrc) && (
              <Image
                src={effectiveImgSrc}
                alt="Background"
                fill
                style={{ objectFit: 'cover' }}
                className="z-0 block md:hidden"
                priority
              />
            )}
          </>
        ) : (
          effectiveImgSrc && (
            <Image
              src={effectiveImgSrc}
              alt="Background"
              fill
              style={{ objectFit: 'cover' }}
              className="z-0"
              priority
            />
          )
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

        {showBookingBar && (
          <div className="absolute bottom-[50px] left-0 w-full z-10 px-[5%] flex items-center justify-center">
            <BookingBar />
          </div>
        )}

      </section>

      <div className='hidden lg:block'>
        <PageTabs />
      </div>
    </div>
  );
}
