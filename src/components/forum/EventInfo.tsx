import { Calendar, Clock, MapPin } from "lucide-react";

const items = [
  { icon: Calendar, label: "Data", value: "02 de junho de 2026" },
  { icon: Clock, label: "Horário", value: "09h às 18h" },
  { icon: MapPin, label: "Local", value: "MASP", sub: "Av. Paulista, 1578 — Bela Vista, São Paulo (SP)" },
];

export function EventInfo() {
  return (
    <section id="local" className="border-y border-border/40 bg-card/40 py-12">
      <div className="container mx-auto grid grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {items.map(({ icon: Icon, label, value, sub }) => (
          <div
            key={label}
            className="flex items-start gap-4 rounded-2xl border border-brand-teal/30 bg-card/60 p-6 backdrop-blur"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-teal/50 text-brand-teal">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">
                {label}
              </p>
              <p className="mt-1 text-lg font-semibold text-foreground">{value}</p>
              {sub && <p className="mt-1 text-sm text-muted-foreground">{sub}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
