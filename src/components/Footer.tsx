import Image from "next/image";
import icon from "../../public/voca_fun_icon.png";

// クレジット表記。項目を増やすときはここに追加する
const CREDITS = [
  { role: "主催", names: ["未来大ボーカロイド同好会"] },
  { role: "協力", names: ["北海道大学ボーカロイド同好会", "SoundCreate", "公立はこだて未来大学DJサークル"] },
  { role: "モーションキャプチャ支援", names: ["公立はこだて未来大学 角康之研究室"] },
];

export default function Footer() {
  return (
    <footer className="bg-(--dark-bg) text-(--dark-fg)">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 md:py-20">
        <div className="flex items-center gap-3">
          <Image src={icon} alt="" aria-hidden className="size-8" sizes="32px" />
          <span className="text-lg leading-none font-bold tracking-tight">FUTURE CLASTAR 2026</span>
        </div>

        <dl className="grid gap-4 text-sm md:grid-cols-[auto_1fr] md:gap-x-8">
          {CREDITS.map((credit) => (
            <div key={credit.role} className="contents">
              <dt className="opacity-70">{credit.role}</dt>
              <dd className="flex flex-col gap-1 font-medium">
                {credit.names.map((name) => (
                  <span key={name}>{name}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>

        <p className="border-t border-(--dark-fg)/20 pt-6 text-xs tracking-wider opacity-70">
          © 2026 未来大ボーカロイド同好会 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
