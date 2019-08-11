import * as React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import "./NewReview.scss";
import ConfigurableRating from "../../rating/configurable/ConfigurableRating";
import { useSelector } from "react-redux";
import { AppState } from "../../../state/state.model";
import User from "../../user/User";

interface NewReviewFormValues {
  rating: number;
  description?: string;
}

interface NewReviewProps {
  disabled?: boolean;
  onSubmit: (values: NewReviewFormValues) => void;
}

const NewReview = ({ onSubmit, disabled = false }: NewReviewProps) => {
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
        <User
          user={{
            loading: false,
            data: {
              id: 1,
              image:
                "https://s3.amazonaws.com/media-p.slid.es/uploads/305120/images/3895531/DSC_0893_1.1_0.9r.jpg",
              name: "Rachnerd"
            }
          }}
        />
        <ConfigurableRating rating={rating} onSelectRating={setRating} />
      </div>
      <p>Leave a message (optional)</p>
      <textarea disabled={disabled} value={description} onChange={onDescriptionChange} rows={4} />
      <button disabled={disabled || rating === 0}>Post a review</button>
    </form>
  );
};

export default NewReview;
