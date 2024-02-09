import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProductionCompaniesTypes } from "@/fetchs/fetch-movie-detail";
import Image from "next/image";

interface MovieInfoProps {
  adult: boolean;
  homepage: string;
  language: string;
  title: string;
  popularity: number;
  releaseDate: string;
  runtime: number;
  voteAverage: number;
  status: string;
  tagline: string;
  logo: ProductionCompaniesTypes[];
}

export function MovieInfo({
  adult,
  homepage,
  language,
  title,
  popularity,
  releaseDate,
  runtime,
  voteAverage,
  status,
  tagline,
  logo,
}: MovieInfoProps) {
  console.log(adult);
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-x-5 justify-center items-center gap-y-10 xl:flex-row 2xl:flex-col bg-red-500">
        <div className="flex flex-col xl:flex-row items-center w-full">
          <h1 className="font-semibold text-4xl">{title}</h1>
          <Button
            variant="link"
            type="button"
            className="text-muted-foreground"
          >
            <a href={homepage}>{`About ${title}`}</a>
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-x-2 gap-y-2 xl:grid-cols-1 2xl:grid-cols-4 justify-center items-end">
          {logo.map((data) => {
            if (data.logo_path.includes("null")) {
              return null;
            } else {
              return (
                <div key={data.id}>
                  <Image
                    className="bg-white/20 rounded-lg p-2 border border-[#4a4a4b]"
                    alt={data.name}
                    src={data.logo_path}
                    width={120}
                    height={100}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
      <Separator />
      <div>
        <h1>{adult}</h1>
      </div>
    </div>
  );
}
