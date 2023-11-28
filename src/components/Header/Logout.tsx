import { memo, useState } from 'react'
import { Alert } from '../Alert'
import { Loading } from '../Loading'
import sleep from 'await-sleep'
import { ConfrimModal } from '../Modal'
import { OvalButton } from '../OvalButton'
import { AlertColor } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import CopyIcon from '@@/src/assets/common/copy.svg'
import { toDisplayAddress } from '@@/src/utils/format'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { logoutWallet } from '@nulink_network/nulink-sdk-crosschain'

interface IProps {
  address?: string
}
const Logout = memo((props: IProps) => {
  const { address } = props
  const navigate = useNavigate()
  const [open, setOpen] = useState<boolean>(false)
  const [showLoading, setShowLoading] = useState<boolean>(false)
  const [severity, setSeverity] = useState<AlertColor>('info')
  const [alertMessage, setAlertMessage] = useState<string>('')
  const [showConfirmTipModal, setShowConfirmTipModal] = useState<boolean>(false)
  const LogoutTip =
    'Once you are logged out, your Mnemonic Phrase will be deleted, make sure you have back up the Mnemonics.'

  const _copy = () => {
    showMsg('Copy Success!', 'success')
  }

  const handleClose = () => {
    setOpen(false)
  }

  const showMsg = (message: string, severity: AlertColor = 'error') => {
    setOpen(true)
    setSeverity(severity)
    setAlertMessage(message)
  }

  const _showConfirmTipModal = () => {
    setShowConfirmTipModal(!showConfirmTipModal)
  }

  const _onClose = () => {
    _showConfirmTipModal()
    navigate('/backup-mnemonics')
  }

  const _logout = async () => {
    try {
      setShowLoading(true)
      await logoutWallet()
      _showConfirmTipModal()
      showMsg('Logout Success!', 'success')
      await sleep(2000)
      setShowLoading(false)
      window.location.reload()
    } catch (error) {
      showMsg('Logout Error!')
      setShowLoading(false)
    }
  }

  return (
    <>
      {showLoading && <Loading />}
      <Alert
        open={open}
        severity={severity}
        onClose={handleClose}
        message={alertMessage}
      />
      {showConfirmTipModal && (
        <ConfrimModal
          title="Log out"
          content={LogoutTip}
          onConfirm={_logout}
          cancelText="Back up now"
          confirmText="Confirm and log out"
          onClose={_onClose}
        />
      )}
      <div className="logout">
        <div>
          <span>{toDisplayAddress(address)}</span>
          <CopyToClipboard text={address ?? ''} onCopy={_copy}>
            <img src={CopyIcon} alt="" />
          </CopyToClipboard>
        </div>
        <OvalButton title="Log out" onClick={_showConfirmTipModal} />
      </div>
    </>
  )
})

export default Logout
