import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function Tag({
  children,
  className,
  accent = false,
}: {
  children: ReactNode;
  className?: string;
  accent?: boolean;
}) {
  return (
    <span
      className={cn(
        'inline-block font-mono text-xs uppercase tracking-wider px-2 py-1 border',
        accent ? 'border-accent text-accent' : 'border-rule text-ink',
        className,
      )}
    >
      {children}
    </span>
  );
}
