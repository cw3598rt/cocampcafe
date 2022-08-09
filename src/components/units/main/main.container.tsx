import {
  FETCH_BOARDS_OF_THE_BEST,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./main.query";
import { useQuery } from "@apollo/client";
import MainUI from "./main.presenter";

export default function Main() {
  const { data } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const { data: usedItems } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  return <MainUI data={data} usedItems={usedItems} />;
}
