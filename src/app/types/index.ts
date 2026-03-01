export interface Room {
  slug: string
  capacity: number
  area: number
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
