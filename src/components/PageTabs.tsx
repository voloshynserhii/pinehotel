'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDictionary } from '@/context/DictionaryContext';
import { useState } from 'react';
import { rooms } from '@/content/rooms';

export function PageTabs() {
    const dict = useDictionary();
    const navigation = dict.Navigation;
    const pathname = usePathname();
    const lang = pathname.split('/')[1] || 'en';
    const [isRoomsDropdownOpen, setIsRoomsDropdownOpen] = useState(false);

    const tabs = [
        { label: navigation.dine, href: `/${lang}/dine` },
        { label: navigation.experiences, href: `/${lang}/experiences` },
        /* { label: navigation.extras, href: `/${lang}/extras` }, */
    ];

    const roomsTab = { label: navigation.rooms, href: `/${lang}/rooms` };
    const active = pathname.startsWith(roomsTab.href);

    return (
        <div
            className="w-full bg-[#f5f5f5] relative z-20"
            onMouseLeave={() => setIsRoomsDropdownOpen(false)}
        >
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="-mb-px flex h-[70px] items-center justify-center overflow-x-auto">
                    <Link
                        href={roomsTab.href}
                        className={`border-b-2 w-1/4 h-full flex items-center justify-center cursor-pointer text-black ${active || isRoomsDropdownOpen
                            ? 'border-black'
                            : 'border-transparent hover:border-black'
                            }`}
                        onMouseEnter={() => setIsRoomsDropdownOpen(true)}
                    >
                        <p className='uppercase text-xs tracking-wider transition text-center font-medium'>
                            {roomsTab.label}
                        </p>
                    </Link>
                    {tabs.map((tab) => {
                        const active = pathname.startsWith(tab.href);

                        return (
                            <Link
                                key={tab.href}
                                href={tab.href}
                                onMouseEnter={() => setIsRoomsDropdownOpen(false)}
                                className={`border-b-2 w-1/4 flex items-center justify-center h-full cursor-pointer text-black ${active
                                    ? 'border-black'
                                    : 'border-transparent hover:border-black'
                                    }`}
                            >
                                <p className='uppercase text-xs tracking-wider transition text-center font-medium'>
                                    {tab.label}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </div>
            
            {isRoomsDropdownOpen && (
                <div className="w-full bg-[#f5f5f5] absolute left-0 top-full h-auto shadow-md">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="flex flex-wrap h-auto py-4 items-center justify-center">
                            {rooms.map((room) => {
                                const roomPath = `/${lang}/rooms/${room.slug}`;
                                const isRoomActive = pathname === roomPath;
                                const roomData = dict.Rooms.data[room.slug as keyof typeof dict.Rooms.data];

                                return (
                                    <Link
                                        key={room.slug}
                                        href={roomPath}
                                        className={`w-1/4 h-9 flex items-center justify-center h-full cursor-pointer text-black hover:text-gray-500 ${isRoomActive
                                            ? 'font-bold'
                                            : 'hover:font-bold'
                                            }`}
                                    >
                                        <p className='font-lora-important text-sm tracking-wider transition text-center font-[400]'>
                                            {roomData?.name}
                                        </p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}