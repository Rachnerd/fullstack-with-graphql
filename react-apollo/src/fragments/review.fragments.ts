import gql from "graphql-tag";

export const REVIEW_FRAGMENT = gql`
    fragment ReviewFragment on Review {
        id
        description
        rating
        author {
            name
            image
        }
    }
`;
