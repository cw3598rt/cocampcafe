import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailUI from "./marketDetail.presenter";
import { FETCH_USED_ITEM } from "./marketDetail.query";
export default function MarketDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query._id,
    },
  });
  return <MarketDetailUI data={data} />;
}
