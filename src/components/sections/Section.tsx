import Image from "next/image";
import type { ReactNode } from "react";
import triangle from "../../../public/voca_fun_triangle_transparent.png";

type Props = {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
};

// 背景色は globals.css で並び順から決まる(dark / light の交互)
export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="pb-24 md:pb-32">
      {/*
       * 見出しの帯。文字サイズはヒーローのタイトル(--hero-title)から割り出すので、それより大きくならない。
       * 右端の三角形は帯と同じ高さの正方形で、前セクションとの境目にくっつける。透過部分からセクションの背景色が見える。
       * 文字は三角形の下端に揃える。上の余白も見出しサイズに比例させ、三角形が文字に対して大きくなりすぎないようにする
       */}
      <div className="relative pt-[calc(var(--section-title)*0.8)]">
        <Image
          src={triangle}
          alt=""
          aria-hidden
          className="absolute top-0 right-0 h-full w-auto"
          sizes="(orientation: landscape) 8vw, 13vw"
        />
        <hgroup className="relative mx-auto flex max-w-5xl flex-col gap-2 px-4">
          <h2
            id={`${id}-title`}
            className="text-(length:--section-title) leading-none font-bold tracking-tighter uppercase"
          >
            {title}
          </h2>
          <p className="text-[max(0.75rem,calc(var(--section-title)*0.3))] leading-none font-bold tracking-widest opacity-70">
            {subtitle}
          </p>
        </hgroup>
      </div>

      <div className="mx-auto mt-8 flex max-w-5xl flex-col gap-12 px-4 md:mt-12 md:gap-16">{children}</div>
    </section>
  );
}
