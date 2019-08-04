import * as React from "react";
import "./Item.scss";
import { UIDivider } from "../ui/Divider";
import ItemHeader from "./item-header/ItemHeader";
import ItemBody from "./item-body/ItemBody";
import Rating from "../ui/Rating";

export const Item: React.FC = () => {
  const item = {
    name: "Broken hammer",
    description: "Does this item really need an explanation?",
    image:
      " https://media.istockphoto.com/photos/broken-claw-hammer-picture-id611296672?k=6&m=611296672&s=612x612&w=0&h=4SgFrxnuU2IVsDTWFmzvxD_cEWaNVCL5sKTdu-edsGI=",
    averageRating: 4,
    user: {
      id: "1",
      name: "John Doe"
    }
  };
  return (
    <div className={"item-container"}>
      <div className={"item"}>
        <ItemHeader item={item} />
        <UIDivider />
        <ItemBody item={item} />
      </div>
      <div className={"reviews"}>
        <h2>Submit a review</h2>

        <form>
          <input placeholder={"Title"} />
          <input placeholder={"Description"} />
          <Rating score={0} />
          <button>Post review</button>
        </form>
        <h2>Reviews</h2>
        <div>Review</div>
        <div>Review</div>
        <div>Review</div>
        <div>Review</div>
      </div>
    </div>
  );
};
