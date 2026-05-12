import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Next App",
  description: "Application to showcase our components",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <header className="navbar is-primary">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <h1 className="title has-text-white">Our NextJS Site</h1>
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/">
                Home
              </a>
              <Link href="/nasa-api" className="navbar-item">
                Explore NASA API
              </Link>
              {/* <a className="navbar-item" href="/nasa-api/items">
                NASA APOD
              </a> */}
            </div>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="content has-text-centered">
            <p>© 2024 NASA APOD Viewer Global Layout</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
