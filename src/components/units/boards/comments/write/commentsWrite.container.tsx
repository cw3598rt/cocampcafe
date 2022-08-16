import { useMutation } from "@apollo/client";
import { useState } from "react";
import CommentsWriteUI from "./commentsWrite.presenter";
import { CREATE_BOARD_COMMENT } from "./commentsWrite.query";
export default function CommentsWrite() {
  const [createCommentgql] = useMutation(CREATE_BOARD_COMMENT);
  const [value, setValue] = useState(3);
  const desc = ["아주 별로", "조금 별로", "그럭저럭", "좋다!", "완벽!!"];
  return <CommentsWriteUI desc={desc} setValue={setValue} value={value} />;
}
