export interface Movie {
  id: number;
  original_title: string;
  overview: string;
  popularity?: number;
  release_date?: string;
  title: string;
  vote_average: number;
  poster_path?: string;
  backdrop_path?: string;
}
