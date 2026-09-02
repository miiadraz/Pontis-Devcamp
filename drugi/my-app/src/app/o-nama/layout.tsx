export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <header>Mia Draženović</header>
      {children}
      <footer>2026</footer>
    </html>
  );
}
