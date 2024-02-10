"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AllMovieTypes } from "@/fetchs/fetch-movies";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { MovieCard } from "./movie-card";

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
