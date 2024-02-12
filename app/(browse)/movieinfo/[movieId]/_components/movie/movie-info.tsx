import { Separator } from "@/components/ui/separator";
import { ProductionCompaniesTypes } from "@/fetchs/fetch-movie-detail";
import { FetchYoutubeIframeTypes } from "@/fetchs/fetch-youtube-iframe";
import { MovieOverview } from "./moive-overview";
import { MovieIframe, MovieIframeSkeleton } from "./movie-iframe";
import { MovieSubInfo, MovieSubInfoSkeleton } from "./movie-sub-info";
import { MovieHeader, MovieHeaderSkeleton } from "./movie-header";
import { MovieTagline, MovieTaglineSkeleton } from "./movie-tagline";
import { getSimilar } from "@/actions/getSimilar";

interface MovieInfoProps {
  adult: boolean;
  homepage: string;
  language: string;
  title: string;
  releaseDate: string;
  initialRuntime: number;
  voteAverage: number;
  status: string;
  tagline: string;
  initialLogo: ProductionCompaniesTypes[];
  videos: FetchYoutubeIframeTypes[];
  overview: string;
  id: number;
}

export async function MovieInfo({
  adult,
  homepage,
  language,
  title,
  releaseDate,
  initialRuntime,
  voteAverage,
  status,
  tagline,
  initialLogo,
  videos,
  overview,
  id,
}: MovieInfoProps) {
  const similar = await getSimilar(id);
  return (
    <div className="space-y-10 flex flex-col">
      <MovieHeader
        title={title}
        homepage={homepage}
        initialLogo={initialLogo}
        initialSimilar={similar || null}
      />
      <Separator />
      <MovieSubInfo
        language={language}
        voteAverage={voteAverage}
        releaseDate={releaseDate}
        adult={adult}
        initialRuntime={initialRuntime}
        status={status}
      />
      <MovieTagline tagline={tagline} />
      <MovieIframe videos={videos} />
      <MovieOverview overview={overview} />
    </div>
  );
}

export function MovieInfoSkeleton() {
  return (
    <div className="space-y-10 w-full">
      <MovieHeaderSkeleton />
      <Separator />
      <MovieSubInfoSkeleton />
      <MovieTaglineSkeleton />
      <MovieIframeSkeleton />
    </div>
  );
}
