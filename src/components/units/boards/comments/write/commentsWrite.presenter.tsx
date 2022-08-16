import { Rate } from "antd";
import * as S from "./commentsWrite.styles";
export default function CommentsWriteUI(props) {
  return (
    <S.Section>
      <S.Form onSubmit={props.handleSubmit(props.onSubmitCreateComment)}>
        <S.Wrapper>
          <div>
            <S.WriterBox>
              <S.Writer>작성자:</S.Writer>
              <S.WriterInput type="text" {...props.register("writer")} />
            </S.WriterBox>
            <S.Error>{props.formState.errors.writer?.message}</S.Error>
          </div>
          <div>
            <S.PasswordBox>
              <S.Password>비밀번호:</S.Password>
              <S.PasswordInput
                type="password"
                {...props.register("password")}
              />
            </S.PasswordBox>
            <S.Error>{props.formState.errors.password?.message}</S.Error>
          </div>

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
        <div>
          <S.Contents
            name="contents"
            {...props.register("contents")}
          ></S.Contents>
          <S.Error>{props.formState.errors.contents?.message}</S.Error>
        </div>

        <S.ButtonBox>
          <S.WriteButton>댓글 등록</S.WriteButton>
          <S.CancelButton type="reset">취소</S.CancelButton>
        </S.ButtonBox>
      </S.Form>
    </S.Section>
  );
}
