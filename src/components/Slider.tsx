"use client";

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import NextIcon from '@/assets/icons/arrow-dx.svg';
import PrevIcon from '@/assets/icons/arrow-sx.svg';
import 'swiper/css';
import 'swiper/css/navigation';

export interface Slide {
    image: string;
    title: string;
    subtitle: string;
    link: string;
}

interface SliderProps {
    slides: (Slide | string)[];
}

const isSlide = (slide: Slide | string): slide is Slide => {
    return (slide as Slide).image !== undefined;
}

export function Slider({ slides }: SliderProps) {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const isImageGallery = slides && slides.length > 0 && typeof slides[0] === 'string';

    return (
        <div className="relative container mx-auto px-gutter py-12">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={isImageGallery ? 0 : 20}
                slidesPerView={1}
                loop={isImageGallery}
                speed={1000}
                autoplay={isImageGallery ? {
                    delay: 5000,
                    disableOnInteraction: false,
                } : false}
                navigation={{
                    nextEl: isImageGallery ? '.gallery-next' : '.custom-next',
                    prevEl: isImageGallery ? '.gallery-prev' : '.custom-prev',
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
                className="rooms-swiper"
            >
                {slides.map((slide) => {
                    if (isSlide(slide)) {
                        return (
                            <SwiperSlide key={`${slide.title}-${slide.image}`}>
                                <a href={slide.link}>
                                    <div className="relative overflow-hidden cursor-pointer group/card h-[500px]">
                                        <div className="relative w-full h-full transition-transform duration-500 ease-in-out group-hover/card:scale-110">
                                            <Image
                                                src={slide.image}
                                                alt={slide.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="absolute bottom-0 left-0 w-[80%] bg-white p-6 transition-transform duration-500 translate-y-full group-hover/card:translate-y-0 shadow-lg">
                                            <h3 className="text-2xl font-serif mb-2 text-gray-900 leading-tight">
                                                {slide.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 mb-4 tracking-wide">
                                                {slide.subtitle}
                                            </p>
                                            <span
                                                className="inline-block text-xs font-bold uppercase tracking-widest border-b border-gray-300 pb-1 hover:border-black transition-colors"
                                            >
                                                Show more
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        )
                    }

                    return (
                        <SwiperSlide key={slide}>
                            <div className="relative overflow-hidden cursor-pointer group/card h-[80vh]">
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

            {isImageGallery ? (
                <>
                    <button className="gallery-prev absolute left-[30px] top-1/2 -translate-y-1/2 z-20 transition-colors w-12 h-12 flex items-center justify-center">
                        <svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="60px" height="126.056px" viewBox="225.957 476.972 60 126.056" enableBackground="new 225.957 476.972 60 126.056"
                        >
                            <g id="_">
                                <path fill="#FFFFFF" d="M285.187,603.028c-0.205,0-0.411-0.103-0.564-0.256l-58.473-62.269c-0.257-0.308-0.257-0.769,0-1.026
		l58.473-62.268c0.308-0.308,0.77-0.308,1.077-0.052c0.308,0.308,0.308,0.77,0.052,1.077l-57.961,61.756l57.961,61.754
		c0.308,0.308,0.256,0.77-0.052,1.077C285.545,602.925,285.392,603.028,285.187,603.028z"/>
                            </g>
                        </svg>
                    </button>
                    <button className="gallery-next absolute right-[30px] top-1/2 -translate-y-1/2 z-20 transition-colors w-12 h-12 flex items-center justify-center">
                        <svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="60px" height="126.056px" viewBox="225.957 476.972 60 126.056" enableBackground="new 225.957 476.972 60 126.056"
                        >
                            <g id="_">
                                <path fill="#FFFFFF" d="M226.728,476.972c0.205,0,0.411,0.103,0.564,0.256l58.473,62.269c0.257,0.308,0.257,0.769,0,1.026
		l-58.473,62.268c-0.308,0.308-0.769,0.308-1.077,0.052c-0.308-0.308-0.308-0.77-0.051-1.077l57.96-61.756l-57.96-61.755
		c-0.308-0.308-0.256-0.77,0.051-1.077C226.369,477.074,226.523,476.972,226.728,476.972z"/>
                            </g>
                        </svg>
                    </button>
                </>
            ) : (
                <>
                    <button className={`custom-prev absolute left-[30px] top-1/2 -translate-y-1/2 z-20 bg-white w-10 h-10 flex items-center justify-center shadow-md transition-opacity ${isBeginning ? 'hidden' : ''}`}>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button className={`custom-next absolute right-[30px] top-1/2 -translate-y-1/2 z-20 bg-white w-10 h-10 flex items-center justify-center shadow-md transition-opacity ${isEnd ? 'hidden' : ''}`}>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M9 6l6 6-6 6" />
                        </svg>
                    </button>
                </>
            )}
        </div>
    );
}
