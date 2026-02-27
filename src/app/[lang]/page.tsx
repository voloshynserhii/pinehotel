import { getDictionary } from '@/get-dictionary';
import {
  Amenities,
  CTA,
  Hero,
  Introduction,
  Slider
} from '@/components';
import { Locale } from '@/get-dictionary';
import { rooms } from '@/content/rooms';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const locale = lang;

  const slides = rooms.map(room => ({
    image: room.images[0],
    title: room.name,
    subtitle: room.shortDescription,
    link: `/${locale}/rooms/${room.slug}`
  }));

  return (
    <>
      <Hero
        title={dict.Home.heroTitle}
        subtitle={dict.Home.heroSubtitle}
        showBookingBar
        isDark={false}
      />
      <Introduction title={dict.Home.introTitle} text={dict.Home.introText} paragraph={dict.Home.introParagraph} />

      <section className="py-section bg-cream-50">
        <div className="container mx-auto px-gutter">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8 mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800">
              Every room tells a story
            </h2>
            <div className="all-rooms-container">
              <div className="flex justify-center">
                <a
                  href={`/${locale}/rooms`}
                  className="px-6 py-3 bg-[#c8b89a] text-cream-50 font-medium hover:bg-[#b8a882] transition-colors inline-block"
                >
                  {dict.Home.exploreRooms}
                </a>
              </div>
            </div>
          </div>
          <Slider slides={slides} />
        </div>
      </section>
      
      {/* <CTA dict={dict} locale={locale} /> */}
    </>
  );
}
