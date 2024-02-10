import { Separator } from "@/components/ui/separator";
import { ProductionCompaniesTypes } from "@/fetchs/fetch-movie-detail";
import { FetchYoutubeIframeTypes } from "@/fetchs/fetch-youtube-iframe";
import { MovieOverview } from "./moive-overview";
import { MovieIframe, MovieIframeSkeleton } from "./movie-iframe";
import { MovieSubInfo, MovieSubInfoSkeleton } from "./movie-sub-info";
import { MovieHeader, MovieHeaderSkeleton } from "./movie-header";
import { MovieTagline, MovieTaglineSkeleton } from "./movie-tagline";

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
}

export function MovieInfo({
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
}: MovieInfoProps) {
  return (
    <div className="space-y-10">
      <MovieHeader
        title={title}
        homepage={homepage}
        initialLogo={initialLogo}
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