import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Limpeza profissional: o segredo das avaliações 5 estrelas | Seu Coanfitrião",
  description: "Como a limpeza impacta na experiência do hóspede e nas avaliações."
};

export default function LimpezaProfissional() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
  <h1 className="font-title text-2xl md:text-4xl text-primary mb-6">Limpeza profissional: o segredo das avaliações 5 estrelas</h1>
  <p className="text-base text-[#222] mb-4">A limpeza é um dos principais critérios para conquistar avaliações positivas e fidelizar hóspedes. Um ambiente limpo transmite cuidado, segurança e conforto.</p>
      <h2 className="font-title text-xl text-primary mt-6 mb-2">Dicas para manter o padrão</h2>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li className="text-[#222]">Contrate equipe especializada e treinada.</li>
        <li className="text-[#222]">Utilize produtos de qualidade e adequados para cada superfície.</li>
        <li className="text-[#222]">Faça vistoria pós-estadia para garantir manutenção.</li>
        <li className="text-[#222]">Ofereça itens extras como lençóis, toalhas e amenities.</li>
      </ul>
  <h2 className="font-title text-xl text-primary mt-6 mb-2">Impacto nas avaliações</h2>
  <p className="text-[#222] mb-4">A limpeza é frequentemente citada nas avaliações dos hóspedes. Imóveis bem cuidados recebem mais reservas e recomendação.</p>
  <h2 className="font-title text-xl text-primary mt-6 mb-2">Conte com especialistas</h2>
  <p className="text-[#222] mb-4">Nossa equipe garante limpeza profissional, vistoria e reposição de itens essenciais, elevando o padrão do seu imóvel e as avaliações dos hóspedes.</p>
  <p className="mt-6 text-base text-[#222]">Quer elevar suas avaliações? Fale conosco e conheça nosso serviço de limpeza!</p>
    </main>
  );
}
