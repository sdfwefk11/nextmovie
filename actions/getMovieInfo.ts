"use server";
import { fetchMovieDetail } from "@/fetchs/fetch-movie-detail";

export async function getMovieInfo(movieId: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const movieDetail = await fetchMovieDetail(movieId);
    return movieDetail;
  } catch {
    throw new Error("Internal Error");
  }
}
