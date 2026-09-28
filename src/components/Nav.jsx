import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/current-work', label: 'Current Work' },
  { to: '/about', label: 'About' },
];

export default function Nav() {
  const location = useLocation();
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
        <div style={{ display: 'flex', gap: '1.75rem' }}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontSize: 'var(--fs-small)',
                letterSpacing: '0.02em',
                color:
                  location.pathname === l.to
                    ? 'var(--color-sage-dark)'
                    : 'var(--color-text)',
                textDecoration: 'none',
                fontWeight: location.pathname === l.to ? 600 : 400,
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
