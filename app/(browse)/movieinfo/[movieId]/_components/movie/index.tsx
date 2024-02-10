import { MovieDetailTypes } from "@/fetchs/fetch-movie-detail";
import { MovieImage, MovieImageSkeleton } from "./movie-image";
import { MovieInfo, MovieInfoSkeleton } from "./movie-info";
import { fetchYoutubeIframe } from "@/fetchs/fetch-youtube-iframe";

interface MovieProps {
  movieInfo: MovieDetailTypes;
}

export async function Movie({ movieInfo }: MovieProps) {
  const videos = await fetchYoutubeIframe(movieInfo.id);
  return (
    <div className="grid">
      <div className="relative flex flex-col xl:justify-between xl:flex-row justify-center items-center xl:items-start">
        <MovieImage backdropPath={movieInfo.poster_path} />
        <div className="p-8 w-full md:w-[680px] xl:w-1/2">
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
            overview={movieInfo.overview}
          />
        </div>
      </div>
    </div>
  );
}

export function MovieSkeleton() {
  return (
    <div className="relative grid w-full">
      <div className="flex flex-col xl:justify-between xl:flex-row justify-center items-center xl:items-start">
        <MovieImageSkeleton />
        <div className="relative right-0 p-8 w-full sm:w-[620px] xl:w-[600px] 2xl:w-[700px] 2xl:ml-10">
          <MovieInfoSkeleton />
        </div>
      </div>
    </div>
  );
}
