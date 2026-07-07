'use client'

import { Heart, Repeat2, MessageCircle, BadgeCheck, Crosshair } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { posts } from '@/lib/data'
import type { View } from '@/lib/views'

export function ArticlesSection({ setView }: { setView: (v: View) => void }) {
  const { t, lang } = useLang()

  return (
    <section className="mx-auto max-w-2xl px-4 py-10 md:py-14">
      <div className="mb-6">
        <h1 className="font-display text-3xl font-700 uppercase tracking-tight neon-white md:text-4xl">
          {t('articles.title')}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{t('articles.subtitle')}</p>
      </div>

      {/* pinned season article */}
      <button
        type="button"
        onClick={() => setView('season')}
        className="mb-3 block w-full rounded-2xl border border-primary/40 bg-primary/10 p-4 text-left transition-colors hover:bg-primary/15"
      >
        <div className="text-[11px] font-700 uppercase tracking-widest text-primary">{t('season.tag')}</div>
        <div className="mt-1 font-display text-lg font-700 leading-snug">{t('season.title')}</div>
        <div className="mt-1 text-sm text-muted-foreground">{t('season.lead')}</div>
      </button>

      <ul className="flex flex-col gap-3">
        {posts.map((post) => (
          <li key={post.id} className="panel-border rounded-2xl bg-panel/70 p-4 backdrop-blur-md">
            <div className="flex gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Crosshair className="size-5" strokeWidth={2.5} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-1.5 text-sm">
                  <span className="font-700">{post.author}</span>
                  <BadgeCheck className="size-4 text-primary" />
                  <span className="text-muted-foreground">{post.handle}</span>
                  <span className="text-muted-foreground">· {post.time}</span>
                </div>
                <p className="mt-1 text-[15px] leading-relaxed text-foreground/90">
                  {lang === 'ru' ? post.ru : post.en}
                </p>
                <div className="mt-3 flex items-center gap-8 text-muted-foreground">
                  <span className="flex items-center gap-1.5 text-xs transition-colors hover:text-foreground">
                    <MessageCircle className="size-4" />
                    {post.replies}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs transition-colors hover:text-success">
                    <Repeat2 className="size-4" />
                    {post.reposts}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs transition-colors hover:text-destructive">
                    <Heart className="size-4" />
                    {post.likes}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
