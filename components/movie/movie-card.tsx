import Image from "next/image";

interface MovieCardProps {
  movieImage: string;
  height: number;
  width: number;
}

export function MovieCard({ movieImage, height, width }: MovieCardProps) {
  return (
    <div className="flex items-center justify-center p-1 w-auto h-auto">
      <Image
        alt="movie"
        src={movieImage}
        height={height}
        width={width}
        className="rounded-xl"
      />
    </div>
  );
}
