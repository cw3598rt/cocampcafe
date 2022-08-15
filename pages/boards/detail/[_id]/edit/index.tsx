import BoardWrite from "../../../../../src/components/units/boards/write/boardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      createdAt
      boardAddress {
        _id
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();
  const { data: defaultData } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query._id,
    },
  });
  return <BoardWrite isEdit={true} defaultData={defaultData} />;
}
