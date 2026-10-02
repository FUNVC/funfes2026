"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import icon from "../../public/voca_fun_icon.png";

// href は各セクションの id(Section.tsx の id prop)に対応させる
const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#concept", label: "Concept" },
  { href: "#live", label: "Live" },
  { href: "#access", label: "Access" },
  { href: "#attention", label: "Attention" },
];

const linkClass =
  "font-medium tracking-wider uppercase transition-colors duration-200 hover:text-[#00c8ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00c8ff]";

export default function Header() {
  const [open, setOpen] = useState(false);

  // メニューを開いている間は Esc で閉じられるようにする
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    // 高さは globals.css の --header-h。スクロール位置の補正(scroll-padding-top)とヒーローの高さ計算にも使う
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-(--dark-bg)">
        <div className="mx-auto flex h-(--header-h) max-w-6xl items-center justify-between px-4">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00c8ff]"
          >
            <Image src={icon} alt="" aria-hidden className="size-8" sizes="32px" />
            <span className="text-lg leading-none font-bold tracking-tight">FUTURE CLASTAR</span>
          </a>

          {/* PC表示: 右寄せの横並びメニュー */}
          <nav aria-label="メインメニュー" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* タブレット以下: ハンバーガーボタン。3本線が開くと×になる */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            onClick={() => setOpen((v) => !v)}
            className="relative size-10 lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00c8ff]"
          >
            <span
              className={`absolute left-2 h-0.5 w-6 bg-foreground transition-transform duration-200 ${open ? "top-[19px] rotate-45" : "top-3"}`}
            />
            <span
              className={`absolute top-[19px] left-2 h-0.5 w-6 bg-foreground transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-2 h-0.5 w-6 bg-foreground transition-transform duration-200 ${open ? "top-[19px] -rotate-45" : "top-[26px]"}`}
            />
          </button>
        </div>
      </div>

      {/* タブレット以下: ヘッダーの下に開くメニュー。画面を広く覆うので、背景は半透明にして下のページを透かす */}
      <nav
        id="mobile-menu"
        aria-label="メインメニュー"
        hidden={!open}
        className="border-t border-foreground/20 bg-(--dark-bg)/50 lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)} className={`block py-3 text-lg ${linkClass}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
