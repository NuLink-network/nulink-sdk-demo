import { ChangeEventHandler, memo } from 'react'
import './styles/uploadFile.scss'
import { Button } from '@mui/material'
import { OvalButton } from '../OvalButton'
import { getSize, fileJsonIcons } from '@@/src/utils/file'
import closeIcon from '@@/src/assets/common/close.svg'

interface IProps {
  files: Array<File>
  onDelete: Function
  onConfirm: Function
  onChange: ChangeEventHandler<HTMLInputElement>
}

const UploadFile = memo((props: IProps) => {
  const { files, onDelete, onConfirm, onChange } = props
  return (
    <>
      <div className="upload-file-panel">
        <div className="upload-file-header">
          <p>List of uploaded files</p>
          <Button component="label">
            <OvalButton title="Upload  more files" />
            <input hidden multiple type="file" onChange={onChange} />
          </Button>
        </div>
        <ul className="upload-file-area file-list">
          {[...files].map((x, index) => (
            <li key={index}>
              <div className="file-info">
                <img className="file-icon" src={fileJsonIcons[x.type]} alt="" />
                <div className="base-info">
                  <h2>{x.name}</h2>
                  <p>{getSize(x.size)}</p>
                </div>
              </div>
              <img
                src={closeIcon}
                alt=""
                onClick={onDelete.bind(this, index, x)}
              />
            </li>
          ))}
        </ul>
      </div>
      <OvalButton
        title="Comfirm upload"
        className="m-t-20"
        onClick={onConfirm}
      />
    </>
  )
})

export default UploadFile
