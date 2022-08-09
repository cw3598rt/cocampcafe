import styled from "@emotion/styled";
export const Section = styled.section`
  width: 50%;
  height: 100%;
  margin: auto;
`;
export const BoardBox = styled.ul`
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
export const BoardList = styled.li`
  width: 15%;
  margin: 1em 1em 1em 1em;
  padding: 0.5em;
  border-radius: 4px;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  cursor: pointer;
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
