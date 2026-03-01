import { getDictionary, Locale } from '@/get-dictionary';
import { CONTACT } from '@/lib/constants';

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.Cookies;

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
            <h2 className="text-2xl font-serif font-bold text-stone-900">{t.whatAreCookiesTitle}</h2>
            <p>
              {t.whatAreCookiesText}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">{t.howWeUseCookiesTitle}</h2>
            <p>
              {t.howWeUseCookiesText}
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>{t.essentialCookiesTitle}</strong> {t.essentialCookiesText}
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">{t.thirdPartyCookiesTitle}</h2>
            <p>
              {t.thirdPartyCookiesText}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">{t.yourChoicesTitle}</h2>
            <p>
              {t.yourChoicesText}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">{t.contactTitle}</h2>
            <p>
              {t.contactText}
            </p>
            <ul className="list-disc list-inside">
              <li><strong>{t.email}</strong> {CONTACT.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
