import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GQLItem } from "../../../.generated/gql.model";
import gql from "graphql-tag";

interface SellerProps {
  className?: string;
  id: number;
}

const Seller = ({ id, className = "" }: SellerProps) => {
  const {loading, error, data} = useQuery<Record<"item", GQLItem>>(gql`
    query item($id: Int!) {
      item(id: $id) {
        seller {
          name
        }
      }
    }
  `, {variables: {id}});

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>error</p>;;
  }

  if (!data) {
    return <p>No Data!</p>;
  }
  const { seller } = data.item;

  return (
    <div className={className}>
      Seller: <a href={'#'}>{seller.name}</a>
    </div>
  );
};
export default Seller;
