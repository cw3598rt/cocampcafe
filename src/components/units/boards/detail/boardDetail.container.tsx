import {
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
  DELETE_BOARD,
} from "./boardDetail.query";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./boardDetail.presenter";
import { Modal } from "antd";
export default function BoardDetail() {
  const router = useRouter();
  const [likeBoardgql] = useMutation(LIKE_BOARD);
  const [dislikeBoardgql] = useMutation(DISLIKE_BOARD);
  const [deleteBoardgql] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query._id,
    },
  });
  const onClickMoveToList = () => {
    router.push("/boards/list");
  };

  const onClickDeleteBoard = async () => {
    try {
      await deleteBoardgql({
        variables: {
          boardId: router.query._id,
        },
      });
      router.push("/boards/list");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const onClickLikeCount = async () => {
    await likeBoardgql({
      variables: {
        boardId: router.query._id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query._id,
          },
        },
      ],
    });
  };

  const onClickDisLikeCount = async () => {
    await dislikeBoardgql({
      variables: {
        boardId: router.query._id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query._id,
          },
        },
      ],
    });
  };
  return (
    <BoardDetailUI
      data={data}
      onClickLikeCount={onClickLikeCount}
      onClickDisLikeCount={onClickDisLikeCount}
      onClickMoveToList={onClickMoveToList}
      onClickDeleteBoard={onClickDeleteBoard}
    />
  );
}
