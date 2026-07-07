export default function Home() {
  return (
    <main>
      {/* Главный блок с текстом и кнопками */}
      <section className="relative overflow-hidden py-12 md:py-20 bg-[#0a0a0a]">
        <div className="container relative z-10">
          <div className="relative mx-auto max-w-5xl">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                УЗНАЙ РЕАЛЬНУЮ <br />
                <span className="text-primary text-glow">ЦЕНУ ИГРОКА</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
                Мы рассчитываем трансферную стоимость киберспортсменов на основе статистики,
                формы и рыночных трендов. Оцени любого игрока за секунды.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/calculate"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  НАЧАТЬ РАСЧЁТ
                </a>
                <a
                  href="/players"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background/50 px-8 font-bold transition-colors hover:bg-background/80"
                >
                  ВСЕ ИГРОКИ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок "Топ-5 команд" */}
      <section className="py-12 bg-[#0a0a0a] border-t border-border/50">
        <div className="container">
          <h2 className="text-center font-display text-2xl font-bold tracking-tight md:text-3xl">
            ТОП-5 КОМАНД
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { name: "Team Vitality", price: "4.8M", change: "+3.2%" },
              { name: "G2 Esports", price: "4.1M", change: "+1.4%" },
              { name: "Natus Vincere", price: "3.9M", change: "+0.8%" },
              { name: "FaZe Clan", price: "3.2M", change: "-2.1%" },
              { name: "Team Spirit", price: "2.7M", change: "+5.6%" },
            ].map((team) => (
              <div
                key={team.name}
                className="rounded-xl border border-border/50 bg-background/30 p-4 text-center backdrop-blur-sm transition-colors hover:border-primary/40"
              >
                <div className="text-sm font-bold uppercase text-muted-foreground">
                  {team.name}
                </div>
                <div className="text-2xl font-bold text-primary text-glow">
                  ${team.price}
                </div>
                <div className={`text-sm ${team.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                  {team.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Блок "Технология" */}
      <section className="py-12 bg-[#0a0a0a] border-t border-border/50">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary text-glow">150+</div>
              <div className="mt-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">Игроков</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary text-glow">30+</div>
              <div className="mt-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">Команд</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary text-glow">ТЕХНОЛОГИЯ</div>
              <div className="mt-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">Уникальная модель расчёта</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


