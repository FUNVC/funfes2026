import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import miku from "../../public/miku_2026_deformed.png";

export const metadata: Metadata = {
  title: "404 Not Found | FUTURE CLASTAR 2026",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-16 text-center">
      <Image
        src={miku}
        alt=""
        aria-hidden
        priority
        className="size-48 object-contain md:size-64"
        sizes="(min-width: 768px) 256px, 192px"
      />
      <div className="flex flex-col gap-3">
        <h1 className="font-mono text-6xl font-bold tracking-wider text-[#00c8ff] md:text-7xl">404</h1>
        <p className="text-lg font-bold tracking-wider">Page Not Found</p>
        <p className="leading-loose">お探しのページは見つかりませんでした</p>
      </div>
      {/* basePath が付くので "/" で /2026 に戻る */}
      <Link
        href="/"
        className="inline-flex h-12 items-center border border-foreground px-7 font-bold tracking-wider transition-colors duration-200 hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00c8ff]"
      >
        トップへ戻る
      </Link>
    </main>
  );
}
