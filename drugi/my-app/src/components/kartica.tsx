type KarticaProps = {
  ime: string;
  uloga: string;
  opis: string;
  istaknuto?: boolean;
};

export default function Kartica({ ime, uloga, opis, istaknuto }: KarticaProps) {
  return (
    <article className="rounded-lg border border-slate-200 p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">{ime}</h2>
      <p className="mt-2 text-sm text-slate-500">{uloga}</p>
      <p className="mt-2 text-slate-700">{opis}</p>
      {istaknuto && (
        <span className="mt-3 inline-block text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
          Istaknuto
        </span>
      )}
    </article>
  );
}
