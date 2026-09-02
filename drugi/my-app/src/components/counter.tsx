"use client";

import { useState } from "react";

export default function Counter() {
  const [n, setN] = useState(0);

  return (
    <button
      onClick={() => setN(n + 1)}
      className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-blue-700 transition-colors"
    >
      Klikova: {n}
    </button>
  );
}
