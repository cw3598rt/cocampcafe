import * as S from "./upload.styles";
export default function UploadImgUI(props) {
  return (
    <S.Wrapper>
      {props.imgUrl?.map((img, index) =>
        img ? (
          <S.Imgs
            onClick={props.onClickRealFileInput(index)}
            key={index}
            src={props.isEdit ? img : `https://storage.googleapis.com/${img}`}
          ></S.Imgs>
        ) : (
          <S.Imgs
            src="/nophoto.png"
            key={index}
            onClick={props.onClickRealFileInput(index)}
          ></S.Imgs>
        )
      )}
      <S.FileInput
        type="file"
        onChange={props.onChangeFile}
        ref={props.fileInputRef}
      />
    </S.Wrapper>
  );
}
