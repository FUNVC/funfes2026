import Image from "next/image";
import miku from "../../../public/miku_mainVisual_2026-resize.png";
import motif from "../../../public/IMG_3996.jpg";
import settingArt from "../../../public/20262.jpg";
import CornerFrame from "./CornerFrame";
import Placeholder from "./Placeholder";
import Section from "./Section";

export default function Concept() {
  return (
    <Section id="concept" title="Concept" subtitle="キービジュアル・デザインコンセプト">
      <div className="flex flex-col gap-16 md:gap-24">
        {/*
         * 2 列とも行の高さいっぱいに伸ばし、右の枠の上端を左の枠の上端(15%)に揃える。
         * KV は左の枠の上端からはみ出させ、アーティスト紹介は KV の下端に揃える
         */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <CornerFrame
            corner="bottom-left"
            inset="inset-x-0 bottom-0 top-[15%]"
            className="mx-auto w-full max-w-sm p-4 pt-0 md:mx-0 md:justify-self-start md:p-6 md:pt-0"
          >
            <Image
              src={miku}
              alt="キービジュアル"
              className="aspect-2/3 w-full object-contain"
              sizes="(max-width: 384px) 100vw, 336px"
            />
          </CornerFrame>
          <CornerFrame
            corner="top-right"
            inset="inset-x-0 top-0 bottom-0 md:top-[15%]"
            className="flex flex-col px-6 pb-4 md:px-8 md:pb-6"
          >
            {/* 枠の上端より下から書き始めるための余白 */}
            <div aria-hidden className="hidden shrink-0 md:block md:basis-[15%]" />
            <div className="flex flex-col gap-6 pt-6 leading-loose md:pt-8">
              <h3 className="text-2xl font-bold">Key Visual</h3>
              <p>（キービジュアルの紹介文。衣装やポーズ、込めた意味などが入ります。）</p>
            </div>
            {/* アーティスト紹介 */}
            <div className="mt-auto flex gap-6 pt-10">
              <Placeholder label="アイコン" className="size-24 shrink-0 md:size-32" />
              <div className="flex flex-col gap-4">
                <p className="text-xl font-bold">（アーティスト名）</p>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">Comment</p>
                  <p className="text-sm leading-relaxed">（アーティストのコメントが入ります。）</p>
                </div>
              </div>
            </div>
          </CornerFrame>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <Image
            src={settingArt}
            alt="設定画"
            className="mx-auto w-full max-w-sm md:order-last md:mx-0 md:justify-self-end"
            sizes="(max-width: 384px) 100vw, 384px"
          />
          {/* 説明は上、モチーフ画像は左端に下揃え */}
          <div className="flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6 leading-loose">
              <h3 className="text-2xl font-bold">Design Concept</h3>
              <p>（設定画の紹介文。デザインのコンセプトや込めた意味などが入ります。）</p>
              <p>（デザインモチーフの説明などが入ります。）</p>
            </div>
            <Image
              src={motif}
              alt="デザインモチーフ"
              className="aspect-square w-40 self-start object-cover md:w-48"
              sizes="(min-width: 768px) 192px, 160px"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
