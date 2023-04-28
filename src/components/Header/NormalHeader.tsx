import { memo } from 'react'
import NavMenu from './NavMenu'
import './styles/normalHeader.scss'
import { connect } from 'react-redux'
import NulinkLogo from '@@/src/assets/common/logo.svg'
import LanguageLogo from '@@/src/assets/common/earth.svg'

const NormalHeader = memo((props: any) => {
  return (
    <div className="main-layout normal-header">
      <img src={NulinkLogo} alt="" />
      <div className="menu">
        {props.account.data?.address && <NavMenu />}
        <img src={LanguageLogo} alt="" />
      </div>
    </div>
  )
})

export default connect((state) => state)(NormalHeader)
