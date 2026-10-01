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
         * 枠は中身を包まず、同じグリッドセルに重ねる飾り。2 つの枠でブロック全体を囲む。
         * - スマホ: KV の下にテキストを縦に積む。右上の枠が KV、左下の枠がテキストを囲む(PC と逆)。
         *   行 [(空), KV, 見出し, 紹介文, 名前, コメント]
         * - PC: KV の右にテキスト。左下の枠が KV、右上の枠がテキストを囲む。
         *   行 [はみ出し, 見出し, 紹介文, 余り, 名前, コメント, (空)]。1 行目は KV が枠の上からはみ出す分の余白、
         *   余りの行でアーティスト紹介を KV の下端へ押し下げる
         * アイコンの横に名前とコメントを置く。PC の列は [KV, アイコン, 名前・コメント] で、
         * 右の枠が中央(1 列目が全体の半分 - gap/2)から始まるよう 3 列目の幅を計算している
         *   3 列目 = 50% - (アイコン 8rem + gap 3rem x 2) + gap/2 1.5rem = 50% - 12.5rem
         * 配置は span を使わず start / end で指定する。col-span などは grid-column の一括指定なので、
         * ブレークポイント違いの col-start を上書きしてしまう
         */}
        <div className="grid grid-cols-[auto_minmax(0,1fr)] grid-rows-[0_auto_auto_auto_auto_auto] gap-x-4 md:grid-cols-[minmax(0,1fr)_8rem_calc(50%-12.5rem)] md:grid-rows-[5rem_auto_auto_1fr_auto_auto_auto] md:gap-x-12">
          <CornerFrame
            corner="bottom-left"
            className="col-start-1 col-end-3 row-start-3 row-end-7 mt-8 md:col-end-2 md:row-start-2 md:row-end-8 md:mt-0 md:w-full md:max-w-sm"
          />
          <CornerFrame
            corner="top-right"
            className="col-start-1 col-end-3 row-start-1 row-end-3 md:col-start-2 md:col-end-4 md:row-start-2 md:row-end-8"
          />

          <Image
            src={miku}
            alt="キービジュアル"
            className="col-start-1 col-end-3 row-start-1 row-end-3 aspect-2/3 w-full max-w-sm self-end object-contain px-4 pt-6 pb-4 md:col-end-2 md:row-end-8 md:px-6 md:pt-0 md:pb-6"
            sizes="384px"
          />
          <h3 className="col-start-1 col-end-3 row-start-3 row-end-4 mt-14 ml-6 text-2xl font-bold md:col-start-2 md:col-end-4 md:row-start-2 md:row-end-3 md:mt-8 md:mr-8 md:ml-0">
            Key Visual
          </h3>
          <p className="col-start-1 col-end-3 row-start-4 row-end-5 mt-4 ml-6 leading-loose md:col-start-2 md:col-end-4 md:row-start-3 md:row-end-4 md:mt-6 md:mr-8 md:ml-0">
            FUTURE CLASTAR 2026 公式キービジュアル
            <br />未来大のモチーフを各所にあしらった2026特別衣装です
          </p>
          {/* アーティスト紹介。PC では下端を KV の下端に揃える */}
          <Placeholder
            label="アイコン"
            className="col-start-1 col-end-2 row-start-5 row-end-7 mt-8 mb-6 ml-6 size-24 self-start md:col-start-2 md:col-end-3 md:row-end-8 md:mt-10 md:ml-0 md:size-32"
          />
          <p className="col-start-2 col-end-3 row-start-5 row-end-6 mt-8 text-xl font-bold md:col-start-3 md:col-end-4 md:mt-10 md:mr-8 md:-ml-6">
            （アーティスト名）
          </p>
          <div className="col-start-2 col-end-3 row-start-6 row-end-7 mt-3 mb-6 flex flex-col gap-2 md:col-start-3 md:col-end-4 md:mt-4 md:mr-8 md:-ml-6">
            <p className="font-bold">Comment</p>
            <p className="text-sm leading-relaxed">（アーティストのコメントが入ります。）</p>
          </div>
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
              <p>全体の三角形のモチーフは未来大研究棟をイメージ
                <br />衣装の模様や髪飾り、ネクタイにデザインを組み込んでいます
              </p>
              <p>LANケーブルのモチーフは情報系大学である未来大の象徴！
                <br />浮遊型のマイクとヘッドセットのマイクがLANケーブルの形に
              </p>
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
