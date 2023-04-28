import { UploadFilePage } from '../UploadFilePage'
import { Test } from '../Test'

const routers = [
  {
    path: "/",
    name: "Test",
    component: Test,
    auth: true,
  },
  {
    path: "upload-file",
    name: "UploadFile",
    component: UploadFilePage,
    auth: true,
  },
  {
    path: "test",
    name: "Test",
    component: Test,
  },
]


export default routers;
