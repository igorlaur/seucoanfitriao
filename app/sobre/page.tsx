export const metadata = {
  title: "Sobre | Seu Coanfitrião",
  description: "Somos Superhost com 9+ anos de experiência, nota média 4,83 e resposta média &lt; 1h.",
};

export default function Sobre() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Sobre nós</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">
        Na Seu Coanfitrião, nossa missão é maximizar a rentabilidade dos clientes com profissionalismo e transparência.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold">Selo Superhost</h2>
          <p className="mt-2 text-sm text-muted-foreground">Histórico consistente de alta performance na plataforma, com avaliação média 4,83.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold">Resultados</h2>
          <p className="mt-2 text-sm text-muted-foreground">Nove anos de experiência, +29 avaliações reais e tempo médio de resposta inferior a 1 hora.</p>
        </div>
      </div>
    </div>
  );
}
