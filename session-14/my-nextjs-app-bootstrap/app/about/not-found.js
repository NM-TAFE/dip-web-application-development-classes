"use client";

export default function NotFound() {
  return (
    <section className="d-flex vh-100 bg-danger text-white">
      <div className="container d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="display-4">404 - Page Not Found</h1>
        <p className="lead">
          Sorry, the page you are looking for does not exist.
        </p>
        <a href="/" className="btn btn-primary mt-3">
          Go Back Home
        </a>
      </div>
    </section>
  );
}
