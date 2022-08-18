import { useRouter } from "next/router";
import * as S from "./header.styles";
export default function Header() {
  const router = useRouter();
  const onClickMoveToBoard = () => {
    router.push("/boards/list");
  };
  const onClickMoveToMain = () => {
    router.push("/");
  };
  const onClickMoveToSignup = () => {
    router.push("/signup");
  };
  return (
    <S.Header>
      <S.Logo src="/logo.png" alt="thumbnail" onClick={onClickMoveToMain} />
      <S.Section>
        <S.UserBox>
          <S.Login>로그인</S.Login>
          <S.Signup onClick={onClickMoveToSignup}>회원가입</S.Signup>
        </S.UserBox>
        <S.MenuBox>
          <S.Board onClick={onClickMoveToBoard}>코캠7기 게시판</S.Board>
          <S.Market>코캠7기 장터</S.Market>
        </S.MenuBox>
      </S.Section>
    </S.Header>
  );
}
