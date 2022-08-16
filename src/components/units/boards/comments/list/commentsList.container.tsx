import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommentsListUI from "./commentsList.presenter";
import { FETCH_BOARD_COMMENTS } from "./commentsList.query";
export default function CommentsList() {
  const desc = ["아주 별로", "조금 별로", "그럭저럭", "좋다!", "완벽!!"];
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query._id,
    },
  });
  return <CommentsListUI data={data} desc={desc} />;
}
