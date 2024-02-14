import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface MovieCardProps {
  movieImage: string;
  height: number;
  width: number;
  isPreview?: boolean;
}

export function MovieCard({ movieImage, height, width }: MovieCardProps) {
  if (!movieImage || movieImage.includes("null")) {
    return (
      <div className="flex flex-col items-center justify-center">
        <ExclamationTriangleIcon className="w-7 h-7 text-red-500" />
        <p className="text-muted-foreground">Not found image</p>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center border rounded-xl border-[#4d4d50] transition hover:opacity-75">
      <Image
        alt="movie"
        src={movieImage}
        height={height}
        width={width}
        className="rounded-xl h-auto w-auto"
      />
    </div>
  );
}
