import { z } from 'zod';

const isoDate = z
  .string()
  .refine((v) => !Number.isNaN(Date.parse(v)), { message: 'Invalid ISO date' });

export const projectSchema = z.object({
  title: z.string().min(1),
  date: isoDate,
  role: z.string().min(1),
  stack: z.array(z.string()).default([]),
  summary: z.string().min(1),
  links: z
    .object({
      live: z.string().url().optional(),
      repo: z.string().url().optional(),
      caseStudy: z.string().url().optional(),
    })
    .optional(),
  cover: z.string().optional(),
  featured: z.boolean().optional().default(false),
  order: z.number().optional(),
});

const baseFields = {
  title: z.string().min(1),
  date: isoDate,
  summary: z.string().optional(),
  href: z.string().url().optional(),
};

const audioPiece = z.object({
  ...baseFields,
  kind: z.literal('audio'),
  audio: z.string().min(1),
  duration: z.string().optional(),
  bpm: z.number().optional(),
  genre: z.array(z.string()).default([]),
  cover: z.string().optional(),
  links: z
    .object({
      bandcamp: z.string().url().optional(),
      soundcloud: z.string().url().optional(),
    })
    .optional(),
});

const videoPiece = z.object({
  ...baseFields,
  kind: z.literal('video'),
  video: z.string().min(1),
  poster: z.string().optional(),
  duration: z.string().optional(),
});

const photoPiece = z.object({
  ...baseFields,
  kind: z.literal('photo'),
  images: z.array(z.string()).min(1),
  medium: z.string().optional(),
});

export const pieceSchema = z.discriminatedUnion('kind', [audioPiece, videoPiece, photoPiece]);

export type ProjectMeta = z.infer<typeof projectSchema>;
export type Piece = z.infer<typeof pieceSchema>;
export type PieceKind = Piece['kind'];
export type PieceOf<K extends PieceKind> = Extract<Piece, { kind: K }>;
