import type { Room } from '@/app/types'
import Amenity from './Amenity'

export const Amenities = ({ data }: { data: Room['characteristics'] | Room['services'] }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4'>
      {data.map(({ icon, name }) => (
        <Amenity key={name} icon={icon} name={name} />
      ))}
    </div>
  )
}
