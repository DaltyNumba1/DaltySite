import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

type Props = {
  src: string;
  title?: string;
};

function format(seconds: number): string {
  if (!Number.isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function AudioPlayer({ src, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const ws = WaveSurfer.create({
      container: containerRef.current,
      waveColor: '#1a1a1a',
      progressColor: '#ff3b00',
      cursorColor: '#0a0a0a',
      barWidth: 2,
      barGap: 2,
      barRadius: 0,
      height: 72,
      normalize: true,
      url: src,
    });
    waveRef.current = ws;
    const onReady = () => {
      setDuration(ws.getDuration());
      setReady(true);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onFinish = () => setIsPlaying(false);
    const onTime = (t: number) => setCurrent(t);
    ws.on('ready', onReady);
    ws.on('play', onPlay);
    ws.on('pause', onPause);
    ws.on('finish', onFinish);
    ws.on('timeupdate', onTime);
    return () => {
      ws.destroy();
      waveRef.current = null;
    };
  }, [src]);

  const toggle = () => waveRef.current?.playPause();

  return (
    <div className="border-3 border-rule bg-paper">
      <div className="flex items-center gap-4 p-3 border-b-3 border-rule">
        <button
          type="button"
          onClick={toggle}
          disabled={!ready}
          aria-label={isPlaying ? 'Pause' : 'Play'}
          className="flex items-center justify-center w-12 h-12 border-3 border-rule bg-ink text-paper hover:bg-accent transition-colors disabled:opacity-40"
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <rect x="6" y="5" width="4" height="14" />
              <rect x="14" y="5" width="4" height="14" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <polygon points="6,4 20,12 6,20" />
            </svg>
          )}
        </button>
        <div className="flex-1 min-w-0">
          {title && (
            <div className="font-mono text-xs uppercase tracking-wider truncate">{title}</div>
          )}
          <div className="font-mono text-xs text-ink/60 tabular-nums">
            {format(current)} / {format(duration)}
          </div>
        </div>
      </div>
      <div ref={containerRef} className="px-3 py-2" />
    </div>
  );
}
