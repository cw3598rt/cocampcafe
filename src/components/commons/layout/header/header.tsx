import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import * as S from "./header.styles";
const LOG_OUT_USER = gql`
  mutation {
    logoutUser
  }
`;
export default function Header() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [logOutgql] = useMutation(LOG_OUT_USER);
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
  const onClickMoveToLogin = () => {
    router.push("/login");
  };
  const onClickLogout = async () => {
    await logOutgql();
    setAccessToken("");
  };
  return (
    <S.Header>
      <S.Logo src="/logo.png" alt="thumbnail" onClick={onClickMoveToMain} />
      <S.Section>
        {!accessToken && (
          <S.UserBox>
            <S.Login onClick={onClickMoveToLogin}>로그인</S.Login>
            <S.Signup onClick={onClickMoveToSignup}>회원가입</S.Signup>
          </S.UserBox>
        )}
        {accessToken && (
          <S.UserBox>
            <S.UserName>{userInfo.name}님 환영합니다!</S.UserName>
            <S.Signup onClick={onClickLogout}>로그아웃</S.Signup>
          </S.UserBox>
        )}
        <S.MenuBox>
          <S.Board onClick={onClickMoveToBoard}>코캠7기 게시판</S.Board>
          <S.Market>코캠7기 장터</S.Market>
        </S.MenuBox>
      </S.Section>
    </S.Header>
  );
}
