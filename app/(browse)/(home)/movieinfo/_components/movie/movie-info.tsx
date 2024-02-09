"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProductionCompaniesTypes } from "@/fetchs/fetch-movie-detail";
import { FetchYoutubeIframeTypes } from "@/fetchs/fetch-youtube-iframe";
import Image from "next/image";
import { useMemo } from "react";

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
}: MovieInfoProps) {
  const logo = useMemo(() => {
    return initialLogo.filter((data) => !data.logo_path.includes("null"));
  }, [initialLogo]);
  const runtimeHour = Math.floor(initialRuntime / 60);
  const runtimeMinute = initialRuntime % 60;

  const video = useMemo(() => {
    return videos.filter((data) =>
      data.name.toLowerCase().includes("official")
    );
  }, [videos]);
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-x-5 justify-center items-center gap-y-10 xl:flex-row 2xl:flex-col 2xl:items-end">
        <div className="flex flex-col xl:flex-row items-center w-full justify-between text-center">
          <h1 className="font-semibold text-4xl">{title}</h1>
          <Button
            variant="link"
            type="button"
            className="text-muted-foreground"
          >
            <a href={homepage}>{`About ${title}`}</a>
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-x-2 gap-y-2 xl:grid-cols-1 2xl:grid-cols-4 justify-center">
          {logo.map((data) => (
            <div key={data.id}>
              <Image
                className="bg-white/20 rounded-lg p-2 border border-[#4a4a4b]"
                alt={data.name}
                src={data.logo_path}
                width={120}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div className="flex gap-x-1 items-center justify-center">
        <div className="flex gap-x-1 justify-center items-center text-center font-semibold">
          {adult && <Image src="/19.svg" alt="adult" width={30} height={30} />}
          <span className="uppercase">{language}</span>
          <p>·</p>
          <span>Average {voteAverage.toFixed(1)}</span>
          <p>·</p>
        </div>
        <div className="flex gap-x-1 text-muted-foreground justify-center items-center text-center text-sm">
          <span>{releaseDate}</span>
          <p>·</p>
          <span>{`${runtimeHour}H ${runtimeMinute}M`}</span>
          <p>·</p>
          <span>{status}</span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <span className="text-muted-foreground text-center">{tagline}</span>
      </div>
      <div>
        <iframe
          key={video[0].id}
          src={`https://youtube.com/embed/${video[0].key}`}
        ></iframe>
      </div>
    </div>
  );
}
