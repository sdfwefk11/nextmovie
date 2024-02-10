import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
interface MovieSubInfoProps {
  language: string;
  voteAverage: number;
  releaseDate: string;
  adult: boolean;
  status: string;
  initialRuntime: number;
}

export function MovieSubInfo({
  language,
  voteAverage,
  releaseDate,
  adult,
  initialRuntime,
  status,
}: MovieSubInfoProps) {
  const runtimeHour = Math.floor(initialRuntime / 60);
  const runtimeMinute = initialRuntime % 60;
  return (
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
  );
}

export function MovieSubInfoSkeleton() {
  return (
    <div className="flex justify-center items-center">
      <Skeleton className="w-[310px] h-[30px]" />
    </div>
  );
}
