import Placeholder from "./Placeholder";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About" subtitle="FUTURE CLASTARとは？">
      <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12 p-16">
        <div className="flex flex-col gap-6 leading-loose">
          <h1 className="text-2xl font-bold md:text-4xl">FUTURE CLASTAR</h1>
          <p>公立はこだて&quot;未来&quot;大学で行われる初音ミクを中心とした3DCGライブ</p>
          <p>今年度は初めて、講堂で盛大に開催します。</p>
        </div>
        {/* <Placeholder label="イメージ画像" className="aspect-video" /> */}
      </div>
    </Section>
  );
}
