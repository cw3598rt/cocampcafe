import UploadImg from "../../../commons/upload/upload.container";
import * as S from "./marketWrite.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export default function MakeWriteUI(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=55c63957f730151ba2d26dd40d5b65a7&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOption = {
            center: new kakao.maps.LatLng(37.5782, 126.9782), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };

        // 지도를 생성합니다
        const map = new kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch("서울특별시", function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding:6px 0;">여기서 거래해요~!</div>',
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });
      });
    };
  }, []);
  return (
    <section>
      <div>
        <div>
          <span>상품명:</span>
          <input type="text" placeholder="상품명을 입력해 주세요" />
        </div>
        <div>
          <span>가격:</span>
          <input type="text" placeholder="가격을 입력해 주세요" />
        </div>
      </div>
      <div>
        <div>
          <span>사진</span>
          <div>
            <span>태그:</span>
            <input type="text" placeholder="태그를 입력해 주세요" />
          </div>
        </div>
        <UploadImg imgUrl={props.imgUrl} />
      </div>
      <div>
        <div>
          <span>한줄요약:</span>
          <input type="text" placeholder="한줄요약을 작성해 주세요" />
        </div>
        <ReactQuill />
      </div>
      <div>
        <div
          id="map"
          style={{ width: " 45em", height: "30em", marginRight: "2em" }}
        ></div>
        <div>
          <div>
            <input type="text" placeholder="01234" />
            <button>주소검색</button>
          </div>
          <input type="text" placeholder="서울특별시" />
          <input type="text" placeholder="상세 주소를 입력해 주세요" />
        </div>
        <div>
          <button>목록으로</button>
          <button>등록하기</button>
          <button>취소</button>
        </div>
      </div>
    </section>
  );
}
