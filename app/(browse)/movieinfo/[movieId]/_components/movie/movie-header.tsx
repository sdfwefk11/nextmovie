"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ProductionCompaniesTypes } from "@/fetchs/fetch-movie-detail";
import { Skeleton } from "@/components/ui/skeleton";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { FetchSimilarTypes } from "@/fetchs/fetch-similar";
import { SimilarModal } from "./similar-modal";

interface MovieInfoProps {
  homepage: string;
  title: string;
  initialLogo: ProductionCompaniesTypes[];
  initialSimilar: FetchSimilarTypes[];
}

export function MovieHeader({
  initialLogo,
  homepage,
  title,
  initialSimilar,
}: MovieInfoProps) {
  const [showModal, setShowModal] = useState(false);
  const logo = useMemo(() => {
    return initialLogo.filter((data) => !data.logo_path.includes("null"));
  }, [initialLogo]);
  const similar = useMemo(() => {
    return initialSimilar?.filter((movie) => {
      const mutate = String(movie.poster_path);
      return !mutate.includes("null");
    });
  }, [initialSimilar]);
  console.log(similar);
  const openModal = () => {
    setShowModal(true);
  };

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setShowModal(false);
    }
  };
  const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <>
      <div className="flex flex-col gap-x-5 justify-center items-center  gap-y-10 xl:flex-row 2xl:flex-col 2xl:items-end">
        <div className="flex flex-col xl:flex-row items-center justify-between text-center w-full gap-y-2">
          <h1 className="relative font-semibold text-4xl">{title}</h1>
          <a
            href={homepage}
            className="underline-offset-4 hover:underline text-muted-foreground text-sm font-medium"
          >
            {`About · ${title}`}
          </a>
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
      <div className="w-full px-2 flex items-center xl:justify-end">
        <Button
          onClick={openModal}
          variant="link"
          type="button"
          size="default"
          className="gap-x-2 flex justify-center items-center group "
        >
          <span className="text-muted-foreground group-hover:text-white transition-colors">
            Similar
          </span>
          <PaperPlaneIcon className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
        </Button>
      </div>
      <SimilarModal
        similar={similar}
        showModal={showModal}
        handleOutsideClick={handleOutsideClick}
        handleMouseUp={handleMouseUp}
      />
    </>
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
