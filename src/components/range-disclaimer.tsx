type Props = {
  intro: string;
  items: string;
};

export default function RangeDisclaimer({ intro, items }: Props) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 mb-8 text-sm text-slate-700 leading-relaxed">
      <span className="font-semibold text-[#05203C]">{intro}</span>{' '}
      <span dangerouslySetInnerHTML={{ __html: items }} />{' '}
      <a href="/request-form" className="text-sky-700 hover:underline font-medium">
        Request a quote
      </a>{' '}
      for any item not shown.
    </div>
  );
}
