import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketListUI from "./marketList.presenter";
import { FETCH_USED_ITEMS } from "./marketList.query";

export default function MarketList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const onClickLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  const onClickMoveToWrite = () => {
    router.push("/markets/write");
  };
  const onClickMoveToDetail = (useditemId: string) => () => {
    router.push(`markets/detail/${useditemId}`);
  };
  return (
    <MarketListUI
      data={data}
      onClickMoveToWrite={onClickMoveToWrite}
      onClickMoveToDetail={onClickMoveToDetail}
      onClickLoadMore={onClickLoadMore}
    />
  );
}
