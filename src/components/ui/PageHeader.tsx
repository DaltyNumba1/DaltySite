import Container from '@/components/layout/Container';

export default function PageHeader({
  title,
  kicker,
}: {
  title: string;
  kicker?: string;
}) {
  return (
    <section className="pt-16 md:pt-24 pb-12 border-b-3 border-rule">
      <Container>
        <div className="grid grid-cols-4 md:grid-cols-12 gap-6 items-end">
          <h1 className="col-span-4 md:col-span-10 font-display text-huge tracking-brutal">
            {title}
          </h1>
          {kicker && (
            <p className="col-span-4 md:col-span-2 font-mono text-sm text-ink/60 md:text-right">
              {kicker}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
