import { Suspense } from "react";
import { Movies, MoviesSkeleton } from "./_components/movies";
import { Separator } from "@/components/ui/separator";
import { Footer } from "./_components/footer";
import { getMovies } from "@/actions/getMovies";
import { fetchMovies } from "@/fetchs/fetch-movies";
import Link from "next/link";

export default async function Home() {
  // const movies = await fetchMovies();
  return (
    <div>
      <Link href={"/movieinfo/787699"}>click</Link>
    </div>
  );
}
