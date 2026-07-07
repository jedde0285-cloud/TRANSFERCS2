'use client'

import { Calculator, Shield, User, Newspaper, Info } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import type { View } from '@/lib/views'
import { Logo } from './logo'
import { LangSwitch } from './lang-switch'

const NAV: { view: View; key: string; icon: typeof Calculator }[] = [
  { view: 'eval', key: 'nav.eval', icon: Calculator },
  { view: 'teams', key: 'nav.teams', icon: Shield },
  { view: 'players', key: 'nav.players', icon: User },
  { view: 'articles', key: 'nav.articles', icon: Newspaper },
  { view: 'about', key: 'nav.about', icon: Info },
]

export function Header({ view, setView }: { view: View; setView: (v: View) => void }) {
  const { t } = useLang()
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <nav className="flex items-center gap-1 overflow-x-auto md:gap-2">
          {NAV.map(({ view: v, key, icon: Icon }) => {
            const active = view === v
            return (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                className={`flex shrink-0 items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-600 uppercase tracking-wide transition-colors md:px-3 md:text-sm ${
                  active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="size-4" />
                <span className="hidden sm:inline">{t(key)}</span>
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Logo onClick={() => setView('home')} />
          <LangSwitch />
        </div>
      </div>
    </header>
  )
}
