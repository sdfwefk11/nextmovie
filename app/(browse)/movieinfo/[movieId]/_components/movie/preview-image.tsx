import { MovieCard } from "@/components/movie/movie-card";

interface PreviewImageProps {
  previewImg: string;
}

export function PreviewImage({ previewImg }: PreviewImageProps) {
  return (
    <div>
      <MovieCard width={300} height={300} movieImage={previewImg} />
    </div>
  );
}

export function PreviewImageSkeleton() {
  return <div></div>;
}
