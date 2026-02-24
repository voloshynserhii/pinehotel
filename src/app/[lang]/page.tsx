import { getDictionary } from '@/get-dictionary';
import {
  Amenities,
  CTA,
  Hero,
  Introduction,
  Rooms,
  RoomsSlider
} from '@/components';
import { Locale } from '@/get-dictionary';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const locale = lang;

  return (
    <>
      <Hero
        title={dict.Home.heroTitle}
        subtitle={dict.Home.heroSubtitle}
        showBookingBar
        isDark={false}
      />
      <Introduction dict={dict} />
      <RoomsSlider dict={dict} locale={locale} />
      <CTA dict={dict} locale={locale} />
    </>
  );
}
