'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDictionary } from '@/context/DictionaryContext';

export function PageTabs() {
    const dict = useDictionary();
    const navigation = dict.Navigation;
    const pathname = usePathname();
    const lang = pathname.split('/')[1] || 'en';

    const tabs = [
        { label: navigation.rooms, href: `/${lang}/rooms` },
        { label: navigation.dine, href: `/${lang}/dine` },
        { label: navigation.experiences, href: `/${lang}/experiences` },
        { label: navigation.extras, href: `/${lang}/extras` },
    ];

    return (
        <div className="w-full bg-[#f5f5f5]">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="-mb-px flex h-[70px] items-center justify-center overflow-x-auto">
                    {tabs.map((tab) => {
                        const active = pathname.startsWith(tab.href);

                        return (
                            <Link
                                key={tab.href}
                                href={tab.href}
                                className={`border-b-2 min-w-[25%] flex items-center justify-center h-full cursor-pointer text-black ${active
                                ? 'border-black'
                                : 'border-transparent hover:border-black'
                                }`}>
                                <p className='uppercase text-xs tracking-wider transition text-center font-medium'>
                                    {tab.label}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}