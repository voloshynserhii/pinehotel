'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useDictionary } from '@/context/DictionaryContext';

export function Header() {
  const dict = useDictionary();
  const navigation = dict.Navigation;
  const pathname = usePathname();
  const lang = pathname.split('/')[1];
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: navigation.home, href: `/${lang}` },
    { label: navigation.rooms, href: `/${lang}/rooms` },
    { label: navigation.dine, href: `/${lang}/dine` },
    { label: navigation.experiences, href: `/${lang}/experiences` },
    { label: navigation.extras, href: `/${lang}/extras` },
    { label: navigation.contact, href: `/${lang}/contact` },
  ];

  const isActive = (href: string) => {
    // Handle home page specifically
    if (href === `/${lang}`) {
      return pathname === `/${lang}`;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-cream-50 border-b border-stone-200">
      <nav className="container mx-auto px-gutter py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={`/${lang}`}
          className="text-2xl font-serif font-bold text-stone-900"
        >
          The Pines
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? 'text-sage-700 border-b-2 border-sage-500'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={`/${lang}/booking`}
            className="px-6 py-2 bg-sage-700 text-cream-50 rounded text-sm font-medium hover:bg-sage-800 transition-colors"
          >
            {navigation.booking}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className="w-full h-0.5 bg-stone-700"></span>
          <span className="w-full h-0.5 bg-stone-700"></span>
          <span className="w-full h-0.5 bg-stone-700"></span>
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-cream-50 border-b border-stone-200 md:hidden">
            <div className="container mx-auto px-gutter py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-sage-700'
                      : 'text-stone-700 hover:text-stone-900'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={`/${lang}/booking`}
                className="px-6 py-2 bg-sage-700 text-cream-50 rounded text-sm font-medium hover:bg-sage-800 transition-colors inline-block w-fit"
                onClick={() => setIsOpen(false)}
              >
                {navigation.booking}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
