import Image from "next/image";
interface MovieImageProps {
  backdropPath: string;
}

export function MovieImage({ backdropPath }: MovieImageProps) {
  return (
    <div className="rounded-xl border border-[#39393a]">
      <Image
        alt="movie"
        src={backdropPath}
        width={600}
        height={100}
        className="rounded-xl shadow"
      />
    </div>
  );
}
