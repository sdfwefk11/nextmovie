"use client";
import { MovieCard } from "@/components/movie/movie-card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { EnterFullScreenIcon, ExitFullScreenIcon } from "@radix-ui/react-icons";
import { useState } from "react";

interface PreviewImageProps {
  previewImg: string;
}

export function PreviewImage({ previewImg }: PreviewImageProps) {
  const [imgToggle, setImgToggle] = useState(false);
  const isImageUrlExist = !previewImg.includes("null") && !!previewImg;

  const handleImgClick = () => {
    if (isImageUrlExist) {
      setImgToggle((prev) => !prev);
    }
  };

  return (
    <>
      <div
        onClick={handleImgClick}
        className="relative flex items-center cursor-pointer group"
      >
        <MovieCard width={300} height={300} movieImage={previewImg} />
        <div className="absolute w-full h-full flex justify-end p-2 bg-black rounded-lg bg-opacity-0 hover:bg-opacity-35 transition-all">
          {isImageUrlExist && (
            <EnterFullScreenIcon
              className={cn("w-4 h-4 group-hover:scale-125 transition-all")}
            />
          )}
        </div>
      </div>
      <div
        className={cn(
          "fixed w-full h-full left-0 top-0 flex backdrop-blur-md pointer-events-none opacity-0 transition-all cursor-pointer z-50",
          imgToggle && "opacity-100 pointer-events-auto"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center w-0 h-full transition-all duration-700",
            imgToggle && "w-full"
          )}
        >
          <div className="relative group">
            <MovieCard width={1000} height={100} movieImage={previewImg} />
            <div onClick={handleImgClick} className="absolute right-2 top-2">
              {isImageUrlExist && (
                <ExitFullScreenIcon
                  className={cn(
                    "w-10 h-10 group-hover:scale-75 transition-all"
                  )}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function PreviewImageSkeleton() {
  return (
    <div>
      <Skeleton className="w-[200px] h-[100px]" />
    </div>
  );
}
