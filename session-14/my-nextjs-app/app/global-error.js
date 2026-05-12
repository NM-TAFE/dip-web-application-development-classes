"use client";

// app/global-error.js
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body className="has-background-danger-light">
        <section className="section">
          <div className="container has-text-centered">
            <h1 className="title">Global Error</h1>
            <p>{error.message}</p>
            <button className="button is-primary" onClick={() => reset()}>
              Retry
            </button>
          </div>
        </section>
      </body>
    </html>
  );
}
