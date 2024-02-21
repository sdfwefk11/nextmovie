import { GenresTypes } from "@/fetchs/fetch-movie-detail";

interface GenresProps {
  genres: GenresTypes[];
}

export function Genres({ genres }: GenresProps) {
  return (
    <div className="gap-x-1 p-2 flex">
      {genres.map((data) => (
        <div
          key={data.id}
          className="bg-blue-500 border rounded-md px-1 flex items-center justify-center text-center"
        >
          <p className="text-sm">{data.name}</p>
        </div>
      ))}
    </div>
  );
}
