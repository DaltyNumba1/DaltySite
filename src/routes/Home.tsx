import { Link } from 'react-router-dom';
import Container from '@/components/layout/Container';
import Tag from '@/components/ui/Tag';
import { projects } from '@/content/loader';
import { formatDate } from '@/lib/utils';

export default function Home() {
  const featured = projects.filter((p) => p.meta.featured).slice(0, 3);

  return (
    <>
      <section className="pt-20 md:pt-32 pb-24 border-b-3 border-rule overflow-hidden">
        <Container>
          <div className="grid grid-cols-4 md:grid-cols-12 gap-6 items-end">
            <h1 className="col-span-4 md:col-span-8 font-display text-mega tracking-brutal self-start">
              Dalton
              <br />
              Lauerman<span className="text-accent">.</span>
            </h1>
            <figure className="col-span-4 md:col-span-4 md:col-start-9 md:row-span-2 md:-mt-6 relative group">
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-accent transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
              <img
                src="/me/me.jpeg"
                alt="Dalton Lauerman"
                className="relative w-full aspect-[4/5] object-cover border-3 border-rule"
              />
            </figure>
            <div className="col-span-4 md:col-span-8 mt-6">
              <p className="font-display text-2xl md:text-3xl leading-tight tracking-brutal">
                Software developer and IT Professional
              </p>
            </div>
            <div className="col-span-4 md:col-span-4 mt-6 flex items-end">
              <Link
                to="/portfolio"
                className="font-mono text-sm uppercase tracking-wider border-3 border-rule px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
              >
                See the work →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {featured.length > 0 && (
        <section className="py-20 border-b-3 border-rule">
          <Container>
            <div className="mb-12">
              <h2 className="font-display text-huge tracking-brutal">Selected work</h2>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
              {featured.map((p, idx) => (
                <Link
                  to={`/portfolio/${p.slug}`}
                  key={p.slug}
                  className={`col-span-4 md:col-span-6 brutal-card p-6 flex flex-col gap-4 ${
                    idx === 0 ? 'md:col-span-8' : ''
                  }`}
                >
                  <span className="font-mono text-xs uppercase text-ink/60">
                    {formatDate(p.meta.date)}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl tracking-brutal leading-none">
                    {p.meta.title}
                  </h3>
                  <p className="text-ink/80">{p.meta.summary}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.meta.stack.slice(0, 4).map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-20">
        <Container>
          <div>
            <Link
              to="/art"
              className="brutal-card p-10 md:p-12 bg-ink text-paper hover:bg-accent transition-colors flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            >
              <div>
                <span className="font-mono text-xs uppercase opacity-60">
                  Photos · Renders · Video · Sketches · Noise
                </span>
                <h3 className="font-display text-6xl md:text-7xl tracking-brutal mt-4 leading-none">
                  Art →
                </h3>
              </div>
              <p className="md:max-w-sm md:text-right opacity-80">
                View my creative side
              </p>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
