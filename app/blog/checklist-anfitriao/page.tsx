import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Checklist do anfitrião: tudo o que você precisa garantir | Seu Coanfitrião",
  description: "Organize sua rotina e evite imprevistos com um checklist prático."
};

export default function ChecklistAnfitriao() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
  <h1 className="font-title text-2xl md:text-4xl text-primary mb-6">Checklist do anfitrião: tudo o que você precisa garantir</h1>
  <p className="text-base text-[#222] mb-4">Ter uma rotina organizada é essencial para evitar imprevistos e garantir a satisfação dos hóspedes. Um checklist prático ajuda a não esquecer nenhum detalhe importante.</p>
      <h2 className="font-title text-xl text-primary mt-6 mb-2">Checklist essencial</h2>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li className="text-[#222]">Verifique limpeza e organização dos ambientes.</li>
        <li className="text-[#222]">Confirme funcionamento de eletrodomésticos e eletrônicos.</li>
        <li className="text-[#222]">Disponibilize itens básicos: papel higiênico, sabonete, toalhas, lençóis.</li>
        <li className="text-[#222]">Atualize informações do anúncio e calendário.</li>
        <li className="text-[#222]">Prepare instruções de uso para hóspedes (Wi-Fi, portaria, regras do imóvel).</li>
        <li className="text-[#222]">Tenha contato de emergência disponível e instruções para imprevistos.</li>
        <li className="text-[#222]">Cheque estoque de amenities e produtos de limpeza.</li>
        <li className="text-[#222]">Garanta que todos os cômodos estejam bem iluminados e ventilados.</li>
      </ul>
  <h2 className="font-title text-xl text-primary mt-6 mb-2">Conte com especialistas</h2>
  <p className="text-[#222] mb-4">Nossa assessoria oferece suporte completo para anfitriões, incluindo checklist personalizado, vistoria detalhada, atendimento rápido para qualquer imprevisto e dicas para facilitar sua rotina. Conte com quem entende do mercado e garanta tranquilidade na gestão do seu imóvel!</p>
  <p className="mt-6 text-base text-[#222]">Quer facilitar sua rotina? <a href="/contato" className="text-primary underline">Fale conosco</a> e tenha tranquilidade na gestão do seu imóvel!</p>
    </main>
  );
}
