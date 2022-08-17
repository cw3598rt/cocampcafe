import styled from "@emotion/styled";
export const Section = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 3em;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  color: cadetblue;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
export const EmailBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
`;
export const EmailLabel = styled.span`
  font-size: 1.5em;
  color: cadetblue;
`;
export const EmailInput = styled.input`
  outline-color: cadetblue;
  border: 2px solid cadetblue;
  padding: 0.8em;
  width: 20em;
  height: 2.8em;
  border-radius: 8px;
  font-size: 1.4em;
`;
export const PasswordBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
`;
export const PasswordLabel = styled.span`
  font-size: 1.5em;
  color: cadetblue;
`;
export const PasswordInput = styled.input`
  outline-color: cadetblue;
  border: 2px solid cadetblue;
  padding: 0.8em;
  width: 20em;
  height: 2.8em;
  border-radius: 8px;
  font-size: 1.4em;
`;
export const NameBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
`;
export const NameLabel = styled.span`
  font-size: 1.5em;
  color: cadetblue;
`;
export const NameInput = styled.input`
  outline-color: cadetblue;
  border: 2px solid cadetblue;
  padding: 0.8em;
  width: 20em;
  height: 2.8em;
  border-radius: 8px;
  font-size: 1.4em;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;
export const SignUpButton = styled.button`
  width: 6em;
  height: 3em;
  border: none;
  border-radius: 10px;
  background-color: cadetblue;
  color: whitesmoke;
  cursor: pointer;
`;
export const CancelButton = styled.button`
  width: 6em;
  height: 3em;
  border: none;
  border-radius: 10px;
  background-color: lightgray;
  color: black;
  cursor: pointer;
`;
