"use server";
import { fetchMovieDetail } from "@/fetchs/fetch-movie-detail";

export async function getMovieInfo(movieId: string) {
  const movieDetail = await fetchMovieDetail(movieId);
  return movieDetail;
}
