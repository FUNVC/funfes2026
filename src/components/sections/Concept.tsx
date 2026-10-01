import Placeholder from "./Placeholder";
import Section from "./Section";

// 仮のモチーフ数。実際の数に合わせて増減する
const motifs = ["モチーフ1", "モチーフ2", "モチーフ3"];

export default function Concept() {
  return (
    <Section id="concept" title="Concept" subtitle="キービジュアル・デザインモチーフ">
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
          <Placeholder label="キービジュアル" className="mx-auto aspect-2/3 w-full max-w-sm" />
          <div className="flex flex-col gap-6 leading-loose">
            <h3 className="text-2xl font-bold">Key Visual</h3>
            <p>（キービジュアルの紹介文。衣装やポーズ、込めた意味などが入ります。）</p>
            <p>（イラストレーターのクレジット・紹介などが入ります。）</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-bold">Design Motif</h3>
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {motifs.map((motif) => (
              <li key={motif} className="flex flex-col gap-4">
                <Placeholder label={motif} className="aspect-square" />
                <p className="font-bold">{motif}</p>
                <p className="text-sm leading-relaxed">（モチーフの説明が入ります。）</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
