const agenda = [
  {
    time: "9h30",
    title: "Abertura",
    desc: "Guilherme Xavier (Diretor Executivo, Pacto Global – Rede Brasil), Presidente do Conselho do Pacto Global – Rede Brasil e Coordenador Residente do Sistema ONU.",
  },
  {
    time: "9h50",
    title: "Keynote — Como o setor privado pode fortalecer o Multilateralismo",
    desc: "Oliver Stuenkel, jornalista (TBC).",
  },
  {
    time: "10h10",
    title: "Painel — Transição energética",
    desc: "Marian Schuegraf (UE no Brasil), Carlos Carbone (Itaipu), Manuel Reyes-Retana (IFC Brasil). Moderação: Giovana Girardi (Estadão). [TBC]",
  },
  {
    time: "11h00",
    title: "Business Case — Riscos de Integridade na cadeia produtiva",
    desc: "Como identificar e mitigar riscos de integridade ao longo da cadeia.",
  },
  {
    time: "11h20",
    title: "Painel — Transformação das cadeias produtivas",
    desc: "Diálogo sobre a reconfiguração de cadeias para um futuro sustentável.",
  },
  {
    time: "12h10",
    title: "Business Case",
    desc: "Adriana Albanese, Diretora de Sustentabilidade da Aegea (TBC).",
  },
  { time: "12h30", title: "Almoço", desc: "Intervalo para networking." },
  {
    time: "14h30",
    title: "Painel — Recomeços que inspiram e lideram",
    desc: "Movimento Elas Lideram. Dani Suzuki, Fernando Viriato (Accor), pessoa refugiada e Pedro Bial (TBC).",
  },
  {
    time: "15h10",
    title: "Apresentação dos Movimentos Ambição 2030",
    desc: "Mônica Gregori, Diretora de Impacto, Pacto Global – Rede Brasil.",
  },
  { time: "16h10", title: "Apresentação Artística", desc: "Momento cultural." },
  {
    time: "16h30",
    title: "Painel — Economia circular e gestão de recursos naturais",
    desc: "Milton Pilão (Orizon), Valdir Beira Junior (Ypê), Roberto Rocha (Ancat). Moderação: Renata Faber (Exame). [TBC]",
  },
  {
    time: "17h20",
    title: "Painel — Futuro do trabalho e uso ético da Inteligência Artificial",
    desc: "Claudia Romano (Yduqs), Vivian Broge (TOTVS), Naiá Tupinambá, Nina da Hora. Moderação: Vinicius Pinheiro (OIT). [TBC]",
  },
  { time: "18h00", title: "Encerramento", desc: "Considerações finais." },
  { time: "18h10", title: "Networking & Coquetel", desc: "Encontro de lideranças." },
];

export function Agenda() {
  return (
    <section id="agenda" className="py-20">
      <div className="container mx-auto px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
          Programação preliminar
        </p>
        <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Agenda 2026</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Versão preliminar — em construção. Confirmações em breve.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-brand-teal/30">
          {agenda.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-2 border-b border-border/40 bg-card/40 p-6 last:border-b-0 md:grid-cols-[140px_1fr] md:gap-8"
            >
              <div className="font-mono text-lg font-semibold text-brand-teal">
                {item.time}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
