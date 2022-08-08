import * as S from "./main.styles";
import {
  FETCH_BOARDS_OF_THE_BEST,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./main.query";
import { useQuery } from "@apollo/client";

export default function Main() {
  const { data } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const { data: usedItems } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);
  console.log(data?.fetchBoardsOfTheBest);
  console.log(usedItems?.fetchUseditemsOfTheBest);
  return (
    <S.Section>
      <S.BestBoards>
        <S.BestBoardsTitleBox>
          <S.BestBoardsTitle>인기 게시글</S.BestBoardsTitle>
          <S.BoardBtn>더보기</S.BoardBtn>
        </S.BestBoardsTitleBox>
        <S.BestBoardLists>
          {data?.fetchBoardsOfTheBest.map((el) => (
            <S.BestBoardList key={el._id}>
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
              <S.BestBoardInfo>
                <S.BoardTitle>{el.title.slice(0, 5)}</S.BoardTitle>
                <S.BoardWriter>{el.writer}님</S.BoardWriter>
              </S.BestBoardInfo>
            </S.BestBoardList>
          ))}
        </S.BestBoardLists>
      </S.BestBoards>
      <S.BestUsedItems>
        <S.BestUsedItemsTitleBox>
          <S.BestUsedItemsTitle>인기 상품</S.BestUsedItemsTitle>
          <S.UsedItemsBtn>더보기</S.UsedItemsBtn>
        </S.BestUsedItemsTitleBox>
        <S.BestUsedItemsLists>
          {usedItems?.fetchUseditemsOfTheBest.map((el) => (
            <S.BestUsedItemsList key={el._id}>
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
              <S.BestUsedItemsInfo>
                <S.BestUsedItemsInfos>
                  <S.BestUsedItemsName>
                    {el.name.slice(0, 5)}
                  </S.BestUsedItemsName>
                  <S.BestUsedItemsPrice>{el.price}원</S.BestUsedItemsPrice>
                </S.BestUsedItemsInfos>
                <S.BestUsedItemsSeller>
                  판매자:{el.seller.name}
                </S.BestUsedItemsSeller>
              </S.BestUsedItemsInfo>
            </S.BestUsedItemsList>
          ))}
        </S.BestUsedItemsLists>
      </S.BestUsedItems>
    </S.Section>
  );
}
