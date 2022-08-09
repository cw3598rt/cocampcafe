import * as S from "./boardList.styles";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./boardList.query";
import { useQuery } from "@apollo/client";
import Pagination from "../../../commons/pagination/pagination";
import { useRouter } from "next/router";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: BoardCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = BoardCount?.fetchBoardsCount / 10;
  const onClickMoveToDetail = (event) => {
    router.push(`/boards/detail/${event?.target.id}`);
  };
  return (
    <S.Section>
      <S.BoardBox>
        {data?.fetchBoards.map((el) => (
          <S.BoardList key={el._id} id={el._id} onClick={onClickMoveToDetail}>
            {el.images.filter((el) => el !== "")[0] && (
              <S.Imgs
                src={`https://storage.googleapis.com/${
                  el.images.filter((el) => el !== "")[0]
                }`}
                alt="thumbnail"
              />
            )}
            {!el.images.filter((el) => el !== "")[0] && (
              <S.Imgs src="/nophoto.png" alt="nophoto" />
            )}
            <S.InfoBox>
              <S.Title>{el.title}</S.Title>
              <S.Writer>{el.writer}님</S.Writer>
            </S.InfoBox>
            <S.CreatedAt>{el.createdAt}</S.CreatedAt>
          </S.BoardList>
        ))}
      </S.BoardBox>
      <Pagination lastPage={lastPage} refetch={refetch} />
    </S.Section>
  );
}
