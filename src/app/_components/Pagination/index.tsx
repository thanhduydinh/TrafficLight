
import { useState } from 'react';
import PaginationItem from './PaginationItem';

function calculatePage(
  pageSize: number,
  total: number,
  newPageSize: number | undefined
) {
  const _pageSize = typeof newPageSize === 'undefined' ? pageSize : newPageSize;
  return Math.floor((total - 1) / _pageSize) + 1;
}
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

  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onChange(page);
  };

  const showPageItemsFunction = () => {
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
        keyProp='pre'
        isDisabled={currentPage === 1}
        content='<'
      />
    );
    if (leftSide) {
      data.push(
        <PaginationItem
          page={1}
          onClick={changePage}
          keyProp='first'
          content='1'
        />
      );
      data.push(
        <PaginationItem.Ellipsis
          onClick={changePage}
          keyProp='leftEllipsis'
          content='...'
        />
      );
    }
    const str = Math.max(1, Math.round(currentPage - numPage / 2));
    const end = Math.min(totalPages, Math.round(currentPage + numPage / 2));
    for (let i = str; i <= end; i++) {
      console.log('i : ', i);
      data.push(
        <PaginationItem
          page={i}
          onClick={changePage}
          keyProp={i.toString()}
          content={i.toString()}
          isActive={currentPage === i}
        />
      );
    }
    if (rightSide) {
      data.push(
        <PaginationItem.Ellipsis
          onClick={changePage}
          keyProp='rightEllipsis'
          content='...'
        />
      );
      data.push(
        <PaginationItem
          page={totalPages}
          onClick={changePage}
          keyProp='last'
          content={totalPages.toString()}
        />
      );
    }
    data.push(
      <PaginationItem
        page={currentPage + 1}
        onClick={changePage}
        keyProp='next'
        content='>'
        isDisabled={currentPage === totalPages}
      />
    );
    return data;
  };

  return <ul className='p-0 list-none'>{showPageItemsFunction()}</ul>;
}
