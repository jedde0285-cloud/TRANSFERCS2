export function SiteBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 20%, #000 40%, transparent 100%)',
        }}
      />
      {/* subtle white neon lift */}
      <div className="absolute left-1/2 top-[-12%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-[120px]" />
      <div className="absolute right-[-8%] top-[18%] h-[420px] w-[420px] rounded-full bg-white/[0.04] blur-[130px]" />
      {/* warm orange accent glows */}
      <div className="absolute -right-24 top-1/3 h-[360px] w-[360px] rounded-full bg-primary/12 blur-[140px]" />
      <div className="absolute -left-24 bottom-0 h-[360px] w-[360px] rounded-full bg-primary/10 blur-[150px]" />
    </div>
  )
}
