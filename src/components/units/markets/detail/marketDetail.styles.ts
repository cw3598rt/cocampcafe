import styled from "@emotion/styled";

export const Section = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  gap: 3em;
`;
export const SellerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Seller = styled.h1`
  color: cadetblue;
`;
export const PickedCountBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
`;
export const Data = styled.span`
  font-size: 1em;
`;
export const PickCount = styled.span`
  font-size: 1em;
  color: black;
  font-weight: 600;
`;
export const Divider = styled.div`
  width: 100%;
  height: 4px;
  background-color: lightgray;
  margin-top: -3em;
`;
export const ContentsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
export const ItemName = styled.div`
  font-size: 1.5em;
`;
export const MainImg = styled.img`
  width: 20em;
  height: 20em;
`;
export const SubImgbox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SubImgs = styled.img`
  width: 10em;
  height: 10em;
`;
export const UsedItemDetailInfoBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3em;
`;
export const Remark = styled.div`
  font-size: 1.3em;
  color: black;
`;
export const Contents = styled.pre`
  white-space: nowrap;
  font-size: 1.1em;
`;
export const Price = styled.span`
  font-size: 1em;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
`;
export const Buttons = styled.button`
  width: 8em;
  height: 3em;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: lightgray;
  :hover {
    background-color: cadetblue;
    color: whitesmoke;
  }
  transition: all 250ms ease-in;
`;
