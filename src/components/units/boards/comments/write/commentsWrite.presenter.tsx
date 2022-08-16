import { Rate } from "antd";
import * as S from "./commentsWrite.styles";
export default function CommentsWriteUI(props) {
  return (
    <S.Section>
      <S.Wrapper>
        <S.WriterBox>
          <S.Writer>작성자:</S.Writer>
          <S.WriterInput type="text" />
        </S.WriterBox>
        <S.PasswordBox>
          <S.Password>비밀번호:</S.Password>
          <S.PasswordInput type="password" />
        </S.PasswordBox>
        <S.Star>
          <Rate
            tooltips={props.desc}
            onChange={props.setValue}
            value={props.value}
          />
          {props.value ? (
            <S.Starcomment className="ant-rate-text">
              {props.desc[props.value - 1]}
            </S.Starcomment>
          ) : (
            ""
          )}
        </S.Star>
      </S.Wrapper>
      <S.Contents name="contents"></S.Contents>
      <S.ButtonBox>
        <S.WriteButton>댓글 등록</S.WriteButton>
        <S.CancelButton>취소</S.CancelButton>
      </S.ButtonBox>
    </S.Section>
  );
}
