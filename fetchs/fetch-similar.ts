export interface FetchSimilarTypes {
  poster_path: string;
  title: string;
  id: number;
  vote_average: number;
  backdrop_path: string;
}

export async function fetchSimilar(movieId: number) {
  const data = await fetch(`${process.env.API_URL}/${movieId}/similar`);
  const similar = await data.json();
  return similar as FetchSimilarTypes[];
}
