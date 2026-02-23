'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useDictionary } from '@/context/DictionaryContext';

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
    { label: navigation.extras, href: `/${lang}/extras` },
    { label: navigation.contact, href: `/${lang}/contact` },
  ];

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-[9999]
        h-[95px]
        bg-black/50
        transition-all duration-700
      "
    >
      <div className="max-w-[1400px] mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={`/${lang}`}
          className="text-white text-xl font-serif tracking-wide"
        >
          The Pines Hotel
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white text-sm uppercase tracking-wider hover:opacity-80 transition"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={`/${lang}/booking`}
            className="
              ml-6 px-6 py-2
              bg-[#c8b89a]
              text-black text-sm uppercase tracking-wider
              hover:bg-[#b8a882]
              transition
            "
          >
            {navigation.booking}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white"
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
              The Pines Hotel
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

              <Link
                href={`/${lang}/booking`}
                onClick={() => setIsOpen(false)}
                className="
                  mt-6 px-8 py-3
                  bg-[#c8b89a]
                  text-black text-lg font-bold uppercase tracking-wider
                  hover:bg-[#b8a882]
                  transition
                "
              >
                {navigation.booking}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}