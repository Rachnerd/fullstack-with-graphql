import * as React from "react";
import { ReduxUser } from "../../state/state.model";

interface SellerProps {
  className?: string;
  seller: ReduxUser;
}

const Seller = ({ seller, className = "" }: SellerProps) => {
  return (
    <div className={className}>
      Seller: <a href={`http://localhost:8080/users/${seller.id}`}>{seller.name}</a>
    </div>
  );
};
export default Seller;
