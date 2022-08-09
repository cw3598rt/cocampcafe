import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./boardList.query";
import { useQuery } from "@apollo/client";

import { useRouter } from "next/router";
import BoardListUI from "./boardList.presenter";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: BoardCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = BoardCount?.fetchBoardsCount / 10;
  const onClickMoveToDetail = (event) => {
    router.push(`/boards/detail/${event.target.id}`);
  };
  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      lastPage={lastPage}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
