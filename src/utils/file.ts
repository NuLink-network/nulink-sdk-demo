import fileJsonIcon from '@@/src/assets/common/file_json.svg'
import fileImgIcon from '@@/src/assets/common/file_jpg.svg'
import filePdfIcon from '@@/src/assets/common/file_pdf.svg'
import fileDocIcon from '@@/src/assets/common/file_doc.svg'
import fileVideoIcon from '@@/src/assets/common/file_mp4.svg'
import fileXlsIcon from '@@/src/assets/common/file_xls.svg'


//* Convert resBlob to ArrayBuffer
export const blobToArrayBuffer = (blob: Blob) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = (e: any) => {
      const fileBinaryArrayBuffer = new Uint8Array(e?.target?.result).buffer;
      resolve(fileBinaryArrayBuffer);
    }
    reader.readAsArrayBuffer(blob);
  });
}

export const getSizeNumber = (size: number | string): number => Number((Number(size) / (1024 * 1024)).toFixed(2))

export const getSize = (size: number | string) => `${(Number(size) / (1024 * 1024)).toFixed(2)} M`

export const fileJsonIcons = {
  'image/png': fileImgIcon,
  'image/jpeg': fileImgIcon,
  'video/mp4': fileVideoIcon,
  'application/json': fileJsonIcon,
  'application/pdf': filePdfIcon,
  'text/plain': fileDocIcon,
  'application/vnd.ms-excel': fileXlsIcon,
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': fileXlsIcon
}
