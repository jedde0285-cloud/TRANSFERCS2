'use client'

import { Send, Users } from 'lucide-react'
import { useLang } from '@/lib/i18n'

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t border-border/60 bg-background/50">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="max-w-xl text-xs leading-relaxed text-muted-foreground">{t('footer.rights')}</p>
        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-8">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">{t('footer.contact')}</span>
            <a
              href="https://t.me/jedde1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-600 text-primary transition-colors hover:text-foreground"
            >
              <Send className="size-4" />
              @jedde1
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Users className="size-4 text-muted-foreground" />
            <span className="text-muted-foreground">{t('footer.online')}</span>
            <span className="flex items-center gap-1.5 font-600 text-foreground">
              <span className="size-2 rounded-full bg-primary pulse-dot" />1 342
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
