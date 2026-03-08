import { icons } from '@/components/Icon';
export interface Room {
  slug: string
  capacity: number
  area: number
  images: string[]
  characteristics: { icon: keyof typeof icons; name: string }[]
  services: { icon: keyof typeof icons; name: string }[]
}

export interface Experience {
  id: string
  icon: string
  image: string
  mobileImage: string
}

export interface Extra {
  id: string
  title: string
  description: string
  price: number
}

export interface GuestInfo {
  adults: number
  kids: number
  rooms: number
  kidAges: number[]
}
