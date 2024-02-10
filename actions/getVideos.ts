"use server";
import { fetchYoutubeIframe } from "@/fetchs/fetch-youtube-iframe";
import { revalidatePath } from "next/cache";

export async function getVideos(movieId: string) {
  try {
    const videos = await fetchYoutubeIframe(movieId);
    return videos;
  } catch {
    throw new Error("Internal Error");
  }
}
