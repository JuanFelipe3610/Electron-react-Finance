import { SectionType } from '@/types.d'
import { type FunctionComponent } from 'react'

interface Props {
  type: SectionType
  loading?: boolean
  value: string
  onChange: (value: string) => void
}
const commonStyles = { border: 0 }
const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Introducir texto'
  if (loading === true) return 'Cargando...'
  return 'Traducción'
}
export const TextArea: FunctionComponent<Props> = ({ loading, type, value, onChange }) => {
  const style = type === SectionType.To
    ? { ...commonStyles, backgroundColor: '#f5f5f5' }
    : commonStyles

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <textarea
      placeholder={getPlaceholder({ type, loading })}
      disabled={type === SectionType.To}
      cols={30}
      rows={10}
      autoFocus={type === SectionType.From}
      onChange={handleChange}
      value={value}
      style={style}
    ></textarea>
  )
}
