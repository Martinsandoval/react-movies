import React from "react";
import ReactStars from "react-rating-stars-component";
import { Form } from "react-bootstrap";

interface Props {
  /**
   * A callback function to use when the rating change.
   */
  handleOnChange: (newRating: number) => void;

  /**
   * Whether if the rating field is disabled or not.
   */
  disabledRating: boolean;
}

/**
 *
 * @param handleOnChange;
 * @returns
 */
const MovieRatingField: React.FC<Props> = ({
  handleOnChange,
  disabledRating = false,
}) => {
  return (
    <div className="movie-rating">
      <Form.Label>Rating Filter</Form.Label>
      <ReactStars
        edit={!disabledRating}
        count={5}
        onChange={handleOnChange}
        size={24}
        activeColor="#ffd700"
      />
    </div>
  );
};

export default MovieRatingField;
