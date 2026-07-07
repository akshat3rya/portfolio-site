export default function Section({ title, children, bordered = false }) {
    return (
      <section className={`case-section ${bordered ? "bordered-section" : ""}`}>
        <h2>{title}</h2>
  
        <div className="case-content">
          {children}
        </div>
      </section>
    );
  }