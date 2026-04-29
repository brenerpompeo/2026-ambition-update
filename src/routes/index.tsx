import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/forum/Hero";
import { EventInfo } from "@/components/forum/EventInfo";
import { Sponsors } from "@/components/forum/Sponsors";
import { About } from "@/components/forum/About";
import { Stats } from "@/components/forum/Stats";
import { Agenda } from "@/components/forum/Agenda";
import { Audience } from "@/components/forum/Audience";
import { Contact } from "@/components/forum/Contact";
import { Footer } from "@/components/forum/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "4º Fórum Ambição 2030 — A Década da Implementação" },
      {
        name: "description",
        content:
          "02 de junho de 2026, no MASP (São Paulo). O maior evento de sustentabilidade corporativa do Brasil, promovido pelo Pacto Global da ONU – Rede Brasil.",
      },
      { property: "og:title", content: "4º Fórum Ambição 2030 — A Década da Implementação" },
      {
        property: "og:description",
        content:
          "02 de junho de 2026 · MASP, São Paulo. Como as empresas estão redesenhando o futuro do Brasil.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <EventInfo />
      <Sponsors />
      <About />
      <Stats />
      <Agenda />
      <Audience />
      <Contact />
      <Footer />
    </main>
  );
}
