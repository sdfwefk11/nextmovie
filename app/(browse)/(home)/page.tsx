import { Suspense } from "react";
import { Movies, MoviesSkeleton } from "./_components/movies";
import { Separator } from "@/components/ui/separator";
import { Footer } from "./_components/footer";
import { getMovies } from "@/actions/getMovies";
import { fetchMovies } from "@/fetchs/fetch-movies";

export default async function Home() {
  const movies = await getMovies();
  return (
    <Suspense fallback={<MoviesSkeleton />}>
      <div>
        <div className="flex flex-col items-center justify-center pt-12 pb-20">
          <Movies movies={movies} />
        </div>
        <Separator />
        <Footer />
      </div>
    </Suspense>
  );
}
