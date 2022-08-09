import * as S from "./main.styles";
export default function MainUI(props) {
  return (
    <S.Section>
      <S.BestBoards>
        <S.BestBoardsTitleBox>
          <S.BestBoardsTitle>인기 게시글</S.BestBoardsTitle>
        </S.BestBoardsTitleBox>
        <S.BestBoardLists>
          {props.data?.fetchBoardsOfTheBest.map((el) => (
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
        </S.BestUsedItemsTitleBox>
        <S.BestUsedItemsLists>
          {props.usedItems?.fetchUseditemsOfTheBest.map((el) => (
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
