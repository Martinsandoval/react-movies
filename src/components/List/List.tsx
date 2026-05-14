import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { Movie } from "../../types/interfaces";
import MovieCard from "../MovieCard/MovieCard";
import EmptyState from "../EmptyState/EmptyState";
import { MovieIcon } from "../../graphics/icons";

const PAGE_SIZE = 10;

interface Props {
  movies: Movie[];
}

const List: React.FC<Props> = ({ movies }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [movies]);

  if (movies.length === 0) {
    return (
      <EmptyState
        title="No Movies Found"
        description="There were no movies that match your search"
        Icon={MovieIcon}
      />
    );
  }

  const totalPages = Math.ceil(movies.length / PAGE_SIZE);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageMovies = movies.slice(start, start + PAGE_SIZE);

  return (
    <>
      <h3 className="movie-list-header">Relevant Movies</h3>
      <div className="movie-list">
        {pageMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="pagination-container">
          <Pagination>
            <Pagination.Prev
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Pagination.Item
                key={page}
                active={page === currentPage}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </div>
      )}
    </>
  );
};

export default List;
