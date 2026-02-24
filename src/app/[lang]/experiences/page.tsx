import { getDictionary, Locale } from '@/get-dictionary';
import { Hero, ExperienceCard } from '@/components';
import { experiences } from '@/content/experiences';

export default async function ExperiencesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.Experiences;

  return (
    <>
      <Hero imgSrc='https://static11.com-hotel.com/uploads/hotel/306737/photo/hotel-mas-el-cuquello_172656168714.jpg' title={t.title} subtitle={t.subtitle} />

      <section className="py-section container mx-auto px-gutter">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-stone-700 leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-sage-50 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-serif font-bold mb-4 text-stone-900">
            Personalized Experiences
          </h3>
          <p className="text-stone-700 mb-4">
            We believe every guest is unique. Our concierge team is happy to
            arrange custom experiences tailored to your interests, whether that's
            photography expeditions, botanical walks, or cultural tours.
          </p>
          <p className="text-stone-700">
            Contact our team at any time during your stay to discuss
            personalized itineraries and special arrangements.
          </p>
        </div>
      </section>
    </>
  );
}
