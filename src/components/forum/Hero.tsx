import heroBg from "@/assets/hero-bg.jpg";
import globe from "@/assets/globe.png";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(180deg, oklch(0.16 0.04 255 / 0.85), oklch(0.16 0.04 255 / 0.92)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto grid min-h-[88vh] grid-cols-1 items-center gap-10 px-6 py-20 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <span className="rounded-full border border-brand-teal/40 bg-brand-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal">
            4ª Edição · 2026
          </span>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="block text-brand-light-blue">4º Fórum Ambição 2030</span>
            <span className="mt-3 block text-foreground">A Década da Implementação</span>
          </h1>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            Como as empresas estão redesenhando o futuro do Brasil. O maior encontro de
            sustentabilidade corporativa do país, promovido pelo Pacto Global da ONU – Rede
            Brasil.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href="#agenda"
              className="rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-brand-deep transition hover:opacity-90"
            >
              Confira a agenda
            </a>
            <a
              href="#local"
              className="rounded-full border border-brand-light-blue/60 px-6 py-3 text-sm font-semibold text-brand-light-blue transition hover:bg-brand-light-blue/10"
            >
              Confira o local
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10 rounded-full bg-brand-teal/20 blur-3xl" />
          <img
            src={globe}
            alt="Globo dos Objetivos de Desenvolvimento Sustentável"
            className="w-72 max-w-full drop-shadow-2xl sm:w-96 lg:w-[440px]"
          />
        </div>
      </div>
    </section>
  );
}
