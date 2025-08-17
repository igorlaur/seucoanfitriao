export const metadata = {
  title: "Nova Lei Aluguéis 2026: Multas 70% Proprietários + 20% Inquilinos | São Paulo",
  description: "🚨 URGENTE: Nova lei 2026 traz multas de 70% para proprietários e 20% para inquilinos que não declararem aluguéis. Airbnb em risco. Proteção em SP.",
  keywords: "nova lei aluguéis 2026, multa 70% proprietário, multa 20% inquilino, airbnb imposto 2026, declaração aluguel receita federal, lei aluguéis são paulo, multa aluguel não declarado, airbnb declarar imposto"
};

export default function NovaLeiAlugueis() {
  return (
    <>
      {/* Schema Markup para Artigo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Nova Lei Aluguéis 2026: Multas 70% Proprietários + 20% Inquilinos",
            "description": "Nova lei 2026 traz multas de 70% para proprietários e 20% para inquilinos que não declararem aluguéis. Airbnb em risco.",
            "image": "https://seucoanfitriao.com.br/logo1.png",
            "author": {
              "@type": "Organization",
              "name": "Seu Coanfitrião"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Seu Coanfitrião",
              "logo": {
                "@type": "ImageObject",
                "url": "https://seucoanfitriao.com.br/logo1.png"
              }
            },
            "datePublished": "2025-08-16",
            "dateModified": "2025-08-16",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://seucoanfitriao.com.br/blog/nova-lei-alugueis-2026"
            },
            "articleSection": "Legislação",
            "keywords": ["lei aluguéis 2026", "multa proprietário", "airbnb imposto", "declaração aluguel"]
          })
        }}
      />

      {/* Schema Markup para FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "A nova lei de 2026 afeta apenas Airbnb ou todos os aluguéis?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A legislação afeta todos os tipos de aluguel: residencial tradicional, comercial e hospedagem (Airbnb, temporada). Proprietários de qualquer tipo de imóvel alugado devem declarar."
                }
              },
              {
                "@type": "Question", 
                "name": "Qual é exatamente a multa de 70% para proprietários?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A multa é de até 70% do valor sonegado mais juros e correção. Se você deixou de declarar R$ 60.000 em aluguéis, pode pagar multa de R$ 42.000."
                }
              },
              {
                "@type": "Question",
                "name": "Como a Receita Federal vai descobrir aluguéis não declarados?", 
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Através de cruzamento automático de dados: movimentação bancária, informações do Airbnb/Booking, declarações dos inquilinos e algoritmos de inteligência artificial."
                }
              },
              {
                "@type": "Question",
                "name": "Posso regularizar aluguéis antigos antes de 2026?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Sim! É possível fazer declaração retificadora para regularizar anos anteriores com multas menores. Quanto antes regularizar, menor a penalidade."
                }
              }
            ]
          })
        }}
      />
      
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-title text-2xl md:text-4xl text-primary mb-6">Nova Lei Aluguéis 2026: Multas de 70% para Proprietários e 20% para Inquilinos</h1>
      
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <p className="text-red-800 font-medium">⚠️ ATENÇÃO: A partir de 2026, novas regras da Receita Federal sobre declaração de aluguéis entram em vigor com multas severas em São Paulo e todo Brasil!</p>
      </div>
      
      <p className="text-base text-[#222] mb-4">Se você é proprietário de imóveis para aluguel tradicional ou <b>Airbnb em São Paulo</b>, precisa saber sobre as mudanças que estão chegando. A <b>Receita Federal está endurecendo o controle sobre aluguéis não declarados</b> e as multas serão pesadas.</p>
      
      <h2 className="font-title text-xl text-primary mt-6 mb-2">O que muda em 2026?</h2>
      <p className="text-[#222] mb-4">A nova legislação estabelece <b>obrigatoriedades específicas</b> para declaração de rendimentos de aluguel:</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li className="text-[#222]"><b>Inquilinos</b> devem informar pagamentos de aluguel na declaração</li>
        <li className="text-[#222]"><b>Proprietários</b> devem declarar corretamente todos os rendimentos</li>
        <li className="text-[#222]"><b>Plataformas digitais</b> (Airbnb, Booking) terão que reportar automaticamente</li>
        <li className="text-[#222]"><b>Cruzamento de dados</b> será automático e rigoroso</li>
      </ul>
      
      <h2 className="font-title text-xl text-primary mt-6 mb-2">Multas que podem quebrar seu negócio</h2>
      <p className="text-[#222] mb-4">As penalidades são <b>extremamente pesadas</b>:</p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
          <h3 className="font-title text-lg text-orange-800 mb-2">👥 Para Inquilinos</h3>
          <p className="text-orange-700 mb-2"><b>Multa: 20%</b> do valor não declarado</p>
          <p className="text-sm text-orange-600">Exemplo: R$ 2.000/mês x 12 meses = R$ 24.000<br/>
          Multa = R$ 4.800</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <h3 className="font-title text-lg text-red-800 mb-2">🏠 Para Proprietários</h3>
          <p className="text-red-700 mb-2"><b>Multa: até 70%</b> do valor sonegado + juros</p>
          <p className="text-sm text-red-600">Exemplo: R$ 5.000/mês x 12 meses = R$ 60.000<br/>
          Multa = até R$ 42.000</p>
        </div>
      </div>
      
      <h2 className="font-title text-xl text-primary mt-6 mb-2">Situações de maior risco</h2>
      <p className="text-[#222] mb-4">Proprietários que devem se preocupar <b>AGORA</b>:</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li className="text-[#222]"><b>Airbnb e hospedagem:</b> Receita não declarada como pessoa física</li>
        <li className="text-[#222]"><b>Aluguéis "por fora":</b> Contratos sem registro formal</li>
        <li className="text-[#222]"><b>Múltiplas propriedades:</b> Rendimentos subdeclarados</li>
        <li className="text-[#222]"><b>Recebimento em dinheiro:</b> Sem comprovação bancária</li>
        <li className="text-[#222]"><b>Sublocação irregular:</b> Repasse não declarado</li>
      </ul>
      
      <h2 className="font-title text-xl text-primary mt-6 mb-2">Como o cruzamento de dados vai funcionar</h2>
      <p className="text-[#222] mb-4">A Receita Federal terá acesso automático a:</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li className="text-[#222]">Dados bancários de transferências recorrentes</li>
        <li className="text-[#222]">Informações das plataformas (Airbnb, Booking, etc.)</li>
        <li className="text-[#222]">Declarações dos inquilinos sobre pagamentos</li>
        <li className="text-[#222]">Registros de contratos de aluguel</li>
        <li className="text-[#222]">Movimentação financeira suspeita</li>
      </ul>
      
      <h2 className="font-title text-xl text-primary mt-6 mb-2">Airbnb: atenção especial</h2>
      <p className="text-[#222] mb-4">Anfitriões de Airbnb estão no <b>grupo de maior risco</b>:</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li className="text-[#222]">Airbnb já repassa dados para a Receita Federal</li>
        <li className="text-[#222]">Muitos anfitriões não declaram corretamente</li>
        <li className="text-[#222]">Receita é considerada "atividade empresarial" para alguns casos</li>
        <li className="text-[#222]">Pode ser necessário abrir CNPJ dependendo do volume</li>
      </ul>
      
      <h2 className="font-title text-xl text-primary mt-6 mb-2">Como se proteger antes de 2026</h2>
      <p className="text-[#222] mb-4"><b>AÇÃO URGENTE</b> - O que fazer agora:</p>
      
      <div className="bg-green-50 p-6 rounded-lg mb-6">
        <h3 className="font-title text-lg text-green-800 mb-3">✅ Checklist de Conformidade</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">📋</span>
            <span className="text-green-700">Revisar declarações dos últimos 5 anos</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">📊</span>
            <span className="text-green-700">Organizar comprovantes de todos os aluguéis</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">🏢</span>
            <span className="text-green-700">Avaliar necessidade de abrir CNPJ</span>
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
      <p className="text-[#222] mb-4">A nova legislação também traz <b>benefícios</b> para quem se organizar:</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li className="text-[#222]"><b>Deduções fiscais:</b> Manutenção, reformas, taxas podem ser abatidas</li>
        <li className="text-[#222]"><b>Profissionalização:</b> CNPJ pode reduzir impostos significantly</li>
        <li className="text-[#222]"><b>Credibilidade:</b> Operação regular atrai melhores inquilinos</li>
        <li className="text-[#222]"><b>Planejamento:</b> Controle financeiro mais eficiente</li>
      </ul>
      
      <h2 className="font-title text-xl text-primary mt-6 mb-2">Casos reais: o que pode acontecer</h2>
      
      <div className="bg-yellow-50 p-4 rounded-lg mb-4 border-l-4 border-yellow-500">
        <h3 className="font-medium text-yellow-800 mb-2">Exemplo 1: Anfitrião Airbnb</h3>
        <p className="text-yellow-700 text-sm">Receita anual: R$ 80.000 (não declarada)<br/>
        Multa potencial: R$ 56.000 + juros + processo</p>
      </div>
      
      <div className="bg-yellow-50 p-4 rounded-lg mb-4 border-l-4 border-yellow-500">
        <h3 className="font-medium text-yellow-800 mb-2">Exemplo 2: Proprietário múltiplos imóveis</h3>
        <p className="text-yellow-700 text-sm">Receita anual: R$ 120.000 (50% declarada)<br/>
        Multa potencial: R$ 42.000 + processo criminal</p>
      </div>
      
      <div className="bg-primary/5 p-6 rounded-lg mt-8">
        <h2 className="font-title text-xl text-primary mb-4">🛡️ Como posso te ajudar</h2>
        <p className="text-[#222] mb-4">Ofereço <b>gestão completa dos seus imóveis</b> e te conectamos com especialistas:</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li className="text-[#222]">Administração completa dos seus aluguéis (tradicional e Airbnb)</li>
          <li className="text-[#222]">Organização de toda documentação para contadores</li>
          <li className="text-[#222]">Indicação de contadores especialistas em imóveis</li>
          <li className="text-[#222]">Gestão fiscal operacional dos contratos</li>
          <li className="text-[#222]">Relatórios financeiros detalhados para declaração</li>
          <li className="text-[#222]">Consultoria sobre CNPJ vs. Pessoa Física (com especialistas)</li>
          <li className="text-[#222]">Suporte para adequação à nova legislação</li>
        </ul>
        
        <p className="text-[#222] mb-4"><b>Vantagem:</b> Você fica tranquilo com a gestão dos imóveis enquanto nossos parceiros contadores cuidam da parte fiscal.</p>
        
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
      <p className="text-[#222] mb-4">A Receita Federal já sinalizou que <b>não haverá tolerância</b> após 2026. Proprietários que não se adequarem enfrentarão:</p>
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
          <p className="text-[#666]">A legislação afeta <b>todos os tipos de aluguel</b>: residencial tradicional, comercial e hospedagem (Airbnb, temporada). Proprietários de qualquer tipo de imóvel alugado devem declarar.</p>
        </div>
        
        <div className="border-l-4 border-primary pl-6">
          <h3 className="font-medium text-primary mb-2">Qual é exatamente a multa de 70% para proprietários?</h3>
          <p className="text-[#666]">A multa é de <b>até 70% do valor sonegado</b> mais juros e correção. Se você deixou de declarar R$ 60.000 em aluguéis, pode pagar multa de R$ 42.000.</p>
        </div>
        
        <div className="border-l-4 border-primary pl-6">
          <h3 className="font-medium text-primary mb-2">Como a Receita Federal vai descobrir aluguéis não declarados?</h3>
          <p className="text-[#666]">Através de <b>cruzamento automático de dados</b>: movimentação bancária, informações do Airbnb/Booking, declarações dos inquilinos e algoritmos de inteligência artificial.</p>
        </div>
        
        <div className="border-l-4 border-primary pl-6">
          <h3 className="font-medium text-primary mb-2">Posso regularizar aluguéis antigos antes de 2026?</h3>
          <p className="text-[#666]">Sim! É possível fazer <b>declaração retificadora</b> para regularizar anos anteriores com multas menores. Quanto antes regularizar, menor a penalidade.</p>
        </div>
      </div>
      
      <p className="mt-6 text-base text-[#222] font-medium">Quem se organizar agora terá vantagem competitiva e tranquilidade. Quem deixar para depois pode perder tudo que construiu.</p>
    </main>
    </>
  );
}
