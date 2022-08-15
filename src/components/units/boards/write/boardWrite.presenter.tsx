import * as S from "./boardWrite.styles";
import ReactPlayer from "react-player";
import UploadImg from "../../../commons/upload/upload.container";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
export default function BoardWriteUI(props) {
  return (
    <S.Section>
      {props.isModalVisible && (
        <>
          <Modal
            title="주소 검색"
            visible={true}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
          >
            <DaumPostcodeEmbed onComplete={props.handleComplete} {...props} />
          </Modal>
        </>
      )}
      <S.Form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onSubmitUpdateBoard)
            : props.handleSubmit(props.onSubmitCreateBoard)
        }
      >
        <S.WriterInfoBox>
          <div>
            작성자:{" "}
            <S.WriterInput
              type="text"
              {...props.register("writer")}
              defaultValue={props.defaultData?.fetchBoard.writer}
            />
            <S.Error>{props.formState.errors.writer?.message}</S.Error>
          </div>
          <div>
            비밀번호:
            <S.PasswordInput type="password" {...props.register("password")} />
            <S.Error>{props.formState.errors.password?.message}</S.Error>
          </div>
        </S.WriterInfoBox>
        <S.Divider></S.Divider>
        <S.TitleBox>
          <S.TitleContainer>
            <div>
              <S.TitleLabel>제목:</S.TitleLabel>
              <S.TitleInput
                type="text"
                placeholder="제목을 입력해 주세요."
                {...props.register("title")}
                defaultValue={props.defaultData?.fetchBoard.title}
              />
              <S.Error>{props.formState.errors.title?.message}</S.Error>
            </div>
          </S.TitleContainer>
          <S.YoutubeContainer>
            <S.YoutubeLabel>유튜브URL:</S.YoutubeLabel>
            <S.YoutubeInput
              type="text"
              placeholder="좋아하는 동영상 URL를 복사/붙여넣기 해주세요."
              ref={props.youtubeInputRef}
              onChange={props.onChangeYoutubeUrl}
              defaultValue={props.defaultData?.fetchBoard.youtubeUrl}
            />
          </S.YoutubeContainer>
        </S.TitleBox>
        <S.ContentsBox>
          <S.ContentsContainer>
            <div>
              <S.ContentsLabel>내용:</S.ContentsLabel>
              <S.ContentsInput
                name="contents"
                {...props.register("contents")}
                defaultValue={props.defaultData?.fetchBoard.contents}
              ></S.ContentsInput>
              <S.Error>{props.formState.errors.contents?.message}</S.Error>
            </div>
          </S.ContentsContainer>
          <S.YoutubePreviewContainer>
            {props.youtubeInputRef.current?.value && (
              <ReactPlayer
                url={
                  props.youtubeInputRef.current?.value ||
                  props.defaultData?.fetchBoard.youtubeUrl
                }
                width="20em"
                height="10em"
              />
            )}
            {!props.youtubeInputRef.current?.value && (
              <S.NoVideo src="/novideo.png" alt="novideo" />
            )}
          </S.YoutubePreviewContainer>
        </S.ContentsBox>
        <S.PictureBox>
          <S.PictureContainer>
            <S.PictureLabel>사진</S.PictureLabel>
            <S.ImgBox>
              <UploadImg
                isEdit={props.isEdit}
                imgUrl={props.imgUrl}
                setImgUrl={props.setImgUrl}
                files={props.files}
                setFiles={props.setFiles}
                setImgIndex={props.setImgIndex}
                imgIndex={props.imgIndex}
              />
            </S.ImgBox>
          </S.PictureContainer>
          <S.AdddressContainer>
            <S.AddressLabel>주소</S.AddressLabel>
            <S.AddressInputContainer>
              <S.PostCodeBox>
                <S.PostCodeInput
                  type="text"
                  placeholder="우편번호"
                  value={
                    props.zipcode ||
                    props.defaultData?.fetchBoard.boardAddress.zipcode
                  }
                  readOnly
                />
                <S.PostCodeSearchBtn type="button" onClick={props.showModal}>
                  우편번호 찾기
                </S.PostCodeSearchBtn>
              </S.PostCodeBox>
              <S.AddressInput
                type="text"
                placeholder="주소"
                value={
                  props.address ||
                  props.defaultData?.fetchBoard.boardAddress.address
                }
                readOnly
              />
              <S.AddressDetailInput
                type="text"
                placeholder="상세주소"
                {...props.register("addressDetail")}
                defaultValue={
                  props.defaultData?.fetchBoard.boardAddress.addressDetail
                }
              />
            </S.AddressInputContainer>
          </S.AdddressContainer>
        </S.PictureBox>
        <S.Btns>
          <S.WriteBtn>{props.isEdit ? "수정하기" : "작성하기"}</S.WriteBtn>
          <S.CancelBtn type="button" onClick={props.onClickMoveBackToList}>
            취소하기
          </S.CancelBtn>
        </S.Btns>
      </S.Form>
    </S.Section>
  );
}
