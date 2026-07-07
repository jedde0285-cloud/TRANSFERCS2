'use client'

import { TrendingUp, TrendingDown, User, Flag, Sparkles } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { players } from '@/lib/data'

export function PlayersSection() {
  const { t } = useLang()

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* list — slightly left of center */}
        <div className="lg:col-span-8">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <h1 className="font-display text-3xl font-700 uppercase tracking-tight neon-white md:text-4xl">
              {t('players.title')}
            </h1>
            <span className="flex items-center gap-2 rounded-full border border-border bg-panel/60 px-3 py-1 text-xs font-600 uppercase tracking-wide">
              <span className="size-2 rounded-full bg-success pulse-dot" />
              {t('teams.active')}
            </span>
          </div>

          <ul className="flex flex-col gap-2">
            {players.map((p) => {
              const up = p.dynamics >= 0
              return (
                <li
                  key={p.nick}
                  className="panel-border flex items-center gap-3 rounded-xl bg-panel/70 px-3 py-3 backdrop-blur-md transition-colors hover:bg-white/[0.04] md:px-4"
                >
                  <span className="w-7 shrink-0 text-center font-display text-xl font-700 tabular-nums text-primary md:text-2xl">
                    {p.rank}
                  </span>
                  {/* team logo placeholder */}
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-white/[0.04] text-muted-foreground">
                    <User className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      {/* flag placeholder */}
                      <span className="flex h-4 w-6 shrink-0 items-center justify-center rounded-[3px] border border-border bg-white/[0.05]">
                        <Flag className="size-2.5 text-muted-foreground" />
                      </span>
                      <span className="font-display text-lg font-700 leading-tight">{p.nick}</span>
                      <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-600 text-muted-foreground">
                        {p.team}
                      </span>
                    </div>
                    <div className="mt-0.5 flex flex-wrap items-center gap-x-3 text-[11px] text-muted-foreground md:text-xs">
                      <span>
                        {t('players.rating')}: <span className="font-600 text-foreground">{p.rating.toFixed(2)}</span>
                      </span>
                      <span>
                        {t('players.age')}: <span className="font-600 text-foreground">{p.age}</span>
                      </span>
                      <span>
                        {t('players.role')}: <span className="font-600 text-foreground">{p.role}</span>
                      </span>
                    </div>
                  </div>
                  {/* full price | dynamics */}
                  <div className="flex shrink-0 items-center gap-2.5">
                    <span className="font-display text-base font-700 text-primary tabular-nums md:text-lg">
                      {p.price}
                    </span>
                    <span className="text-border">|</span>
                    <span
                      className={`flex w-16 items-center justify-end gap-1 text-xs font-600 tabular-nums ${
                        up ? 'text-success' : 'text-destructive'
                      }`}
                    >
                      {up ? <TrendingUp className="size-3.5" /> : <TrendingDown className="size-3.5" />}
                      {up ? '+' : ''}
                      {p.dynamics}%
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        {/* right decorative rail — different from teams */}
        <aside className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-24 space-y-4">
            <div className="panel-border rounded-2xl bg-gradient-to-b from-primary/15 to-panel/70 p-6 backdrop-blur-md">
              <Sparkles className="size-8 text-primary" />
              <div className="mt-3 font-display text-2xl font-700 uppercase leading-tight">
                {players[0].nick}
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                #1 · {players[0].team}
              </div>
              <div className="mt-4 font-display text-3xl font-700 text-primary neon-text">{players[0].price}</div>
              <div className="mt-1 flex items-center gap-1 text-sm font-600 text-success">
                <TrendingUp className="size-4" />
                {t('players.dynamics')}
              </div>
            </div>

            <div className="panel-border space-y-3 rounded-2xl bg-panel/70 p-6 backdrop-blur-md">
              {[
                { r: 'AWP', v: '12%' },
                { r: 'Rifler', v: '9%' },
                { r: 'IGL', v: '4%' },
              ].map((row) => (
                <div key={row.r}>
                  <div className="mb-1 flex items-center justify-between text-xs font-600">
                    <span>{row.r}</span>
                    <span className="text-primary">{row.v}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                    <div className="h-full rounded-full bg-primary" style={{ width: row.v }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
