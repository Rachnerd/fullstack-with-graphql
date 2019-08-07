import { default as React, useState } from "react";
import "./ConfigurableRating.scss";
import Rating from "../Rating";

interface ConfigurableRatingProps {
  onSelectRating: (rating: number) => void;
}

const ConfigurableRating = ({ onSelectRating }: ConfigurableRatingProps) => {
  const [rating, setRating] = useState<number>(0);
  const [tempRating, setTempRating] = useState<number>(0);

  const determineTempRating = (event: React.MouseEvent) => {
    const targetElement = event.target as HTMLElement;
    const starIndex = Array.prototype.indexOf.call(
      targetElement.parentNode ? targetElement.parentNode.children : [],
      targetElement
    );

    const starRect = targetElement.getBoundingClientRect();
    const relativeMouseX = event.clientX - starRect.left;
    const halfWidth = Math.ceil(starRect.width / 2);
    const onLeftHalf = relativeMouseX < halfWidth;

    setTempRating(onLeftHalf ? starIndex + 0.5 : starIndex + 1);
  };

  const resetTempRating = () => {
    setTempRating(rating);
  };

  const submitTempRating = () => {
    setRating(tempRating);
    onSelectRating(tempRating);
  };

  return (
    <Rating
      rating={tempRating}
      onMouseMove={determineTempRating}
      onMouseLeave={resetTempRating}
      onClick={submitTempRating}
      className={"configurable-rating"}
    />
  );
};

export default ConfigurableRating;
