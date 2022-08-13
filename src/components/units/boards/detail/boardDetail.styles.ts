import styled from "@emotion/styled";
import { LikeFilled, DislikeFilled } from "@ant-design/icons";
export const Section = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  cursor: default;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Writer = styled.span`
  font-weight: 600;
  font-size: 1em;
`;
export const WriterDetailInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8em;
`;
export const Location = styled.span``;
export const Date = styled.span``;
export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: lightblue;
  margin-top: 1em;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 2em;
`;
export const Title = styled.h2`
  font-size: 3em;
  font-weight: 600;
`;

export const ContentsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2em;
`;
export const Contents = styled.pre`
  white-space: nowrap;
  font-size: 1.6em;
`;
export const NoVideo = styled.img`
  width: 24em;
  height: 22.5em;
`;
export const ImgBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Imgs = styled.img`
  width: 30%;
  height: 100%;
  border-radius: 10px;
`;
export const ReactionBox = styled.div`
  margin-top: 3em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;
export const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;
export const LikeBtn = styled(LikeFilled)`
  color: cadetblue;
  font-size: 1.4em;
  cursor: pointer;
`;
export const LikeCount = styled.span`
  font-size: 0.8em;
`;
export const DisLikeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;
export const DisLikeBtn = styled(DislikeFilled)`
  color: lightgray;
  font-size: 1.4em;
  cursor: pointer;
`;
export const DisLikeCount = styled.span`
  font-size: 0.8em;
`;
export const Btns = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  gap: 1em;
`;
export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: cadetblue;
  width: 10em;
  height: 3em;
  border-radius: 10px;
  color: whitesmoke;
  :hover {
    transform: scale(1.1);
  }
  transition: all 250ms ease-in;
`;
