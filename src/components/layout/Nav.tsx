import { NavLink, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { resumePdf } from '@/content/resume';

const links = [
  { to: '/portfolio', label: 'Work' },
  { to: '/art', label: 'Art' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b-3 border-rule">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-bold tracking-brutal text-xl hover:text-accent transition-colors"
        >
          DALTON{' '}
          <span className="text-accent">//</span>{' '}
          LAUERMAN
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'font-mono text-sm uppercase tracking-wider transition-colors',
                  isActive ? 'text-accent' : 'text-ink hover:text-accent',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={resumePdf}
            download
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider border-3 border-rule px-3 py-1.5 hover:bg-ink hover:text-paper transition-colors"
          >
            Download Resume <span className="text-accent">↓</span>
          </a>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <details className="md:hidden relative">
      <summary className="list-none cursor-pointer font-mono text-sm uppercase tracking-wider">
        Menu
      </summary>
      <div className="absolute right-0 top-10 bg-paper border-3 border-rule p-4 w-48 flex flex-col gap-3">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="font-mono text-sm uppercase tracking-wider hover:text-accent"
          >
            {link.label}
          </NavLink>
        ))}
        <a
          href={resumePdf}
          download
          className="mt-1 pt-3 border-t-3 border-rule font-mono text-sm uppercase tracking-wider hover:text-accent inline-flex items-center gap-2"
        >
          Resume <span className="text-accent">↓</span>
        </a>
      </div>
    </details>
  );
}
