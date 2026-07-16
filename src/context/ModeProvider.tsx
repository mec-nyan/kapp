import { useState } from 'react'
import type { ReactNode } from 'react'
import { ModeContext } from './ModeContext'
import type { Mode } from '../types/mode'

interface ModeProviderProps {
  children: ReactNode
  initialMode?: Mode
}

export default function ModeProvider({
  children,
  initialMode = 'hiragana',
}: ModeProviderProps) {
  const [mode, setMode] = useState<Mode>(initialMode)

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  )
}
