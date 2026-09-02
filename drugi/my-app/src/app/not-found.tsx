import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-4xl font-bold text-slate-900">404</h1>
      <p className="text-lg text-slate-600">Ova stranica ne postoji.</p>
      <Link
        href="/"
        className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors"
      >
        Povratak na početnu
      </Link>
    </main>
  );
}
