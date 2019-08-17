import * as React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import "./NewReview.scss";
import ConfigurableRating from "../../rating/configurable/ConfigurableRating";
import User from "../../user/User";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { REVIEW_FRAGMENT } from "../../../fragments/review.fragments";
import { PAGE_FRAGMENT } from "../../../fragments/page.fragments";

interface NewReviewFormValues {
  rating: number;
  description?: string;
}

interface NewReviewProps {
  itemId: number;
  onSubmit?: (values: NewReviewFormValues) => void;
}

const NewReview = ({ onSubmit, itemId }: NewReviewProps) => {
  const [rating, setRating] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [mutation] = useMutation(gql`
    mutation PostReview(
      $itemId: String!
      $description: String!
      $rating: Float!
    ) {
      postReview(
        review: { itemId: $itemId, description: $description, rating: $rating }
      ) {
        id
        description
        rating
        author {
          name
          image
        }
      }
    }
  `);

  const onDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };
  const resetForm = () => {
    setRating(0);
    setDescription("");
  };

  const onReviewSubmit = async (event: FormEvent) => {
    event.preventDefault();
    onSubmit && onSubmit({ rating, description });
    await mutation({
      variables: {
        itemId,
        description,
        rating
      },
      refetchQueries: [
        {
          query: gql`
            query Item($id: Int!, $page: Int!, $size: Int!) {
              item(id: $id) {
                reviews(page: $page, size: $size) {
                  ...PageFragment
                  content {
                    ...ReviewFragment
                  }
                }
              }
            }
            ${PAGE_FRAGMENT}
            ${REVIEW_FRAGMENT}
          `,
          variables: { id: 1, page: 0, size: 3 }
        }
      ],
      awaitRefetchQueries: true
    });
    resetForm();
    return true;
  };

  return (
    <form className={"new-review"} onSubmit={onReviewSubmit}>
      <div className={"new-review__rating"}>
        <User
          user={{
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
        rows={4}
      />
      <button disabled={false || rating === 0}>Post a review</button>
    </form>
  );
};

export default NewReview;
