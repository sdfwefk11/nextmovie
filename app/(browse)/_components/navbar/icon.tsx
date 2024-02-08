import Image from "next/image";
import Link from "next/link";

export function Icon() {
  return (
    <Link href="/">
      <div className="flex gap-x-2 hover:opacity-75 transition-opacity">
        <Image alt="snow" src="/snow.svg" width={25} height={25} />
        <div>
          <span className="font-semibold text-md">NFL</span>
        </div>
      </div>
    </Link>
  );
}
