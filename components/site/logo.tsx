import { Crosshair } from 'lucide-react'

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex items-center gap-2.5 outline-none"
      aria-label="TransferCS — на главную"
    >
      <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-[0_0_24px_rgba(255,120,20,0.5)] transition-transform group-hover:scale-105">
        <Crosshair className="size-5" strokeWidth={2.5} />
      </span>
      <span className="font-display text-xl font-600 tracking-tight text-foreground">
        Transfer<span className="text-primary">CS</span>
      </span>
    </button>
  )
}
