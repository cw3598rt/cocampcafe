import * as S from "./login.styles";
export default function LoginUI(props) {
  return (
    <S.Section>
      <S.Title>로그인</S.Title>
      <S.Form onSubmit={props.handleSubmit(props.onSubmitLogin)}>
        <S.LoginInfoBox>
          <div>
            <S.EmailBox>
              <S.EmailLabel>이메일</S.EmailLabel>
              <S.EmailInput type="text" {...props.register("email")} />
            </S.EmailBox>
            <S.Error>{props.formState.errors.email?.message}</S.Error>
          </div>
          <div>
            <S.PasswordBox>
              <S.PasswordLabel>비밀번호</S.PasswordLabel>
              <S.PasswordInput
                type="password"
                {...props.register("password")}
              />
            </S.PasswordBox>
            <S.Error>{props.formState.errors.password?.message}</S.Error>
          </div>
        </S.LoginInfoBox>
        <S.LoginButton>로그인</S.LoginButton>
      </S.Form>
    </S.Section>
  );
}
