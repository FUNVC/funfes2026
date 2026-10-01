import Section from "./Section";

// 仮の注意事項。実際の内容に差し替える
const notes = [
  "（注意事項1）",
  "（注意事項2）",
  "（注意事項3）",
  "（注意事項4）",
];

export default function Attention() {
  return (
    <Section id="attention" title="Attention" subtitle="注意事項">
      <ul className="flex list-disc flex-col gap-3 pl-6 leading-relaxed">
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </Section>
  );
}
