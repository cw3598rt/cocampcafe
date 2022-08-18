import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import SignUpUI from "./signUp.presenter";
import { Modal } from "antd";
import { CREATE_USER } from "./signUp.query";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
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
  name: yup.string().required("이름을 입력해 주세요."),
});
export default function SignUp() {
  const router = useRouter();
  const [signupgql] = useMutation(CREATE_USER);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmitSignUp = async (data) => {
    try {
      await signupgql({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });

      // router.push("/login");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <SignUpUI
      formState={formState}
      register={register}
      handleSubmit={handleSubmit}
      onSubmitSignUp={onSubmitSignUp}
    />
  );
}
