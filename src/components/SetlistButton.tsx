type Props = {
  className?: string;
};

// Live セクションのセットリスト(#setlist)へ飛ぶボタン。スムーズスクロールとヘッダー分の補正は globals.css に任せる
export default function SetlistButton({ className = "" }: Props) {
  return (
    <a
      href="#setlist"
      className={[
        // 余白・アイコンは em 指定なので、呼び出し側で font-size を変えるとボタン全体が比例して拡縮する
        "group inline-flex h-[3em] items-center gap-[1em] border border-foreground px-[1.75em] font-bold tracking-wider transition-colors duration-200",
        "hover:bg-foreground hover:text-background",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00c8ff]",
        className,
      ].join(" ")}
    >
      セットリスト
      {/* voca_fun_triangle.png の色を差し色に。反転時は同じ画像の濃い青へ */}
      <svg
        aria-hidden
        viewBox="0 0 16 16"
        className="size-[0.875em] fill-none stroke-[#00c8ff] stroke-2 transition-colors duration-200 group-hover:stroke-[#000fff]"
      >
        <path d="M8 2v12M3.5 9.5 8 14l4.5-4.5" />
      </svg>
    </a>
  );
}
