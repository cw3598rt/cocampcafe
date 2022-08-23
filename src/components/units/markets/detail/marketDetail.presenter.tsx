import * as S from "./marketDetail.styles";
export default function MarketDetailUI(props) {
  return (
    <S.Section>
      <div>
        <h1>{props.data?.fetchUseditem.seller.name}</h1>
        <div>
          <span>{props.data?.fetchUseditem.createdAt}</span>
          <span>찜:{props.data?.fetchUseditem.pickedCount}</span>
        </div>
      </div>
      <div></div>
      <div>
        <div>
          <div>{props.data?.fetchUseditem.name}</div>
          <img src="" alt="" />
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <div>{props.data?.fetchUseditem.remarks}</div>
          <pre>{props.data?.fetchUseditem.contents}</pre>
          <span>{props.data?.fetchUseditem.price}</span>
        </div>
      </div>
      <div></div>
      <div>
        <button>장바구니</button>
        <button>구매하기</button>
        <button>찜</button>
      </div>
    </S.Section>
  );
}
