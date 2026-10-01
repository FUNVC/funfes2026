type Props = {
  label: string;
  className?: string;
};

// 画像が入る予定の場所。差し替え時に next/image へ置き換える
export default function Placeholder({ label, className = "" }: Props) {
  return (
    <div
      className={[
        "flex items-center justify-center border border-dashed border-current text-sm opacity-50",
        className,
      ].join(" ")}
    >
      {label}
    </div>
  );
}
