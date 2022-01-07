import { ReactElement } from 'react'

export interface Image {
  image: { src: string }
  link: {
    href: string
    title: string
  }
}
export interface Result {
  link: string
  title: string
  additional_links: {
    href: string
    title: string
  }[]
}
export interface New {
  links: {
    href: string
  }[]
  id: string
  source: {
    href: string
  }
  title: string
}
export interface Data {
  entries?: New[]
  image_results?: Image[]
  results?: Result[]
}
export interface ResultContextProviderProps {
  children: ReactElement
}
export interface IResultContext {
  getResults(type: string): Promise<void>
  results: Data
  searchTerm: string
  setSearchTerm(term: string): void
  isLoading: boolean
}
