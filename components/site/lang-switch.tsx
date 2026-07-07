'use client'

import { useLang } from '@/lib/i18n'

export function LangSwitch() {
  const { lang, setLang } = useLang()
  return (
    <div className="flex items-center rounded-full border border-border bg-panel/60 p-0.5 text-xs font-600">
      {(['ru', 'en'] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors ${
            lang === l
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
