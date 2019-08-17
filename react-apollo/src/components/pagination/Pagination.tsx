import { GQLPage, GQLPaging } from "../../../.generated/gql.model";
import React from "react";
import "./Pagination.scss";

interface PaginationProps {
  page: GQLPage;
}

const Pagination = ({
  page: { number, totalElements, totalPages, size }
}: PaginationProps) => {
  return (
    <div className={"pagination"}>
      <span>
        Page {number + 1} / {totalPages}
      </span>
      <span>Size {size}</span>
      <span>Total: {totalElements} </span>
    </div>
  );
};

export default Pagination;
