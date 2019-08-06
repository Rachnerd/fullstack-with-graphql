import React from "react";
import Item from "../../components/item/Item";
import { useSelector } from "react-redux";
import { AppState, HTTP_STATUS_CODE } from "../../state/state.model";

interface ItemDetailPageProps {
  id: string;
}

const ItemDetailPage: React.FC<ItemDetailPageProps> = ({ id }) => {
  const { byIds: itemsById } = useSelector((state: AppState) => state.normalizedItems);
  const { loading, data, error } = itemsById[id];
  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>{error === HTTP_STATUS_CODE.UNAUTHORIZED ? "Unauthorized!" : "???"} </p>;
  }
  if (!data) {
    return <p>No Data!</p>;
  }
  return <Item item={data} />;
};

export default ItemDetailPage;
