"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import { ProductionCompaniesTypes } from "@/fetchs/fetch-movie-detail";
import { Skeleton } from "@/components/ui/skeleton";

interface MovieInfoProps {
  homepage: string;
  title: string;
  initialLogo: ProductionCompaniesTypes[];
}

export function MovieHeader({ initialLogo, homepage, title }: MovieInfoProps) {
  const logo = useMemo(() => {
    return initialLogo.filter((data) => !data.logo_path.includes("null"));
  }, [initialLogo]);

  return (
    <div className="flex flex-col gap-x-5 justify-center items-center gap-y-10 xl:flex-row 2xl:flex-col 2xl:items-end">
      <div className="flex flex-col xl:flex-row items-center w-full justify-between text-center">
        <h1 className="font-semibold text-4xl">{title}</h1>
        <Button variant="link" type="button" className="text-muted-foreground">
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
  );
}

export function MovieHeaderSkeleton() {
  return (
    <div className="flex flex-col gap-x-5 justify-center items-center gap-y-10 xl:flex-row 2xl:flex-col 2xl:items-end xl:justify-between">
      <div className="flex flex-col items-center gap-y-3 xl:flex-row justify-between gap-x-10 w-full">
        <Skeleton className="w-[200px] h-[40px]" />
        <Skeleton className="w-[100px] h-[20px]" />
      </div>
      <div className="grid grid-cols-4 gap-x-2 gap-y-2 xl:grid-cols-1 2xl:grid-cols-4 justify-center">
        <Skeleton className="w-[80px] h-[50px]" />
        <Skeleton className="w-[80px] h-[50px]" />
        <Skeleton className="w-[80px] h-[50px]" />
        <Skeleton className="w-[80px] h-[50px]" />
      </div>
    </div>
  );
}
