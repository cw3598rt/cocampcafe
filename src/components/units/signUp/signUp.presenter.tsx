import * as S from "./signUp.styles";
export default function SignUpUI(props) {
  return (
    <S.Section>
      <S.Title>회원가입</S.Title>
      <S.Form onSubmit={props.handleSubmit(props.onSubmitSignUp)}>
        <S.InputBox>
          <div>
            <S.EmailBox>
              <S.EmailLabel>이메일:</S.EmailLabel>
              <S.EmailInput type="text" {...props.register("email")} />
            </S.EmailBox>
            <S.Error>{props.formState.errors.email?.message}</S.Error>
          </div>
          <div>
            <S.PasswordBox>
              <S.PasswordLabel>비밀번호:</S.PasswordLabel>
              <S.PasswordInput
                type="password"
                {...props.register("password")}
              />
            </S.PasswordBox>
            <S.Error>{props.formState.errors.password?.message}</S.Error>
          </div>
          <div>
            <S.NameBox>
              <S.NameLabel>이름:</S.NameLabel>
              <S.NameInput type="text" {...props.register("name")} />
            </S.NameBox>
            <S.Error>{props.formState.errors.name?.message}</S.Error>
          </div>
        </S.InputBox>
        <S.ButtonBox>
          <S.SignUpButton>가입</S.SignUpButton>
          <S.CancelButton type="button">취소</S.CancelButton>
        </S.ButtonBox>
      </S.Form>
    </S.Section>
  );
}
