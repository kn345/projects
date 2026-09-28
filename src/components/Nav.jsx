import { Link, useLocation } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { RESUME_URL } from '../data/links';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
];

const navLinkStyle = (isActive) => ({
  fontSize: 'var(--fs-small)',
  letterSpacing: '0.02em',
  color: isActive ? 'var(--color-sage-dark)' : 'var(--color-text)',
  textDecoration: 'none',
  fontWeight: isActive ? 600 : 400,
});

export default function Nav() {
  const location = useLocation();
  const onWorkPage = location.pathname.startsWith('/work/');

  return (
    <header style={{ borderBottom: '1px solid var(--color-border)' }}>
      <nav
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.25rem var(--space-md)',
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.25rem',
            color: 'var(--color-text)',
            textDecoration: 'none',
          }}
        >
          Kayda Norman
        </Link>
        <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
          <Link to={links[0].to} style={navLinkStyle(location.pathname === links[0].to)}>
            {links[0].label}
          </Link>

          <details style={{ position: 'relative' }}>
            <summary
              style={{
                ...navLinkStyle(onWorkPage),
                cursor: 'pointer',
                listStyle: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              Work
              <span style={{ fontSize: '0.7em' }}>▾</span>
            </summary>
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 0.75rem)',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                padding: '0.5rem',
                minWidth: '220px',
                zIndex: 20,
              }}
            >
              {caseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  to={`/work/${cs.slug}`}
                  style={{
                    display: 'block',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '6px',
                    fontSize: 'var(--fs-small)',
                    color:
                      location.pathname === `/work/${cs.slug}`
                        ? 'var(--color-sage-dark)'
                        : 'var(--color-text)',
                    fontWeight: location.pathname === `/work/${cs.slug}` ? 600 : 400,
                    textDecoration: 'none',
                  }}
                >
                  {cs.title}
                </Link>
              ))}
            </div>
          </details>

          <Link to={links[1].to} style={navLinkStyle(location.pathname === links[1].to)}>
            {links[1].label}
          </Link>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            style={navLinkStyle(false)}
          >
            Résumé
          </a>
        </div>
      </nav>
    </header>
  );
}
