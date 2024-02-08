"use server";
import { fetchMovies } from "@/fetchs/fetch-movies";

export async function getMovies() {
  try {
    const movies = await fetchMovies();
    return movies;
  } catch {
    throw new Error("Something went wrong");
  }
}
