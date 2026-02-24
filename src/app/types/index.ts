export interface Room {
  id: string
  slug: string
  name: string
  shortDescription: string
  longDescription: string
  capacity: number
  area: number
  price: number
  features: string[]
  amenities: string[]
  images: string[]
}

export interface Experience {
  id: string
  title: string
  description: string
  icon: string
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
