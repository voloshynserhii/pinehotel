import { getDictionary } from '@/get-dictionary';
import { Hero, RoomCard } from '@/components';
import { rooms } from '@/content/rooms';
import { Locale } from '@/get-dictionary';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const locale = lang;

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={dict.Home.heroTitle}
        subtitle={dict.Home.heroSubtitle}
        isDark={false}
      />

      {/* Introduction Section */}
      <section className="py-section bg-cream-50">
        <div className="container mx-auto px-gutter max-w-2xl">
          <h2 className="text-4xl font-serif font-bold mb-6 text-stone-900">
            {dict.Home.introTitle}
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-8">
            {dict.Home.introText}
          </p>
          <p className="text-stone-600 leading-relaxed">
            Guests can enjoy La Ruta, our on-site restaurant, offering relaxed dining in a warm and social setting. Outside, the property opens onto well-maintained gardens, outdoor seating areas, and a seasonal swimming pool, providing space to unwind, socialise, or simply enjoy the peaceful surroundings.
          </p>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-gutter">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-stone-900">
            {dict.Home.amenities}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="font-serif text-xl font-bold mb-2 text-stone-900">
                {dict.Home.amenityRestaurant}
              </h3>
              <p className="text-stone-600 text-sm">
                La Ruta restaurant with local cuisine
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏊</div>
              <h3 className="font-serif text-xl font-bold mb-2 text-stone-900">
                {dict.Home.amenityPool}
              </h3>
              <p className="text-stone-600 text-sm">
                Seasonal swimming pool
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="font-serif text-xl font-bold mb-2 text-stone-900">
                {dict.Home.amenityGardens}
              </h3>
              <p className="text-stone-600 text-sm">
                Beautiful gardens and outdoor spaces
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🅿️</div>
              <h3 className="font-serif text-xl font-bold mb-2 text-stone-900">
                {dict.Home.amenityParking}
              </h3>
              <p className="text-stone-600 text-sm">
                Complimentary parking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-section bg-cream-50">
        <div className="container mx-auto px-gutter">
          <h2 className="text-4xl font-serif font-bold mb-4 text-center text-stone-900">
            {dict.Home.exploreRooms}
          </h2>
          <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
            Choose from our thoughtfully designed rooms, each combining comfort with contemporary elegance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} locale={locale} />
            ))}
          </div>
          <div className="flex justify-center">
            <a
              href={`/${locale}/rooms`}
              className="px-6 py-3 bg-sage-700 text-cream-50 rounded font-medium hover:bg-sage-800 transition-colors inline-block"
            >
              {dict.Home.exploreRooms}
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-sage-700">
        <div className="container mx-auto px-gutter text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 text-cream-50">
            Ready to experience The Pines?
          </h2>
          <p className="text-lg text-cream-100 mb-8 max-w-2xl mx-auto">
            Book your peaceful countryside retreat today and discover why guests return to The Pines Hotel year after year.
          </p>
          <a
            href={`/${locale}/booking`}
            className="inline-block px-8 py-4 bg-cream-100 text-stone-900 rounded font-semibold hover:bg-cream-200 transition-colors"
          >
            {dict.Home.bookNow}
          </a>
        </div>
      </section>
    </>
  );
}
