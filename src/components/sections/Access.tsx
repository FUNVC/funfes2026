import Placeholder from "./Placeholder";
import Section from "./Section";

export default function Access() {
  return (
    <Section id="access" title="Access" subtitle="会場・アクセス">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <Placeholder label="地図" className="aspect-4/3" />
        <div className="flex flex-col gap-8 leading-loose">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">（会場名）</h3>
            <p>（住所）</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">バスでお越しの方</h4>
            <p>（アクセス方法が入ります。）</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">お車でお越しの方</h4>
            <p>（駐車場の案内などが入ります。）</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
