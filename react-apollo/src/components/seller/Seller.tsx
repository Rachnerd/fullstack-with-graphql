import * as React from "react";
import { UserModel } from "../../state/user/user.model";

interface SellerProps {
  className?: string;
  seller: UserModel;
}

const Seller = ({ seller, className = "" }: SellerProps) => {
  return (
    <div className={className}>
      Seller: <a href={`http://localhost:8080/users/${seller.id}`}>{seller.name}</a>
    </div>
  );
};
export default Seller;
