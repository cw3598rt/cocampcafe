import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import LoginUI from "./login.presenter";
import { LOGIN_USER } from "./login.query";
import { Modal } from "antd";
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
  const [logingql] = useMutation(LOGIN_USER);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmitLogin = async (data) => {
    try {
      await logingql({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
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
