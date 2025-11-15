import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "5 Erros que Fazem Anfitriões Perderem até 40% da Receita no Airbnb SP | 2025",
  description: "Descubra os 5 erros fatais que anfitriões cometem no Airbnb São Paulo e custam até R$ 5.000/mês. Guia completo com casos reais e soluções práticas para maximizar sua receita.",
  keywords: "erros airbnb são paulo, como aumentar receita airbnb, problemas airbnb sp, gestão airbnb zona oeste, anfitrião airbnb dicas",
  openGraph: {
    title: "5 Erros que Fazem Anfitriões Perderem até 40% da Receita no Airbnb SP",
    description: "Guia completo: evite os 5 erros que custam até R$ 5.000/mês aos anfitriões de São Paulo. Casos reais + soluções práticas.",
    type: "article",
    publishedTime: "2025-01-17T10:00:00.000Z",
    authors: ["Seu Coanfitrião"],
    section: "Hospedagem",
    tags: ["Airbnb", "São Paulo", "Receita", "Gestão", "Zona Oeste"],
    url: "https://seucoanfitriao.com.br/blog/erros-que-custam-dinheiro-airbnb",
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Erros que Fazem Anfitriões Perderem até 40% da Receita no Airbnb SP",
    description: "Evite os 5 erros que custam até R$ 5.000/mês aos anfitriões de São Paulo. Guia com casos reais.",
  },
  alternates: {
    canonical: "https://seucoanfitriao.com.br/blog/erros-que-custam-dinheiro-airbnb"
  }
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "5 Erros que Fazem Anfitriões Perderem até 40% da Receita no Airbnb São Paulo",
  "description": "Guia completo sobre os 5 principais erros que anfitriões cometem no Airbnb São Paulo e custam até R$ 5.000/mês em receita perdida",
  "image": "https://seucoanfitriao.com.br/logo1.png",
  "author": {
    "@type": "Organization",
    "name": "Seu Coanfitrião",
    "url": "https://seucoanfitriao.com.br"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Seu Coanfitrião",
    "logo": {
      "@type": "ImageObject",
      "url": "https://seucoanfitriao.com.br/logo1.png"
    }
  },
  "datePublished": "2025-01-17",
  "dateModified": "2025-01-17",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://seucoanfitriao.com.br/blog/erros-que-custam-dinheiro-airbnb"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quais são os principais erros que anfitriões cometem no Airbnb?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Os 5 principais erros são: 1) Preços mal calibrados (pode custar R$ 2.000-5.000/mês), 2) Fotos amadoras (reduz cliques em 50%), 3) Comunicação lenta, 4) Limpeza inconsistente, 5) Não otimizar para múltiplas plataformas (perde 30% das reservas)."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto dinheiro um anfitrião pode perder com erros no Airbnb?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anfitriões podem perder até 40% da receita potencial. Em São Paulo, isso representa entre R$ 2.000 a R$ 5.000 por mês em receita perdida, dependendo do imóvel e localização."
      }
    },
    {
      "@type": "Question",
      "name": "Como evitar erros de precificação no Airbnb São Paulo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use ferramentas de precificação dinâmica, analise a concorrência local, considere eventos e sazonalidade de São Paulo, e monitore sua taxa de ocupação. Preços devem ser ajustados semanalmente."
      }
    }
  ]
};

export default function ErrosAirbnb() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article>
          {/* Header com breadcrumb */}
          <nav className="mb-6 text-sm text-gray-600">
            <a href="/" className="hover:text-primary">Início</a> 
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-primary">Blog</a>
            <span className="mx-2">›</span>
            <span>Erros Airbnb</span>
          </nav>

          {/* Título H1 otimizado */}
          <h1 className="font-title text-3xl md:text-4xl text-primary mb-4">
            5 Erros que Fazem Anfitriões Perderem até 40% da Receita no Airbnb São Paulo
          </h1>
          
          {/* Meta informações */}
          <div className="mb-6 text-sm text-gray-600 flex items-center gap-4">
            <span>📅 Atualizado em 17 de Janeiro, 2025</span>
            <span>⏱️ 6 min de leitura</span>
            <span>🏆 Por Especialistas Superhost</span>
          </div>

          {/* Introdução otimizada */}
          <div className="bg-red-50 p-6 rounded-lg mb-8 border-l-4 border-red-500">
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>⚠️ ALERTA:</strong> Após anos gerenciando propriedades Airbnb na <strong>Zona Oeste de São Paulo</strong>, identificamos 5 erros críticos que custam caro aos anfitriões. Alguns perdem até <strong>R$ 5.000 por mês</strong> em receita potencial! Veja quais são e como evitá-los.
            </p>
          </div>

          {/* Índice do conteúdo */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="font-title text-xl text-primary mb-4">📋 Índice do Conteúdo</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#erro-precificacao" className="hover:text-primary">1. Preços mal calibrados (Custo: R$ 2.000-5.000/mês)</a></li>
              <li><a href="#erro-fotos" className="hover:text-primary">2. Fotos amadoras (-50% cliques)</a></li>
              <li><a href="#erro-comunicacao" className="hover:text-primary">3. Comunicação lenta</a></li>
              <li><a href="#erro-limpeza" className="hover:text-primary">4. Limpeza inconsistente</a></li>
              <li><a href="#erro-plataformas" className="hover:text-primary">5. Não usar múltiplas plataformas (-30% reservas)</a></li>
              <li><a href="#casos-reais" className="hover:text-primary">6. Casos reais em São Paulo</a></li>
            </ul>
          </div>

          {/* Erro 1 */}
          <section id="erro-precificacao" className="mb-8">
            <h2 className="font-title text-2xl text-primary mt-8 mb-4">
              1. 💰 Preços Mal Calibrados: O Erro Mais Caro dos Anfitriões SP
            </h2>
            
            <div className="bg-yellow-50 p-4 rounded-lg mb-4 border-l-4 border-yellow-500">
              <p className="text-gray-800"><strong>💸 Custo Real:</strong> Entre R$ 2.000 a R$ 5.000 por mês em receita perdida</p>
            </div>

            <h3 className="font-title text-lg text-gray-800 mb-3">🔍 Por que acontece?</h3>
            <p className="text-gray-700 mb-4">Muitos anfitriões de São Paulo definem preços baseados em "achismos" ou simplesmente copiam da concorrência sem analisar fatores específicos como:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Proximidade de metrô (Linha 4-Amarela valoriza +15%)</li>
              <li>Eventos em São Paulo (Rock in Rio, fórmula 1, congressos)</li>
              <li>Sazonalidade (alta temporada vs. baixa)</li>
              <li>Diferenciais do imóvel vs. concorrência local</li>
            </ul>

            <h3 className="font-title text-lg text-gray-800 mb-3">⚡ Sinais de que você está perdendo dinheiro:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Taxa de ocupação consistentemente abaixo de 65%</li>
              <li>Muitas visualizações, mas poucas reservas</li>
              <li>Hóspedes comentando sobre preço vs. qualidade</li>
              <li>Concorrência similar sempre lotada</li>
            </ul>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <p className="text-green-800"><strong>✅ Solução:</strong> Use precificação dinâmica + análise de mercado local semanal. Nossos clientes aumentam receita média em 35% só com essa otimização.</p>
            </div>
          </section>

          {/* Erro 2 */}
          <section id="erro-fotos" className="mb-8">
            <h2 className="font-title text-2xl text-primary mt-8 mb-4">
              2. 📸 Fotos Amadoras: Perdendo 50% dos Hóspedes Antes Mesmo de Entrarem
            </h2>
            
            <div className="bg-red-50 p-4 rounded-lg mb-4 border-l-4 border-red-500">
              <p className="text-gray-800"><strong>📊 Impacto:</strong> Fotos ruins reduzem cliques em até 50% e conversões em 70%</p>
            </div>

            <h3 className="font-title text-lg text-gray-800 mb-3">🚫 Erros mais comuns em São Paulo:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Fotos escuras (apartamentos SP precisam de luz artificial)</li>
              <li>Não mostrar a vista da cidade/proximidade do metrô</li>
              <li>Ângulos que fazem o espaço parecer menor</li>
              <li>Não destacar diferenciais (varanda, ar-condicionado, Wi-Fi)</li>
            </ul>

            <h3 className="font-title text-lg text-gray-800 mb-3">📈 O que funciona em SP:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Primeira foto: sala bem iluminada com vista</li>
              <li>Mostrar proximidade de pontos turísticos/metrô</li>
              <li>Fotos do entorno (padaria, mercado, transporte)</li>
              <li>Detalhes que interessam ao paulistano (internet rápida, segurança)</li>
            </ul>
          </section>

          {/* Erro 3 */}
          <section id="erro-comunicacao" className="mb-8">
            <h2 className="font-title text-2xl text-primary mt-8 mb-4">
              3. 💬 Comunicação Lenta: Como Perder Reservas em 2 Horas
            </h2>
            
            <p className="text-gray-700 mb-4">Em São Paulo, hóspedes esperam respostas rápidas. <strong>85% das reservas são confirmadas nas primeiras 2 horas</strong> após o primeiro contato.</p>

            <h3 className="font-title text-lg text-gray-800 mb-3">⏰ Benchmarks de resposta em SP:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Primeira resposta: máximo 24h</li>
              <li>Taxa de resposta: mínimo 95%</li>
              <li>Mensagens personalizadas (não genéricas)</li>
              <li>Informações específicas de São Paulo (transporte, segurança)</li>
            </ul>
          </section>

          {/* Erro 4 */}
          <section id="erro-limpeza" className="mb-8">
            <h2 className="font-title text-2xl text-primary mt-8 mb-4">
              4. 🧹 Limpeza Inconsistente: Uma Avaliação Ruim Custa 3 Meses de Reservas
            </h2>
            
            <p className="text-gray-700 mb-4">Em São Paulo, onde a concorrência é acirrada, <strong>uma avaliação abaixo de 4,7 estrelas</strong> pode derrubar seu ranking por meses.</p>

            <h3 className="font-title text-lg text-gray-800 mb-3">🎯 Padrão Zona Oeste SP:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Limpeza pós-checkout: máximo 4 horas</li>
              <li>Checklist de 47 itens (desenvolvido para SP)</li>
              <li>Produtos específicos para o clima paulistano</li>
              <li>Backup de equipe para feriados/emergências</li>
            </ul>
          </section>

          {/* Erro 5 */}
          <section id="erro-plataformas" className="mb-8">
            <h2 className="font-title text-2xl text-primary mt-8 mb-4">
              5. 🌐 Não Usar Múltiplas Plataformas: Perdendo 30% das Reservas
            </h2>
            
            <p className="text-gray-700 mb-4">Focar apenas no Airbnb é deixar dinheiro na mesa. Em São Paulo, cada plataforma atende perfis diferentes:</p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800">Airbnb</h4>
                <p className="text-sm text-blue-700">Viajantes jovens, experiências</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800">Booking.com</h4>
                <p className="text-sm text-green-700">Executivos, estadias longas</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-800">VRBO</h4>
                <p className="text-sm text-purple-700">Famílias, grupos maiores</p>
              </div>
            </div>
          </section>

          {/* Casos reais */}
          <section id="casos-reais" className="mb-8">
            <h2 className="font-title text-2xl text-primary mt-8 mb-4">
              📊 Casos Reais na Zona Oeste de São Paulo
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <h3 className="font-title text-lg text-green-800 mb-3">🏠 Apartamento Butantã</h3>
                <div className="space-y-2">
                  <p className="text-sm text-green-700"><strong>Antes:</strong> R$ 3.000/mês (45% ocupação)</p>
                  <p className="text-sm text-green-700"><strong>Depois:</strong> R$ 6.200/mês (82% ocupação)</p>
                  <p className="text-lg font-bold text-green-800">+107% de aumento!</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <h3 className="font-title text-lg text-blue-800 mb-3">🏠 Kitnet Vila Madalena</h3>
                <div className="space-y-2">
                  <p className="text-sm text-blue-700"><strong>Antes:</strong> R$ 1.500/mês (60% ocupação)</p>
                  <p className="text-sm text-blue-700"><strong>Depois:</strong> R$ 2.400/mês (85% ocupação)</p>
                  <p className="text-lg font-bold text-blue-800">+60% de aumento!</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4">Principais mudanças implementadas:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Precificação dinâmica baseada em eventos de São Paulo</li>
              <li>Sessão de fotos profissional focada no público paulistano</li>
              <li>Comunicação 24/7 em português e inglês</li>
              <li>Limpeza padrão hoteleiro com equipe treinada</li>
              <li>Presença em 4 plataformas simultaneamente</li>
            </ul>
          </section>

          {/* FAQ Section */}
          <section className="mb-8">
            <h2 className="font-title text-2xl text-primary mb-6">❓ Perguntas Frequentes sobre Erros no Airbnb</h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2">Quanto tempo leva para corrigir esses erros?</h3>
                <p className="text-gray-600">Com gestão profissional, os resultados aparecem em 30-60 dias. Precificação e comunicação são imediatos, fotos levam 1 semana, limpeza 2 semanas para estabelecer rotina.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2">Posso corrigir sozinho ou preciso de ajuda profissional?</h3>
                <p className="text-gray-600">Depende do tempo e conhecimento. Anfitriões que corrigem sozinho levam 6-12 meses. Com gestão profissional, os resultados são imediatos e sustentáveis.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2">Qual erro custa mais caro em São Paulo?</h3>
                <p className="text-gray-600">Precificação mal feita é o mais caro, podendo custar R$ 2.000-5.000/mês. Em segundo lugar, fotos ruins, que reduzem reservas em 50%.</p>
              </div>
            </div>
          </section>

          {/* CTA otimizado */}
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-lg text-center">
            <h2 className="font-title text-2xl mb-4">🚀 Pare de Perder Dinheiro Hoje!</h2>
            <p className="text-lg mb-6">Nossa gestão profissional corrige todos esses erros e aumenta sua receita em até 100%. Veja seus resultados em 30 dias!</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5511952286097?text=Olá! Li sobre os 5 erros do Airbnb e quero corrigir os meus. Podem me ajudar?" 
                className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#22c55e] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Análise Gratuita WhatsApp
              </a>
              
              <a 
                href="/blog/consultoria-airbnb-sao-paulo" 
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors"
              >
                📊 Ver Consultoria Completa
              </a>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
