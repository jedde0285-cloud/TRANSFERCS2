'use client'

import { useState } from 'react'
import { ChevronDown, Shield, Trophy, TrendingUp } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { teams } from '@/lib/data'

export function TeamsSection() {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(1)

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* list — slightly left of center */}
        <div className="lg:col-span-8">
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-display text-3xl font-700 uppercase tracking-tight neon-white md:text-4xl">
                {t('teams.title')}
              </h1>
              <StatusBadge active t={t} />
            </div>
            <p className="mt-1 text-sm font-600 text-muted-foreground">{t('teams.period')}</p>
            <p className="mt-2 text-xs text-muted-foreground">{t('teams.hint')}</p>
          </div>

          <ul className="flex flex-col gap-2">
            {teams.map((team) => {
              const isOpen = open === team.rank
              return (
                <li key={team.rank} className="panel-border overflow-hidden rounded-xl bg-panel/70 backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : team.rank)}
                    className="flex w-full items-center gap-3 px-3 py-3 text-left transition-colors hover:bg-white/[0.03] md:px-4"
                  >
                    <span className="font-display text-3xl font-700 tabular-nums text-primary md:text-4xl">
                      {team.rank}
                    </span>
                    {/* logo placeholder */}
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-white/[0.04] text-[9px] font-600 text-muted-foreground">
                      {t('teams.logo')}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="font-display text-lg font-700 leading-tight">{team.name}</div>
                      <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] text-muted-foreground md:text-xs">
                        <span>
                          {t('teams.region')}: <span className="font-600 text-foreground">{team.region}</span>
                        </span>
                        <span className="hidden text-border sm:inline">|</span>
                        <span>
                          {t('teams.avg')}: <span className="font-600 text-foreground">{team.avg}</span>
                        </span>
                        <span className="hidden text-border sm:inline">|</span>
                        <span>
                          {t('teams.total')}: <span className="font-700 text-primary">{team.total}</span>
                        </span>
                      </div>
                      {/* roster nicknames in one row */}
                      <div className="mt-1.5 flex flex-wrap gap-x-2 gap-y-0.5 text-[11px] text-muted-foreground">
                        {team.roster.map((p) => (
                          <span key={p.nick}>{p.nick}</span>
                        ))}
                      </div>
                    </div>
                    <ChevronDown
                      className={`size-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-border/60 bg-black/20 px-3 py-3 md:px-4">
                      <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
                        {team.roster.map((p) => (
                          <li
                            key={p.nick}
                            className="flex items-center justify-between rounded-lg border border-border bg-white/[0.03] px-3 py-2"
                          >
                            <span className="flex items-center gap-2 text-sm font-600">
                              <span className="size-5 rounded bg-white/[0.06]" aria-hidden />
                              {p.nick}
                            </span>
                            <span className="font-display text-sm font-700 text-primary tabular-nums">{p.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        {/* right decorative rail */}
        <aside className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-24 space-y-4">
            <div className="panel-border rounded-2xl bg-panel/70 p-6 text-center backdrop-blur-md">
              <Trophy className="mx-auto size-10 text-primary" />
              <div className="mt-3 font-display text-2xl font-700">{teams[0].name}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">#1 {t('teams.title')}</div>
              <div className="mt-4 font-display text-3xl font-700 text-primary neon-text">{teams[0].total}</div>
            </div>
            <div className="panel-border grid grid-cols-2 gap-3 rounded-2xl bg-panel/70 p-5 backdrop-blur-md">
              <Metric icon={<Shield className="size-5 text-primary" />} value="30" label={t('nav.teams')} />
              <Metric icon={<TrendingUp className="size-5 text-success" />} value="+18%" label="H1 2026" />
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

function StatusBadge({ active, t }: { active: boolean; t: (k: string) => string }) {
  return (
    <span className="flex items-center gap-2 rounded-full border border-border bg-panel/60 px-3 py-1 text-xs font-600 uppercase tracking-wide">
      <span className={`size-2 rounded-full pulse-dot ${active ? 'bg-success' : 'bg-muted-foreground'}`} />
      {active ? t('teams.active') : t('teams.outdated')}
    </span>
  )
}

function Metric({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-white/[0.03] p-3 text-center">
      <div className="flex justify-center">{icon}</div>
      <div className="mt-1 font-display text-xl font-700">{value}</div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  )
}
