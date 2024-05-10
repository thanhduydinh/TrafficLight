import { useState, useCallback } from "react";
import PaginationItem from "./PaginationItem";

export interface PaginationProps {
  total: number;
  pageSize: number;
  onChange: (page: number) => void;
  currentPageProp?: number;
}
export default function Pagination(props: PaginationProps) {
  const { total = 100, pageSize = 10, onChange, currentPageProp } = props;
  const [currentPage, setCurrentPage] = useState<number>(currentPageProp || 1);

  const totalPages = Math.ceil(total / pageSize);

  const changePage = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages) return;
      setCurrentPage(page);
      onChange(page);
    },
    [onChange, totalPages]
  );

  const showPageItemsFunction = useCallback(() => {
    const data = [];
    const numPage = 3;

    let leftSide = currentPage - numPage / 2 > 1;
    let rightSide = currentPage + numPage / 2 < totalPages;
    if (leftSide && rightSide) {
      leftSide = currentPage - numPage / 2 > 2;
      rightSide = currentPage + numPage / 2 < totalPages - 1;
    }
    data.push(
      <PaginationItem
        page={currentPage - 1}
        onClick={changePage}
        key="pre"
        isDisabled={currentPage === 1}
        content="<"
      />
    );
    if (leftSide) {
      data.push(
        <PaginationItem page={1} onClick={changePage} key="first" content="1" />
      );
      data.push(
        <PaginationItem.Ellipsis
          onClick={changePage}
          key="leftEllipsis"
          content="..."
        />
      );
    }
    const str = Math.max(1, Math.round(currentPage - numPage / 2));
    const end = Math.min(totalPages, Math.round(currentPage + numPage / 2));
    for (let i = str; i <= end; i++) {
      data.push(
        <PaginationItem
          page={i}
          onClick={changePage}
          key={i.toString()}
          content={i.toString()}
          isActive={currentPage === i}
        />
      );
    }
    if (rightSide) {
      data.push(
        <PaginationItem.Ellipsis
          onClick={changePage}
          key="rightEllipsis"
          content="..."
        />
      );
      data.push(
        <PaginationItem
          page={totalPages}
          onClick={changePage}
          key="last"
          content={totalPages.toString()}
        />
      );
    }
    data.push(
      <PaginationItem
        page={currentPage + 1}
        onClick={changePage}
        key="next"
        content=">"
        isDisabled={currentPage === totalPages}
      />
    );
    return data;
  }, [changePage, currentPage, totalPages]);

  return <ul className="p-0 list-none">{showPageItemsFunction()}</ul>;
}
