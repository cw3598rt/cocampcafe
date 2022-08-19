import { useApolloClient, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import LoginUI from "./login.presenter";
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from "./login.query";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
const schema = yup.object({
  email: yup
    .string()
    .matches(
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "이메일 아이디를 @까지 정확하게 입력해주세요."
    )
    .required("이메일을 입력해 주세요."),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])[0-9a-z]{8,14}$/,
      "영문+숫자 조합 8~14자리의 비밀번호를 입력해주세요."
    )
    .required("비밀번호를 입력해 주세요."),
});
export default function Login() {
  const router = useRouter();
  const client = useApolloClient();
  const [logingql] = useMutation(LOGIN_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmitLogin = async (data) => {
    try {
      const result = await logingql({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });
      const userInfo = resultUserInfo.data.fetchUserLoggedIn;
      setAccessToken(accessToken);
      setUserInfo(userInfo);
      router.push("/");
    } catch (error) {
      Modal.error({ content: "error.message" });
    }
  };
  return (
    <LoginUI
      onSubmitLogin={onSubmitLogin}
      formState={formState}
      register={register}
      handleSubmit={handleSubmit}
    />
  );
}
