'use client'

import { useEffect, useState } from 'react'
import { LangProvider } from '@/lib/i18n'
import type { View } from '@/lib/views'
import { SiteBackground } from './background'
import { Header } from './header'
import { Footer } from './footer'
import { HomeSection } from '@/components/sections/home'
import { EvaluationSection } from '@/components/sections/evaluation'
import { TeamsSection } from '@/components/sections/teams'
import { PlayersSection } from '@/components/sections/players'
import { ArticlesSection } from '@/components/sections/articles'
import { AboutSection } from '@/components/sections/about'
import { SeasonArticle } from '@/components/sections/season-article'

function Shell() {
  const [view, setView] = useState<View>('home')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [view])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteBackground />
      <Header view={view} setView={setView} />
      <main className="flex-1">
        {view === 'home' && <HomeSection setView={setView} />}
        {view === 'eval' && <EvaluationSection />}
        {view === 'teams' && <TeamsSection />}
        {view === 'players' && <PlayersSection />}
        {view === 'articles' && <ArticlesSection setView={setView} />}
        {view === 'about' && <AboutSection />}
        {view === 'season' && <SeasonArticle setView={setView} />}
      </main>
      <Footer />
    </div>
  )
}

export function SiteShell() {
  return (
    <LangProvider>
      <Shell />
    </LangProvider>
  )
}
