"use serveer";
import { fetchSimilar } from "@/fetchs/fetch-similar";

export async function getSimilar(movieId: number) {
  try {
    const similar = await fetchSimilar(movieId);
    return similar;
  } catch {
    throw new Error("Internal Error");
  }
}
