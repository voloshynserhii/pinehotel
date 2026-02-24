import { getDictionary, Locale } from '@/get-dictionary';
import { Hero, RoomCard } from '@/components';
import { rooms } from '@/content/rooms';

export default async function RoomsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.Rooms;
  const locale = lang;

  return (
    <>
      <Hero imgSrc='https://static11.com-hotel.com/uploads/hotel/306737/photo/hotel-mas-el-cuquello_172656168612.jpg' title={t.title} subtitle={t.subtitle} />

      <section className="py-section container mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} locale={locale} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-section pt-section border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-4 text-stone-900">
              Room Features
            </h2>
            <p className="text-stone-700 mb-6">
              All our rooms feature premium bedding, modern en-suite bathrooms,
              free Wi-Fi, and views of the surrounding countryside. Each room has
              been thoughtfully designed to provide comfort while preserving the
              authentic character of our historic property.
            </p>
            <h3 className="text-xl font-serif font-bold mb-3 text-stone-900">
              Included in All Rooms
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-stone-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-sage-700">✓</span> Daily housekeeping
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage-700">✓</span> Premium toiletries
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage-700">✓</span> Luxury bedding
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage-700">✓</span> Climate control
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage-700">✓</span> Free Wi-Fi
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage-700">✓</span> 24/7 Room service
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
