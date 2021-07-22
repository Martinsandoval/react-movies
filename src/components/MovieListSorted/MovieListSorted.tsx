import React from "react";
import { Movie } from "../../types/interfaces";
import EmptyState from "../EmptyState/EmptyState";
import MovieCard from "../MovieCard/MovieCard";
import { MovieIcon } from "../../graphics/icons";

interface Props {
  /**
   * The list of movies to render.
   */
  movies: Movie[];
}

const MovieListSorted: React.FC<Props> = ({ movies }) => {
  return movies.length > 0 ? (
    <>
      <h3 className="movie-list-header"> Relevant Movies </h3>
      <div className="movie-list">
        {movies.map((movie, movieIdx) => (
          <MovieCard key={movieIdx} movie={movie} />
        ))}
      </div>
    </>
  ) : (
    <EmptyState
      title="No Movies Found"
      description="There were no movies that matches for you search.."
      Icon={MovieIcon}
    />
  );
};

export default MovieListSorted;
