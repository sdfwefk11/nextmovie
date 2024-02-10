"use server";
import { fetchMovies } from "@/fetchs/fetch-movies";

export async function getMovies() {
  const movies = await fetchMovies();
  return movies;
}
