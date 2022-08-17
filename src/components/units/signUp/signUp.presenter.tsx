import * as S from "./signUp.styles";
export default function SignUpUI() {
  return (
    <S.Section>
      <S.Title>회원가입</S.Title>
      <S.InputBox>
        <S.EmailBox>
          <S.EmailLabel>이메일:</S.EmailLabel>
          <S.EmailInput type="text" />
        </S.EmailBox>
        <S.PasswordBox>
          <S.PasswordLabel>비밀번호:</S.PasswordLabel>
          <S.PasswordInput type="password" />
        </S.PasswordBox>
        <S.NameBox>
          <S.NameLabel>이름:</S.NameLabel>
          <S.NameInput type="text" />
        </S.NameBox>
      </S.InputBox>
      <S.ButtonBox>
        <S.SignUpButton>가입</S.SignUpButton>
        <S.CancelButton>취소</S.CancelButton>
      </S.ButtonBox>
    </S.Section>
  );
}
