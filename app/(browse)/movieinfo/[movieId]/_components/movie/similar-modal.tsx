import { FetchSimilarTypes } from "@/fetchs/fetch-similar";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { MovieCard } from "@/components/movie/movie-card";
import { cn } from "@/lib/utils";

interface SimilarModalProps {
  similar: FetchSimilarTypes[];
  showModal: boolean;
  handleOutsideClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function SimilarModal({
  similar,
  showModal,
  handleOutsideClick,
}: SimilarModalProps) {
  return (
    <div
      onMouseDown={handleOutsideClick}
      className={cn(
        "fixed w-full flex justify-center items-center h-full inset-x-0 mx-auto inset-y-0 opacity-0 my-auto bg-black z-50 pointer-events-none transition-all -top-10",
        showModal && "opacity-100 bg-opacity-65 pointer-events-auto"
      )}
    >
      <Carousel className="absolute w-full">
        <CarouselContent>
          {similar?.map((movie) => (
            <CarouselItem
              key={movie.id}
              className="flex justify-center items-center max-w-sm md:max-w-md "
            >
              <Link prefetch href={`/movieinfo/${movie.id}`}>
                <div>
                  <Card
                    className={cn(
                      "blur-lg transition-all duration-700",
                      showModal && "blur-none scale-95"
                    )}
                  >
                    <MovieCard movieImage={movie.poster_path} />
                  </Card>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
