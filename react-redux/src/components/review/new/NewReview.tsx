import * as React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import "./NewReview.scss";
import ConfigurableRating from "../../rating/configurable/ConfigurableRating";

interface NewReviewFormValues {
  rating: number;
  description?: string;
}

interface NewReviewProps {
  onSubmit: (values: NewReviewFormValues) => void;
}

const NewReview = ({ onSubmit }: NewReviewProps) => {
  const [rating, setRating] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const onDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const resetForm = () => {
    setRating(0);
    setDescription("");
  };

  const onReviewSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit({ rating, description });
    resetForm();
    return true;
  };

  return (
    <form className={"new-review"} onSubmit={onReviewSubmit}>
      <div className={"new-review__rating"}>
        <h2>New review</h2>
        <ConfigurableRating rating={rating} onSelectRating={setRating} />
      </div>
      <p>Leave a message (optional)</p>
      <textarea value={description} onChange={onDescriptionChange} rows={4} />
      <button disabled={rating === 0}>Post a review</button>
    </form>
  );
};

export default NewReview;
