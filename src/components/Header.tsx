'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useDictionary } from '@/context/DictionaryContext';
import { format, addDays } from 'date-fns';

export function Header() {
  const dict = useDictionary();
  const navigation = dict.Navigation;
  const pathname = usePathname();
  const lang = pathname.split('/')[1] || 'en';
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: navigation.rooms, href: `/${lang}/rooms` },
    { label: navigation.dine, href: `/${lang}/dine` },
    { label: navigation.experiences, href: `/${lang}/experiences` },
    /* { label: navigation.extras, href: `/${lang}/extras` }, */
    { label: navigation.contact, href: `/${lang}/contact` },
  ];

  const checkIn = format(new Date(), 'yyyy-MM-dd');
  const checkOut = format(addDays(new Date(), 2), 'yyyy-MM-dd');
  const bookingUrl = `${process.env.NEXT_PUBLIC_BOOKING_URL}?locale=${lang}&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=EUR&checkInDate=${checkIn}&checkOutDate=${checkOut}&trackPage=no`;

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-[9999]
        h-[82px]
        bg-black/20
        transition-all duration-700
        text-sm uppercase tracking-wider
      "
    >
      <div className="max-w-auto mx-auto h-full px-6 flex items-center justify-between lg:justify-center relative">
        {/* Logo */}
        <Link
          href={`/${lang}`}
          className="text-white text-xl tracking-wide"
        >
          <Image src="/images/logo.svg" alt="The Pines Hotel" width={250} height={70} />
        </Link>

        <Link
          key={`/${lang}/contact`}
          href={`/${lang}/contact`}
          className="absolute right-[35px] text-center text-white text-xs uppercase tracking-wider transition hidden xl:block border-b-2 border-transparent hover:border-white"
        >
          {navigation.contact}
        </Link>

        <div className="absolute right-[130px] lg:right-[200px] top-1/2 -translate-y-1/2">
          <nav className="hidden md:block items-center">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
              xl:w-[145px] xl:h-[55px] w-[100px] h-[40px] flex items-center justify-center
              bg-[#c8b89a]
              text-white text-sm uppercase tracking-wider
              hover:bg-[#b8a882]
              transition
            "
            >
              {navigation.booking}
            </a>
          </nav>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white absolute right-[50px] top-1/2 -translate-y-1/2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <span className="h-[1px] bg-white w-full" />
            <span className="h-[1px] bg-white w-full" />
            <span className="h-[1px] bg-white w-full" />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            xl:hidden
            fixed inset-0 w-full h-screen bg-black text-white z-[10000]
          "
        >
          <div
            className="
              relative
              h-full w-full
              flex flex-col items-center justify-center
            "
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="h-[1px] bg-white w-full rotate-45 absolute" />
                <span className="h-[1px] bg-white w-full -rotate-45 absolute" />
              </div>
            </button>

            {/* Logo */}
            <Link
              href={`/${lang}`}
              className="absolute top-6 left-6 text-white text-xl font-serif tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              <Image src="/images/logo.svg" alt="The Pines Hotel" width={100} height={40} />
            </Link>

            {/* Navigation */}
            <nav className="flex flex-col items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl font-bold uppercase tracking-wider hover:opacity-80 transition"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="ibe
                  mt-6 px-8 py-3
                  bg-[#c8b89a]
                  text-black text-lg font-bold uppercase tracking-wider
                  hover:bg-[#b8a882]
                  transition
                "
              >
                {navigation.booking}
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}