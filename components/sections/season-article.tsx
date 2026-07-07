'use client'

import { ArrowLeft, TrendingUp } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import type { View } from '@/lib/views'

export function SeasonArticle({ setView }: { setView: (v: View) => void }) {
  const { t } = useLang()
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 md:py-14">
      <button
        type="button"
        onClick={() => setView('home')}
        className="mb-6 flex items-center gap-2 text-sm font-600 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        {t('season.back')}
      </button>

      <div className="flex items-center gap-2 text-[11px] font-700 uppercase tracking-widest text-primary">
        <TrendingUp className="size-4" />
        {t('season.tag')}
      </div>
      <h1 className="mt-3 font-display text-3xl font-700 leading-tight tracking-tight text-balance neon-white md:text-4xl">
        {t('season.title')}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{t('season.lead')}</p>

      <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-foreground/90">
        <p>{t('season.body1')}</p>
        <div className="my-6 grid grid-cols-3 gap-3">
          {[
            { v: '+18%', l: 'Top-30 cap' },
            { v: '1.15+', l: 'EU riflers' },
            { v: '+9%', l: 'AWP avg' },
          ].map((s) => (
            <div key={s.l} className="panel-border rounded-xl bg-panel/70 p-4 text-center">
              <div className="font-display text-2xl font-700 text-primary neon-text">{s.v}</div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
        <p>{t('season.body2')}</p>
        <p>{t('season.body3')}</p>
      </div>

      <button
        type="button"
        onClick={() => setView('articles')}
        className="mt-8 rounded-xl border border-border bg-panel/60 px-6 py-3 font-display text-sm font-700 uppercase tracking-wide transition-colors hover:bg-panel"
      >
        {t('nav.articles')}
      </button>
    </article>
  )
}
