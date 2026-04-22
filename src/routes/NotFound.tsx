import { Link } from 'react-router-dom';
import Container from '@/components/layout/Container';

export default function NotFound() {
  return (
    <Container className="py-32">
      <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
        <div className="col-span-4 md:col-span-8 md:col-start-3">
          <span className="font-mono text-sm uppercase text-ink/60">Error · 404</span>
          <h1 className="mt-4 font-display text-mega tracking-brutal leading-none">
            Not<span className="text-accent">.</span>
            <br />
            Found.
          </h1>
          <p className="mt-8 text-xl max-w-prose">
            This page either doesn't exist or got refactored out of existence.
          </p>
          <Link
            to="/"
            className="mt-10 inline-block font-mono text-sm uppercase tracking-wider border-3 border-rule px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
          >
            ← Home
          </Link>
        </div>
      </div>
    </Container>
  );
}
