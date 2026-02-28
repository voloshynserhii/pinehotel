'use client';

import { useState } from 'react';
import { format, addDays, differenceInCalendarDays } from 'date-fns';

export function BookingButton({ slug, title }: { slug: string; title: string }) {
  const [checkIn] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [checkOut] = useState(format(addDays(new Date(), 2), 'yyyy-MM-dd'));
  const nights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));

  return (
    <a
      href="#"
      className="ibe w-full bg-[#c8b89a] text-cream-50 py-3 font-semibold hover:bg-[#b8a882] transition-colors block text-center"
      data-query-check_in_date={checkIn}
      data-query-check_out_date={checkOut}
      data-query-number_adults={2}
      data-query-number_children={0}
      data-query-numbernights={nights}
    >
      {title}
    </a>
  );
}
