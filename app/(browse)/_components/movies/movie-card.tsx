import Image from "next/image";

interface MovieCardProps {
  movieImage: string;
}

export function MovieCard({ movieImage }: MovieCardProps) {
  console.log(movieImage);
  return (
    <div className="flex aspect-square items-center justify-center p-1">
      <Image
        alt="movie"
        src={movieImage}
        height={600}
        width={600}
        className="rounded-xl"
      />
    </div>
  );
}
