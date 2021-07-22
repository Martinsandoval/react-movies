import React from "react";
import { Movie } from "../../types/interfaces";
import { Card, Badge } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../constants";

interface Props {
  /**
   * The movie to render.
   */
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <Card className="movie-card">
      <Card.Img variant="top" src={`${IMAGE_BASE_URL}${movie.poster_path}`} />
      <Card.Body>
        <Card.Title>
          {movie.original_title}
          <Badge className="ml-3" pill variant="primary">
            {movie.vote_average}
          </Badge>
        </Card.Title>
        <Card.Text className="lines-clamp-6">{movie.overview}</Card.Text>
        <Link to={`/${movie.id}`}>See More..</Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
