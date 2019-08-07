import { default as React, useState } from "react";
import "./ConfigurableRating.scss";
import Rating from "../Rating";

interface ConfigurableRatingProps {
  rating: number;
  onSelectRating: (rating: number) => void;
}

const ConfigurableRating = ({ rating, onSelectRating }: ConfigurableRatingProps) => {
  const [tempRating, setTempRating] = useState<number>(rating);

  const determineTempRating = (event: React.MouseEvent) => {
    const targetElement = event.target as HTMLElement;
    const index = Array.prototype.indexOf.call(
      targetElement.parentNode!.children,
      targetElement
    );

    const rect = targetElement.getBoundingClientRect();
    const rectMouseX = event.clientX - rect.left;
    const rectHalfWidth = Math.ceil(rect.width / 2);
    const onLeftHalf = rectMouseX < rectHalfWidth;

    setTempRating(onLeftHalf ? index + 0.5 : index + 1);
  };

  const resetTempRating = () => {
    setTempRating(rating);
  };

  const submitTempRating = () => {
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
