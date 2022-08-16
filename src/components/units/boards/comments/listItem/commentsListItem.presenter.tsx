import { Rate } from "antd";
import * as S from "./commentsListItem.styles";
export default function CommentsListItemUI(props) {
  return (
    <S.Section>
      <S.WriterBox>
        <S.Writer>{props.comment.writer}</S.Writer>
        <Rate tooltips={props.desc} value={props.comment.rating} />
      </S.WriterBox>
      <S.Contents>{props.comment.contents}</S.Contents>
      <S.ButtonBox>
        <S.UpdateButton>수정하기</S.UpdateButton>
        <S.CancelButton>삭제</S.CancelButton>
      </S.ButtonBox>
    </S.Section>
  );
}
