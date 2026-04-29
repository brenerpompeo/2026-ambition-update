export function Sponsors() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-6 md:grid-cols-2">
        <div className="flex flex-col items-center gap-4 border-r-0 border-border/40 md:border-r md:items-end md:pr-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal">
            Realização
          </p>
          <div className="flex items-center gap-4 text-foreground">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-foreground/80 text-[10px] font-bold leading-tight">
              UN<br />GLOBAL<br />COMPACT
            </div>
            <div>
              <p className="text-xl font-bold leading-tight">Pacto Global</p>
              <p className="text-sm text-muted-foreground">Rede Brasil</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-start md:pl-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal">
            Patrocínio
          </p>
          <p className="text-4xl font-bold tracking-tight text-foreground">aegea</p>
        </div>
      </div>
    </section>
  );
}
