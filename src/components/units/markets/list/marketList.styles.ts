import styled from "@emotion/styled";
export const Section = styled.section`
  width: 50%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;
export const MarketBox = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  overflow-y: auto;
`;
export const MarketList = styled.li`
  width: 15%;
  margin: 1em 1em 1em 1em;
  padding: 0.5em;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  transition: all 250ms ease-in;
`;
export const Imgs = styled.img`
  width: 100%;
  height: 5.8em;
`;
export const InfoBox = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.span`
  font-weight: 600;
  font-size: 1em;
`;
export const Writer = styled.span`
  font-size: 0.8em;
  align-self: flex-end;
`;
export const CreatedAt = styled.div`
  font-size: 0.6em;
  font-weight: 550;
`;
export const WriteButton = styled.button`
  border: none;
  width: 5em;
  height: 3em;
  border-radius: 10px;
  align-self: flex-end;
  margin-bottom: 2em;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    background-color: cadetblue;
    color: whitesmoke;
  }
  transition: all 250ms ease-in;
`;
export const OpenButton = styled.button`
  border: none;
  width: 5em;
  height: 3em;
  border-radius: 10px;
  margin: auto;
  cursor: pointer;
  :hover {
    background-color: cadetblue;
    color: whitesmoke;
  }
  transition: all 250ms ease-in;
`;
