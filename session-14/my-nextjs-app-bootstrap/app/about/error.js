"use client";

export default function Error({ error, reset }) {
  return (
    <section className="d-flex vh-100 bg-danger text-white">
      <div className="container d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="display-4">Error Occurred</h1>
        <p>{error.message}</p>
        <button className="btn btn-primary mt-3" onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </section>
  );
}
