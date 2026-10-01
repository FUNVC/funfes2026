import TicketButton from "@/components/TicketButton";
import Section from "./Section";

export default function Live() {
  return (
    <Section id="live" title="Live" subtitle="ライブ・チケット情報">
      <dl className="grid gap-x-12 gap-y-6 border-t border-current pt-8 md:grid-cols-[10rem_1fr]">
        <dt className="font-bold">日時</dt>
        <dd className="flex flex-col gap-1">
          <time dateTime="2026-10-11">2026年10月11日（日）</time>
          <span>開場 --:-- / 開演 --:--（予定）</span>
        </dd>

        <dt className="font-bold">会場</dt>
        <dd>（会場名）</dd>

        <dt className="font-bold">チケット</dt>
        <dd className="flex flex-col gap-1">
          <span>（券種）　¥----</span>
          <span>（券種）　¥----</span>
        </dd>

        <dt className="font-bold">販売期間</dt>
        <dd>（販売期間）</dd>
      </dl>
      <p className="leading-loose">（チケットの購入方法や補足事項などが入ります。）</p>
      <div className="flex justify-center">
        <TicketButton className="text-base md:text-lg" />
      </div>
    </Section>
  );
}
