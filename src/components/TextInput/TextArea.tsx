import { memo } from 'react'
import './styles/textInput.scss'

const TextArea = memo((props: any) => (
  <textarea {...props} className={`text-input ${props?.className}`} />
))

export default TextArea
