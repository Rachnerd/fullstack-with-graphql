import * as React from "react";
import { GQLUser } from "../../.generated/gql.model";

export type SellerSubset = Pick<GQLUser, "id" | "name">;

interface SellerProps {
  seller: SellerSubset;
}

export const Seller: React.FC<SellerProps> = ({ seller }) => {
  return (
    <div>
      Seller: <a href={`http://localhost:8000/user/${seller.id}`}>{seller.name}</a>
    </div>
  );
};
