"use server";
import { fetchYoutubeIframe } from "@/fetchs/fetch-youtube-iframe";
import { revalidatePath } from "next/cache";

export async function getVideos(movieId: string) {
  const videos = await fetchYoutubeIframe(movieId);
  revalidatePath(`/movieinfo/${movieId}`);
  return videos;
}
