'use client'

import { Calculator, ArrowRight, TrendingUp } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import type { View } from '@/lib/views'
import { Top5Panel } from '@/components/site/top5-panel'
import { FlamezCard } from '@/components/site/player-card'

export function HomeSection({ setView }: { setView: (v: View) => void }) {
  const { t } = useLang()

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
        {/* left: top-5 panel */}
        <div className="flex justify-center lg:col-span-4 lg:justify-start lg:pt-4 lg:pl-8">
          <Top5Panel setView={setView} />
        </div>

        {/* center: hero copy */}
        <div className="flex flex-col items-center text-center lg:col-span-4 lg:items-start lg:text-left">
          <h1 className="font-display text-5xl font-700 uppercase leading-[0.92] tracking-tight text-balance md:text-6xl">
            <span className="block neon-white">{t('hero.line1')}</span>
            <span className="block neon-white">{t('hero.line2')}</span>
            <span className="block text-primary neon-text">{t('hero.line3')}</span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">{t('hero.desc')}</p>

          {/* season progress — clickable, leads to an article */}
          <button
            type="button"
            onClick={() => setView('season')}
            className="mt-6 flex items-center gap-3 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2.5 text-left transition-colors hover:bg-primary/20"
          >
            <TrendingUp className="size-5 text-primary" />
            <span>
              <span className="block font-display text-sm font-700 uppercase tracking-wide text-primary">
                {t('hero.season')}
              </span>
              <span className="block text-xs text-muted-foreground">{t('hero.seasonSub')}</span>
            </span>
            <ArrowRight className="size-4 text-primary" />
          </button>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <button
              type="button"
              onClick={() => setView('eval')}
              className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-display text-sm font-700 uppercase tracking-wide text-primary-foreground shadow-[0_0_30px_rgba(255,120,20,0.4)] transition-transform hover:scale-[1.03]"
            >
              <Calculator className="size-4" />
              {t('hero.calc')}
              <ArrowRight className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => setView('players')}
              className="rounded-xl border border-border bg-panel/60 px-6 py-3.5 font-display text-sm font-700 uppercase tracking-wide transition-colors hover:bg-panel"
            >
              {t('hero.all')}
            </button>
          </div>

          {/* stats */}
          <div className="mt-10 flex items-start gap-8">
            <div>
              <div className="font-display text-3xl font-700 text-primary">150+</div>
              <div className="text-xs font-600 uppercase tracking-widest text-muted-foreground">{t('hero.stat1')}</div>
            </div>
            <div>
              <div className="font-display text-3xl font-700 text-primary">30+</div>
              <div className="text-xs font-600 uppercase tracking-widest text-muted-foreground">{t('hero.stat2')}</div>
            </div>
            <div>
              <div className="font-display text-2xl font-700">{t('hero.tech')}</div>
              <div className="max-w-[9rem] text-xs font-600 uppercase leading-tight tracking-widest text-muted-foreground">
                {t('hero.techSub')}
              </div>
            </div>
          </div>
        </div>

        {/* right: player card */}
        <div className="mx-auto w-full max-w-sm lg:col-span-4">
          <FlamezCard setView={setView} />
        </div>
      </div>
    </section>
  )
}
