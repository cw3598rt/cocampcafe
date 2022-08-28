import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import { useState } from "react";
import MarketDetailUI from "./marketDetail.presenter";
import {
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
  DELETE_USED_ITEM,
} from "./marketDetail.query";
export default function MarketDetail() {
  const router = useRouter();
  const [itempickgql] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [deleteusedItmegql] = useMutation(DELETE_USED_ITEM);
  const [isPicked, setIsPicked] = useState(false);
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query._id,
    },
  });
  const onClickPickItem = (useditemId) => async () => {
    try {
      await itempickgql({
        variables: {
          useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: {
              useditemId,
            },
          },
        ],
      });
      setIsPicked((prev) => !prev);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const onClickMoveToList = () => {
    router.push("/markets/list");
  };
  const onClickDeleteUsedItem = (useditemId) => async () => {
    try {
      await deleteusedItmegql({
        variables: {
          useditemId,
        },
      });
      Modal.success({ content: "성공적으로 삭제되었습니다." });
      router.push("/markets/list");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <MarketDetailUI
      data={data}
      onClickPickItem={onClickPickItem}
      isPicked={isPicked}
      onClickMoveToList={onClickMoveToList}
      onClickDeleteUsedItem={onClickDeleteUsedItem}
    />
  );
}
