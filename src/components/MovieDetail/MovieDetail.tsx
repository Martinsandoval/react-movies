import React, { useEffect, useState } from "react";
import { Card, Badge } from "react-bootstrap";
import { Movie } from "../../types/interfaces";
import axios from "axios";
import { API_KEY, API_BASE_URL, IMAGE_BASE_URL } from "../../constants";
import { useParams, Link } from "react-router-dom";

const MovieDetail: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/movie/${id}?api_key=${API_KEY}`)
      .then((response) => setMovie(response.data));
  }, [id]);

  return (
    movie && (
      <>
        <div className="movie-detail-card">
          <Card.Img
            className="movie-card-img"
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          />
          <Card.Body className="movie-card-body">
            <Card.Title className="display-4">
              {movie.original_title}
            </Card.Title>
            <Card.Text className="lines-clamp-15">{movie.overview}</Card.Text>
            <Card.Text>
              <b>Release Date:</b> {movie.release_date}
            </Card.Text>
            <Card.Text>
              <b>Popularity:</b> {movie.popularity}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="movie-card-footer border">
            <Badge pill variant="primary">
              Rating: {movie.vote_average}
            </Badge>
          </Card.Footer>
        </div>
        <Link to="/" className="h2 mt-5">
          Back
        </Link>
      </>
    )
  );
};

export default MovieDetail;
