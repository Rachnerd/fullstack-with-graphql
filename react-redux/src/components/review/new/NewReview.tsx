import * as React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import "./NewReview.scss";
import ConfigurableRating from "../../rating/configurable/ConfigurableRating";
import { UIDivider } from "../../../ui/Divider";

const NewReview = () => {
  const [rating, setRating] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  const onDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const onReviewSubmit = (event: FormEvent) => {
    event.preventDefault();
    setRating(0);
    setDescription("");
    return true;
  };

  return (
    <form className={"new-review"} onSubmit={onReviewSubmit}>
      <div className={"new-review__rating"}>
        <h2>New review</h2>
        <ConfigurableRating rating={rating} onSelectRating={setRating} />
      </div>
      <UIDivider />
      <p>Leave a message (optional)</p>
      <textarea value={description} onChange={onDescriptionChange} rows={4} />
      <button disabled={rating === 0}>Post a review</button>
    </form>
  );
};

export default NewReview;
