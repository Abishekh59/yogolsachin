export type Publisher =
  | 'bh'
  | 'fp'
  | 'kitab'
  | 'imprint'
  | 'nepalaya'
  | 'lipi'
  | 'sunbarshi'
  | 'indigo'
  | 'kalam'
  | 'shailee'
  | 'sambodhan'
  | 'ratna'
  | 'educational'
  | 'sas'
  | 'shangrila'
  | 'others'

export type BookTag = 'award' | 'best-seller' | 'recent'

export type Book = {
  id: string
  title: string
  author: string
  publisher: Publisher
  tags: BookTag[]
  year: number
  palette: { bg: string; text: string; accent: string }
  layout: 'top-left' | 'center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'split'
  imgSrc?: string
}

export const PUBLISHERS: Record<Publisher, { label: string; short: string; color: string; logo: string }> = {
  bh:          { label: 'Bookhill',    short: 'BH', color: '#2d1b00', logo: '/publication/01-Logos_Bookhill.jpg'    },
  fp:          { label: 'Fine Print',  short: 'FP', color: '#1a1a2e', logo: '/publication/02-Logos_FP.jpg'          },
  kitab:       { label: 'Kitab',       short: 'KT', color: '#1e0d2b', logo: '/publication/03-Logos_Kitab.jpg'       },
  imprint:     { label: 'Imprint',     short: 'IM', color: '#0d1a2b', logo: '/publication/04-Logos_Imprint.jpg'     },
  nepalaya:    { label: 'Nepalaya',    short: 'NP', color: '#0d2818', logo: '/publication/05-Logos_Nepalaya.jpg'    },
  lipi:        { label: 'Lipi',        short: 'LP', color: '#1a1a0a', logo: '/publication/06-Logos_Lipi.jpg'        },
  sunbarshi:   { label: 'Sunbarshi',   short: 'SB', color: '#1a0a0a', logo: '/publication/07-Logos_Sunbarshi.jpg'   },
  indigo:      { label: 'Indigo',      short: 'IN', color: '#0d0d2b', logo: '/publication/08-Logos_Indigo.jpg'      },
  kalam:       { label: 'Kalam',       short: 'KL', color: '#0a1a1a', logo: '/publication/09-Logos_Kalam.jpg'       },
  shailee:     { label: 'Shailee',     short: 'SL', color: '#1a0d00', logo: '/publication/10-Logos_Shailee.jpg'     },
  sambodhan:   { label: 'Sambodhan',   short: 'SM', color: '#0a0a1a', logo: '/publication/11-Logos_Sambodhan.jpg'   },
  ratna:       { label: 'Ratna',       short: 'RT', color: '#1a0a00', logo: '/publication/12-Logos_Ratna.jpg'       },
  educational: { label: 'Educational', short: 'ED', color: '#001a0a', logo: '/publication/13-Logos_Educational.jpg' },
  sas:         { label: 'SAS Trust',   short: 'ST', color: '#1a1218', logo: '/publication/14-Logos_SAS-Trust.jpg'   },
  shangrila:   { label: 'Shangrila',   short: 'SH', color: '#0d1a1a', logo: '/publication/15-Logos_Shangrila.jpg'   },
  others:      { label: 'Others',      short: 'OT', color: '#2a2a2a', logo: ''                                       },
}

export const BOOKS: Book[] = []
