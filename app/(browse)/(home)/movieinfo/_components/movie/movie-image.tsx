"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
interface MovieImageProps {
  backdropPath: string;
}

export function MovieImage({ backdropPath }: MovieImageProps) {
  const [blur, setBlur] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setBlur(false);
    }, 50);
  }, []);
  return (
    <div className="relative rounded-xl border border-[#1d1d1d] overflow-hidden ">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top, black 0%, transparent 28%),linear-gradient(to bottom,transparent, black 0%, transparent 28%), linear-gradient(to left,transparent, black 0%, transparent 28%), linear-gradient(to right,transparent, black 0%, transparent 28%)",
        }}
        className="absolute w-full h-full blur-0"
      ></div>
      <Image
        alt="movie"
        src={backdropPath}
        width={600}
        height={100}
        className={cn(
          "rounded-xl duration-700 ease-in-out ",
          blur && "blur-2xl scale-95"
        )}
      />
    </div>
  );
}
