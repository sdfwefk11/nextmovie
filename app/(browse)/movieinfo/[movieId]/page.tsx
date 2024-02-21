import { getMovieInfo } from "@/actions/getMovieInfo";
import { Suspense } from "react";
import { Movie, MovieSkeleton } from "./_components/movie";

interface MovieDetailProps {
  params: { movieId: string };
}

export default async function MovieDetail({ params }: MovieDetailProps) {
  const movieDetail = await getMovieInfo(params.movieId);
  console.log(movieDetail);
  return (
    <div className="flex flex-col py-10 px-3 md:px-14 select-none">
      <Suspense fallback={<MovieSkeleton />}>
        <Movie movieInfo={movieDetail} />
      </Suspense>
    </div>
  );
}
