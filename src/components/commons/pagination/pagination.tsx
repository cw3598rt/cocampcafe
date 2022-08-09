import { useState } from "react";
import * as S from "./pagination.styles";
export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);

  const onClickMoveToPage = (event) => {
    setSelectedPage(Number(event.target.id));
    props.refetch({
      page: Number(event.target.id),
    });
  };
  const onClickMoveToPrev = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };
  const onClickMoveToNext = () => {
    if (startPage + 10 <= props.lastPage) {
      setStartPage((prev) => prev + 10);
      props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <S.Section>
      <S.PrevBtn onClick={onClickMoveToPrev}>이전</S.PrevBtn>
      {new Array(10).fill(1).map((_, index) => {
        return (
          index + startPage <= props.lastPage && (
            <S.Pages
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickMoveToPage}
              isClicked={index + startPage === selectedPage}
            >
              {index + startPage}
            </S.Pages>
          )
        );
      })}

      <S.NextBtn onClick={onClickMoveToNext}>다음</S.NextBtn>
    </S.Section>
  );
}
