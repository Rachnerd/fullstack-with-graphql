import * as React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import "./PostReview.scss";
import ConfigurableRating from "../../rating/configurable/ConfigurableRating";
import User from "../../user/User";
import { usePostReviewMutation } from "../../../.generated/gql.model";

interface NewReviewProps {
  itemId: number;
}
const PostReview = ({ itemId }: NewReviewProps) => {
  const [rating, setRating] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [mutation] = usePostReviewMutation();

  const onReviewSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await mutation({
        variables: {
          itemId: itemId.toString(),
          description,
          rating
        },
        refetchQueries: ["ItemReviews", "ItemDetails"],
        awaitRefetchQueries: true
      });
    } catch (error) {
      console.error(error);
    } finally {
      resetForm();
    }
    return true;
  };

  const onDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const resetForm = () => {
    setRating(0);
    setDescription("");
  };

  return (
    <form className={"new-review"} onSubmit={onReviewSubmit}>
      <div className={"new-review__rating"}>
        <User
          user={{
            image:
              "https://s3.amazonaws.com/media-p.slid.es/uploads/305120/images/3895531/DSC_0893_1.1_0.9r.jpg",
            name: "Rachnerd"
          }}
        />
        <ConfigurableRating rating={rating} onSelectRating={setRating} />
      </div>
      <p>Leave a message (optional)</p>
      <textarea
        disabled={false}
        value={description}
        onChange={onDescriptionChange}
        rows={2}
      />
      <button disabled={rating === 0}>Post a review</button>
    </form>
  );
};

export default PostReview;
