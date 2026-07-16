import { createContext } from 'react'
import type { ModeContextType } from '../types/lang'

export const ModeContext = createContext<ModeContextType | undefined>(undefined)
