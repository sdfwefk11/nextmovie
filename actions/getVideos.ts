"use server";
import { fetchYoutubeIframe } from "@/fetchs/fetch-youtube-iframe";
import { revalidatePath } from "next/cache";

export async function getVideos(movieId: number) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const videos = await fetchYoutubeIframe(movieId);
    revalidatePath(`/movieinfo/${movieId}`);
    return videos;
  } catch {
    throw new Error("Internal Error");
  }
}
