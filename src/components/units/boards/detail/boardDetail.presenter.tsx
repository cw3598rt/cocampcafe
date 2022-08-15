import * as S from "./boardDetail.styles";
import { v4 } from "uuid";
import ReactPlayer from "react-player";
import { timeForToday } from "../../../../commons/libraries/date/timeForTodat";

export default function BoardDetailUI(props) {
  return (
    <S.Section>
      <S.Header>
        <S.Writer>작성자: {props.data?.fetchBoard.writer}</S.Writer>
        <S.WriterDetailInfoBox>
          <S.Location>
            {props.data?.fetchBoard.boardAddress?.address}
          </S.Location>
          <S.Date>{timeForToday(props.data?.fetchBoard.createdAt)}</S.Date>
        </S.WriterDetailInfoBox>
      </S.Header>
      <S.Divider></S.Divider>
      <S.Container>
        <S.Title>{props.data?.fetchBoard.title}</S.Title>
        <S.ContentsBox>
          <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
          {props.data?.fetchBoard.youtubeUrl && (
            <ReactPlayer
              url={props.data?.fetchBoard.youtubeUrl}
              width="24em"
              height="22.5em"
            />
          )}
          {!props.data?.fetchBoard.youtubeUrl && (
            <S.NoVideo src="/novideo.png" alt="novideo" />
          )}
        </S.ContentsBox>
        <S.ImgBox>
          {props.data?.fetchBoard.images.map((el: string) =>
            el ? (
              <S.Imgs
                key={v4()}
                src={`https://storage.googleapis.com/${el}`}
                alt="contentPicture"
              />
            ) : (
              <S.Imgs key={v4()} src="/nophoto.png" alt="contentPicture" />
            )
          )}
        </S.ImgBox>
        <S.ReactionBox>
          <S.LikeBox>
            <S.LikeBtn onClick={props.onClickLikeCount} />
            <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
          </S.LikeBox>
          <S.DisLikeBox>
            <S.DisLikeBtn onClick={props.onClickDisLikeCount} />
            <S.DisLikeCount>
              {props.data?.fetchBoard.dislikeCount}
            </S.DisLikeCount>
          </S.DisLikeBox>
        </S.ReactionBox>
      </S.Container>
      <S.Btns>
        <S.Button onClick={props.onClickMoveToList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToEdit}>수정하기</S.Button>
        <S.Button onClick={props.onClickDeleteBoard}>삭제하기</S.Button>
      </S.Btns>
    </S.Section>
  );
}
