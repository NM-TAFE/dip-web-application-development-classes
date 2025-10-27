// app/nasa/template.js
"use-client";

export default function Template({ children }) {
  return (
    <div className="container has-text-centered">
      <h1>Template Section</h1>
      {children}
    </div>
  );
}
