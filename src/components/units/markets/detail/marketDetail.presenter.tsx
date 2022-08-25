import { timeForToday } from "../../../../commons/libraries/date/timeForTodat";
import * as S from "./marketDetail.styles";
import Dompurify from "dompurify";
import { useEffect } from "react";

export default function MarketDetailUI(props) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=55c63957f730151ba2d26dd40d5b65a7&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("container"); // 지도와 로드뷰를 감싸고 있는 div 입니다
        const mapWrapper = document.getElementById("mapWrapper"); // 지도를 감싸고 있는 div 입니다
        const btnRoadview = document.getElementById("btnRoadview"); // 지도 위의 로드뷰 버튼, 클릭하면 지도는 감춰지고 로드뷰가 보입니다
        const btnMap = document.getElementById("btnMap"); // 로드뷰 위의 지도 버튼, 클릭하면 로드뷰는 감춰지고 지도가 보입니다
        const rvContainer = document.getElementById("roadview"); // 로드뷰를 표시할 div 입니다
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div 입니다

        // 지도와 로드뷰 위에 마커로 표시할 특정 장소의 좌표입니다
        const placePosition = new kakao.maps.LatLng(33.450701, 126.570667);

        // 지도 옵션입니다
        const mapOption = {
          center: placePosition, // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        // 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다
        const map = new kakao.maps.Map(mapContainer, mapOption);

        // 로드뷰 객체를 생성합니다
        const roadview = new kakao.maps.Roadview(rvContainer);

        // 로드뷰의 위치를 특정 장소를 포함하는 파노라마 ID로 설정합니다
        // 로드뷰의 파노라마 ID는 Wizard를 사용하면 쉽게 얻을수 있습니다
        roadview.setPanoId(1023434522, placePosition);

        // 특정 장소가 잘보이도록 로드뷰의 적절한 시점(ViewPoint)을 설정합니다
        // Wizard를 사용하면 적절한 로드뷰 시점(ViewPoint)값을 쉽게 확인할 수 있습니다
        roadview.setViewpoint({
          pan: 321,
          tilt: 0,
          zoom: 0,
        });

        // 지도 중심을 표시할 마커를 생성하고 특정 장소 위에 표시합니다
        const mapMarker = new kakao.maps.Marker({
          position: placePosition,
          map: map,
        });

        // 로드뷰 초기화가 완료되면
        kakao.maps.event.addListener(roadview, "init", function () {
          // 로드뷰에 특정 장소를 표시할 마커를 생성하고 로드뷰 위에 표시합니다
          const rvMarker = new kakao.maps.Marker({
            position: placePosition,
            map: roadview,
          });
        });

        // const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        // const options = {
        //   // 지도를 생성할 때 필요한 기본 옵션
        //   center: new window.kakao.maps.LatLng(37.4602, 126.4407), // 지도의 중심좌표.
        //   level: 3, // 지도의 레벨(확대, 축소 정도)
        // };
        // const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // // 마커가 표시될 위치입니다
        // const markerPosition = new window.kakao.maps.LatLng(37.4602, 126.4407);

        // // 마커를 생성합니다
        // const marker = new window.kakao.maps.Marker({
        //   position: markerPosition,
        // });

        // // 마커가 지도 위에 표시되도록 설정합니다
        // marker.setMap(map);
      });
    };
  }, []);
  // 지도와 로드뷰를 감싸고 있는 div의 class를 변경하여 지도를 숨기거나 보이게 하는 함수입니다
  const toggleMap = (active) => {
    if (active) {
    } else {
    }
  };
  return (
    <S.Section>
      <S.SellerBox>
        <S.Seller>{props.data?.fetchUseditem.seller.name}</S.Seller>
        <S.PickedCountBox>
          <S.Data>{timeForToday(props.data?.fetchUseditem.createdAt)}</S.Data>
          <S.PickCount>찜:{props.data?.fetchUseditem.pickedCount}</S.PickCount>
        </S.PickedCountBox>
      </S.SellerBox>
      <S.Divider></S.Divider>
      <S.ContentsBox>
        <S.ItemBox>
          <S.ItemName>{props.data?.fetchUseditem.name}</S.ItemName>

          <S.MainImg
            src={`https://storage.googleapis.com/${
              props.data?.fetchUseditem.images.filter((img) => img !== "")[0]
            }`}
            alt="usedItemMainpic"
          />
          <S.SubImgbox>
            <S.SubImgs
              src={
                props.data?.fetchUseditem.images.filter((img) => img !== "")[1]
                  ? `https://storage.googleapis.com/${
                      props.data?.fetchUseditem.images.filter(
                        (img) => img !== ""
                      )[1]
                    }`
                  : "/nophoto.png"
              }
              alt="usedItemMainpic2"
            />
            <S.SubImgs
              src={
                props.data?.fetchUseditem.images.filter((img) => img !== "")[2]
                  ? `https://storage.googleapis.com/${
                      props.data?.fetchUseditem.images.filter(
                        (img) => img !== ""
                      )[2]
                    }`
                  : "/nophoto.png"
              }
              alt="usedItemMainpic2"
            />
          </S.SubImgbox>
        </S.ItemBox>
        <S.UsedItemDetailInfoBox>
          <S.Remark>{props.data?.fetchUseditem.remarks}</S.Remark>
          {typeof window !== "undefined" && (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            ></S.Contents>
          )}

          <S.Price>{props.data?.fetchUseditem.price}원</S.Price>
        </S.UsedItemDetailInfoBox>
      </S.ContentsBox>
      <div id="container" className="view_map" style={{ width: "100%" }}>
        <div
          id="mapWrapper"
          style={{ width: "100%", height: "300px", position: "relative" }}
        >
          <button
            type="button"
            id="btnMap"
            onClick={() => toggleMap(true)}
            title="지도 보기"
            value="지도"
          >
            지도 보기
          </button>
          <button
            type="button"
            id="btnRoadview"
            onClick={() => toggleMap(false)}
            title="로드뷰 보기"
            value="로드뷰"
          >
            로드뷰보기
          </button>
          <div id="map" style={{ width: "100%", height: "20em" }}></div>
        </div>
        <div
          id="rvWrapper"
          style={{
            width: "100%",
            height: "300px",
          }}
        >
          <div id="roadview" style={{ height: "100%" }}></div>
        </div>
      </div>
      <div>
        <button>장바구니</button>
        <button>구매하기</button>
        <button>찜</button>
      </div>
    </S.Section>
  );
}
