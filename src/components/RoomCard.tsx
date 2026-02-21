import Link from 'next/link';
import type { Room } from '@/app/types';
import { formatPrice } from '@/lib/utils';

interface RoomCardProps {
  room: Room;
  locale: string;
}

export function RoomCard({ room, locale }: RoomCardProps) {
  const roomPagePath = `/${locale}/rooms/${room.slug}`;

  return (
    <Link href={roomPagePath}>
      <div className="group cursor-pointer">
        {/* Image */}
        <div className="aspect-video bg-stone-200 rounded-lg overflow-hidden mb-4">
          <div className="w-full h-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
            <span className="text-stone-500 text-sm">Room Image</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-sage-700 transition-colors">
            {room.name}
          </h3>
          <p className="text-stone-700 text-sm line-clamp-2">
            {room.shortDescription}
          </p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-lg font-semibold text-sage-700">
              {formatPrice(room.price)}
            </span>
            <span className="text-sm text-stone-500">
              {room.capacity} {room.capacity === 1 ? 'guest' : 'guests'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
