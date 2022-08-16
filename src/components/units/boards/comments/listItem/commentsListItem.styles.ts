import styled from "@emotion/styled";
export const Section = styled.section`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  border: 2px solid lightgray;
  border-radius: 8px;
  padding: 1em;
`;
export const WriterBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2em;
  margin-bottom: 2em;
`;
export const Writer = styled.span`
  font-size: 1em;
  color: cadetblue;
`;
export const Contents = styled.pre`
  white-space: nowrap;
  font-size: 1em;
  color: black;
  width: 90%;
  height: 4em;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 2em;
`;
export const UpdateButton = styled.button`
  border: none;
  color: whitesmoke;
  background-color: cadetblue;
  border-radius: 4px;
  width: 6em;
  height: 3em;
  cursor: pointer;
`;
export const CancelButton = styled.button`
  border: none;
  color: black;
  background-color: lightgray;
  border-radius: 4px;
  width: 3em;
  height: 3em;
  cursor: pointer;
`;
