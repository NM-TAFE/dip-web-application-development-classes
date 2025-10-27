// src/app/page.js
import Link from "next/link";
import "bulma/css/bulma.min.css"; // Import Bulma CSS

export default function LandingPage() {
  return (
    <section className="hero is-fullheight is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Welcome to the NASA API Explorer</h1>
          <h2 className="subtitle">
            
            Discover amazing space data through NASA&quot;s API
          </h2>

          <Link href="/nasa-api" className="button is-link is-large">
            Explore NASA API
          </Link>
        </div>
      </div>
    </section>
  );
}
