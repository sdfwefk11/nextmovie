import { Suspense } from "react";
import { Movies, MoviesSkeleton } from "./_components/movies";
import { Separator } from "@/components/ui/separator";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <Suspense fallback={<MoviesSkeleton />}>
      <div>
        <div className="flex flex-col items-center justify-center pt-12 pb-20"></div>
        <Separator />
        <Footer />
      </div>
    </Suspense>
  );
}
