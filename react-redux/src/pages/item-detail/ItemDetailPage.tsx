import React from "react";
import Item from "../../components/item/Item";
import { connect } from "react-redux";
import { fetchItem } from "../../state/item.actions";
import { AppState } from "../../state/state.model";

interface ItemDetailPageProps {
  fetchItem: typeof fetchItem;
  // item: AppState["item"];
}

const ItemDetailPage: React.FC<ItemDetailPageProps> = (props: ItemDetailPageProps) => {
  // console.log(props.item.allIds);

  const item = {
    id: "",
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

export default connect(
  (state: AppState) => state.item,
  { fetchItem }
)(ItemDetailPage);
