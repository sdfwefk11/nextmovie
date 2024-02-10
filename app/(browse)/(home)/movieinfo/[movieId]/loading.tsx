import { MovieSkeleton } from "./_components/movie";

export default function Loading() {
  return (
    <div className="flex flex-col py-10 px-3 md:px-14 select-none">
      <MovieSkeleton />
    </div>
  );
}
