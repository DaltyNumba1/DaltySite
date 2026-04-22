import { Link, useParams } from 'react-router-dom';
import Container from '@/components/layout/Container';
import Tag from '@/components/ui/Tag';
import { findProject } from '@/content/loader';
import { formatDate } from '@/lib/utils';
import NotFound from './NotFound';

export default function ProjectPage() {
  const { slug } = useParams();
  const entry = slug ? findProject(slug) : undefined;
  if (!entry) return <NotFound />;
  const { meta, Content } = entry;

  return (
    <>
      <section className="pt-16 md:pt-24 pb-12 border-b-3 border-rule">
        <Container>
          <Link to="/portfolio" className="font-mono text-xs uppercase text-ink/60 hover:text-accent">
            ← Back to work
          </Link>
          <div className="grid grid-cols-4 md:grid-cols-12 gap-6 mt-6">
            <h1 className="col-span-4 md:col-span-10 font-display text-huge tracking-brutal">
              {meta.title}
            </h1>
            <div className="col-span-4 md:col-span-2 flex md:justify-end">
              <span className="font-mono text-xs uppercase text-ink/60">
                {formatDate(meta.date)}
              </span>
            </div>
            <p className="col-span-4 md:col-span-8 text-xl md:text-2xl text-ink/80 font-display tracking-brutal leading-snug">
              {meta.summary}
            </p>
            <dl className="col-span-4 md:col-span-4 font-mono text-sm grid grid-cols-2 gap-y-3 gap-x-4">
              <dt className="uppercase text-ink/60">Role</dt>
              <dd>{meta.role}</dd>
              <dt className="uppercase text-ink/60">Stack</dt>
              <dd className="flex flex-wrap gap-1">
                {meta.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </dd>
              {meta.links?.live && (
                <>
                  <dt className="uppercase text-ink/60">Live</dt>
                  <dd>
                    <a href={meta.links.live} className="link-underline" rel="noreferrer">
                      visit ↗
                    </a>
                  </dd>
                </>
              )}
              {meta.links?.repo && (
                <>
                  <dt className="uppercase text-ink/60">Repo</dt>
                  <dd>
                    <a href={meta.links.repo} className="link-underline" rel="noreferrer">
                      github ↗
                    </a>
                  </dd>
                </>
              )}
            </dl>
          </div>
        </Container>
      </section>
      <Container className="py-16">
        <article className="prose-brutal mx-auto">
          <Content />
        </article>
      </Container>
    </>
  );
}
