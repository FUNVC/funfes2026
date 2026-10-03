"use client";

import Image from "next/image";
import { useEffect, useState, type AnimationEvent, type TransitionEvent } from "react";
import minimiku from "../../public/minimiku_200px.gif";

type Phase = "loading" | "leaving" | "done";

// 404 などからクライアント遷移で戻ってきたときに、もう一度ローディングを出さないための印
let hasShown = false;

/*
 * ヒーローの画像とフォントが揃うまで画面を覆うローディング画面。
 * サーバー側で描画されるので、JS の読み込みを待たずに最初の描画から表示される。
 * 揃ったら JS でフェードアウトし、遅くても CSS アニメーション(globals.css の loading-out)で 3 秒後には消える
 */
export default function Loading() {
  const [phase, setPhase] = useState<Phase>(() => (hasShown ? "done" : "loading"));

  useEffect(() => {
    if (hasShown) return;
    let cancelled = false;
    waitForHero().then(() => {
      if (!cancelled) setPhase("leaving");
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (phase === "done") return null;

  const finish = (e: AnimationEvent | TransitionEvent) => {
    if (e.target !== e.currentTarget) return;
    hasShown = true;
    setPhase("done");
  };

  return (
    <div
      role="status"
      className={[
        "fixed inset-0 z-100 flex flex-col items-center justify-center gap-4 bg-background text-foreground",
        // 先に揃った場合は CSS の時間切れアニメーションを止めて、その場からフェードアウトする
        phase === "leaving"
          ? "pointer-events-none opacity-0 transition-opacity duration-500"
          : "animate-[loading-out_0.5s_ease_2.5s_forwards]",
      ].join(" ")}
      onAnimationEnd={finish}
      onTransitionEnd={finish}
    >
      <Image src={minimiku} alt="" unoptimized preload className="h-auto w-[min(200px,50vw)]" />
      {/* GenInterfaceJP はまさに読み込み待ちなので、preload 済みの Geist で表示する */}
      <p className="font-(family-name:--font-geist-sans) text-sm tracking-[0.3em]">
        loading now
        <span aria-hidden className="loading-dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </p>
    </div>
  );
}

// ヒーロー(#top)内の画像のデコードと、見出しのフォントの読み込みを待つ。失敗しても待ち続けないよう握りつぶす
async function waitForHero() {
  const hero = document.getElementById("top");
  if (!hero) return;

  const images = Array.from(hero.querySelectorAll("img"), (img) => img.decode().catch(() => {}));

  const title = hero.querySelector("h1");
  const font = title
    ? (() => {
        const { fontWeight, fontFamily } = getComputedStyle(title);
        return document.fonts.load(`${fontWeight} 1em ${fontFamily}`, title.textContent ?? "").catch(() => {});
      })()
    : Promise.resolve();

  await Promise.all([...images, font]);
}
