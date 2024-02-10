"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { FetchYoutubeIframeTypes } from "@/fetchs/fetch-youtube-iframe";
import { useMemo } from "react";

interface MovieIframeProps {
  videos: FetchYoutubeIframeTypes[];
}

export function MovieIframe({ videos }: MovieIframeProps) {
  const video = useMemo(() => {
    return videos.filter((data) =>
      data.name.toLowerCase().includes("official")
    );
  }, [videos]);
  if (!video) {
    return null;
  }
  return (
    <div className="flex justify-center items-center h-96 border p-1 rounded-lg border-[#4d4d50]">
      <iframe
        key={video[0].id}
        src={`https://youtube.com/embed/${video[0].key}`}
        className="w-full h-full"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export function MovieIframeSkeleton() {
  return (
    <div className="flex items-center justify-center">
      <Skeleton className="w-full h-72 2xl:h-[400px]" />
    </div>
  );
}
