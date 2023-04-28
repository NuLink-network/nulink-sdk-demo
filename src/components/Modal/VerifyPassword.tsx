import { memo, useState } from 'react'
import './styles/agentModal.scss'
import { Alert } from '../Alert'
import { TextInput } from '../TextInput'
import { OvalButton } from '../OvalButton'
import { AlertColor } from '@mui/material'
import * as wallet from '@nulink_network/nulink-sdk'

interface IProps {
  onResult: Function
  onClose: Function
}

const VerifyPassword = memo((props: IProps) => {
  const { onResult, onClose } = props
  const [open, setOpen] = useState<boolean>(false)
  const [severity, setSeverity] = useState<AlertColor>('info')
  const [alertMessage, setAlertMessage] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleClose = () => {
    setOpen(false)
  }

  const _onChange = (e) => {
    setPassword(e.target.value)
  }

  const _verify = async () => {
    const res = await wallet.verifyPassword(password)
    if (res) {
      onResult(password, res)
    } else {
      setPassword('')
      setOpen(true)
      setSeverity('error')
      setAlertMessage('Wrong password, please re-enter')
    }
  }

  return (
    <>
      <Alert
        open={open}
        severity={severity}
        onClose={handleClose}
        message={alertMessage}
      />
      <div className="agent-modal">
        <div className="modal-panel">
          <h1>Enter your password</h1>
          <TextInput
            type="password"
            value={password}
            onChange={_onChange}
            placeholder="Enter your account password"
          />
          <div className="func">
            <OvalButton
              title="Cancel"
              className="cancel-btn"
              onClick={onClose}
            />
            <OvalButton title="Confirm" onClick={_verify} />
          </div>
        </div>
      </div>
    </>
  )
})

export default VerifyPassword
