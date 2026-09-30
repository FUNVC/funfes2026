const TICKET_URL = "https://livepocket.jp/e/funvc-live2026";

type Props = {
  className?: string;
};

export default function TicketButton({ className = "" }: Props) {
  return (
    <a
      href={TICKET_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        // 余白・アイコンは em 指定なので、呼び出し側で font-size を変えるとボタン全体が比例して拡縮する
        "group inline-flex h-[3em] items-center gap-[1em] border border-foreground px-[1.75em] font-bold tracking-wider transition-colors duration-200",
        "hover:bg-foreground hover:text-background",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00c8ff]",
        className,
      ].join(" ")}
    >
      チケット受付
      {/* voca_fun_triangle.png の色を差し色に。反転時は同じ画像の濃い青へ */}
      <svg
        aria-hidden
        viewBox="0 0 16 16"
        className="size-[0.875em] fill-none stroke-[#00c8ff] stroke-2 transition-colors duration-200 group-hover:stroke-[#000fff]"
      >
        <path d="M4 12 12 4M5.5 4H12v6.5" />
      </svg>
    </a>
  );
}
