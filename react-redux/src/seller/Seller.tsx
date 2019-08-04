import * as React from "react";

interface SellerProps {
  className: string;
  name: string;
  id: string;
}

const Seller = ({ name, id, className = "" }: SellerProps) => {
  return (
    <div className={className}>
      Seller: <a href={`http://localhost:8080/users/${id}`}>{name}</a>
    </div>
  );
};
export default Seller;
