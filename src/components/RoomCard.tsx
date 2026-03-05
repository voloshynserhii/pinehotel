'use client';
import Link from 'next/link';
import Image from 'next/image';
import type { Room } from '@/app/types';
import { useDictionary } from '@/context/DictionaryContext';
import { BookingButton, Slider } from '@/components';

interface RoomCardProps {
  room: Room;
  locale: string;
}

export function RoomCard({ room, locale }: RoomCardProps) {
  const dictionary = useDictionary();
  const roomPagePath = `/${locale}/rooms/${room.slug}`;
  const roomData = dictionary.Rooms.data[room.slug as keyof typeof dictionary.Rooms.data];

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="space-y-2 lg:w-[35%] lg:pr-16 flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-lora-important text-stone-900 group-hover:text-sage-700 transition-colors mb-5">
            {roomData?.name}
          </h3>

          <p className="text-stone-700 text-[17px] font-light">
            {roomData?.shortDescription}
          </p>
        </div>


        <div>
          <Link href={roomPagePath}>
            <span className="font-lora-important block border-b border-sage-900 pb-1 text-sage-900 font-normal text-base mb-5 hover:border-black transition-colors"
            >
              {dictionary.Rooms.moreInfo}
            </span>
          </Link>

          <BookingButton slug={room.slug} title={dictionary.Rooms.checkAvailability} />
        </div>

      </div>
      <div className="lg:w-[65%]">
        <Slider slides={room.images} className="h-[200px] lg:h-[350px]" />
      </div>
    </div>
  );
}
