import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import CommentsListUI from "./commentsList.presenter";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./commentsList.query";
export default function CommentsList() {
  const desc = ["아주 별로", "조금 별로", "그럭저럭", "좋다!", "완벽!!"];
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query._id,
    },
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [boardCommentId, setBoardCommentId] = useState("");
  const [deleteCommentgql] = useMutation(DELETE_BOARD_COMMENT);

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const showModal = (boardCommentId) => () => {
    setIsModalVisible(true);
    setBoardCommentId(boardCommentId);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    onClickDeleteComment();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onClickDeleteComment = async () => {
    try {
      await deleteCommentgql({
        variables: {
          password,
          boardCommentId,
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
    <CommentsListUI
      data={data}
      desc={desc}
      onClickDeleteComment={onClickDeleteComment}
      isModalVisible={isModalVisible}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      onChangePassword={onChangePassword}
    />
  );
}
