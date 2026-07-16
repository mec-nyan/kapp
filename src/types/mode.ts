export type Mode = 'hiragana' | 'katakana'

export interface ModeContextType {
  mode: Mode
  setMode: (mode: Mode) => void
}
