export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/40 py-10">
      <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Pacto Global da ONU – Rede Brasil. Todos os direitos reservados.</p>
        <p className="mt-2">4º Fórum Ambição 2030 · A Década da Implementação</p>
      </div>
    </footer>
  );
}
