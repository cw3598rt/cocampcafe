import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CommentsWriteUI from "./commentsWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./commentsWrite.query";
import { Modal } from "antd";
import { useRouter } from "next/router";

const schema = yup.object({
  writer: yup.string().required("작성자를 입력해 주세요."),
  password: yup.string().required("비밀번호를 입력해 주세요."),
  contents: yup.string().required("내용을 입력해 주세요."),
});
export default function CommentsWrite() {
  const router = useRouter();
  const [createCommentgql] = useMutation(CREATE_BOARD_COMMENT);
  const [value, setValue] = useState(0);

  const desc = ["아주 별로", "조금 별로", "그럭저럭", "좋다!", "완벽!!"];
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmitCreateComment = async (data) => {
    try {
      await createCommentgql({
        variables: {
          createBoardCommentInput: {
            writer: data.writer,
            password: data.password,
            contents: data.contents,
            rating: value,
          },
          boardId: router.query._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query._id,
            },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <CommentsWriteUI
      formState={formState}
      handleSubmit={handleSubmit}
      register={register}
      desc={desc}
      setValue={setValue}
      value={value}
      onSubmitCreateComment={onSubmitCreateComment}
    />
  );
}
