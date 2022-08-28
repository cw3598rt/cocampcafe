import { timeForToday } from "../../../../commons/libraries/date/timeForTodat";
import * as S from "./marketDetail.styles";
import Dompurify from "dompurify";
import { useEffect } from "react";

export default function MarketDetailUI(props) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=55c63957f730151ba2d26dd40d5b65a7&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const rvContainer = document.getElementById("roadview"); // 로드뷰를 표시할 div 입니다
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div 입니다
        const mapOption = {
          center: new kakao.maps.LatLng(37.4866, 126.8945), // 지도의 중심좌표
          level: 2, // 지도의 확대 레벨
          mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
        };

        // 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다
        const map = new kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          `${props.data?.fetchUseditem.useditemAddress.address}`,
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {
              const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new kakao.maps.Marker({
                map: map,
                position: coords,
              });
              // 로드뷰 객체를 생성합니다
              const roadview = new kakao.maps.Roadview(rvContainer);

              // 로드뷰의 위치를 특정 장소를 포함하는 파노라마 ID로 설정합니다
              // 로드뷰의 파노라마 ID는 Wizard를 사용하면 쉽게 얻을수 있습니다
              roadview.setPanoId(mapOption.mapTypeId, coords);

              // 특정 장소가 잘보이도록 로드뷰의 적절한 시점(ViewPoint)을 설정합니다
              // Wizard를 사용하면 적절한 로드뷰 시점(ViewPoint)값을 쉽게 확인할 수 있습니다
              roadview.setViewpoint({
                pan: 321,
                tilt: 0,
                zoom: 0,
              });

              // 로드뷰 초기화가 완료되면
              kakao.maps.event.addListener(roadview, "init", function () {
                // 로드뷰에 특정 장소를 표시할 마커를 생성하고 로드뷰 위에 표시합니다
                const rvMarker = new kakao.maps.Marker({
                  position: coords,
                  map: roadview,
                });
              });
              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">여기에서 만나요!</div>',
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.data?.fetchUseditem.useditemAddress?.address]);

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
      <S.ButtonBox>
        <S.Buttons>장바구니</S.Buttons>
        <S.Buttons>구매하기</S.Buttons>
        <S.Buttons>찜</S.Buttons>
      </S.ButtonBox>
    </S.Section>
  );
}
