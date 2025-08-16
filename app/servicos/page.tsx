export const metadata = {
  title: "Serviços | Seu Coanfitrião",
  description: "Gestão Básica (10%) e Completa (20%) para proprietários que desejam renda extra sem dor de cabeça.",
};

export default function Servicos() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Serviços</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">
        Explicamos em detalhes nossos planos e os benefícios de terceirizar a gestão do seu imóvel.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <section className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Plano Básico – 10%</h2>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
            <li>Respostas a hóspedes</li>
            <li>Ajustes de preço e calendário</li>
            <li>Coordenação de limpeza</li>
          </ul>
        </section>
        <section className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Plano Completo – 20%</h2>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
            <li>Criação e otimização do anúncio</li>
            <li>Atendimento 24/7</li>
            <li>Check-in/out</li>
            <li>Resolução de imprevistos</li>
          </ul>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">AirCover</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Apoiamos na orientação e acionamento do AirCover em situações elegíveis, seguindo as diretrizes do Airbnb.
        </p>
      </section>
    </div>
  );
}
