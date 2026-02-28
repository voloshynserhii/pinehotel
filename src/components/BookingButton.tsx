'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { format, addDays, differenceInCalendarDays } from 'date-fns';

export function BookingButton({ slug, title }: { slug: string; title: string }) {
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'en';
  const [checkIn] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [checkOut] = useState(format(addDays(new Date(), 2), 'yyyy-MM-dd'));

  const bookingUrl = `${process.env.NEXT_PUBLIC_BOOKING_URL}?locale=${locale}&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=EUR&checkInDate=${checkIn}&checkOutDate=${checkOut}&trackPage=no`;

  return (
    <a
      href={bookingUrl}
      className="w-full bg-[#c8b89a] text-cream-50 py-3 font-semibold hover:bg-[#b8a882] transition-colors block text-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
}
