import React from "react";
import Item from "../../components/item/Item";

const ItemDetailPage: React.FC = () => {
  const item = {
    name: "Broken hammer",
    description: "Does this item really need an explanation?",
    image:
      " https://media.istockphoto.com/photos/broken-claw-hammer-picture-id611296672?k=6&m=611296672&s=612x612&w=0&h=4SgFrxnuU2IVsDTWFmzvxD_cEWaNVCL5sKTdu-edsGI=",
    averageRating: 4,
    seller: {
      id: "1",
      name: "John Doe"
    }
  };
  return <Item item={item} />;
};

export default ItemDetailPage;
