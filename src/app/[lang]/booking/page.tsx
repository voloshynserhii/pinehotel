import { getDictionary, Locale } from '@/get-dictionary';
import { Hero, BookingForm } from '@/components';
import { rooms } from '@/content/rooms';

export default async function BookingPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero
        title="Book Your Stay"
        subtitle="Secure your perfect countryside retreat"
      />

      <section className="py-section container mx-auto px-gutter">
        <BookingForm dict={dict} rooms={rooms} />
      </section>

      {/* Info Section */}
      <section className="bg-stone-900 text-cream-50 py-section">
        <div className="container mx-auto px-gutter">
          <h3 className="text-2xl font-serif font-bold mb-8 text-center">
            Why Book With Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <h4 className="font-serif font-bold mb-2">
                Best Price Guarantee
              </h4>
              <p className="text-cream-200 text-sm">
                We guarantee the lowest rates for direct bookings
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <h4 className="font-serif font-bold mb-2">Free Cancellation</h4>
              <p className="text-cream-200 text-sm">
                Cancel up to 7 days before arrival for a full refund
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <h4 className="font-serif font-bold mb-2">Personal Service</h4>
              <p className="text-cream-200 text-sm">
                Our team is here to make your stay unforgettable
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
