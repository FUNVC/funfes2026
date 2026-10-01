// import Placeholder from "./Placeholder";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About" subtitle="FUTURE CLASTARとは？">
      <div className="flex flex-col gap-10 md:gap-14">
        <p className="max-w-3xl text-lg font-bold tracking-wide md:text-xl">
          FUTURE CLASTARは、初音ミクをはじめとする歌声合成キャラクターが登場する、ファンメイドの3Dライブです。
          <span className="block mt-2 md:mt-3">
            北海道函館市を舞台に開催します！
          </span>
        </p>
        <div className="flex flex-col gap-4 md:gap-6">
          <p>
            本ライブは、公立はこだて未来大学の大学祭「未来祭 2026」の2日目のプログラムとして開催されます。
          </p>
          <p>
            「FUTURE CLASTAR」という名前は、公立はこだて未来大学と初音ミクに由来します。<br/>
            ボーカロイドを愛する人たちが未来大に集まり、函館にその文化が広がってほしいという願いが込められています。
          </p>
        </div>
        {/* <Placeholder label="イベントポスター" className="aspect-[2/3] w-full" /> */}
      </div>
    </Section>
  );
}
