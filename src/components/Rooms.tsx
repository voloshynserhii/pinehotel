
import { RoomCard } from '@/components';
import { rooms } from '@/content/rooms';
import { Locale } from '@/get-dictionary';

interface RoomsProps {
  dict: {
    Home: {
      exploreRooms: string;
    };
  };
  locale: Locale;
}

export function Rooms({ dict, locale }: RoomsProps) {
  return (
    <section className="py-section bg-cream-50">
      <div className="container mx-auto px-gutter">
        <h2 className="text-4xl font-serif font-bold mb-4 text-center text-stone-900">
          {dict.Home.exploreRooms}
        </h2>
        <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
          Choose from our thoughtfully designed rooms, each combining comfort
          with contemporary elegance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} locale={locale} />
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href={`/${locale}/rooms`}
            className="px-6 py-3 bg-[#c8b89a] text-cream-50 rounded font-medium hover:bg-[#b8a882] transition-colors inline-block"
          >
            {dict.Home.exploreRooms}
          </a>
        </div>
      </div>
    </section>
  );
}
