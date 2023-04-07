import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '@/constans'
import { type FromLanguage, SectionType, type Language } from '@/types.d'

import React, { type FunctionComponent } from 'react'

type Props =
  | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export const LanguageSelector: FunctionComponent<Props> = ({ onChange, type, value }) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <select onChange={handleOnChange} value={value}>
      {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}

      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>{literal}</option>
      ))}
    </select>
  )
}
