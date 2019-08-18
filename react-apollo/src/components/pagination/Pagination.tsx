import { GQLPage } from "../../../.generated/gql.model";
import React from "react";
import "./Pagination.scss";

interface PaginationProps {
  page: GQLPage;
}

const Pagination = ({
  page: { number, totalElements, totalPages }
}: PaginationProps) => {
  return (
    <div className={"pagination"}>
      <span>
        Page {number + 1} / {totalPages}
      </span>
      <span>Total reviews: {totalElements} </span>
    </div>
  );
};

export default Pagination;
