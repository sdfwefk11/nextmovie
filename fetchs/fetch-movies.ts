export interface AllMovieTypes {
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export async function fetchMovies() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_FETCH_BASE_URL}`);
  const movies = await data.json();
  return movies as AllMovieTypes[];
}
