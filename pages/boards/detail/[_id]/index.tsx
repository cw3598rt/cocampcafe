import CommentsList from "../../../../src/components/units/boards/comments/list/commentsList.container";
import CommentsWrite from "../../../../src/components/units/boards/comments/write/commentsWrite.container";
import BoardDetail from "../../../../src/components/units/boards/detail/boardDetail.container";

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <CommentsWrite />
      <CommentsList />
    </>
  );
}
