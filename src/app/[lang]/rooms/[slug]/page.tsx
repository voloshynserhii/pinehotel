import { notFound } from 'next/navigation';
import { getRoomBySlug, getAllRoomSlugs } from '@/content/rooms';
import { formatPrice } from '@/lib/utils';
import type { Metadata } from 'next';
import { BookingButton } from '@/components';

interface RoomPageProps {
  params: {
    locale: string;
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
  const { slug, locale } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  return (
    <>
      {/* Hero with Room Name */}
      <section className="bg-cream-50 py-12 md:py-16">
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
              <div className="aspect-video bg-gradient-to-br from-stone-200 to-stone-300 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-stone-500">
                  Room Gallery - Placeholder
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-stone-200 to-stone-300 rounded flex items-center justify-center text-stone-500 text-sm"
                  >
                    Photo {i}
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
                {room.longDescription.split('\n\n').map((paragraph, i) => (
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
                {room.features.map((feature, i) => (
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
                {room.amenities.map((amenity, i) => (
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
              {/* Price */}
              <div className="border-b border-stone-200 pb-6">
                <p className="text-stone-600 text-sm mb-2">Per night</p>
                <p className="text-4xl font-serif font-bold text-sage-700">
                  {formatPrice(room.price)}
                </p>
              </div>

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
          {/* Could implement room slider or other rooms display here */}
        </div>
      </section>
    </>
  );
}
