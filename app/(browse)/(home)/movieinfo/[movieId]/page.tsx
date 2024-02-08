import { getMovieInfo } from "@/actions/getMovieInfo";
import { Movie } from "../_components/movie";

interface MovieDetailProps {
  params: { movieId: string };
}

export default async function MovieDetail({ params }: MovieDetailProps) {
  const movieDetail = await getMovieInfo(params.movieId);
  if (!movieDetail) {
    return {
      /* TODO: 스켈레톤 작업 */
    };
  }
  return (
    <div className="flex flex-col py-10 px-14">
      <Movie movieInfo={movieDetail} />
    </div>
  );
}
