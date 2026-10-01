import Image from "next/image";
import miku from "../../../public/miku_mainVisual_2026-resize.png";
import triangle from "../../../public/voca_fun_triangle.png";
import TicketButton from "@/components/TicketButton";

export default function Hero() {
  return (
    <section
      id="top"
      className={[
        "flex h-svh w-full flex-col overflow-x-hidden pt-4 landscape:flex-row landscape:items-center landscape:justify-center landscape:gap-[3vw] landscape:pt-0",
        // 横並び時は立ち絵とテキストを1つのまとまりとして画面中央に置く
        // ボタンの文字サイズはサブテキストの半分(PC表示での比率)。小さくなりすぎないよう 14px で下げ止める
        "[--btn:max(14px,calc(var(--sub)*0.5))] landscape:[--btn:max(14px,min(1.25vw,1.75svh))]",
        // 縦並び時のサイズ計算。テキストの高さ = タイトル(leading 1.25) + サブ2行(leading 1.5) + ボタン(3em) + gap-3 × 3
        "[--sub:min(4.5vw,3.5svh)]",
        "[--text-h:calc(var(--hero-title)*1.25+var(--sub)*3+var(--btn)*3+2.25rem)]",
        // 立ち絵の下20%をテキストと重ねたうえで、pt-4 + pb-6 と合わせて画面に収まる高さ
        "[--hero-h:min(165vw,calc((100svh-2.5rem-var(--text-h))/0.8))]",
      ].join(" ")}
    >
      <div className="flex justify-center">
        <div className="relative aspect-2/3 h-(--hero-h) shrink-0 landscape:h-[min(96svh,72vw)]">
          <Image
            src={triangle}
            alt=""
            aria-hidden
            className="absolute top-[14%] left-[5%] w-[90%]"
            sizes="(orientation: landscape) 36vw, 100vw"
            preload
          />
          <Image
            src={miku}
            alt="初音ミク"
            className="relative h-full w-full object-contain"
            sizes="(orientation: landscape) 40vw, 110vw"
            preload
          />
        </div>
      </div>

      {/* 縦並び時は立ち絵の下20%に重ねる(pt-12 はグラデーションの分) */}
      <div className="relative z-10 -mt-[calc(var(--hero-h)*0.2+3rem)] flex shrink-0 justify-center bg-linear-to-t from-background from-65% to-transparent px-4 pt-12 pb-6 landscape:mt-0 landscape:bg-none landscape:p-0">
        <div className="flex flex-col items-center gap-3 text-center font-bold landscape:gap-6">
          <h1 className="text-(length:--hero-title) leading-tight tracking-tight">FUTURE CLASTAR</h1>
          <p className="text-(length:--sub) landscape:text-[min(2.5vw,3.5svh)]">Future University Hakodate</p>
          <p className="text-(length:--sub) landscape:text-[min(2.5vw,3.5svh)]">
            <time dateTime="2026-10-11">2026.10.11 (Sun)</time>
          </p>
          {/* 仮置き */}
          <TicketButton className="text-(length:--btn)" />
        </div>
      </div>
    </section>
  );
}
