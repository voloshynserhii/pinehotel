'use client';

import { usePathname } from 'next/navigation';

export function BookingButton({ slug }: { slug: string }) {
  const pathname = usePathname();
  const lang = pathname.split('/')[1];
  const handleClick = () => {
    window.location.href = `/${lang}/booking?room=${slug}`;
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-[#c8b89a] text-cream-50 py-3 rounded font-semibold hover:bg-[#b8a882] transition-colors"
    >
      Book This Room
    </button>
  );
}
