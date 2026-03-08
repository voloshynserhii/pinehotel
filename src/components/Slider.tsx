"use client";

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { NavigationOptions } from 'swiper/types';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

export interface Slide {
    id?: string;
    image: string;
    mobileImage?: string;
    title?: string;
    subtitle?: string;
    link?: string;
}

interface SliderProps {
    slides: (Slide | string)[];
    className?: string;
}

const isSlide = (slide: Slide | string): slide is Slide => {
    return (slide as Slide).image !== undefined;
}

export function Slider({ slides, className }: SliderProps) {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(null);

    const isImageGallery = slides && slides.length > 0 && typeof slides[0] === 'string';

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    // when swiper instance and nav button refs are ready, initialize/update navigation
    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            // assign elements (cast because navigation can be boolean)
            (swiperInstance.params.navigation as NavigationOptions).prevEl = prevRef.current;
            (swiperInstance.params.navigation as NavigationOptions).nextEl = nextRef.current;
            // ensure navigation is initialised
            if (swiperInstance.navigation) {
                swiperInstance.navigation.init();
                swiperInstance.navigation.update();
            }
        }
    }, [swiperInstance]);

    return (
        <div className={`relative mx-auto ${className}`}>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={isImageGallery ? 0 : 20}
                slidesPerView={isImageGallery ? 'auto' : 1}
                loop={isImageGallery}
                centeredSlides={isImageGallery}
                speed={1000}
                autoplay={isImageGallery && !className ? {
                    delay: 5000,
                    disableOnInteraction: false,
                } : false}
                navigation={
                    {
                        prevEl: prevRef.current!,
                        nextEl: nextRef.current!,
                    } as NavigationOptions
                }
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                onBeforeInit={(swiper) => {
                    if (swiper.params.navigation) {
                        (swiper.params.navigation as NavigationOptions).prevEl = prevRef.current;
                        (swiper.params.navigation as NavigationOptions).nextEl = nextRef.current;
                    }
                }}
                onInit={(swiper) => {
                    if (!isImageGallery) {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }
                }}
                onSlideChange={(swiper) => {
                    if (!isImageGallery) {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }
                }}
                breakpoints={!isImageGallery ? {
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                } : undefined}
                className="swiper"
            >
                {slides.map((slide, index) => {
                    if (isSlide(slide)) {
                        const isActive = activeSlideIndex === index;

                        return (
                            <SwiperSlide key={`${slide.title}-${slide.image}`}>
                                <a
                                    href={slide.link}
                                    onClick={(e) => {
                                        if (!isActive) {
                                            e.preventDefault();
                                            setActiveSlideIndex(index);
                                        }
                                        else {
                                            setActiveSlideIndex(null);
                                        }
                                    }}
                                    onPointerEnter={(e) => {
                                        if (e.pointerType === 'mouse') {
                                            setActiveSlideIndex(index);
                                        }
                                    }}
                                    onPointerLeave={(e) => {
                                        if (e.pointerType === 'mouse') {
                                            setActiveSlideIndex(null);
                                        }
                                    }}
                                >
                                    <div className="relative cursor-pointer group/card h-[350px] lg:h-[600px]">
                                        <div className={`relative w-full h-full transition-transform duration-500 ease-in-out ${isActive ? 'scale-110' : ''}`}>
                                            <Image
                                                src={slide.image}
                                                alt={slide.title || slide.id || 'slide'}
                                                fill
                                                className={`object-cover ${slide.mobileImage ? 'hidden md:block' : 'block'}`}
                                            />
                                            {slide.mobileImage && (
                                                <Image
                                                    src={slide.mobileImage}
                                                    alt={slide.title || slide.id || 'slide'}
                                                    fill
                                                    className="object-cover block md:hidden"
                                                />
                                            )}
                                        </div>

                                        <div className={`absolute bottom-0 left-0 w-[80%] bg-white p-3 lg:p-6 transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-full'} shadow-lg max-h-[85%] flex flex-col`}>
                                            <h3 className="text-xl lg:text-2xl font-serif mb-2 text-gray-900 leading-tight flex-shrink-0">
                                                {slide.title}
                                            </h3>
                                            <div className="overflow-y-auto mb-4">
                                                <p className="text-sm text-gray-500 tracking-wide">
                                                    {slide.subtitle}
                                                </p>
                                            </div>

                                            {slide.link && <span
                                                className="inline-block text-xs font-bold uppercase tracking-widest border-b border-gray-300 pb-1 hover:border-black transition-colors flex-shrink-0 self-start"
                                            >
                                                Show more
                                            </span>}
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        )
                    }

                    return (
                        <SwiperSlide key={slide} className={isImageGallery && !className ? 'gallery-slide' : ''}>
                            <div className={className ? `relative overflow-hidden cursor-pointer group/card ${className}` : `relative overflow-hidden cursor-pointer group/card h-[350px] lg:h-[80vh]`}>
                                <div className="relative w-full h-full transition-transform duration-500 ease-in-out group-hover/card:scale-110">
                                    <Image
                                        src={slide}
                                        alt={slide}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <button ref={prevRef} className={`absolute left-[15px] md:left-[30px] top-1/2 -translate-y-1/2 z-20 transition-colors w-6 h-6 md:w-12 md:h-12 flex items-center justify-center ${isBeginning ? 'swiper-button-disabled' : ''}`}>
                <svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="60px" height="126.056px" viewBox="225.957 476.972 60 126.056" enableBackground="new 225.957 476.972 60 126.056"
                >
                    <g id="_">
                        <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" d="M285.187,603.028c-0.205,0-0.411-0.103-0.564-0.256l-58.473-62.269c-0.257-0.308-0.257-0.769,0-1.026
		l58.473-62.268c0.308-0.308,0.77-0.308,1.077-0.052c0.308,0.308,0.308,0.77,0.052,1.077l-57.961,61.756l57.961,61.754
		c0.308,0.308,0.256,0.77-0.052,1.077C285.545,602.925,285.392,603.028,285.187,603.028z"/>
                    </g>
                </svg>
            </button>
            <button ref={nextRef} className={`absolute right-[15px] md:right-[30px] top-1/2 -translate-y-1/2 z-20 transition-colors w-6 h-6 md:w-12 md:h-12 flex items-center justify-center ${isEnd ? 'swiper-button-disabled' : ''}`}>
                <svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="60px" height="126.056px" viewBox="225.957 476.972 60 126.056" enableBackground="new 225.957 476.972 60 126.056"
                >
                    <g id="_">
                        <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" d="M226.728,476.972c0.205,0,0.411,0.103,0.564,0.256l58.473,62.269c0.257,0.308,0.257,0.769,0,1.026
		l-58.473,62.268c-0.308,0.308-0.769,0.308-1.077,0.052c-0.308-0.308-0.308-0.77-0.051-1.077l57.96-61.756l-57.96-61.755
		c-0.308-0.308-0.256-0.77,0.051-1.077C226.369,477.074,226.523,476.972,226.728,476.972z"/>
                    </g>
                </svg>
            </button>
        </div>
    );
}
