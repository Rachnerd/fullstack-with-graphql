import gql from "graphql-tag";

export const ITEM_FRAGMENT = gql`
    fragment ItemFragment on Item {
        id
        name
        description
        image
        seller {
            name
        }
    }
`;
