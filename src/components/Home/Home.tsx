import React, { useEffect, useState } from "react";
import MovieSearchField from "../MovieSearchField/MovieSearchField";
import MovieRatingField from "../MovieRatingField/MovieRatingField";
import MovieListSorted from "../MovieListSorted/MovieListSorted";
import { Movie } from "../../types/interfaces";
import axios from "axios";
import { useDebounce } from "react-use";
import { API_KEY, API_BASE_URL } from "../../constants";

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [moviesSearched, setMoviesSearched] = useState<Movie[] | null>(null);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [disabledRating, setDisabledRating] = useState<boolean>(false);

  async function fetchMovies() {
    const response = await axios.get(
      `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
    );

    return response.data.results;
  }

  async function searchMovies(searchTerm: string) {
    if (searchTerm.length > 0) {
      const response = await axios.get(
        `${API_BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&include_adult=false`
      );
      return response.data.results;
    }
    return movies;
  }

  useEffect(() => {
    fetchMovies().then((movies) => setMovies(movies));
  }, []);

  function onSearch(searchTerm: string) {
    setSearchTerm(searchTerm);
  }

  useDebounce(
    () => {
      searchMovies(searchTerm).then((movies) => setMoviesSearched(movies));
    },
    200,
    [searchTerm]
  );

  function handleOnRatingChange(newRating: number) {
    debugger;
    if (newRating === rating) {
      setDisabledRating(true);
      return;
    }
    setRating(newRating);
    const ratingValue = newRating * 2;
    const moviesResult: Movie[] = movies.filter(
      (movie) =>
        movie.vote_average > ratingValue - 2 &&
        movie.vote_average <= ratingValue
    );

    setMoviesSearched(moviesResult);
  }

  return (
    <>
      <header className="App-header">
        <MovieSearchField onSearch={onSearch} />
      </header>
      {movies.length > 0 && (
        <MovieRatingField
          disabledRating={disabledRating}
          handleOnChange={(newRating) => handleOnRatingChange(newRating)}
        />
      )}
      <MovieListSorted movies={moviesSearched || movies} />
    </>
  );
};

export default Home;
