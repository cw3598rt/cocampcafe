import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CommentsWriteUI from "./commentsWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./commentsWrite.query";
import { Modal } from "antd";
import { useRouter } from "next/router";

const schema = yup.object({
  writer: yup.string().required("작성자를 입력해 주세요."),
  password: yup.string().required("비밀번호를 입력해 주세요."),
  contents: yup.string().required("내용을 입력해 주세요."),
});
export default function CommentsWrite(props) {
  const router = useRouter();
  const [createCommentgql] = useMutation(CREATE_BOARD_COMMENT);
  const [updateCommentgql] = useMutation(UPDATE_BOARD_COMMENT);
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
  const onSubmitUpdateComment = async (data) => {
    const updateBoardCommentInput = {};
    if (value) updateBoardCommentInput.rating = value;
    if (data.contents) updateBoardCommentInput.contents = data.contents;
    try {
      await updateCommentgql({
        variables: {
          updateBoardCommentInput,
          password: data.password,
          boardCommentId: props.boardCommentId,
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
      props.setIsEdit(false);
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
      onSubmitUpdateComment={onSubmitUpdateComment}
      isEdit={props.isEdit}
      setIsEdit={props.setIsEdit}
      defauldData={props.defauldData}
    />
  );
}
