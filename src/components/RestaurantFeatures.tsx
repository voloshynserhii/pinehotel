'use client';

import { Icon } from '@/components';

export const RestaurantFeatures = ({ t }: { t: any }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-12 text-center'>

      <div className='space-y-4'>
        <div className='text-5xl'>
          <Icon name='icon-grill' className='text-stone-900 h-12 w-12 mx-auto' />
        </div>
        <h3 className='text-xl font-serif font-bold text-stone-900'>
          {t.bbqTitle}
        </h3>
        <p className='text-stone-700'>{t.bbqDescription}</p>
      </div>

      <div className='space-y-4'>
        <div className='text-5xl'>
          <Icon
            name='icon-light'
            className='text-stone-900 h-12 w-12 mx-auto'
          />
        </div>
        <h3 className='text-xl font-serif font-bold text-stone-900'>
          {t.terraceTitle}
        </h3>
        <p className='text-stone-700'>{t.terraceDescription}</p>
      </div>

      <div className='space-y-4'>
        <div className='text-5xl'>
          <Icon
            name='icon-wine'
            className='text-stone-900 h-12 w-12 mx-auto'
          />
        </div>
        <h3 className='text-xl font-serif font-bold text-stone-900'>
          {t.localCuisineTitle}
        </h3>
        <p className='text-stone-700'>{t.localCuisineDescription}</p>
      </div>
    </div>
  );
};
