import type { Room } from '@/app/types';

export const rooms: Room[] = [
  {
    id: 'double-room',
    slug: 'double-room',
    name: 'Double Room',
    shortDescription: 'Perfect for two guests seeking comfort and elegance',
    longDescription:
      'Our Double Rooms are thoughtfully designed spaces that blend comfort with contemporary elegance. Each room features a king-size bed with premium linens, large windows overlooking the gardens or countryside, and modern amenities arranged with careful attention to detail. The rooms capture natural light throughout the day, creating a calm, inviting atmosphere perfect for relaxation.\n\nThe original character of the 19th-century farmhouse has been preserved through exposed stone features and traditional architectural details, complemented by modern comforts including climate control, luxury bathroom fittings, and high-quality furnishings.',
    capacity: 2,
    area: 28,
    price: 180,
    features: [
      'King-size bed with premium linens',
      'En-suite bathroom with walk-in shower',
      'Room service available',
      'Free Wi-Fi',
      'Air conditioning',
      'Flat-screen TV',
    ],
    amenities: [
      'Countryside views',
      'Workspace',
      'Coffee & tea facilities',
      'Luxury toiletries',
      'Robes and slippers',
    ],
    images: [
      '/images/rooms/double-1.jpg',
      '/images/rooms/double-2.jpg',
      '/images/rooms/double-3.jpg',
    ],
  },
  {
    id: 'suite',
    slug: 'suite',
    name: 'Suite',
    shortDescription: 'Spacious luxury accommodation with separate living area',
    longDescription:
      'The Suites at The Pines Hotel represent the pinnacle of comfort and elegance. These spacious accommodations feature a separate living area, bedroom with king-size bed, and a luxurious bathroom. Every detail has been carefully considered, from the placement of furniture to the selection of textures and colors that evoke calm and sophistication.\n\nWith views across the hotel gardens and towards the pine-covered slopes, the Suites offer a serene retreat. The original character of the farmhouse is evident in architectural details and exposed stonework, providing authentic countryside charm alongside contemporary comfort and convenience.',
    capacity: 2,
    area: 50,
    price: 280,
    features: [
      'King-size bed',
      'Separate living area with sofa',
      'Luxury bathroom with spa bath',
      'Separate walk-in shower',
      'High-ceilings',
      'Premium smart TV',
    ],
    amenities: [
      'Garden and mountain views',
      'Premium workspace',
      'Minibar',
      'Premium toiletries',
      'Bathrobes and slippers',
      'Bluetooth speaker',
    ],
    images: [
      '/images/rooms/suite-1.jpg',
      '/images/rooms/suite-2.jpg',
      '/images/rooms/suite-3.jpg',
    ],
  },
  {
    id: 'family-room',
    slug: 'family-room',
    name: 'Family Room',
    shortDescription: 'Spacious rooms perfect for families and groups',
    longDescription:
      'Family Rooms at The Pines Hotel are thoughtfully designed to accommodate groups and families traveling together. These interconnected spaces provide privacy while maintaining proximity between rooms. Each Family Room includes comfortable sleeping arrangements for up to 4 guests, with attention paid to creating a welcoming, comfortable environment for all ages.\n\nThe rooms maintain the hotel\'s signature style—combining authentic countryside character with modern comfort. With countryside views, generous living areas, and family-friendly amenities, these rooms are ideal for those seeking to explore the region while enjoying the peace and hospitality of The Pines Hotel.',
    capacity: 4,
    area: 60,
    price: 350,
    features: [
      'King-size bed in master bedroom',
      'Twin beds in second bedroom',
      'Two en-suite bathrooms',
      'Separate living area',
      'Family-friendly TV setup',
      'Board games and activities',
    ],
    amenities: [
      'Garden views',
      'Kitchenette',
      'Kids welcome kit',
      'Family dining area',
      'Extra storage',
    ],
    images: [
      '/images/rooms/family-1.jpg',
      '/images/rooms/family-2.jpg',
      '/images/rooms/family-3.jpg',
    ],
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((room) => room.slug === slug);
}

export function getAllRoomSlugs() {
  return rooms.map((room) => ({ slug: room.slug }));
}
