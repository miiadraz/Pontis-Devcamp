"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div>
      <p>Nešto je puklo.</p>
      <button onClick={reset}>Pokušaj ponovno</button>
    </div>
  );
}
