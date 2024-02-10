type GenresTypes = { id: number; name: string };
export type ProductionCompaniesTypes = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};
type ProductionCountriesTypes = { iso_3166_1: string; name: string };
type SpokenLanguagesTypes = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export interface MovieDetailTypes {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: GenresTypes[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompaniesTypes[];
  production_countries: ProductionCountriesTypes[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguagesTypes[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export async function fetchMovieDetail(movieId: string) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_FETCH_BASE_URL!}/${movieId}`
  );
  const movieDetail = await data.json();
  return movieDetail as MovieDetailTypes;
}
