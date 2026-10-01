import Section from "./Section";
import Link from "next/link";

export default function Access() {
  return (
    <Section id="access" title="Access" subtitle="会場・アクセス">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.3720849147476!2d140.76439377693657!3d41.841817371245696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9ef614be0167fd%3A0xeb80e0a1e144c3d3!2z5YWs56uL44Gv44GT44Gg44Gm5pyq5p2l5aSn5a2m!5e0!3m2!1sja!2sjp!4v1790870225138!5m2!1sja!2sjp"
          title="公立はこだて未来大学の地図"
          className="aspect-4/3 w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <div className="flex flex-col gap-8 leading-loose">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">公立はこだて未来大学</h3>
            <p>北海道函館市亀田中野町１１６－２</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">バスでお越しの方</h4>
            <p>函館バス55系統をご利用ください。
              <Link href="https://www.fun.ac.jp/access/bus-55-1/" className="text-white underline">
                時刻表
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">お車でお越しの方</h4>
            <p>未来祭期間中は公共交通機関でのお越しをお願いしております。
              <br />駐車場はご利用いただけませんので予めご了承ください。
            </p>
            
          </div>
        </div>
      </div>
    </Section>
  );
}
