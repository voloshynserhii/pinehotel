"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

import { Locale } from '@/get-dictionary';

interface RoomsProps {
  dict: {
    Home: {
      exploreRooms: string;
    };
  };
  locale: Locale;
}

const rooms = [
    {
        id: 1,
        title: 'Junior Suite',
        guests: '2 Adults',
        image: '/images/rooms/ROOM_1_1.jpg',
        link: '/rooms/junior-suite',
    },
    {
        id: 2,
        title: 'Doble Superior',
        guests: '2 Adults',
        image: '/images/rooms/ROOM_2_1.jpg',
        link: '/rooms/doble-superior',
    },
    {
        id: 3,
        title: 'Family Room',
        guests: '2 Adults, 2 Children',
        image: '/images/rooms/ROOM_3_1.jpg',
        link: '/rooms/family-room',
    },
    {
        id: 4,
        title: 'The Pines Suite',
        guests: '2 Adults',
        image: '/images/rooms/ROOM_4_1.jpg',
        link: '/rooms/the-pines-suite',
    },
    {
        id: 5,
        title: 'Garden View Room',
        guests: '2 Adults',
        image: '/images/rooms/ROOM_5_1.jpg',
        link: '/rooms/garden-view-room',
    },
]

export function RoomsSlider({ dict, locale }: RoomsProps) {
    return (
        <section className="py-section bg-cream-50">
            <div className="container mx-auto px-gutter">
                <div className="flex justify-between items-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-serif text-gray-800">
                        Every room tells a story
                    </h2>
                    <div className="all-rooms-container">
                        <div className="flex justify-center">
                            <a
                                href={`/rooms`}
                                className="px-6 py-3 bg-[#c8b89a] text-cream-50 rounded font-medium hover:bg-[#b8a882] transition-colors inline-block"
                            >
                                {dict.Home.exploreRooms}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative group">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        className="rooms-swiper"
                    >
                        {rooms.map((room) => (
                            <SwiperSlide key={room.id}>
                                <div className="relative overflow-hidden cursor-pointer group/card h-[500px]">
                                    {/* Картинка зі збільшенням */}
                                    <div className="relative w-full h-full transition-transform duration-500 ease-in-out group-hover/card:scale-110">
                                        <Image
                                            src={room.image}
                                            alt={room.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Білий блок, що виїжджає знизу */}
                                    <div className="absolute bottom-0 left-0 w-[80%] bg-white p-6 transition-transform duration-500 translate-y-full group-hover/card:translate-y-0 shadow-lg">
                                        <h3 className="text-2xl font-serif mb-2 text-gray-900 leading-tight">
                                            {room.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-4 tracking-wide">
                                            {room.guests}
                                        </p>
                                        <a
                                            href={room.link}
                                            className="inline-block text-xs font-bold uppercase tracking-widest border-b border-gray-300 pb-1 hover:border-black transition-colors"
                                        >
                                            Show more
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Кастомні стрілки (як на скріншоті) */}
                    <button className="custom-prev absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white w-10 h-10 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
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
                    <button className="custom-next absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white w-10 h-10 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M9 5l6 6-6 6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}