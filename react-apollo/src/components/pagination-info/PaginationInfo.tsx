import { GQLPage } from "../../.generated/gql.model";
import React from "react";
import "./PaginationInfo.scss";

interface PaginationProps {
  page: GQLPage;
}

export const PaginationInfo = ({
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
