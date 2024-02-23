"use client";
import { GenresTypes } from "@/fetchs/fetch-movie-detail";
import { cn } from "@/lib/utils";
import { ElementRef, useCallback, useRef, useState } from "react";

interface GenresProps {
  genres: GenresTypes[];
}

export function Genres({ genres }: GenresProps) {
  const containerRef = useRef<ElementRef<"div">>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [totalX, setTotalX] = useState<number>(0);

  const preventUnexpectedEffects = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
    },
    []
  );

  const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    preventUnexpectedEffects(e);
    setIsDragging(true);
    const x = e.clientX;
    if (containerRef.current && "scrollLeft" in containerRef.current) {
      setTotalX(x + containerRef.current.scrollLeft);
    }
  };
  const onDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    preventUnexpectedEffects(e);
    if (!isDragging) return;

    const scrollLeft = totalX - e.clientX;
    if (containerRef.current && "scrollLeft" in containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft;
    }
  };
  const onDragEnd = (e: React.MouseEvent<HTMLDivElement>) => {
    preventUnexpectedEffects(e);
    if (!isDragging) return;
    if (!containerRef.current) return;

    setIsDragging(false);
  };
  return (
    <div
      ref={containerRef}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      className={cn(
        "gap-x-1.5 p-2 flex w-72 overflow-hidden whitespace-nowrap overflow-x-scroll h-auto items-center hidden-scrollbar rounded-full"
      )}
    >
      {genres.map((data) => (
        <div
          key={data.id}
          className="border rounded-md px-1.5 flex items-center text-center bg-white/20 border-white/30 shadow"
        >
          <p className="text-sm  font-semibold ">{data.name}</p>
        </div>
      ))}
    </div>
  );
}
