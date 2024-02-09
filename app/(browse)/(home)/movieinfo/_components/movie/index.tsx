import { MovieDetailTypes } from "@/fetchs/fetch-movie-detail";
import { MovieImage } from "./movie-image";
import { MovieInfo } from "./movie-info";
import { getVideos } from "@/actions/getVideos";

interface MovieProps {
  movieInfo: MovieDetailTypes;
}

export async function Movie({ movieInfo }: MovieProps) {
  const videos = await getVideos(movieInfo.id + "");
  return (
    <div className="grid">
      <div className="relative flex flex-col xl:justify-between xl:flex-row justify-center items-center xl:items-start">
        <MovieImage backdropPath={movieInfo.poster_path} />
        <div className="p-8">
          <MovieInfo
            adult={movieInfo.adult}
            homepage={movieInfo.homepage}
            language={movieInfo.original_language}
            title={movieInfo.original_title}
            releaseDate={movieInfo.release_date}
            initialRuntime={movieInfo.runtime}
            voteAverage={movieInfo.vote_average}
            status={movieInfo.status}
            tagline={movieInfo.tagline}
            initialLogo={movieInfo.production_companies}
            videos={videos}
          />
        </div>
      </div>
      <div>{movieInfo.overview}</div>
    </div>
  );
}
