'use client';

import Link from 'next/link';
import { useDictionary } from '@/context/DictionaryContext';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const dict = useDictionary();
  const t = dict.Common;
  const pathname = usePathname();
  const lang = pathname.split('/')[1];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cream-50 px-gutter">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-serif font-bold text-stone-900 mb-4">
          404
        </h1>
        <p className="text-2xl font-serif font-bold text-stone-700 mb-4">
          {t.error}
        </p>
        <p className="text-stone-600 mb-8">
          Sorry, the page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <Link
          href={`/${lang}`}
          className="inline-block px-6 py-3 bg-sage-700 text-cream-50 rounded font-semibold hover:bg-sage-800 transition-colors"
        >
          {t.back} to Home
        </Link>
      </div>
    </div>
  );
}
