"use client";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { AllMovieTypes } from "@/fetchs/fetch-movies";
import { MovieCard } from "@/components/movie/movie-card";

interface MoviesProps {
  movies: AllMovieTypes[];
}

export function Movies({ movies }: MoviesProps) {
  return (
    <Carousel
      className="w-full max-w-xs md:max-w-md"
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem key={movie.id}>
            <Link prefetch href={`/movieinfo/${movie.id}`}>
              <div>
                <Card>
                  <MovieCard
                    height={600}
                    width={600}
                    movieImage={movie.poster_path}
                  />
                </Card>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export function MoviesSkeleton() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-12 pb-20">
        <Skeleton className="w-[330px] h-[463px] rounded-xl md:w-[460px] md:h-[670px]" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Separator />
        <div className="p-8 space-y-4 justify-center items-center flex flex-col">
          <Skeleton className="w-[340px] h-3" />
          <Skeleton className="w-[370px] h-3" />
        </div>
      </div>
    </>
  );
}
