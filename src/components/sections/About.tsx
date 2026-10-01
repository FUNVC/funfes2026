import Placeholder from "./Placeholder";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About" subtitle="FUTURE CLASTARとは？">
      <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
        <div className="flex flex-col gap-6 leading-loose">
          <p className="text-xl font-bold md:text-2xl">（キャッチコピー）</p>
          <p>（イベントの紹介文。主催団体、どんなライブなのか、などが入ります。）</p>
          <p>（2段落目。過去の開催や今年のテーマなどが入ります。）</p>
        </div>
        <Placeholder label="イメージ画像" className="aspect-video" />
      </div>
    </Section>
  );
}
