export interface FetchYoutubeIframeTypes {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export async function fetchYoutubeIframe(movieId: number) {
  const data = await fetch(`${process.env.API_URL}/${movieId}/videos`);
  const videos: FetchYoutubeIframeTypes[] = await data.json();
  return videos;
}
