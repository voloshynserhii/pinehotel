
import { Locale } from '@/get-dictionary';

interface CTAProps {
  dict: {
    Home: {
      bookNow: string;
    };
  };
  locale: Locale;
}

export function CTA({ dict, locale }: CTAProps) {
  return (
    <section className="py-section bg-[#c8b89a]">
      <div className="container mx-auto px-gutter text-center">
        <h2 className="text-4xl font-serif font-bold mb-6 text-cream-50">
          Ready to experience The Pines?
        </h2>
        <p className="text-lg text-cream-100 mb-8 max-w-2xl mx-auto">
          Book your peaceful countryside retreat today and discover why guests
          return to The Pines Hotel year after year.
        </p>
        <a
          href={`/${locale}/booking`}
          className="inline-block px-8 py-4 bg-cream-100 text-stone-900 rounded font-semibold hover:bg-cream-200 transition-colors"
        >
          {dict.Home.bookNow}
        </a>
      </div>
    </section>
  );
}
