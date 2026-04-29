import { Mail } from "lucide-react";

const contacts = [
  { name: "Ana Urquiza", role: "Gerente de Eventos · Pacto Global – Rede Brasil", email: "ana.urquiza@pactoglobal.org.br" },
  { name: "Luiza Maruche", role: "Produção · Yellow Eventos", email: "producao@pactoglobal.org.br", phone: "+55 21 9856-5276" },
  { name: "Tania Fioratti", role: "Produção · Yellow Eventos", email: "tania.fioratti@yelloweventos.com.br", phone: "+55 22 98179-1128" },
];

export function Contact() {
  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
          Fale conosco
        </p>
        <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Contatos</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {contacts.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-brand-teal/30 bg-card/60 p-6"
            >
              <p className="text-lg font-semibold text-foreground">{c.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.role}</p>
              <a
                href={`mailto:${c.email}`}
                className="mt-4 flex items-center gap-2 text-sm text-brand-teal hover:underline"
              >
                <Mail className="h-4 w-4" />
                {c.email}
              </a>
              {c.phone && (
                <p className="mt-2 text-sm text-muted-foreground">{c.phone}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-teal/40 bg-brand-teal/10 p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Dúvidas sobre RSVP
          </p>
          <a
            href="mailto:rsvp@pactoglobal.org.br"
            className="mt-2 inline-block text-2xl font-bold text-foreground hover:underline"
          >
            rsvp@pactoglobal.org.br
          </a>
        </div>
      </div>
    </section>
  );
}
