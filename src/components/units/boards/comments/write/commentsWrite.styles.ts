import styled from "@emotion/styled";
export const Section = styled.section`
  padding-top: 3em;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 2em;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
`;
export const WriterBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;
`;
export const Writer = styled.span`
  font-size: 1em;
  color: cadetblue;
`;
export const WriterInput = styled.input`
  width: 10em;
  height: 2em;
  border: 2px solid cadetblue;
  border-radius: 5px;
  outline-color: cadetblue;
  padding: 1em;
  font-size: 1em;
`;
export const PasswordBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;
`;
export const Password = styled.span`
  font-size: 1em;
  color: cadetblue;
`;
export const PasswordInput = styled.input`
  width: 10em;
  height: 2em;
  border: 2px solid cadetblue;
  border-radius: 5px;
  outline-color: cadetblue;
  padding: 1em;
  font-size: 1em;
`;
export const Star = styled.span``;
export const Starcomment = styled.span`
  font-size: 1em;
  color: cadetblue;
`;
export const Contents = styled.textarea`
  width: 100%;
  height: 8em;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 2em;
`;

export const WriteButton = styled.button`
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
