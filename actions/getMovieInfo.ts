"use server";
import { fetchMovieDetail } from "@/fetchs/fetch-movie-detail";

export async function getMovieInfo(movieId: string) {
  try {
    const movieDetail = await fetchMovieDetail(movieId);
    return movieDetail;
  } catch {
    throw new Error("Something went wrong");
  }
}
