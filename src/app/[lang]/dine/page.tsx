import { getDictionary, Locale } from '@/get-dictionary';
import { Hero } from '@/components';

export default async function DinePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.Dine;

  return (
    <>
      <Hero title={t.title} subtitle={t.subtitle} />

      <section className="py-section container mx-auto px-gutter">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-serif font-bold mb-6 text-stone-900">
            Welcome to La Ruta
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            {t.description}
          </p>
          <p className="text-stone-700 leading-relaxed">
            Our chef sources local ingredients from nearby farms and producers,
            celebrating the flavors of the region. Whether it's a leisurely
            breakfast, relaxed lunch, or intimate dinner, La Ruta provides the
            perfect setting for culinary experiences that honor both tradition
            and contemporary taste.
          </p>
        </div>

        {/* Restaurant Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <div className="space-y-4">
            <div className="text-5xl">🍴</div>
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Local Cuisine
            </h3>
            <p className="text-stone-700">
              Seasonal menus featuring regional specialties and local producers
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl">🍷</div>
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Wine Selection
            </h3>
            <p className="text-stone-700">
              Curated wines from Spanish vineyards and international producers
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl">👥</div>
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Social Dining
            </h3>
            <p className="text-stone-700">
              Intimate atmosphere perfect for meeting other guests or private
              celebrations
            </p>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="bg-cream-50 p-8 rounded-lg my-12">
          <h3 className="text-2xl font-serif font-bold mb-6 text-stone-900">
            {t.openingHours}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-semibold text-stone-900 mb-2">Breakfast</p>
              <p className="text-stone-700">7:00 AM - 10:00 AM daily</p>
            </div>
            <div>
              <p className="font-semibold text-stone-900 mb-2">Lunch</p>
              <p className="text-stone-700">
                12:30 PM - 3:00 PM (closed Mondays)
              </p>
            </div>
            <div>
              <p className="font-semibold text-stone-900 mb-2">Dinner</p>
              <p className="text-stone-700">
                7:00 PM - 11:00 PM (closed Tuesdays)
              </p>
            </div>
            <div>
              <p className="font-semibold text-stone-900 mb-2">
                Weekend Brunch
              </p>
              <p className="text-stone-700">10:00 AM - 1:00 PM (Sat & Sun)</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-serif font-bold mb-4 text-stone-900">
            Make a Reservation
          </h3>
          <p className="text-stone-700 mb-6">
            For reservations and special dietary requirements, please contact us
          </p>
          <button className="px-8 py-3 bg-sage-700 text-cream-50 rounded font-semibold hover:bg-sage-800 transition-colors">
            Reserve a Table
          </button>
        </div>
      </section>
    </>
  );
}
