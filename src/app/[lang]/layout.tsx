import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '../globals.css';
import { Header, Footer, DictionaryProvider } from '@/components';
import { getDictionary, Locale } from '@/get-dictionary';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'The Pines Hotel',
  description:
    'A 4★ boutique countryside hotel set in a beautifully restored 19th-century farmhouse, surrounded by pine trees at the foot of the mountains.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <html lang={lang}>
      <body
        className={`${roboto.variable} font-sans antialiased bg-cream-50 text-stone-900`}
      >
        <DictionaryProvider dictionary={dict}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </DictionaryProvider>
      </body>
    </html>
  );
}