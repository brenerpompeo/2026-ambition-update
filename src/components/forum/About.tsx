export function About() {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
            Sobre o evento
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            A Década da Implementação: como as empresas estão redesenhando o futuro do Brasil
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            O Fórum Ambição 2030 é o maior evento sobre sustentabilidade corporativa do
            Brasil, promovido pelo Pacto Global da ONU – Rede Brasil. Em sua{" "}
            <span className="text-foreground">quarta edição</span>, reunirá centenas de
            altas lideranças empresariais, da sociedade civil e do poder público para
            promover diálogos estratégicos e cocriar soluções concretas rumo aos Objetivos
            de Desenvolvimento Sustentável (ODS).
          </p>
          <p>
            Em um momento decisivo para a Agenda 2030, o Fórum se posiciona como espaço
            estratégico para discutir a implementação em escala das metas globais. O
            desafio agora está na transformação concreta dos modelos de negócio, cadeias
            produtivas, investimentos e práticas de governança.
          </p>
          <p>
            A programação destaca o papel das empresas em agendas essenciais — transição
            climática e energética, transformação das cadeias produtivas, economia
            circular, integridade e governança, futuro do trabalho e inclusão, e
            financiamento e inovação para a sustentabilidade.
          </p>
        </div>
      </div>
    </section>
  );
}
