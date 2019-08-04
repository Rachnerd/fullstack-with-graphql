import * as React from "react";
import "./ItemBody.scss";

const ItemBody = ({ item }: any) => {
  return (
    <div>
      <h2>Item description</h2>
      <p className={"item__description"}>{item.description}</p>
    </div>
  );
};

export default ItemBody;
