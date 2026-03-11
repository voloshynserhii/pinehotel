import Link from 'next/link';
import { getDictionary, Locale } from '@/get-dictionary';
import { Hero, Introduction, RestaurantFeatures } from '@/components';

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
      <Hero imgSrc='/images/dine.png' mobileImgSrc='/images/mobile/dine.png' title={t.title} subtitle={t.subtitle} />

      <section className="container mx-auto px-gutter pb-16">
        <Introduction title={t.welcome} text={t.description} paragraph={t.welcomeDescription} />

        <RestaurantFeatures t={t} />

        {/* Opening Hours */}
        <div className="bg-cream-50 pb-8 rounded-lg my-12 flex flex-col md:w-[50%] margin-auto">
          <h3 className="text-2xl font-serif font-bold mb-6 text-stone-900">
            {t.openingHours}
          </h3>

          <div className="flex flex-col">
            {(t.schedule as Array<{ day: string; hours: string }>).map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <p className="font-semibold text-stone-900">{item.day}</p>
                <p className="text-stone-700 text-xs sm:text-lg">{item.hours}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-serif font-bold mb-4 text-stone-900">
            {t.makeReservation}
          </h3>
          <p className="text-stone-700 mb-6">
            {t.reservationInfo}
          </p>
          <Link href="https://wa.me/34624088379" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-[#c8b89a] text-cream-50 font-semibold hover:bg-[#b8a882] transition-colors">
            {t.reserveTable}
          </Link>
        </div>
      </section>
    </>
  );
}
