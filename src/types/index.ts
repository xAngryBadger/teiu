export interface Location {
  city: string
  country: string
  address: string
  phone: string
  email: string
  hours: {
    [key: string]: { open: string; close: string } | null
  }
  mapUrl: string
}

export interface MenuItem {
  name: string
  description: string
  price: string
  image?: string
  dietary?: string[]
}

export type MenuCategory = 'Antipasti' | 'Primi' | 'Secondi' | 'Dolci'

export interface MenuCategoryGroup {
  category: MenuCategory
  items: MenuItem[]
}

export interface Award {
  title: string
  year: number
  issuer: string
  description: string
}

export interface GalleryItem {
  src: string
  alt: string
  type: 'interior' | 'dish' | 'chef' | 'event'
}

export interface SocialLinks {
  instagram: string
  facebook: string
  whatsapp: string
}

export interface Chef {
  name: string
  bio: string
  image: string
}

export interface RestaurantData {
  name: string
  slogan: string
  founded: number
  chef: Chef
  locations: Location[]
  menu: Record<MenuCategory, MenuItem[]>
  awards: Award[]
  gallery: GalleryItem[]
  social: SocialLinks
}
