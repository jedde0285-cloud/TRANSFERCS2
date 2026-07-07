'use client'

import Image from 'next/image'
import { Calculator, TrendingUp, Radio } from 'lucide-react'
import { useLang } from '@/lib/i18n'

export function AboutSection() {
  const { t } = useLang()

  const points = [
    { icon: Calculator, title: t('about.p1title'), body: t('about.p1') },
    { icon: TrendingUp, title: t('about.p2title'), body: t('about.p2') },
    { icon: Radio, title: t('about.p3title'), body: t('about.p3') },
  ]

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <div className="text-center">
        <span className="text-xs font-700 uppercase tracking-[0.3em] text-primary">{t('about.subtitle')}</span>
        <h1 className="mt-2 font-display text-4xl font-700 uppercase tracking-tight neon-white md:text-5xl">
          {t('about.title')}
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-1 items-center gap-8 md:grid-cols-3">
        {/* decorative player */}
        <div className="relative hidden justify-center md:flex">
          <div className="pointer-events-none absolute bottom-0 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <Image
            src="/images/player-alt.webp"
            alt="Киберспортсмен"
            width={320}
            height={380}
            className="relative z-10 h-auto w-full max-w-[240px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
          />
        </div>

        {/* plaque with three points */}
        <div className="panel-border rounded-3xl bg-panel/70 p-6 backdrop-blur-md md:col-span-2 md:p-8">
          <ol className="flex flex-col gap-6">
            {points.map((p, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <p.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-700">
                    <span className="mr-2 text-primary">{i + 1}.</span>
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
