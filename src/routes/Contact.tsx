import Container from '@/components/layout/Container';
import PageHeader from '@/components/ui/PageHeader';

const links = [
  { label: 'Email', href: 'mailto:daltonlauerman@gmail.com', value: 'daltonlauerman@gmail.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com', value: 'in/dalton-lauerman' },
];

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact." />
      <Container className="py-16">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
          <div className="col-span-4 md:col-span-8 md:col-start-3">
            <p className="font-display text-3xl md:text-4xl tracking-brutal leading-snug max-w-prose">
              Lets Connect!
            </p>
            <dl className="mt-12 divide-y-3 divide-rule border-t-3 border-b-3 border-rule">
              {links.map((l) => (
                <a
                  href={l.href}
                  key={l.label}
                  rel="noreferrer"
                  className="py-5 grid grid-cols-4 md:grid-cols-12 gap-4 items-baseline hover:bg-concrete/40 transition-colors"
                >
                  <dt className="col-span-1 md:col-span-3 font-mono text-xs uppercase text-ink/60">
                    {l.label}
                  </dt>
                  <dd className="col-span-3 md:col-span-8 font-display text-2xl md:text-3xl tracking-brutal">
                    {l.value}
                  </dd>
                  <span className="col-span-4 md:col-span-1 md:text-right font-mono text-sm">
                    ↗
                  </span>
                </a>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </>
  );
}
