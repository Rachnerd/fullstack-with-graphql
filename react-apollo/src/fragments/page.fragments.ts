import gql from "graphql-tag";

export const PAGE_FRAGMENT = gql`
  fragment PageFragment on Page {
    size
    number
    totalPages
    totalElements
  }
`;
