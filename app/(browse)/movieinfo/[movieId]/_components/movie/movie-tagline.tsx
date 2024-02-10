import { Skeleton } from "@/components/ui/skeleton";

interface MovieTaglineProps {
  tagline: string;
}

export function MovieTagline({ tagline }: MovieTaglineProps) {
  return (
    <div className="flex justify-center items-center">
      <span className="text-muted-foreground text-center">{tagline}</span>
    </div>
  );
}

export function MovieTaglineSkeleton() {
  return (
    <div className="flex justify-center items-center">
      <Skeleton className="w-[270px] h-[30px]" />
    </div>
  );
}
