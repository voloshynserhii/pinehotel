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
const defaultImage = '/images/hero1.jpg';

export function Hero({
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
          'w-full relative h-[85vh]',
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
                loading='lazy'
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
              loading='lazy'
            />
          )
        )}

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
