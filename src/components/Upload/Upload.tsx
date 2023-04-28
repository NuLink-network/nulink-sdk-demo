import { memo } from 'react'
import './styles/upload.scss'
import { Button } from '@mui/material'
import { getSize } from '@@/src/utils/file'
import closeIcon from '@@/src/assets/common/close.svg'
import uploadIcon from '@@/src/assets/common/upload.svg'
import fileJsonIcon from '@@/src/assets/common/file_json.svg'

const Upload = memo((props: any) => {
  const { title = 'Upload file', files = [], onDelete } = props

  return (
    <>
      {files.length > 0 ? (
        <ul className="upload-area file-list">
          {[...files].map((x, index) => (
            <li key={index}>
              <div className="file-info">
                <img className="file-icon" src={fileJsonIcon} alt="" />
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
      ) : (
        <div className="upload-area">
          <Button component="label">
            <img src={uploadIcon} alt="" />
            <span>{title}</span>
            <input hidden accept=".json" type="file" {...props} />
          </Button>
        </div>
      )}
    </>
  )
})

export default Upload
