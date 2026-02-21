import { getDictionary, Locale } from '@/get-dictionary';
import { Hero, ContactForm } from '@/components';

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
                href="tel:+34123456789"
                className="text-sage-700 hover:text-sage-800 font-semibold"
              >
                +34 (0) 123 456 789
              </a>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-3 text-stone-900">
                {t.email}
              </h3>
              <a
                href="mailto:info@thepineshotel.com"
                className="text-sage-700 hover:text-sage-800 font-semibold"
              >
                info@thepineshotel.com
              </a>
            </div>

            {/* Hours */}
            <div className="bg-cream-50 p-6 rounded-lg">
              <h3 className="font-serif font-bold text-lg mb-3 text-stone-900">
                {t.hoursTitle}
              </h3>
              <div className="space-y-2 text-sm text-stone-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
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
            Our Location
          </h3>
          <div className="aspect-video bg-gradient-to-br from-stone-200 to-stone-300 rounded-lg flex items-center justify-center">
            <span className="text-stone-500">
              Google Maps Embed - Placeholder
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
