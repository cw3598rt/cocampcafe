import styled from "@emotion/styled";

export const Header = styled.header`
  width: 50%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;
export const Logo = styled.img`
  align-self: center;
  width: 10em;
  height: 8em;
  cursor: pointer;
`;
export const Section = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1em;
`;
export const Login = styled.span`
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
`;
export const Signup = styled.span`
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
`;
export const UserName = styled.span`
  font-size: 1em;
  color: cadetblue;
`;
export const Logout = styled.span`
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
`;
export const MenuBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1em;
`;
export const Board = styled.span`
  cursor: pointer;
`;
export const Market = styled.span`
  cursor: pointer;
`;
