export type ITechnology = {
  name: string
  images: {
    portrait: string
    landscape: string
  }
  description: string
}

export type IDestination = {
  name: string
  images: {
    png: string
    webp: string
  }
  description: string
  distance: string
  travel: string
}

export type ICrew = {
  bio: string
  images: {
    png: string
    webp: string
  }
  name: string
  role: string
}
