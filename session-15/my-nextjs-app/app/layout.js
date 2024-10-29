import "../styles/globals.css";

export const metadata = {
  title: "NM Tafe Next.js App",
  description: "A modern application built with Next.js and Bulma",
  openGraph: {
    title: "My Next.js App",
    description: "A modern web application built with Next.js",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "App Logo",
      },
    ],
    siteName: "My Next.js App",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <nav
          className="navbar is-primary"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <h1 className="title has-text-white">My Next.js App</h1>
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/">
                Home
              </a>
              <a className="navbar-item" href="/nasa-api">
                NASA API
              </a>
              <a className="navbar-item" href="/">
                About
              </a>
            </div>
          </div>
        </nav>

        {/* Main content section */}
        <section className="section">
          <div className="container">
            {children} {/* This will render the children (pages) */}
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              © 2024 <strong>My Next.js App</strong>. Built with Next.js and
              Bulma.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
