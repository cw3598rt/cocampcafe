import { useRef } from "react";
import UploadImgUI from "./upload.presenter";

export default function UploadImg(props) {
  const fileInputRef = useRef();
  const onClickRealFileInput = (index) => () => {
    fileInputRef.current.click();
    props.setImgIndex(index);
  };
  const onChangeFile = (event) => {
    const imgfile = event.target.files?.[0];
    const newFile = [...props.files];
    newFile[Number(props.imgIndex)] = imgfile;
    props.setFiles(newFile);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imgfile);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        const newImgUrls = [...props.imgUrl];
        newImgUrls[Number(props.imgIndex)] = data.target?.result;
        props.setImgUrl(newImgUrls);
      }
    };
  };

  return (
    <UploadImgUI
      isEdit={props.isEdit}
      onClickRealFileInput={onClickRealFileInput}
      fileInputRef={fileInputRef}
      imgUrl={props.imgUrl}
      onChangeFile={onChangeFile}
    />
  );
}
