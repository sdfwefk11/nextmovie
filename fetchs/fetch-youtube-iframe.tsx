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
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_FETCH_BASE_URL}/${movieId}/videos`
  );
  const videos = await data.json();
  return videos as FetchYoutubeIframeTypes[];
}
