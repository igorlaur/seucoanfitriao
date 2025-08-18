import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nova Lei Aluguéis 2026: Multas 70% Proprietários + 20% Inquilinos | São Paulo",
  description: "🚨 URGENTE: Nova lei 2026 traz multas de 70% para proprietários e 20% para inquilinos que não declararem aluguéis. Airbnb em risco. Proteção em SP.",
  keywords: "nova lei aluguéis 2026, multa 70% proprietário, multa 20% inquilino, airbnb imposto 2026, declaração aluguel receita federal, lei aluguéis são paulo, multa aluguel não declarado, airbnb declarar imposto",
  openGraph: {
    title: "Nova Lei Aluguéis 2026: Multas de 70% para Proprietários - Proteção SP",
    description: "🚨 URGENTE: Nova legislação 2026 prevê multas de até 70% para proprietários e 20% para inquilinos. Airbnb e aluguéis tradicionais em risco em São Paulo.",
    type: "article",
    publishedTime: "2025-01-18T09:00:00.000Z",
    modifiedTime: "2025-01-18T09:00:00.000Z",
    authors: ["Seu Coanfitrião"],
    section: "Legislação Imobiliária",
    tags: ["Lei Aluguéis 2026", "Multa Proprietário", "Airbnb Imposto", "Receita Federal", "São Paulo"],
    url: "https://seucoanfitriao.com.br/blog/nova-lei-alugueis-2026",
  },
  twitter: {
    card: "summary_large_image",
    title: "🚨 Nova Lei Aluguéis 2026: Multas de 70% para Proprietários",
    description: "URGENTE: Legislação 2026 prevê multas pesadas. Proprietários Airbnb e aluguéis tradicionais em risco. Proteção em SP.",
  },
  alternates: {
    canonical: "https://seucoanfitriao.com.br/blog/nova-lei-alugueis-2026"
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NovaLeiAlugueis() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-primary">Início</a>
        <span>›</span>
        <a href="/blog" className="hover:text-primary">Blog</a>
        <span>›</span>
        <span className="text-gray-700">Nova Lei Aluguéis 2026</span>
      </nav>

      <h1 className="font-title text-2xl md:text-4xl text-primary mb-6">Nova Lei Aluguéis 2026: Multas de 70% para Proprietários e 20% para Inquilinos</h1>
      
      {/* Meta informações */}
      <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-blue-500">📅</span>
          <span>Atualizado em 17 de Janeiro, 2025</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-500">⏱️</span>
          <span>8 min de leitura</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-orange-500">👨‍💼</span>
          <span>Por Especialistas Superhost</span>
        </div>
      </div>
      
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <p className="text-red-800 font-medium">⚠️ ATENÇÃO: A partir de 2026, novas regras da Receita Federal sobre declaração de aluguéis entram em vigor com multas severas em São Paulo e todo Brasil!</p>
      </div>
      
      <p className="text-base text-[#222] mb-4">Se você é proprietário de imóveis para aluguel tradicional ou <strong>Airbnb em São Paulo</strong>, precisa saber sobre as mudanças que estão chegando. A <strong>Receita Federal está endurecendo o controle sobre aluguéis não declarados</strong> e as multas serão pesadas.</p>
      
      <h2 className="font-title text-xl text-primary mt-6 mb-2">O que muda em 2026?</h2>
      <p className="text-[#222] mb-4">A nova legislação estabelece <strong>obrigatoriedades específicas</strong> para declaração de rendimentos de aluguel:</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li className="text-[#222]"><strong>Inquilinos</strong> devem informar pagamentos de aluguel na declaração</li>
        <li className="text-[#222]"><strong>Proprietários</strong> devem declarar corretamente todos os rendimentos</li>
        <li className="text-[#222]"><strong>Plataformas digitais</strong> (Airbnb, Booking) terão que reportar automaticamente</li>
        <li className="text-[#222]"><strong>Cruzamento de dados</strong> será automático e rigoroso</li>
      </ul>
      
      <h2 className="font-title text-xl text-primary mt-6 mb-2">Multas que podem quebrar seu negócio</h2>
      <p className="text-[#222] mb-4">As penalidades são <strong>extremamente pesadas</strong>:</p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
          <h3 className="font-title text-lg text-orange-800 mb-2">👥 Para Inquilinos</h3>
          <p className="text-orange-700 mb-2"><strong>Multa: 20%</strong> do valor não declarado</p>
          <p className="text-sm text-orange-600">Exemplo: R$ 2.000/mês x 12 meses = R$ 24.000<br/>
          Multa = R$ 4.800</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <h3 className="font-title text-lg text-red-800 mb-2">🏠 Para Proprietários</h3>
          <p className="text-red-700 mb-2"><strong>Multa: até 70%</strong> do valor sonegado + juros</p>
          <p className="text-sm text-red-600">Exemplo: R$ 5.000/mês x 12 meses = R$ 60.000<br/>
          Multa = até R$ 42.000</p>
        </div>
      </div>

      <h2 className="font-title text-xl text-primary mt-6 mb-2">Situações de maior risco</h2>
      <p className="text-[#222] mb-4">Proprietários que devem se preocupar <strong>AGORA</strong>:</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li className="text-[#222]"><strong>Airbnb e hospedagem:</strong> Receita não declarada como pessoa física</li>
        <li className="text-[#222]"><strong>Aluguéis tradicionais:</strong> Valores recebidos sem comprovação fiscal</li>
        <li className="text-[#222]"><strong>Múltiplos imóveis:</strong> Volume alto de receita sem CNPJ</li>
        <li className="text-[#222]"><strong>Contratos informais:</strong> Acordos verbais sem documentação</li>
        <li className="text-[#222]"><strong>Sublocação:</strong> Repasse de imóveis sem declaração</li>
      </ul>

      <div className="bg-yellow-50 p-4 rounded-lg mb-4 border-l-4 border-yellow-500">
        <h3 className="font-title text-lg text-yellow-800 mb-2">💡 Especial atenção: Airbnb</h3>
        <ul className="list-disc pl-5 space-y-1 text-yellow-700">
          <li className="text-[#222]">Airbnb já repassa dados para a Receita Federal</li>
          <li className="text-[#222]">Muitos anfitriões não declaram corretamente</li>
          <li className="text-[#222]">Receita é considerada "atividade empresarial" para alguns casos</li>
          <li className="text-[#222]">Pode ser necessário abrir CNPJ dependendo do volume</li>
        </ul>
      </div>

      <h2 className="font-title text-xl text-primary mt-6 mb-2">Como se proteger antes de 2026</h2>
      <p className="text-[#222] mb-4"><strong>AÇÃO URGENTE</strong> - O que fazer agora:</p>
      
      <div className="bg-green-50 p-6 rounded-lg mb-6">
        <h3 className="font-title text-lg text-green-800 mb-4">✅ Checklist de proteção</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">📊</span>
            <span className="text-green-700">Organizar toda documentação de aluguéis (2019-2025)</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">🏦</span>
            <span className="text-green-700">Separar conta bancária exclusiva para aluguéis</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">👨‍💼</span>
            <span className="text-green-700">Consultar contador especialista em imóveis</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">💰</span>
            <span className="text-green-700">Regularizar pendências com Receita Federal</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">📝</span>
            <span className="text-green-700">Formalizar contratos de aluguel</span>
          </li>
        </ul>
      </div>

      <h2 className="font-title text-xl text-primary mt-6 mb-2">Oportunidades com a nova lei</h2>
      <p className="text-[#222] mb-4">A nova legislação também traz <strong>benefícios</strong> para quem se organizar:</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li className="text-[#222]"><strong>Deduções fiscais:</strong> Manutenção, reformas, taxas podem ser abatidas</li>
        <li className="text-[#222]"><strong>Profissionalização:</strong> CNPJ pode reduzir impostos significativamente</li>
        <li className="text-[#222]"><strong>Credibilidade:</strong> Operação regular atrai melhores inquilinos</li>
        <li className="text-[#222]"><strong>Planejamento:</strong> Controle financeiro mais eficiente</li>
      </ul>

      <h2 className="font-title text-xl text-primary mt-6 mb-2">Casos reais: o que pode acontecer</h2>
      
      <div className="bg-yellow-50 p-4 rounded-lg mb-4 border-l-4 border-yellow-500">
        <h3 className="font-title text-lg text-yellow-800 mb-2">👤 Caso 1: Ana - Airbnb Butantã</h3>
        <p className="text-[#222] mb-2">Ana tem 1 apartamento no Airbnb que rende R$ 4.000/mês. Não declarou 2023-2024.</p>
        <p className="text-red-600 font-medium">Risco: R$ 96.000 não declarados = multa de até R$ 67.200</p>
      </div>

      <div className="bg-red-50 p-4 rounded-lg mb-4 border-l-4 border-red-500">
        <h3 className="font-title text-lg text-red-800 mb-2">👤 Caso 2: João - Múltiplos imóveis</h3>
        <p className="text-[#222] mb-2">João tem 3 imóveis alugados (R$ 15.000/mês total). Declarou apenas 1.</p>
        <p className="text-red-600 font-medium">Risco: R$ 120.000 não declarados = multa de até R$ 84.000</p>
      </div>

      <div className="bg-primary/5 p-6 rounded-lg mt-8">
        <h2 className="font-title text-xl text-primary mb-4">🛡️ Como posso te ajudar</h2>
        <p className="text-[#222] mb-4">Ofereço <strong>gestão completa dos seus imóveis</strong> e conectamos você com especialistas:</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li className="text-[#222]">Administração completa dos seus aluguéis (tradicional e Airbnb)</li>
          <li className="text-[#222]">Organização de toda documentação para contadores</li>
          <li className="text-[#222]">Indicação de contadores especialistas em imóveis</li>
          <li className="text-[#222]">Relatórios financeiros detalhados para declaração</li>
          <li className="text-[#222]">Consultoria sobre CNPJ vs. Pessoa Física (com especialistas)</li>
          <li className="text-[#222]">Suporte para adequação à nova legislação</li>
        </ul>
        
        <p className="text-[#222] mb-4"><strong>Vantagem:</strong> Você fica tranquilo com a gestão dos imóveis enquanto nossos parceiros contadores cuidam da parte fiscal.</p>
        
        <div className="text-center">
          <a 
            href="https://wa.me/5511952286097?text=Olá! Quero me adequar à nova lei de aluguéis de 2026 e preciso de gestão profissional + indicação de contador especialista." 
            className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#22c55e] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Quero Gestão + Contador Especialista
          </a>
        </div>
      </div>

      <h2 className="font-title text-xl text-primary mt-8 mb-4">Não deixe para última hora</h2>
      <p className="text-[#222] mb-4">A Receita Federal já sinalizou que <strong>não haverá tolerância</strong> após 2026. Proprietários que não se adequarem enfrentarão:</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li className="text-[#222]">Multas retroativas de até 5 anos</li>
        <li className="text-[#222]">Juros compostos sobre valores em atraso</li>
        <li className="text-[#222]">Possível processo criminal por sonegação</li>
        <li className="text-[#222]">Inclusão na dívida ativa da União</li>
        <li className="text-[#222]">Restrições para financiamentos e negócios</li>
      </ul>

      <h2 className="font-title text-xl text-primary mt-8 mb-4">Perguntas frequentes sobre a nova lei de aluguéis 2026</h2>
      
      <div className="space-y-6 mb-8">
        <div className="border-l-4 border-primary pl-6">
          <h3 className="font-medium text-primary mb-2">A nova lei de 2026 afeta apenas Airbnb ou todos os aluguéis?</h3>
          <p className="text-[#666]">A legislação afeta <strong>todos os tipos de aluguel</strong>: residencial tradicional, comercial e hospedagem (Airbnb, temporada). Proprietários de qualquer tipo de imóvel alugado devem declarar.</p>
        </div>
        
        <div className="border-l-4 border-primary pl-6">
          <h3 className="font-medium text-primary mb-2">Qual é exatamente a multa de 70% para proprietários?</h3>
          <p className="text-[#666]">A multa é de <strong>até 70% do valor sonegado</strong> mais juros e correção. Se você deixou de declarar R$ 60.000 em aluguéis, pode pagar multa de R$ 42.000.</p>
        </div>
        
        <div className="border-l-4 border-primary pl-6">
          <h3 className="font-medium text-primary mb-2">Como a Receita Federal vai descobrir aluguéis não declarados?</h3>
          <p className="text-[#666]">Através de <strong>cruzamento automático de dados</strong>: movimentação bancária, informações do Airbnb/Booking, declarações dos inquilinos e algoritmos de inteligência artificial.</p>
        </div>
        
        <div className="border-l-4 border-primary pl-6">
          <h3 className="font-medium text-primary mb-2">Posso regularizar aluguéis antigos antes de 2026?</h3>
          <p className="text-[#666]">Sim! É possível fazer <strong>declaração retificadora</strong> para regularizar anos anteriores com multas menores. Quanto antes regularizar, menor a penalidade.</p>
        </div>
      </div>
      
      <p className="mt-6 text-base text-[#222] font-medium">Quem se organizar agora terá vantagem competitiva e tranquilidade. Quem deixar para depois pode perder tudo que construiu.</p>
    </main>
  );
}
