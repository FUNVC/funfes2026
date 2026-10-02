import Image from "next/image";
import miku from "../../../public/miku_mainVisual_2026-resize.png";
import triangle from "../../../public/voca_fun_triangle.png";
import TicketButton from "@/components/TicketButton";

export default function Hero() {
  return (
    <section
      id="top"
      className={[
        "flex h-svh w-full flex-col overflow-x-hidden pt-4 landscape:flex-row landscape:items-center landscape:justify-center landscape:pt-0",
        // 横並び時は立ち絵とテキストを1つのまとまりとして画面中央に置く
        // 立ち絵の右25%にテキスト側を重ね、浮いた幅のぶんテキストを大きくする
        "landscape:[--hero-w:min(64svh,48vw)] landscape:[--overlap:calc(var(--hero-w)*0.25)]",
        "landscape:[--hero-title:min(5.5vw,8.5svh)] landscape:[--sub:min(2.75vw,4.25svh)]",
        // ボタンの文字サイズはサブテキストの半分(PC表示での比率)。小さくなりすぎないよう 14px で下げ止める
        "[--btn:max(14px,calc(var(--sub)*0.5))]",
        // 縦並び時のサイズ計算。テキストの高さ = タイトル(leading 1.25) + サブ2行(leading 1.5) + ボタン(3em) + gap-3 × 3
        "[--sub:min(4.5vw,3.5svh)]",
        "[--text-h:calc(var(--hero-title)*1.25+var(--sub)*3+var(--btn)*3+2.25rem)]",
        // 立ち絵の下20%をテキストと重ねたうえで、pt-4 + pb-6 と合わせて画面に収まる高さ
        "[--hero-h:min(165vw,calc((100svh-2.5rem-var(--text-h))/0.8))]",
      ].join(" ")}
    >
      <div className="flex justify-center">
        <div className="relative aspect-2/3 h-(--hero-h) shrink-0 landscape:h-[calc(var(--hero-w)*1.5)]">
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

      {/* 縦並び時は立ち絵の下20%に重ねる(pt-12 はグラデーションの分)。
          横並び時は立ち絵の右側に重ね、左から右へのグラデーションで境目をなじませる */}
      <div className="relative z-10 -mt-[calc(var(--hero-h)*0.2+3rem)] flex shrink-0 justify-center bg-linear-to-t from-background from-65% to-transparent px-4 pt-12 pb-6 landscape:-ml-(--overlap) landscape:mt-0 landscape:items-center landscape:self-stretch landscape:bg-linear-to-r landscape:from-transparent landscape:from-0% landscape:to-background landscape:to-(length:--overlap) landscape:py-0 landscape:pr-0 landscape:pl-[calc(var(--overlap)*0.5)]">
        <div className="flex flex-col items-center gap-3 text-center font-bold landscape:gap-6">
          <h1 className="text-(length:--hero-title) leading-tight tracking-tight">FUTURE CLASTAR</h1>
          <p className="text-(length:--sub)">Future University Hakodate</p>
          <p className="text-(length:--sub)">
            <time dateTime="2026-10-11">2026.10.11 (Sun)</time>
          </p>
          {/* 仮置き */}
          <TicketButton className="text-(length:--btn)" />
        </div>
      </div>
    </section>
  );
}
