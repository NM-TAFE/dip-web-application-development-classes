"use client";

export default function NotFound() {
  return (
    <section className="hero is-danger is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <a href="/" className="button is-primary">
            Go Back Home
          </a>
        </div>
      </div>
    </section>
  );
}
