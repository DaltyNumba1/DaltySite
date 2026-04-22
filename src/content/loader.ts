import type { ComponentType } from 'react';
import type { ZodTypeAny, z } from 'zod';
import { projectSchema, pieceSchema } from './schema';
import type { ProjectMeta, Piece } from './schema';

type MdxModule = {
  default: ComponentType;
  frontmatter?: Record<string, unknown>;
};

export type Entry<T> = {
  slug: string;
  meta: T;
  Content: ComponentType;
};

function slugFromPath(filePath: string): string {
  const file = filePath.split('/').pop() ?? filePath;
  return file.replace(/\.mdx?$/, '');
}

function loadCollection<S extends ZodTypeAny>(
  modules: Record<string, MdxModule>,
  schema: S,
  kind: string,
): Entry<z.infer<S>>[] {
  const entries: Entry<z.infer<S>>[] = [];
  for (const [path, mod] of Object.entries(modules)) {
    const raw = mod.frontmatter ?? {};
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const issues = parsed.error.issues
        .map((i) => `${i.path.join('.')}: ${i.message}`)
        .join('; ');
      throw new Error(`[${kind}] Invalid frontmatter in ${path} — ${issues}`);
    }
    entries.push({
      slug: slugFromPath(path),
      meta: parsed.data,
      Content: mod.default,
    });
  }
  return entries;
}

const byDateDesc = (a: { meta: { date: string } }, b: { meta: { date: string } }) =>
  Date.parse(b.meta.date) - Date.parse(a.meta.date);

const projectModules = import.meta.glob<MdxModule>('/content/projects/*.mdx', { eager: true });
const pieceModules = import.meta.glob<MdxModule>('/content/pieces/*.mdx', { eager: true });

export const projects: Entry<ProjectMeta>[] = loadCollection(
  projectModules,
  projectSchema,
  'projects',
).sort((a, b) => {
  const ao = a.meta.order ?? Number.POSITIVE_INFINITY;
  const bo = b.meta.order ?? Number.POSITIVE_INFINITY;
  if (ao !== bo) return ao - bo;
  return byDateDesc(a, b);
});

export const pieces: Entry<Piece>[] = loadCollection(pieceModules, pieceSchema, 'pieces').sort(
  byDateDesc,
);

export function findProject(slug: string): Entry<ProjectMeta> | undefined {
  return projects.find((p) => p.slug === slug);
}
