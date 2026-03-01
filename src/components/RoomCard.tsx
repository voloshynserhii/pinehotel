'use client';
import Link from 'next/link';
import Image from 'next/image';
import type { Room } from '@/app/types';
import { useDictionary } from '@/context/DictionaryContext';

interface RoomCardProps {
  room: Room;
  locale: string;
}

export function RoomCard({ room, locale }: RoomCardProps) {
  const dictionary = useDictionary();
  const roomPagePath = `/${locale}/rooms/${room.slug}`;

  return (
    <Link href={roomPagePath}>
      <div className="group cursor-pointer">
        {/* Image */}
        <div className="aspect-video bg-stone-200 overflow-hidden mb-4 relative">
          {room.images[0] && <Image
            src={room.images[0]}
            alt={room.name}
            fill
            className="object-cover"
          />}
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
            <span className="text-sm text-stone-500">
              {room.capacity}{' '}
              {room.capacity === 1
                ? dictionary.Rooms.guest
                : dictionary.Rooms.guests}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
