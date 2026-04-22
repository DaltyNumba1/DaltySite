import { useMemo, useState } from 'react';
import type { ComponentType } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Container from '@/components/layout/Container';
import PageHeader from '@/components/ui/PageHeader';
import Tag from '@/components/ui/Tag';
import AudioPlayer from '@/components/audio/AudioPlayer';
import { pieces } from '@/content/loader';
import type { Entry } from '@/content/loader';
import type { Piece, PieceOf } from '@/content/schema';
import { formatDate } from '@/lib/utils';

type Slide = { src: string; title: string; description?: string };

export default function Art() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const { slides, indexFor } = useMemo(() => {
    const acc: Slide[] = [];
    const map = new Map<string, number>();
    for (const piece of pieces) {
      if (piece.meta.kind !== 'photo') continue;
      piece.meta.images.forEach((src, i) => {
        map.set(`${piece.slug}:${i}`, acc.length);
        acc.push({ src, title: piece.meta.title, description: piece.meta.medium });
      });
    }
    return { slides: acc, indexFor: map };
  }, []);

  const openLightbox = (slug: string, imgIdx: number) => {
    const idx = indexFor.get(`${slug}:${imgIdx}`) ?? 0;
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <>
      <PageHeader title="Art." kicker="audio · video · photo" />
      <Container className="py-16">
        {pieces.length === 0 ? (
          <p className="font-mono text-ink/60">Nothing here yet.</p>
        ) : (
          <div className="flex flex-col gap-16">
            {pieces.map((piece, idx) => (
              <PieceCard
                key={piece.slug}
                piece={piece}
                index={idx}
                onOpenPhoto={openLightbox}
              />
            ))}
          </div>
        )}
      </Container>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />
    </>
  );
}

function PieceCard({
  piece,
  index,
  onOpenPhoto,
}: {
  piece: Entry<Piece>;
  index: number;
  onOpenPhoto: (slug: string, imgIdx: number) => void;
}) {
  const { meta, Content } = piece;
  return (
    <article className="brutal-card p-6 md:p-8">
      <header className="mb-6">
        <span className="font-mono text-xs uppercase text-ink/60">
          {String(index + 1).padStart(2, '0')} · {meta.kind} · {formatDate(meta.date)}
        </span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl tracking-brutal leading-none">
          {meta.title}
        </h2>
      </header>

      <div className="flex flex-col gap-4">
        {meta.kind === 'audio' && <AudioBody piece={piece as Entry<PieceOf<'audio'>>} />}
        {meta.kind === 'video' && <VideoBody piece={piece as Entry<PieceOf<'video'>>} />}
        {meta.kind === 'photo' && (
          <PhotoBody piece={piece as Entry<PieceOf<'photo'>>} onOpen={onOpenPhoto} />
        )}
        <MdxBody Content={Content} />
        {meta.href && (
          <a
            href={meta.href}
            rel="noreferrer"
            target="_blank"
            className="font-mono text-xs uppercase link-underline self-start"
          >
            view ↗
          </a>
        )}
      </div>
    </article>
  );
}

function AudioBody({ piece }: { piece: Entry<PieceOf<'audio'>> }) {
  const { meta } = piece;
  return (
    <>
      <AudioPlayer src={meta.audio} title={meta.title} />
      <dl className="font-mono text-xs flex flex-wrap gap-x-6 gap-y-1 text-ink/70">
        {meta.bpm && (
          <div>
            <span className="uppercase text-ink/60">BPM</span> · {meta.bpm}
          </div>
        )}
        {meta.duration && (
          <div>
            <span className="uppercase text-ink/60">Length</span> · {meta.duration}
          </div>
        )}
      </dl>
      {meta.genre.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {meta.genre.map((g) => (
            <Tag key={g} accent>
              {g}
            </Tag>
          ))}
        </div>
      )}
      {meta.links && (meta.links.bandcamp || meta.links.soundcloud) && (
        <div className="flex gap-4 font-mono text-xs uppercase">
          {meta.links.bandcamp && (
            <a href={meta.links.bandcamp} rel="noreferrer" className="link-underline">
              bandcamp ↗
            </a>
          )}
          {meta.links.soundcloud && (
            <a href={meta.links.soundcloud} rel="noreferrer" className="link-underline">
              soundcloud ↗
            </a>
          )}
        </div>
      )}
    </>
  );
}

function VideoBody({ piece }: { piece: Entry<PieceOf<'video'>> }) {
  const { meta } = piece;
  return (
    <>
      <VideoFrame src={meta.video} poster={meta.poster} title={meta.title} />
      {meta.duration && (
        <span className="font-mono text-xs uppercase text-ink/60">Length · {meta.duration}</span>
      )}
    </>
  );
}

function PhotoBody({
  piece,
  onOpen,
}: {
  piece: Entry<PieceOf<'photo'>>;
  onOpen: (slug: string, imgIdx: number) => void;
}) {
  const { meta } = piece;
  return (
    <>
      {meta.medium && (
        <div className="font-mono text-xs uppercase text-ink/60">{meta.medium}</div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {meta.images.map((src, ii) => (
          <button
            type="button"
            key={src}
            onClick={() => onOpen(piece.slug, ii)}
            className="group relative overflow-hidden border-3 border-rule bg-concrete aspect-square"
          >
            <img
              src={src}
              alt={`${meta.title} ${ii + 1}`}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </>
  );
}

function VideoFrame({ src, poster, title }: { src: string; poster?: string; title: string }) {
  const embed = toEmbedUrl(src);
  if (embed) {
    return (
      <div className="relative w-full aspect-video border-3 border-rule bg-ink">
        <iframe
          src={embed}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <video
      src={src}
      poster={poster}
      controls
      preload="metadata"
      className="w-full border-3 border-rule bg-ink aspect-video object-cover"
    />
  );
}

function toEmbedUrl(src: string): string | null {
  try {
    const url = new URL(src);
    const host = url.hostname.replace(/^www\./, '');
    if (host === 'youtube.com' || host === 'm.youtube.com') {
      const id = url.searchParams.get('v');
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (host === 'youtu.be') {
      const id = url.pathname.slice(1);
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (host === 'vimeo.com') {
      const id = url.pathname.slice(1).split('/')[0];
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
    return null;
  } catch {
    return null;
  }
}

function MdxBody({ Content }: { Content: ComponentType }) {
  return (
    <div className="prose-brutal text-sm">
      <Content />
    </div>
  );
}
