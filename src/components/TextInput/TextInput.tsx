import { memo } from 'react'
import './styles/textInput.scss'

const TextInput = memo((props: any) => (
  <input className="text-input" {...props} />
))

export default TextInput
