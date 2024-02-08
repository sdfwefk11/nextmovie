import { MovieDetailTypes } from "@/fetchs/fetch-movie-detail";
import Image from "next/image";

interface MovieProps {
  movieInfo: MovieDetailTypes;
}

export function Movie({ movieInfo }: MovieProps) {
  //dfdfdf
  return (
    <div className="flex flex-col gap-y-4 p-9">
      <div className="flex items-center justify-between">
        <Image
          alt="movie"
          src={movieInfo.backdrop_path}
          width={100}
          height={100}
        />
        <div>
          <h1>{movieInfo.original_title}</h1>
        </div>
      </div>
      <div>{movieInfo.overview}</div>
    </div>
  );
}
