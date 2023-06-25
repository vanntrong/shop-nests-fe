import React, { FC } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";

type TPaginationProps = ReactPaginateProps;

const Pagination: FC<TPaginationProps> = props => {
  return (
    <div className="w-full">
      <ReactPaginate
        breakLabel="..."
        previousLabel="Trang trước"
        nextLabel="Trang sau"
        pageRangeDisplayed={5}
        renderOnZeroPageCount={null}
        className="flex items-center justify-center gap-2"
        pageLinkClassName="pagination-item"
        activeLinkClassName="active"
        previousLinkClassName="pagination-item"
        nextLinkClassName="pagination-item"
        breakLinkClassName="pagination-item"
        {...props}
      />
    </div>
  );
};

export default Pagination;
