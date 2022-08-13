import * as S from "./boardList.styles";
import Pagination from "../../../commons/pagination/pagination";
import { timeForToday } from "../../../../commons/libraries/date/timeForTodat";
export default function BoardListUI(props) {
  return (
    <S.Section>
      <S.BoardBox>
        {props.data?.fetchBoards.map((el) => (
          <S.BoardList
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToDetail}
          >
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
              <S.Title>{el.title.slice(0, 11)}</S.Title>
              <S.Writer>{el.writer}님</S.Writer>
            </S.InfoBox>
            <S.CreatedAt>{timeForToday(el.createdAt)}</S.CreatedAt>
          </S.BoardList>
        ))}
      </S.BoardBox>
      <S.WriteButton onClick={props.onClickMoveToWrite}>작성하기</S.WriteButton>
      <Pagination lastPage={props.lastPage} refetch={props.refetch} />
    </S.Section>
  );
}
