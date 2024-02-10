"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieCard } from "./movie-card";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { AllMovieTypes } from "@/fetchs/fetch-movies";

interface MoviesProps {
  movies: AllMovieTypes[];
}

export function MovieContent({ movies }: MoviesProps) {
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
            <Link href={`/movieinfo/${movie.id}`}>
              <div>
                <Card>
                  <MovieCard movieImage={movie.poster_path} />
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
