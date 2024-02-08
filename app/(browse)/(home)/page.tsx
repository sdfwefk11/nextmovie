import { getMovies } from "@/actions/getMovies";
import { Movies } from "../_components/movies";
import { Separator } from "@/components/ui/separator";
import { Footer } from "../_components/footer";

export default async function Home() {
  const movies = await getMovies();
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-12 pb-20">
        <Movies movies={movies} />
      </div>
      <Separator />
      <Footer />
    </div>
  );
}
