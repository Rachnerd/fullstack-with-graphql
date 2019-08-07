import React, { useState } from "react";
import Item from "../../components/item/Item";
import { useSelector } from "react-redux";
import { AppState } from "../../state/state.model";
import ConfigurableRating from "../../components/rating/configurable/ConfigurableRating";

interface ItemDetailPageProps {
  id: string;
}

const ItemDetailPage: React.FC<ItemDetailPageProps> = ({ id }) => {
  const { byIds: itemsById } = useSelector((state: AppState) => state.normalizedItems);
  const [rating, setRating] = useState<number>(0);
  return (
    <>
      <Item item={itemsById[id]} />
      <ConfigurableRating onSelectRating={setRating} /> {rating}
    </>
  );
};

export default ItemDetailPage;
