import { Link, useLocation } from 'react-router-dom'
import Logout from './Logout'
import { connect } from 'react-redux'
import { toDisplayAddress } from '@@/src/utils/format'

const NavMenu = (props: any) => {
  const { pathname } = useLocation()
  const _address = toDisplayAddress(props.account?.data?.address)

  return (
    <ul className="nav-menu">
      <li className={pathname === '/' ? 'active-item' : ''}>
        <Link to="/">Agent</Link>
      </li>
      <li className={pathname === '/upload-file' ? 'active-item' : ''}>
        <Link to="/upload-file">Upload file</Link>
      </li>
      <li className={pathname === '/setting' ? 'active-item' : ''}>
        <Link to="/setting">Setting</Link>
      </li>
      <li className="nulink-address">
        <span className="address-item">{_address}</span>
        <Logout address={props.account?.data?.address} />
      </li>
    </ul>
  )
}

export default connect((state) => state)(NavMenu)
