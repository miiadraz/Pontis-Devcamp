export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr">
      <body>
        <header>Bootcamp</header>
        {children}
        <footer>2026</footer>
      </body>
    </html>
  );
}
