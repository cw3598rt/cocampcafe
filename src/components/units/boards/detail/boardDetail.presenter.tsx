import * as S from "./boardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <section>
      <div>
        <span>작성자</span>
        <div>
          <span>위치이미자</span>
          <span>몇시간전 구현</span>
        </div>
      </div>
      <div></div>
      <div>
        <h2>제목</h2>
        <div>
          <pre>내용</pre>
          <div>유튜브</div>
        </div>
        <div>
          <img src="" alt="thumbnail1" />
          <img src="" alt="thumbnail2" />
          <img src="" alt="thumbnail3" />
        </div>
        <div>
          <span>좋아요</span>
          <span>싫어요</span>
        </div>
      </div>
    </section>
  );
}
