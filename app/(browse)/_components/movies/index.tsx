import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { getMovies } from "@/actions/getMovies";
import { MovieContent } from "./movie-content";

export async function Movies() {
  const movies = await getMovies();
  return <MovieContent movies={movies} />;
}

export function MoviesSkeleton() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-12 pb-20">
        <Skeleton className="w-[330px] h-[463px] rounded-xl md:w-[460px] md:h-[670px]" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Separator />
        <div className="p-8 space-y-4 justify-center items-center flex flex-col">
          <Skeleton className="w-[340px] h-3" />
          <Skeleton className="w-[370px] h-3" />
        </div>
      </div>
    </>
  );
}
