import { Col } from '@/components/Col'
import { LanguageSelector } from '@/components/LanguageSelector'
import { Row } from '@/components/Row'
import { TextArea } from '@/components/TextArea'
import { ArrowIcon, ClipboardIcon, SpeakerIcon } from '@/components/icons'
import { AUTO_LANGUAGE, VOICE_FOR_LANGUAGE } from '@/constans'
import { useDebounce } from '@/hooks/useDebounce'
import { useStore } from '@/hooks/useStore'
import { translate } from '@/services/translate'
import { SectionType } from '@/types.d'
import { useEffect } from 'react'

export const Translate = () => {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    setFromLanguage,
    setToLanguage,
    interchangeLanguage,
    setFromText,
    setResult,
    loading
  } = useStore()

  const debouncedFromText = useDebounce(fromText, 500)

  useEffect(() => {
    if (debouncedFromText === '') return
    translate({ fromLanguage, toLanguage, text: debouncedFromText })
      .then(result => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => { setResult('Error') })
  }, [debouncedFromText, fromLanguage, toLanguage])

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => {})
  }

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = VOICE_FOR_LANGUAGE[toLanguage]
    speechSynthesis.speak(utterance)
  }

  return (
    <div className='App'>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          <TextArea
            type={SectionType.From}
            value={fromText}
            onChange={setFromText}
          />
        </Col>
        <Col>
          <button disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguage}>
            <ArrowIcon/>
          </button>
        </Col>
        <Col>
          <LanguageSelector
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage}
          />
          <div style={{ position: 'relative' }}>
            <TextArea
              loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setResult}
            />
            <button
              type='button'
              style={{ position: 'absolute', left: '5px', bottom: '10px' }}
              onClick={handleClipboard}
            >
              <ClipboardIcon/>
            </button>
            <button
              type='button'
              style={{ position: 'absolute', left: '45px', bottom: '10px' }}
              onClick={handleSpeak}
            >
              <SpeakerIcon/>
            </button>
          </div>
        </Col>
      </Row>
    </div>
  )
}
