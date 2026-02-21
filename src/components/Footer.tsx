'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDictionary } from '@/context/DictionaryContext';

export function Footer() {
  const dict = useDictionary();
  const { Footer: footer, Contact: contact } = dict;
  const pathname = usePathname();
  const lang = pathname.split('/')[1];

  return (
    <footer className="bg-stone-900 text-cream-50 py-section">
      <div className="container mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-section mb-section">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">The Pines Hotel</h3>
            <p className="text-cream-200 text-sm">{contact.location}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${lang}/rooms`}
                  className="hover:text-sage-300 transition-colors"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/dine`}
                  className="hover:text-sage-300 transition-colors"
                >
                  Dine
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/experiences`}
                  className="hover:text-sage-300 transition-colors"
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/contact`}
                  className="hover:text-sage-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{contact.title}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+34123456789"
                  className="hover:text-sage-300 transition-colors"
                >
                  +34 (0) 123 456 789
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@thepineshotel.com"
                  className="hover:text-sage-300 transition-colors"
                >
                  info@thepineshotel.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">{footer.followUs}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-sage-300 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sage-300 transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-stone-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream-300">
          <p>{footer.copyright}</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-cream-50 transition-colors">
              {footer.privacy}
            </Link>
            <Link href="#" className="hover:text-cream-50 transition-colors">
              {footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
