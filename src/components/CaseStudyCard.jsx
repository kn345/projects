import { Link } from 'react-router-dom';

export default function CaseStudyCard({ slug, title, subtitle, description, methods, image }) {
  return (
    <Link to={`/work/${slug}`} className="work-card">
      {image ? (
        <img className="work-card-image" src={image} alt="" />
      ) : (
        <div className="work-card-image work-card-image--placeholder" />
      )}

      <h3 className="work-card-title">{title}</h3>
      <p className="work-card-desc">{description || subtitle}</p>

      <div className="pill-row" style={{ margin: '0 0 0.75rem' }}>
        {methods.map((m) => (
          <span className="tag-pill" key={m}>{m}</span>
        ))}
      </div>

      <span className="work-card-link">Read the case study →</span>
    </Link>
  );
}
