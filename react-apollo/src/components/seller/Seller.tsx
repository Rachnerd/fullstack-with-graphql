import * as React from "react";
import { UserModel } from "../../state/user/user.model";
import { GQLUser } from "../../../.generated/gql.model";

interface SellerProps {
  className?: string;
  seller: Pick<GQLUser, "name">;
}

const Seller = ({ seller, className = "" }: SellerProps) => {
  return (
    <div className={className}>
      Seller: <a href={'#'}>{seller.name}</a>
    </div>
  );
};
export default Seller;
