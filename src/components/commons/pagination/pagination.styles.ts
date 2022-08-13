import styled from "@emotion/styled";
export const Section = styled.section`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
`;
export const PrevBtn = styled.span`
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    color: cadetblue;
  }
  transition: all 200ms ease-in;
`;
export const NextBtn = styled.span`
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    color: cadetblue;
  }
  transition: all 200ms ease-in;
`;
export const Pages = styled.span`
  font-weight: 600;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    color: cadetblue;
  }
  transition: all 200ms ease-in;
`;
