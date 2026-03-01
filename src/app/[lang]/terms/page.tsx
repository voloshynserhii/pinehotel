import { getDictionary, Locale } from '@/get-dictionary';
import { CONTACT } from '@/lib/constants';

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.Terms;

  return (
    <section className="py-20 container mx-auto px-gutter">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-8">{t.title}</h1>
        <div className="space-y-8 text-lg text-stone-700">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">{t.heading}</h2>
            <p>
              {t.welcome}
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">{t.reservationsTitle}</h2>
            <ul className="list-disc list-inside space-y-2">
              {t.reservationsList.map((item: string) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">{t.checkInTitle}</h2>
            <ul className="list-disc list-inside space-y-2">
              {t.checkInList.map((item: string) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">{t.cancellationTitle}</h2>
            <ul className="list-disc list-inside space-y-2">
              {t.cancellationList.map((item: string) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">{t.paymentTitle}</h2>
            <ul className="list-disc list-inside space-y-2">
              {t.paymentList.map((item: string) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">{t.behaviorTitle}</h2>
            <ul className="list-disc list-inside space-y-2">
              {t.behaviorList.map((item: string) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">{t.liabilityTitle}</h2>
            <ul className="list-disc list-inside space-y-2">
              {t.liabilityList.map((item: string) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">{t.privacyTitle}</h2>
            <p>
              {t.privacyText}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">{t.contactTitle}</h2>
            <p>
              {t.contactText}
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>{t.address}</strong> {t.addressDetails}</li>
              <li><strong>{t.phone}</strong> {CONTACT.phone}</li>
              <li><strong>{t.email}</strong> {CONTACT.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
