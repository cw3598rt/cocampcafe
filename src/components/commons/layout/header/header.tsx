import * as S from "./header.styles";
export default function Header() {
  return (
    <S.Header>
      <S.Logo src="/logo.png" alt="thumbnail" />
      <S.Section>
        <S.UserBox>
          <S.Login>로그인</S.Login>
          <S.Signup>회원가입</S.Signup>
        </S.UserBox>
        <S.MenuBox>
          <S.Board>코캠7기 게시판</S.Board>
          <S.Market>코캠7기 장터</S.Market>
        </S.MenuBox>
      </S.Section>
    </S.Header>
  );
}
