import TicketButton from "@/components/TicketButton";
import Section from "./Section";

export default function Live() {
  return (
    <Section id="live" title="Live" subtitle="ライブ・チケット情報">
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
      <p className="leading-loose">チケットの詳細についてはチケット受付サイトをご確認ください。</p>
      <div className="flex justify-center">
        <TicketButton className="text-base md:text-lg" />
      </div>
    </Section>
  );
}
