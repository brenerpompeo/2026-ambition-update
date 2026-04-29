const stats = [
  { value: "830", label: "Participantes presentes na 3ª edição" },
  { value: "443", label: "Empresas e organizações representadas" },
  { value: "41,5M", label: "Pessoas impactadas pela cobertura" },
  { value: "12", label: "Painéis e 3 keynotes em 7h+ de conteúdo" },
];

export function Stats() {
  return (
    <section className="bg-card/40 py-20">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
          Edições Anteriores
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-bold text-foreground sm:text-4xl">
          Uma plataforma de referência para a sustentabilidade corporativa
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-brand-teal/30 bg-background/60 p-6 text-center"
            >
              <p className="bg-gradient-to-r from-brand-teal to-brand-light-blue bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
