'use client';

import type { Room } from '@/app/types';
import Amenity from './Amenity';

export const Amenities = ({
  data,
  dict,
  slug,
}: {
  data: Room['characteristics'] | Room['services'];
  dict: { [key: string]: { [key: string]: string } };
  slug: string;
}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 gap-x-2'>
      {data.map(({ icon, name }) => (
        <Amenity key={name} icon={icon} name={dict[slug]?.[name] || name} />
      ))}
    </div>
  );
};

