import * as React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import "./PostReview.scss";
import ConfigurableRating from "../../rating/configurable/ConfigurableRating";
import User from "../../user/User";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { REVIEW_FRAGMENT } from "../../../client/fragments/review.fragments";
import { PureQueryOptions } from "apollo-client";

interface NewReviewProps {
  itemId: number;
  refetchQueries?: PureQueryOptions[];
}

const POST_REVIEW_MUTATION = gql`
  mutation PostReview($itemId: ID!, $description: String!, $rating: Float!) {
    postReview(
      review: { itemId: $itemId, description: $description, rating: $rating }
    ) {
      ...ReviewFragment
    }
  }
  ${REVIEW_FRAGMENT}
`;

const PostReview = ({ itemId, refetchQueries = [] }: NewReviewProps) => {
  const [rating, setRating] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [mutation] = useMutation(POST_REVIEW_MUTATION);

  const onDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };
  const resetForm = () => {
    setRating(0);
    setDescription("");
  };

  const onReviewSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await mutation({
        variables: {
          itemId,
          description,
          rating
        },
        refetchQueries
      });
    } catch (error) {
      console.error(error);
    }
    resetForm();
    return true;
  };

  return (
    <form className={"new-review"} onSubmit={onReviewSubmit}>
      <div className={"new-review__rating"}>
        <User
          user={{
            id: "1",
            image:
              "https://s3.amazonaws.com/media-p.slid.es/uploads/305120/images/3895531/DSC_0893_1.1_0.9r.jpg",
            name: "Rachnerd",
            email: ""
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
      <button disabled={false || rating === 0}>Post a review</button>
    </form>
  );
};

export default PostReview;
