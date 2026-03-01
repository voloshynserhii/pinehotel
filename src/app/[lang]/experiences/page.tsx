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
        <Introduction title={t.title} text={t.text} paragraph={t.paragraph} />

        <Slider slides={experienceSlides} />

{/*         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} t={t} />
          ))}
        </div> */}

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-stone-700 leading-relaxed">
            {t.description}
          </p>
        </div>
      </section>
    </>
  );
}
