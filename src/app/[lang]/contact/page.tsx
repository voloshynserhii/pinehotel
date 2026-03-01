import { getDictionary, Locale } from '@/get-dictionary';
import { Hero, ContactForm } from '@/components';
import { CONTACT } from '@/lib/constants';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.Contact;

  return (
    <>
      <Hero title={t.title} subtitle={t.subtitle} />

      <section className="py-section container mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Address */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-3 text-stone-900">
                {t.address}
              </h3>
              <p className="text-stone-700">{t.location}</p>
            </div>

            {/* Phone */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-3 text-stone-900">
                {t.phone}
              </h3>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                className="text-sage-700 hover:text-sage-800 font-semibold"
              >
                {CONTACT.phone}
              </a>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-3 text-stone-900">
                {t.email}
              </h3>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sage-700 hover:text-sage-800 font-semibold"
              >
                {CONTACT.email}
              </a>
            </div>

            {/* Hours */}
            <div className="bg-cream-50 p-6 rounded-lg">
              <h3 className="font-serif font-bold text-lg mb-3 text-stone-900">
                {t.hoursTitle}
              </h3>
              <div className="space-y-2 text-sm text-stone-700">
                <div className="flex justify-between">
                  <span>{t.mondayFriday}</span>
                  <span>{t.mondayFridayHours}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.saturday}</span>
                  <span>{t.saturdayHours}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.sunday}</span>
                  <span>{t.sundayStatus}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm contact={t} />
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-section pt-section border-t border-stone-200">
          <h3 className="text-2xl font-serif font-bold mb-6 text-stone-900">
            {t.ourLocation}
          </h3>
          <div className="aspect-video bg-stone-200 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(t.location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              title={t.ourLocation}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
