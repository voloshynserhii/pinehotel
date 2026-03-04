'use client'

import Icon, { icons } from './Icon'

const Amenity = ({ icon, name }: { icon: keyof typeof icons; name: string }) => {
  return (
    <div className='flex flex-col items-center gap-4 text-stone-700'>
      <Icon name={icon} className='shrink-0' />
      <span className='text-sm font-light text-stone-600'>{name}</span>
    </div>
  )
}

export default Amenity
