import { memo } from 'react'
import './styles/agentModal.scss'
import { OvalButton } from '../OvalButton'

interface IProps {
  onClose: Function
  onConfirm: Function
}

const ConfrimDownloadModal = memo((props: IProps) => {
  const { onClose, onConfirm } = props

  return (
    <>
      <div className="agent-modal">
        <div className="modal-panel">
          <h1>Confirm Download</h1>
          <p>Are you sure you want to download the file?</p>
          <div className="func">
            <OvalButton
              title="Cancel"
              className="cancel-btn"
              onClick={onClose}
            />
            <OvalButton title="Confirm" onClick={onConfirm} />
          </div>
        </div>
      </div>
    </>
  )
})

export default ConfrimDownloadModal
