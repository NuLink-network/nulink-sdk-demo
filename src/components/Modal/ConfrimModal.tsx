import { memo } from 'react'
import './styles/agentModal.scss'
import { OvalButton } from '../OvalButton'

interface IProps {
  title: string
  content: string
  onClose: Function
  onConfirm: Function
  cancelText?: string
  confirmText?: string
}

const ConfrimModal = memo((props: IProps) => {
  const { title, content, onClose, onConfirm, cancelText, confirmText } = props

  return (
    <>
      <div className="agent-modal">
        <div className="modal-panel">
          <h1>{title}</h1>
          <p>{content}</p>
          <div className="func">
            <OvalButton
              title={cancelText ?? 'Cancel'}
              className="cancel-btn"
              onClick={onClose}
            />
            <OvalButton title={confirmText ?? 'Confirm'} onClick={onConfirm} />
          </div>
        </div>
      </div>
    </>
  )
})

export default ConfrimModal
