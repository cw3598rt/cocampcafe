import * as S from "./sidebar.styles";

export default function Sidebar() {
  return (
    <S.Sidebar>
      <S.MyPage>내 정보</S.MyPage>
      <S.CheckedItemsBox>
        <S.TodayCheckedItems>오늘 본 상품</S.TodayCheckedItems>
        <S.ItemBox>
          <S.Imgs src="" alt="thumbnail" />
          <S.Imgs src="" alt="thumbnail" />
          <S.Imgs src="" alt="thumbnail" />
        </S.ItemBox>
      </S.CheckedItemsBox>
    </S.Sidebar>
  );
}
