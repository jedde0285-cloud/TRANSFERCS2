'use client'

import { useState } from 'react'
import { User, HelpCircle } from 'lucide-react'
import { useLang } from '@/lib/i18n'

const ROLES = ['IGL', 'AWP', 'Rifler'] as const
const REGIONS = ['NA', 'SA', 'EU', 'AS'] as const

function fullMoney(n: number) {
  return '$' + Math.round(n).toLocaleString('ru-RU').replace(/,/g, ' ')
}

function Field({ label, value, children }: { label: string; value?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-600">{label}</span>
        {value != null && <span className="font-display text-sm font-700 text-primary tabular-nums">{value}</span>}
      </div>
      {children}
    </div>
  )
}

export function EvaluationSection() {
  const { t } = useLang()
  const [rating, setRating] = useState(1.15)
  const [age, setAge] = useState(23)
  const [role, setRole] = useState<(typeof ROLES)[number]>('Rifler')
  const [region, setRegion] = useState<(typeof REGIONS)[number]>('EU')
  const [maps, setMaps] = useState(680)
  const [majors, setMajors] = useState(4)
  const [sTier, setSTier] = useState(3)
  const [aTier, setATier] = useState(6)
  const [popularity, setPopularity] = useState(1.3)

  // Popularity override rules (exception: IGL is never affected)
  const isIGL = role === 'IGL'
  let effectivePop = popularity
  let popLocked = false
  if (!isIGL) {
    if (rating < 0.9) {
      effectivePop = 0.8
      popLocked = true
    } else if (rating <= 0.99) {
      effectivePop = 1.0
      popLocked = true
    }
  }

  // DEMO price only — real pricing logic will be added later by the owner.
  const demoPrice =
    (300_000 + rating * 900_000 + maps * 400 + majors * 45_000 + sTier * 120_000 + aTier * 40_000) *
    effectivePop *
    (age <= 26 ? 1.08 : age >= 32 ? 0.85 : 1)

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-700 uppercase tracking-tight neon-white md:text-5xl">
          {t('eval.title')}
        </h1>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">{t('eval.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* controls — slightly left of center */}
        <div className="space-y-4 lg:col-span-7">
          {/* 1. Rating */}
          <div className="panel-border rounded-2xl bg-panel/70 p-6 backdrop-blur-md">
            <Field label={t('eval.rating')} value={rating.toFixed(2)}>
              <input
                type="range"
                className="tcs-range"
                min={0.1}
                max={2.0}
                step={0.01}
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
              />
              <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
                <span>0.10</span>
                <span>2.00</span>
              </div>
            </Field>
          </div>

          {/* 2. Age, role, region */}
          <div className="panel-border space-y-5 rounded-2xl bg-panel/70 p-6 backdrop-blur-md">
            <Field label={t('eval.age')} value={`${age} ${t('eval.years')}`}>
              <input
                type="range"
                className="tcs-range"
                min={16}
                max={50}
                step={1}
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
              />
              <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
                <span>16</span>
                <span>50</span>
              </div>
            </Field>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <span className="mb-2 block text-sm font-600">{t('eval.role')}</span>
                <div className="flex gap-2">
                  {ROLES.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`flex-1 rounded-lg border px-2 py-2 text-sm font-600 transition-colors ${
                        role === r
                          ? 'border-primary bg-primary/15 text-primary'
                          : 'border-border bg-white/[0.03] text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="mb-2 block text-sm font-600">{t('eval.region')}</span>
                <div className="flex gap-2">
                  {REGIONS.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRegion(r)}
                      className={`flex-1 rounded-lg border px-2 py-2 text-sm font-600 transition-colors ${
                        region === r
                          ? 'border-primary bg-primary/15 text-primary'
                          : 'border-border bg-white/[0.03] text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Experience */}
          <div className="panel-border rounded-2xl bg-panel/70 p-6 backdrop-blur-md">
            <span className="mb-4 block font-display text-sm font-700 uppercase tracking-wide">{t('eval.exp')}</span>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <NumberBox label={t('eval.maps')} value={maps} setValue={setMaps} step={10} />
              <NumberBox label={t('eval.majors')} value={majors} setValue={setMajors} step={1} />
              <NumberBox label={t('eval.trophiesS')} value={sTier} setValue={setSTier} step={1} accent />
              <NumberBox label={t('eval.trophiesA')} value={aTier} setValue={setATier} step={1} />
            </div>
          </div>

          {/* 4. Popularity multiplier */}
          <div className="panel-border rounded-2xl bg-panel/70 p-6 backdrop-blur-md">
            <div className="mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-sm font-600">
                {t('eval.pop')}
                <span className="group relative inline-flex">
                  <HelpCircle className="size-4 cursor-help text-muted-foreground" />
                  <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-72 -translate-x-1/2 rounded-xl border border-border bg-popover p-3 text-xs leading-relaxed text-popover-foreground opacity-0 shadow-2xl transition-opacity group-hover:opacity-100">
                    {t('eval.popHint')}
                  </span>
                </span>
              </span>
              <span className="font-display text-sm font-700 text-primary tabular-nums">
                {effectivePop.toFixed(2)}
                {popLocked && <span className="ml-1 text-[10px] font-500 text-muted-foreground">(авто)</span>}
              </span>
            </div>
            <input
              type="range"
              className="tcs-range disabled:opacity-40"
              min={1.0}
              max={2.0}
              step={0.01}
              value={popularity}
              disabled={popLocked}
              onChange={(e) => setPopularity(Number(e.target.value))}
            />
            <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
              <span>1.00</span>
              <span>2.00</span>
            </div>
          </div>
        </div>

        {/* summary — right */}
        <div className="lg:col-span-5">
          <div className="panel-border sticky top-24 rounded-2xl bg-panel/80 p-6 backdrop-blur-md">
            <h2 className="mb-5 font-display text-lg font-700 uppercase tracking-wide">{t('eval.summary')}</h2>

            {/* black silhouette, no nickname */}
            <div className="mb-6 flex items-center justify-center rounded-2xl border border-border bg-gradient-to-b from-white/[0.04] to-black/40 py-8">
              <div className="flex size-28 items-center justify-center rounded-full bg-black/70">
                <User className="size-16 text-white/15" strokeWidth={1.5} />
              </div>
            </div>

            <dl className="space-y-3 text-sm">
              <Row label={t('eval.role')} value={role} />
              <Row label={t('eval.rating')} value={rating.toFixed(2)} />
              <Row label={t('eval.age')} value={`${age} ${t('eval.years')}`} />
              <Row label={t('eval.region')} value={region} />
            </dl>

            <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-4">
              <div className="text-xs font-600 uppercase tracking-widest text-muted-foreground">{t('eval.price')}</div>
              <div className="mt-1 font-display text-3xl font-700 text-primary neon-text tabular-nums">
                {fullMoney(demoPrice)}
              </div>
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">{t('eval.note')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function NumberBox({
  label,
  value,
  setValue,
  step,
  accent,
}: {
  label: string
  value: number
  setValue: (n: number) => void
  step: number
  accent?: boolean
}) {
  return (
    <div className="rounded-xl border border-border bg-white/[0.03] p-3">
      <div className="mb-2 text-[11px] font-600 leading-tight text-muted-foreground">{label}</div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setValue(Math.max(0, value - step))}
          className="flex size-6 items-center justify-center rounded-md bg-white/[0.06] text-sm font-700 text-muted-foreground hover:text-foreground"
        >
          −
        </button>
        <span className={`flex-1 text-center font-display text-lg font-700 tabular-nums ${accent ? 'text-primary' : ''}`}>
          {value}
        </span>
        <button
          type="button"
          onClick={() => setValue(value + step)}
          className="flex size-6 items-center justify-center rounded-md bg-white/[0.06] text-sm font-700 text-muted-foreground hover:text-foreground"
        >
          +
        </button>
      </div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border/60 pb-3">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-600">{value}</dd>
    </div>
  )
}
