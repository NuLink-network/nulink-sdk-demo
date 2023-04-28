import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import UploadFilePage from './UploadFilePage'
import { RootState } from '../../modules/reducer'

const mapState = (state: RootState) => ({})

const mapDispatch = (dispatch) => ({
  onNavigate: path => dispatch(push(path))
})

export default connect(mapState, mapDispatch)(UploadFilePage)
