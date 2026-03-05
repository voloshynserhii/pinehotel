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
      <Hero showBookingBar imgSrc='/images/rooms/ROOM_2_1.jpg' mobileImgSrc='/images/mobile/hotel1.png' title={t.title} subtitle={t.subtitle} />

      <section className="py-section container mx-auto px-gutter max-w-7xl">
        <div className="flex flex-col space-y-14">
          {rooms.map((room) => (
            <RoomCard key={room.slug} room={room} locale={locale} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-section pt-section border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-4 text-stone-900">
              {t.roomFeatures}
            </h2>
            <p className="text-stone-700 mb-6">{t.introParagraph}</p>
            <h3 className="text-xl font-serif font-bold mb-3 text-stone-900">
              {t.includedInAllRoomsTitle}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-stone-700 text-sm">
              {t.allRoomsAmenities.map((amenity) => (
                <li key={amenity} className="flex items-start gap-2">
                  <span className="text-sage-700">✓</span> {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
