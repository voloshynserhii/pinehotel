import Link from 'next/link';
import { getDictionary, Locale } from '@/get-dictionary';
import { Hero, ExperienceCard, Introduction, Slider } from '@/components';
import { experiences } from '@/content/experiences';

export default async function ExperiencesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.Experiences;

  const experienceSlides = experiences.map((experience) => {
    const experienceData = t.experiences.find((e: any) => e.id === experience.id);

    return {
      image: experience.image,
      title: experienceData?.name,
      subtitle: experienceData?.description,
    };
  });

  return (
    <>
      <Hero showBookingBar imgSrc='https://images.unsplash.com/photo-1600976267946-1039881b21d5?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

      <section className="py-section container mx-auto px-gutter">

        <Slider slides={experienceSlides} />

        <Introduction title={t.title} text={t.text} paragraph={t.paragraph} />

        {/* CTA */}
        <div className="text-center">
          <p className="text-stone-700 mb-6">
            {t.reservationInfo}
          </p>
          <Link href="https://wa.me/34624088379" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-[#c8b89a] text-cream-50 font-semibold hover:bg-[#b8a882] transition-colors">
            {t.reserveExperience}
          </Link>
        </div>
      </section>
    </>
  );
}
