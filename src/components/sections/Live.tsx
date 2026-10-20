import Image from "next/image";
import setlist from "../../../public/setlist2026.jpg";
import Section from "./Section";

export default function Live() {
  return (
    <Section id="live" title="Live" subtitle="ライブ情報・セットリスト">
      <dl className="grid gap-x-12 gap-y-6 border-t border-current pt-8 md:grid-cols-[10rem_1fr]">
        <dt className="font-bold">日時</dt>
        <dd className="flex flex-col gap-1">
          <time dateTime="2026-10-11">2026年10月11日（日）</time>
          <span>開場 16:00 / 開演 16:30</span>
        </dd>

        <dt className="font-bold">会場</dt>
        <dd>公立はこだて未来大学 講堂</dd>

        <dt className="font-bold">チケット</dt>
        <dd className="flex flex-col gap-1">
          <span>一般座席未指定（無料） LivePocketにて受付</span>
        </dd>

        <dt className="font-bold">受付期間</dt>
        <dd>10月01日 0:00 ～ 10月11日 16:30</dd>
      </dl>
      {/* ヒーローの SetlistButton の飛び先 */}
      <figure id="setlist" className="flex flex-col gap-4">
        <figcaption className="font-bold">セットリスト</figcaption>
        <Image
          src={setlist}
          alt="FUTURE CLASTAR 2026 セットリスト"
          className="h-auto w-full"
          sizes="(min-width: 1024px) 992px, calc(100vw - 2rem)"
        />
        {/* 画像内の曲目を読み上げ用に書き出す */}
        <ol className="sr-only">
          <li>快晴 feat. 初音ミク / Orangestar</li>
          <li>FREELY TOMORROW / Mitchie M</li>
          <li>エイリアンエイリアン / ナユタン星人</li>
          <li>カンケーガール / マサラダ</li>
          <li>39 / sasakure.UK × DECO*27</li>
          <li>どりーみんチュチュ / emon(Tes.)</li>
          <li>ハッピーシンセサイザ / EasyPop</li>
          <li>クリスタルスノウ / Aqu3ra</li>
          <li>Primary Star / Reno</li>
        </ol>
      </figure>
    </Section>
  );
}
