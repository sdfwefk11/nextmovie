import { getMovieInfo } from "@/actions/getMovieInfo";
import { Suspense } from "react";
import { Movie, MovieSkeleton } from "./_components/movie";
import { fetchMovieDetail } from "@/fetchs/fetch-movie-detail";

interface MovieDetailProps {
  params: { movieId: string };
}

export default async function MovieDetail({ params }: MovieDetailProps) {
  const movieDetail = await fetchMovieDetail(
    params.movieId ? params.movieId : ""
  );
  return (
    <div className="flex flex-col py-10 px-3 md:px-14 select-none">
      <Suspense fallback={<MovieSkeleton />}>
        <Movie movieInfo={movieDetail} />
      </Suspense>
    </div>
  );
}
