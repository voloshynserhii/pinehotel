import Link from 'next/link';
import { getDictionary, Locale } from '@/get-dictionary';
import { Hero, Introduction } from '@/components';

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
      <Hero imgSrc='https://plus.unsplash.com/premium_photo-1733342494312-b74cc27c4681?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title={t.title} subtitle={t.subtitle} />

      <section className="py-section container mx-auto px-gutter">
        <Introduction title={t.welcome} text={t.description} paragraph={t.welcomeDescription} />

        {/* Restaurant Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 text-center">
          <div className="space-y-4">
            <div className="text-5xl">🍴</div>
            <h3 className="text-xl font-serif font-bold text-stone-900">
              {t.localCuisineTitle}
            </h3>
            <p className="text-stone-700">
              {t.localCuisineDescription}
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl">🍷</div>
            <h3 className="text-xl font-serif font-bold text-stone-900">
              {t.wineSelectionTitle}
            </h3>
            <p className="text-stone-700">
              {t.wineSelectionDescription}
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl">👥</div>
            <h3 className="text-xl font-serif font-bold text-stone-900">
              {t.socialDiningTitle}
            </h3>
            <p className="text-stone-700">
              {t.socialDiningDescription}
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
              <p className="font-semibold text-stone-900 mb-2">{t.breakfast}</p>
              <p className="text-stone-700">{t.breakfastHours}</p>
            </div>
            <div>
              <p className="font-semibold text-stone-900 mb-2">{t.dinner}</p>
              <p className="text-stone-700">
                {t.dinnerHours}
              </p>
            </div>
            <div>
              <p className="font-semibold text-stone-900 mb-2">
                {t.weekends}
              </p>
              <p className="text-stone-700">{t.weekendsHours}</p>
            </div>
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
