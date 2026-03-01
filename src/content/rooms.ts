import type { Room } from '@/app/types';

export const rooms: Room[] = [
  {
    slug: 'benicarlo',
    capacity: 2,
    area: 28,
    images: [],
  },
  {
    slug: 'traiguera',
    capacity: 2,
    area: 35,
    images: [],
  },
  {
    slug: 'la-mina',
    capacity: 2,
    area: 45,
    images: [
      '/images/rooms/ROOM_4_1.jpg',
      '/images/rooms/ROOM_4_2.jpg',
      '/images/rooms/ROOM_4_3.jpg',
      '/images/rooms/ROOM_4_4.jpg',
      '/images/rooms/ROOM_4_5.jpg',
    ],
  },
  {
    slug: 'almenara',
    capacity: 2,
    area: 28,
    images: [
      '/images/rooms/ROOM_1_1.jpg',
      '/images/rooms/ROOM_1_2.jpg',
      '/images/rooms/ROOM_1_3.jpg',
      '/images/rooms/ROOM_1_4.jpg',
      '/images/rooms/ROOM_1_5.jpg',
      '/images/rooms/ROOM_1_6.jpg',
    ],
  },
  {
    slug: 'carlet',
    capacity: 2,
    area: 35,
    images: [
      '/images/rooms/ROOM_2_1.jpg',
      '/images/rooms/ROOM_2_2.jpg',
      '/images/rooms/ROOM_2_3.jpg',
      '/images/rooms/ROOM_2_4.jpg',
      '/images/rooms/ROOM_2_5.jpg',
    ],
  },
  {
    slug: 'the-red-sand-suite',
    capacity: 2,
    area: 50,
    images: [
      '/images/rooms/ROOM_3_1.jpg',
      '/images/rooms/ROOM_3_2.jpg',
      '/images/rooms/ROOM_3_3.jpg',
      '/images/rooms/ROOM_3_4.jpg',
      '/images/rooms/ROOM_3_5.jpg',
    ],
  },
  {
    slug: 'cdg-retreat',
    capacity: 4,
    area: 60,
    images: [
      '/images/rooms/ROOM_5_1.jpg',
      '/images/rooms/ROOM_5_2.jpg',
      '/images/rooms/ROOM_5_3.jpg',
      '/images/rooms/ROOM_5_4.jpg',
      '/images/rooms/ROOM_5_5.jpg',
    ],
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((room) => room.slug === slug);
}

export function getAllRoomSlugs() {
  return rooms.map((room) => ({ slug: room.slug }));
}
