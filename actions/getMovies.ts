"use server";
import { fetchMovies } from "@/fetchs/fetch-movies";

export async function getMovies() {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 10000));
    const movies = await fetchMovies();
    return movies;
  } catch {
    throw new Error("Internal Error");
  }
}
