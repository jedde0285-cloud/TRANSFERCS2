'use client'

import Image from 'next/image'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { teams } from '@/lib/data'
import type { View } from '@/lib/views'

const DELTAS = [3.2, 1.4, -0.8, 2.1, 5.6]

export function Top5Panel({ setView }: { setView: (v: View) => void }) {
  const { t } = useLang()
  const top5 = teams.slice(0, 5)

  return (
    <div className="relative w-full max-w-sm">
      {/* trophy — tilted, tucked to the left edge */}
      <button
        type="button"
        onClick={() => setView('teams')}
        aria-label={t('nav.teams')}
        className="absolute -left-8 -bottom-6 z-20 -rotate-12 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] transition-transform hover:-rotate-6"
      >
        <Image src="/images/trophy.webp" alt="Кубок турнира" width={72} height={72} className="h-16 w-16 object-contain" />
      </button>

      {/* MVP medal — tucked to the right edge */}
      <button
        type="button"
        onClick={() => setView('players')}
        aria-label={t('nav.players')}
        className="absolute -right-8 -bottom-7 z-20 rotate-12 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] transition-transform hover:rotate-6"
      >
        <Image src="/images/mvp.webp" alt="MVP турнира" width={68} height={68} className="h-14 w-14 object-contain" />
      </button>

      <div className="panel-border relative rounded-2xl bg-panel/80 p-5 backdrop-blur-md">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-lg font-700 tracking-wide">{t('top5.title')}</h2>
          <span className="rounded-md bg-primary/15 px-2 py-1 text-[11px] font-600 text-primary">
            {t('top5.date')}
          </span>
        </div>

        <ul className="flex flex-col gap-1">
          {top5.map((team, i) => {
            const delta = DELTAS[i]
            const up = delta >= 0
            return (
              <li key={team.name}>
                <button
                  type="button"
                  onClick={() => setView('teams')}
                  className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors hover:bg-white/[0.04]"
                >
                  <span
                    className={`flex size-6 shrink-0 items-center justify-center rounded-md text-xs font-700 ${
                      i === 0 ? 'bg-primary text-primary-foreground' : 'bg-white/[0.06] text-muted-foreground'
                    }`}
                  >
                    {team.rank}
                  </span>
                  <span className="flex-1 truncate text-sm font-600">{team.name}</span>
                  <span className="text-sm font-700 tabular-nums">{team.total}</span>
                  <span
                    className={`flex w-14 items-center justify-end gap-0.5 text-xs font-600 tabular-nums ${
                      up ? 'text-success' : 'text-destructive'
                    }`}
                  >
                    {up ? <TrendingUp className="size-3.5" /> : <TrendingDown className="size-3.5" />}
                    {Math.abs(delta)}%
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
