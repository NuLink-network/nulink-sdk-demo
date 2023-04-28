import { memo, useState } from "react";
import "./styles/uploadFilePage.scss";
import { Footer } from "../Footer";
import { Alert } from "../Alert";
import { Loading } from "../Loading";
import { connect } from "react-redux";
import UploadFile from "./UploadFile";
import { Button } from "@mui/material";
import { NormalHeader } from "../Header";
import { AlertColor } from "@mui/material";
import { OvalButton } from "../OvalButton";
import * as wallet from "@nulink_network/nulink-sdk";
import uploadIcon from "@@/src/assets/common/upload.svg";
import { getSizeNumber, blobToArrayBuffer } from "@/utils/file";

const UploadFilePage = (props: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const [fileList, setFileList] = useState<Array<any>>([]);
  const [severity, setSeverity] = useState<AlertColor>("info");
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [showLoading, setShowLoading] = useState<boolean>(false);

  const _onChangeAccountData = (e) => {
    setFileList([...fileList, ...e.target.files]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showMsg = (message: string, severity: AlertColor = "error") => {
    setOpen(true);
    setSeverity(severity);
    setAlertMessage(message);
  };

  const _onFileDelete = (index: number) => {
    setFileList(() => {
      const _fileList = [...fileList];
      _fileList.splice(index, 1);
      return _fileList;
    });
  };

  const _onConfirmUpload = async () => {
    const upFiles: any = [];
    const limitFiles = fileList.filter((x) => getSizeNumber(x.size) > 5);
    if (limitFiles.length > 0) {
      showMsg("File size limit 5M", "warning");
      return;
    }
    for (const file of fileList) {
      const fileBinaryArrayBuffer = await blobToArrayBuffer(file);
      upFiles.push({ name: file.name, fileBinaryArrayBuffer });
    }
    upFiles.forEach((x) => {
      x.fileBinaryArrayBuffer = Buffer.from(x.fileBinaryArrayBuffer).buffer;
    });
    try {
      setShowLoading(true);
      const nuLinkHDWallet: wallet.NuLinkHDWallet = await wallet.createWallet(
        "1"
      );
      const accountAlice: wallet.Account =
        (await wallet.getWalletDefaultAccount("1")) as wallet.Account;
      await wallet.uploadFilesByCreatePolicy(accountAlice, "unkown", upFiles);
      showMsg("Upload Success", "success");
      setFileList([]);
    } catch (error: any) {
      showMsg(error?.data?.msg);
    }
    setShowLoading(false);
  };

  return (
    <>
      <Alert
        open={open}
        severity={severity}
        onClose={handleClose}
        message={alertMessage}
      />
      {showLoading && <Loading />}
      <div className="container">
        <NormalHeader />
        <div className="main-layout">
          <div className="main-content">
            {fileList?.length <= 0 ? (
              <div className="content-panel">
                <div className="boot-panel upload-file-panel">
                  <img src={uploadIcon} alt="" />
                  <p className="drag">
                    Drag and drop the file into the box to upload
                  </p>
                  <p className="supports">
                    Supports all file formats (e.g. JPG, PNG, GIF, MP4, DOC,
                    XLS, PDF, etc.)
                  </p>
                  <p className="size-tip">File size cannot exceed 5M</p>
                  <Button component="label">
                    <OvalButton title="Upload file" />
                    <input
                      hidden
                      multiple
                      type="file"
                      onChange={_onChangeAccountData}
                    />
                  </Button>
                </div>
              </div>
            ) : (
              <UploadFile
                files={fileList}
                onDelete={_onFileDelete}
                onConfirm={_onConfirmUpload}
                onChange={_onChangeAccountData}
              />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default connect((state) => state)(memo(UploadFilePage));
