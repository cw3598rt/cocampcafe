import * as S from "./boardWrite.styles";
import ReactPlayer from "react-player";
export default function BoardWriteUI() {
  return (
    <S.Section>
      <S.WriterInfoBox>
        작성자: <S.WriterInput type="text" />
        비밀번호:
        <S.PasswordInput type="password" />
      </S.WriterInfoBox>
      <S.Divider></S.Divider>
      <S.TitleBox>
        <S.TitleContainer>
          <S.TitleLabel>제목:</S.TitleLabel>
          <S.TitleInput type="text" placeholder="제목을 입력해 주세요." />
        </S.TitleContainer>
        <S.YoutubeContainer>
          <S.YoutubeLabel>유튜브URL:</S.YoutubeLabel>
          <S.YoutubeInput
            type="text"
            placeholder="좋아하는 동영상 URL를 복사/붙여넣기 해주세요."
          />
        </S.YoutubeContainer>
      </S.TitleBox>
      <S.ContentsBox>
        <S.ContentsContainer>
          <S.ContentsLabel>내용:</S.ContentsLabel>
          <S.ContentsInput name="contents"></S.ContentsInput>
        </S.ContentsContainer>
        <S.YoutubePreviewContainer>
          <S.YoutubePreviewLabel>유튜브 화면 미리보기</S.YoutubePreviewLabel>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="20em"
            height="15em"
          />
        </S.YoutubePreviewContainer>
      </S.ContentsBox>
      <S.PictureBox>
        <div>
          <div>사진</div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <div>주소</div>
          <div>
            <div>
              <input type="text" placeholder="우편번호" />
              <button>우편번호 찾기</button>
            </div>
            <input type="text" placeholder="주소" />
            <input type="text" placeholder="상세주소" />
          </div>
        </div>
      </S.PictureBox>
      <div>
        <button>작성하기</button>
        <button>취소하기</button>
      </div>
    </S.Section>
  );
}
