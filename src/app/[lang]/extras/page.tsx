import { getDictionary, Locale } from '@/get-dictionary';
import { Hero } from '@/components';
import { extras } from '@/content/extras';
import { formatPrice } from '@/lib/utils';

export default async function ExtrasPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.Extras;

  return (
    <>
      <Hero showBookingBar imgSrc='https://static11.com-hotel.com/uploads/hotel/306737/photo/hotel-mas-el-cuquello_17265616845.jpg' title={t.title} subtitle={t.subtitle} />

      <section className="py-section container mx-auto px-gutter">
        <p className="text-center text-lg text-stone-700 mb-12 max-w-2xl mx-auto">
          {t.description}
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {extras.map((extra) => (
            <div
              key={extra.id}
              className="border border-stone-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  {extra.title}
                </h3>
                {extra.price && (
                  <span className="text-lg font-semibold text-sage-700">
                    {formatPrice(extra.price)} +
                  </span>
                )}
              </div>
              <p className="text-stone-700 mb-4">{extra.description}</p>
              <button className="text-sage-700 font-semibold text-sm hover:text-sage-800 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* Booking Note */}
        <div className="bg-cream-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif font-bold mb-4 text-stone-900">
            Ready to Book?
          </h3>
          <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
            Select your add-on services when booking your room, or contact our
            team to arrange services during your stay.
          </p>
          <button className="px-8 py-3 bg-[#c8b89a] text-cream-50 rounded font-semibold hover:bg-[#b8a882] transition-colors">
            Contact Our Team
          </button>
        </div>
      </section>
    </>
  );
}
