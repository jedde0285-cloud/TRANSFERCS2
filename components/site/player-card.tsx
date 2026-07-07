'use client'

import Image from 'next/image'
import { TrendingUp } from 'lucide-react'
import type { View } from '@/lib/views'

export function FlamezCard({ setView }: { setView: (v: View) => void }) {
  return (
    <button
      type="button"
      onClick={() => setView('players')}
      className="group relative block w-full overflow-hidden rounded-3xl text-left"
      aria-label="flameZ — открыть игроков"
    >
      {/* photo area */}
      <div className="relative flex h-[360px] items-end justify-center overflow-hidden bg-gradient-to-b from-white/[0.05] via-panel to-panel md:h-[440px]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-primary/10 blur-3xl" />
        <Image
          src="/images/flamez.webp"
          alt="flameZ — игрок Team Vitality"
          width={440}
          height={520}
          priority
          className="relative z-10 h-full w-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
        />
      </div>

      {/* info bar */}
      <div className="relative z-20 -mt-6 rounded-t-3xl border-t border-border bg-panel/95 px-6 pb-4 pt-5 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-primary" />
              <span className="font-display text-2xl font-700 tracking-wide">flameZ</span>
            </div>
            <p className="mt-1 text-xs font-600 uppercase tracking-widest text-muted-foreground">
              Team Vitality · Rifler · 23
            </p>
          </div>
          <div className="text-right">
            <div className="font-display text-2xl font-700 text-primary neon-text">$2 400 000</div>
            <div className="mt-1 flex items-center justify-end gap-1 text-xs font-600 text-success">
              <TrendingUp className="size-3.5" />
              +14.2%
            </div>
          </div>
        </div>
      </div>

      {/* extended bottom with the site name */}
      <div className="relative z-20 flex items-center justify-center gap-2 border-t border-border/60 bg-background/80 py-3">
        <span className="font-display text-sm font-600 uppercase tracking-[0.35em] text-muted-foreground">
          Transfer<span className="text-primary">CS</span>
        </span>
      </div>
    </button>
  )
}
