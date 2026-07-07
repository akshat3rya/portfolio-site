export default function Section({ title, children }) {
    return (
      <section className="case-section">
        <h2>{title}</h2>
  
        <div className="case-content">
          {children}
        </div>
      </section>
    );
  }