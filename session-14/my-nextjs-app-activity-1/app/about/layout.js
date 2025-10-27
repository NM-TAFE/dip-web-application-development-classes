"use-client";

export default function Layout({ children }) {
  return (
    <div>
      <section className="section">
        <div className="container has-text-centered">
          <p>This is the Layout</p>
          <main>{children}</main>
        </div>
      </section>
    </div>
  );
}
