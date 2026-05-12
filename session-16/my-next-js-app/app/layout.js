export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>{/* Navigation components */}</nav>
        {children}
      </body>
    </html>
  );
}
