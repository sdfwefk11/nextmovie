import { MovieDetailTypes } from "@/fetchs/fetch-movie-detail";
import { MovieImage } from "./movie-image";
import { MovieInfo } from "./movie-info";

interface MovieProps {
  movieInfo: MovieDetailTypes;
}

export function Movie({ movieInfo }: MovieProps) {
  return (
    <div className="grid">
      <div className="flex flex-col xl:justify-between xl:flex-row justify-center items-center xl:items-start">
        <MovieImage backdropPath={movieInfo.poster_path} />
        <div className="p-8">
          <MovieInfo
            adult={movieInfo.adult}
            homepage={movieInfo.homepage}
            language={movieInfo.original_language}
            title={movieInfo.original_title}
            popularity={movieInfo.popularity}
            releaseDate={movieInfo.release_date}
            runtime={movieInfo.runtime}
            voteAverage={movieInfo.vote_average}
            status={movieInfo.status}
            tagline={movieInfo.tagline}
            logo={movieInfo.production_companies}
          />
        </div>
      </div>
      <div>{movieInfo.overview}</div>
    </div>
  );
}
