import { default as React, useEffect, useState } from "react";
import "./ConfigurableRating.scss";
import Rating from "../Rating";

interface ConfigurableRatingProps {
  rating: number;
  onSelectRating: (rating: number) => void;
  minRating?: number;
}

const ConfigurableRating = ({ rating, onSelectRating, minRating = 1 }: ConfigurableRatingProps) => {
  const [newRating, setNewRating] = useState<number>(rating);

  useEffect(() => {
    if (rating === 0) {
      setNewRating(0);
    }
  }, [rating]);

  const determineTempRating = (event: React.MouseEvent) => {
    const targetElement = event.target as HTMLElement;
    const index = Array.prototype.indexOf.call(targetElement.parentNode!.children, targetElement);
    const isRatingElement = targetElement.className.indexOf("fa fa-") !== -1;

    if (!isRatingElement) {
      return;
    }

    if (index < minRating) {
      // No support for half stars
      setNewRating(minRating);
      return;
    }

    const rect = targetElement.getBoundingClientRect();
    const rectMouseX = event.clientX - rect.left;
    const rectHalfWidth = Math.ceil(rect.width / 2);
    const onLeftHalf = rectMouseX < rectHalfWidth;

    setNewRating(onLeftHalf ? index + 0.5 : index + 1);
  };

  const resetTempRating = () => {
    setNewRating(rating);
  };

  const submitTempRating = () => {
    onSelectRating(newRating);
  };

  return (
    <Rating
      rating={newRating}
      onMouseMove={determineTempRating}
      onMouseLeave={resetTempRating}
      onClick={submitTempRating}
      className={"configurable-rating"}
    />
  );
};

export default ConfigurableRating;
