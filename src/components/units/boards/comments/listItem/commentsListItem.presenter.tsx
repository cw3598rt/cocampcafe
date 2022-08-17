import { Modal, Rate } from "antd";
import { useState } from "react";
import CommentsWrite from "../write/commentsWrite.container";
import * as S from "./commentsListItem.styles";
export default function CommentsListItemUI(props) {
  const [isEdit, setIsEdit] = useState(false);
  const onClickOpenWriteComment = () => {
    setIsEdit(true);
  };
  return (
    <>
      {!isEdit && (
        <S.Section>
          {props.isModalVisible && (
            <Modal
              title="비밀번호"
              visible={true}
              onOk={props.handleOk}
              onCancel={props.handleCancel}
            >
              <input
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                onChange={props.onChangePassword}
              />
            </Modal>
          )}

          <S.WriterBox>
            <S.Writer>{props.comment.writer}</S.Writer>
            <Rate tooltips={props.desc} value={props.comment.rating} />
          </S.WriterBox>
          <S.Contents>{props.comment.contents}</S.Contents>
          <S.ButtonBox>
            <S.UpdateButton onClick={onClickOpenWriteComment}>
              수정하기
            </S.UpdateButton>
            <S.CancelButton onClick={props.showModal(props.comment._id)}>
              삭제
            </S.CancelButton>
          </S.ButtonBox>
        </S.Section>
      )}
      {isEdit && (
        <CommentsWrite
          defauldData={props.comment}
          boardCommentId={props.comment._id}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      )}
    </>
  );
}
