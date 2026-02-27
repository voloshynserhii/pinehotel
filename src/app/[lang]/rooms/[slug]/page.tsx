import { notFound } from 'next/navigation';
import { getRoomBySlug, getAllRoomSlugs } from '@/content/rooms';
import { formatPrice } from '@/lib/utils';
import type { Metadata } from 'next';
import { BookingButton, RoomsSlider } from '@/components';
import Image from 'next/image';
import { Locale, getDictionary } from '@/get-dictionary';

interface RoomPageProps {
  params: {
    lang: Locale;
    slug: string;
  };
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = getAllRoomSlugs();
  return slugs.flatMap((room) => [
    { locale: 'en', ...room },
    { locale: 'es', ...room },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RoomPageProps['params']>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    return {};
  }

  return {
    title: room.name,
    description: room.shortDescription,
  };
}

export default async function RoomPage({
  params,
}: {
  params: Promise<RoomPageProps['params']>;
}) {
  const { slug, lang } = await params;
  const dict = await getDictionary(lang);
  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  return (
    <>
      {/* Hero with Room Name */}
      <section className="bg-cream-50 pt-12 md:py-16 mt-16">
        <div className="container mx-auto px-gutter">
          <h1 className="text-5xl font-serif font-bold text-stone-900 mb-2">
            {room.name}
          </h1>
          <p className="text-lg text-stone-600">{room.shortDescription}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-section container mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2">
            {/* Room Image Gallery */}
            <div className="mb-12">
              <div className="aspect-video mb-6 relative overflow-hidden">
                <Image
                  src={room.images[0]}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {room.images.map((image: string, i: number) => (
                  <div
                    key={i}
                    className="aspect-square relative overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`${room.name} photo ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6 text-stone-900">
                About This Room
              </h2>
              <div className="prose prose-stone max-w-none space-y-4">
                {room.longDescription.split('\n\n').map((paragraph: string, i: number) => (
                  <p key={i} className="text-stone-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold mb-6 text-stone-900">
                Room Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.features.map((feature: string, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-sage-700 mt-1">✓</span>
                    <span className="text-stone-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6 text-stone-900">
                Amenities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.amenities.map((amenity: string, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-sage-700 mt-1">●</span>
                    <span className="text-stone-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-cream-50 rounded-lg p-8 sticky top-24 space-y-6">
              {/* Details */}
              <div className="space-y-4">
                <div>
                  <p className="text-stone-600 text-sm mb-1">Capacity</p>
                  <p className="font-semibold text-stone-900">
                    {room.capacity}{' '}
                    {room.capacity === 1 ? 'guest' : 'guests'}
                  </p>
                </div>
                <div>
                  <p className="text-stone-600 text-sm mb-1">Room Size</p>
                  <p className="font-semibold text-stone-900">
                    {room.area} m²
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <BookingButton slug={room.slug} />

              {/* Info Text */}
              <p className="text-xs text-stone-600 text-center">
                Free cancellation up to 7 days before arrival
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Rooms */}
      <section className="bg-cream-50 py-section">
        <div className="container mx-auto px-gutter">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center text-stone-900">
            Other Room Types
          </h2>

          <RoomsSlider dict={dict} locale={lang} />
        </div>
      </section>
    </>
  );
}
