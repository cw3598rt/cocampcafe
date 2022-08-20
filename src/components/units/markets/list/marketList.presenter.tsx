import { timeForToday } from "../../../../commons/libraries/date/timeForTodat";
import * as S from "./marketList.styles";
export default function MarketListUI(props) {
  return (
    <S.Section>
      <S.MarketBox>
        {props.data?.fetchUseditems.map((el) => (
          <S.MarketList
            key={el._id}
            onClick={props.onClickMoveToDetail(el._id)}
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
              <S.Title>{el.name.slice(0, 11)}</S.Title>
              <S.Writer>{el.seller.name}님</S.Writer>
            </S.InfoBox>
            <S.CreatedAt>{timeForToday(el.createdAt)}</S.CreatedAt>
          </S.MarketList>
        ))}
        <S.OpenButton onClick={props.onClickLoadMore}>더보기</S.OpenButton>
      </S.MarketBox>
      <S.WriteButton onClick={props.onClickMoveToWrite}>작성하기</S.WriteButton>
    </S.Section>
  );
}
