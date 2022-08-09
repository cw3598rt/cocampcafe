import { FETCH_BOARD } from "./boardDetail.query";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./boardDetail.presenter";
export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  return <BoardDetailUI />;
}
