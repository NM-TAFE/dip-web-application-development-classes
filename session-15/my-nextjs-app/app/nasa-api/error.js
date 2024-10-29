"use client";

export default function Error({ error, reset }) {
  return (
    <section className="hero is-danger is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Error Occurred</h1>
          <p>{error.message}</p>
          <button className="button is-primary" onClick={() => reset()}>
            Try Again
          </button>
        </div>
      </div>
    </section>
  );
}
