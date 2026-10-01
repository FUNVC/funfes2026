type Props = {
  // 三角を置く角。線はその角から2辺に伸び、反対側の端に小さな四角が付く
  corner: "bottom-left" | "top-right";
  className?: string;
  // 線を引く範囲。中身を枠からはみ出させたいときに上書きする
  inset?: string;
  children: React.ReactNode;
};

// 中身を L 字の細い線で囲む飾り枠。色は voca_fun_triangle.png のシアン
export default function CornerFrame({ corner, className = "", inset = "inset-0", children }: Props) {
  const bottomLeft = corner === "bottom-left";

  return (
    <div className={["relative", className].join(" ")}>
      {/*
       * 線は border で引く。高さ 1px の要素だと表示倍率や小数ピクセル位置によって消えることがあるが、
       * border は最低 1 デバイスピクセルで描画される
       */}
      <div
        aria-hidden
        className={[
          "pointer-events-none absolute border-current text-[#00c8ff]",
          bottomLeft ? "border-b border-l" : "border-t border-r",
          inset,
        ].join(" ")}
      >
        {/* 線の端の四角 */}
        <span
          className={[
            "absolute size-1.5 -translate-x-1/2 -translate-y-1/2 bg-current",
            bottomLeft ? "top-0 left-0" : "top-full left-full",
          ].join(" ")}
        />
        <span
          className={[
            "absolute size-1.5 -translate-x-1/2 -translate-y-1/2 bg-current",
            bottomLeft ? "top-full left-full" : "top-0 left-0",
          ].join(" ")}
        />
        {/* 角の三角 */}
        <span
          className={[
            "absolute size-3 bg-current",
            bottomLeft
              ? "-bottom-px -left-px [clip-path:polygon(0_0,0_100%,100%_100%)]"
              : "-top-px -right-px [clip-path:polygon(0_0,100%_0,100%_100%)]",
          ].join(" ")}
        />
      </div>
      {children}
    </div>
  );
}
