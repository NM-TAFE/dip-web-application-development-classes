export default function About() {
  return (
    <main className="section">
      <section className="section">
        <div className="container">
          <h1 className="title">About This Website</h1>
          <h2 className="subtitle">
            Part of the NM Tafe Web Application Development Course
          </h2>

          <div className="content">
            <p>
              This website is designed as part of the NM Tafe course curriculum,
              focusing on two essential units in Web Application Development:
            </p>

            <ul>
              <li>
                <strong>ICTWEB517</strong> - Create Web-Based Programs
              </li>
              <li>
                <strong>ICTPRG546</strong> - Validate Application Designs
                Against Specifications
              </li>
            </ul>

            <p>
              In <strong>ICTWEB517</strong>, students learn the skills required
              to design, build, and deploy responsive and dynamic web
              applications.
            </p>

            <p>
              In <strong>ICTPRG546</strong>, students focus on validating
              application designs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
