export type kanaKind = 'hiragana' | 'katakana'

// Some type aliases for clarity.
export type Hiragana = string
export type Katakana = string
export type Romaji = string

// TODO: When adding i18n we must handle the translation to languages other than English.
// I'm using emojis as pictures.  Maybe I change that later.  Maybe not, they look cute!
// NOTE: I think of maybe adding a different example for each (katakana and hiragana).
export interface Example {
  jap: string
  rmj: string
  picture: string
  // TODO: Should we add a translation here?
}

// TODO: Place types on their own files.
export interface Kana {
  rmj: Romaji
  alt: Romaji
  hg: Hiragana
  kk: Katakana
  examples: {
    hg: Example
    kk: Example
  }
}

export type KanaRow = Array<Kana | null>

export interface KanaGroup {
  Monographs: KanaRow
  Digraphs: KanaRow | null
}

export interface KanaSet {
  Basic: KanaGroup
  Dakuten: KanaGroup | null
  Handakuten: KanaGroup | null
}
