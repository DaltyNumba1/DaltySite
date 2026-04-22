import type { ReactNode } from 'react';
import Container from '@/components/layout/Container';
import PageHeader from '@/components/ui/PageHeader';
import Tag from '@/components/ui/Tag';
import { summary, experience, education, skills } from '@/content/resume';
import type { Role, Education as EducationEntry } from '@/content/resume';

export default function Portfolio() {
  return (
    <>
      <PageHeader title="Resume." />
      <Container className="py-16">
        <section className="pb-16 border-b-3 border-rule">
          <p className="font-display text-2xl md:text-3xl leading-snug tracking-brutal">
            {summary}
          </p>
        </section>

        {experience.length > 0 && (
          <ResumeSection title="Experience">
            <div className="divide-y-3 divide-rule border-t-3 border-b-3 border-rule">
              {experience.map((role) => (
                <RoleRow key={`${role.company}-${role.title}-${role.start}`} role={role} />
              ))}
            </div>
          </ResumeSection>
        )}

        {education.length > 0 && (
          <ResumeSection title="Education">
            <div className="divide-y-3 divide-rule border-t-3 border-b-3 border-rule">
              {education.map((ed) => (
                <EducationRow key={`${ed.school}-${ed.degree}`} entry={ed} />
              ))}
            </div>
          </ResumeSection>
        )}

        {skills.length > 0 && (
          <ResumeSection title="Skills">
            <div className="divide-y-3 divide-rule border-t-3 border-b-3 border-rule">
              {skills.map((group) => (
                <div
                  key={group.label}
                  className="py-6 grid grid-cols-4 md:grid-cols-12 gap-6 items-baseline"
                >
                  <span className="col-span-1 md:col-span-3 font-mono text-xs uppercase text-ink/60">
                    {group.label}
                  </span>
                  <div className="col-span-3 md:col-span-9 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ResumeSection>
        )}
      </Container>
    </>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="pt-16 pb-4">
      <h2 className="mb-8 font-display text-5xl md:text-6xl tracking-brutal leading-none">
        {title}
      </h2>
      {children}
    </section>
  );
}

function RoleRow({ role }: { role: Role }) {
  return (
    <div className="py-8 grid grid-cols-4 md:grid-cols-12 gap-6">
      <div className="col-span-4 md:col-span-3 font-mono text-xs uppercase tracking-wider text-ink/70">
        <div className="text-ink">
          {role.start} — {role.end}
        </div>
        <div className="mt-1 text-ink/60">
          {role.company}
          {role.location && <> · {role.location}</>}
        </div>
      </div>
      <div className="col-span-4 md:col-span-9">
        <h3 className="font-display text-2xl md:text-3xl tracking-brutal leading-tight">
          {role.title}
        </h3>
        {role.bullets.length > 0 && (
          <ul className="mt-4 space-y-2 list-disc pl-5 text-ink/85 max-w-prose">
            {role.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function EducationRow({ entry }: { entry: EducationEntry }) {
  return (
    <div className="py-8 grid grid-cols-4 md:grid-cols-12 gap-6">
      <div className="col-span-4 md:col-span-3 font-mono text-xs uppercase tracking-wider text-ink/70">
        <div className="text-ink">
          {entry.start} — {entry.end}
        </div>
        <div className="mt-1 text-ink/60">
          {entry.school}
          {entry.location && <> · {entry.location}</>}
        </div>
      </div>
      <div className="col-span-4 md:col-span-9">
        <h3 className="font-display text-2xl md:text-3xl tracking-brutal leading-tight">
          {entry.degree}
        </h3>
        {entry.details && entry.details.length > 0 && (
          <ul className="mt-4 space-y-2 list-disc pl-5 text-ink/85 max-w-prose">
            {entry.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
