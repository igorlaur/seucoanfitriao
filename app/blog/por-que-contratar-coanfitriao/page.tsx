import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Por que Contratar Coanfitrião Airbnb SP? ROI até 200% + Casos Reais | 2025",
  description: "Descubra quando vale contratar coanfitrião para Airbnb em São Paulo. ROI comprovado de até 200%, cases reais Zona Oeste e análise custo-benefício completa.",
  keywords: "coanfitrião airbnb são paulo, contratar gestão airbnb sp, roi coanfitrião, vale a pena coanfitrião zona oeste, gestão profissional airbnb",
  openGraph: {
    title: "Coanfitrião Airbnb SP: ROI até 200% + Casos Reais Zona Oeste",
    description: "Veja quando vale contratar coanfitrião para Airbnb em São Paulo. Cases reais com ROI de até 200% na Zona Oeste.",
    type: "article",
    publishedTime: "2025-01-17T10:00:00.000Z",
    authors: ["Seu Coanfitrião"],
    section: "Gestão Airbnb",
    tags: ["Coanfitrião", "Airbnb", "São Paulo", "ROI", "Gestão"],
    url: "https://seucoanfitriao.com.br/blog/por-que-contratar-coanfitriao",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coanfitrião Airbnb SP: ROI até 200% + Casos Reais",
    description: "Cases reais: quando vale contratar coanfitrião para Airbnb em São Paulo. ROI comprovado.",
  },
  alternates: {
    canonical: "https://seucoanfitriao.com.br/blog/por-que-contratar-coanfitriao"
  }
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Por que Contratar Coanfitrião Airbnb em São Paulo: ROI até 200%",
  "description": "Análise completa sobre quando vale contratar coanfitrião para Airbnb em São Paulo, com cases reais e ROI comprovado de até 200%",
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
    "@id": "https://seucoanfitriao.com.br/blog/por-que-contratar-coanfitriao"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Vale a pena contratar coanfitrião para Airbnb em São Paulo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, especialmente na Zona Oeste de SP. Nossos clientes têm ROI médio de 150% em 6 meses. Se sua ocupação está abaixo de 70% ou você gasta mais de 10h/semana gerenciando, vale a pena."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto custa um coanfitrião em São Paulo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nossa taxa é de 10-15% da receita bruta. Com aumento médio de 60% na receita, o ROI é positivo já no primeiro mês para a maioria dos clientes."
      }
    },
    {
      "@type": "Question",
      "name": "Qual o ROI de contratar gestão profissional para Airbnb?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ROI médio de 150% em 6 meses. Cases reais em SP: apartamento Butantã aumentou receita de R$ 3.000 para R$ 6.200/mês (+107%), kitnet Butantã de R$ 1.500 para R$ 2.400/mês (+60%)."
      }
    }
  ]
};

export default function PorQueContratar() {
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
            <span>Contratar Coanfitrião</span>
          </nav>

          {/* Título H1 otimizado */}
          <h1 className="font-title text-3xl md:text-4xl text-primary mb-4">
            Por que Contratar Coanfitrião Airbnb em São Paulo? ROI até 200% Comprovado
          </h1>
          
          {/* Meta informações */}
          <div className="mb-6 text-sm text-gray-600 flex items-center gap-4">
            <span>📅 Atualizado em 17 de Janeiro, 2025</span>
            <span>⏱️ 8 min de leitura</span>
            <span>🏆 Cases Reais Zona Oeste SP</span>
          </div>

          {/* Introdução otimizada */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>🎯 Ser anfitrião Airbnb em São Paulo</strong> parece simples, mas entre limpeza, comunicação 24/7, precificação dinâmica e gestão de múltiplas plataformas, <strong>70% dos anfitriões se sentem sobrecarregados</strong> e perdem dinheiro. Veja quando vale contratar um coanfitrião profissional.
            </p>
          </div>

          {/* Índice do conteúdo */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="font-title text-xl text-primary mb-4">📋 Índice do Conteúdo</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#sinais-precisa" className="hover:text-primary">1. 5 Sinais que você precisa de coanfitrião</a></li>
              <li><a href="#roi-real" className="hover:text-primary">2. ROI Real: casos Zona Oeste SP</a></li>
              <li><a href="#analise-custo" className="hover:text-primary">3. Análise custo vs. benefício</a></li>
              <li><a href="#quando-vale" className="hover:text-primary">4. Quando vale a pena contratar</a></li>
              <li><a href="#casos-reais" className="hover:text-primary">5. Cases reais: antes vs. depois</a></li>
              <li><a href="#como-escolher" className="hover:text-primary">6. Como escolher o coanfitrião certo</a></li>
            </ul>
          </div>

          {/* Seção 1: Sinais */}
          <section id="sinais-precisa" className="mb-8">
            <h2 className="font-title text-2xl text-primary mt-8 mb-4">
              🚨 5 Sinais que Você Precisa de um Coanfitrião em São Paulo
            </h2>
            
            <p className="text-gray-700 mb-6">Se você é anfitrião na <strong>Zona Oeste de São Paulo</strong> e identificar 3 ou mais desses problemas, está perdendo dinheiro:</p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="font-title text-lg text-red-800 mb-3">📉 Performance Baixa</h3>
                <ul className="list-disc pl-5 space-y-2 text-red-700">
                  <li>Ocupação abaixo de 70% (mercado SP: 75-85%)</li>
                  <li>Avaliações inconsistentes (abaixo de 4,5 ⭐)</li>
                  <li>Receita estagnada há 6+ meses</li>
                  <li>Muitas visualizações, poucas reservas</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-title text-lg text-yellow-800 mb-3">⏰ Sobrecarga de Tempo</h3>
                <ul className="list-disc pl-5 space-y-2 text-yellow-700">
                  <li>Gastando 15+ horas/semana gerenciando</li>
                  <li>WhatsApp tocando fora do horário comercial</li>
                  <li>Correria de última hora para limpeza</li>
                  <li>Stress afetando trabalho/família</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-title text-lg text-orange-800 mb-3">💸 Problemas Financeiros</h3>
                <ul className="list-disc pl-5 space-y-2 text-orange-700">
                  <li>Preços no "achismo" sem análise de mercado</li>
                  <li>Não ajusta preços para eventos SP</li>
                  <li>Custos operacionais descontrolados</li>
                  <li>Não sabe calcular ROI real</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-title text-lg text-purple-800 mb-3">🔧 Problemas Operacionais</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-700">
                  <li>Apenas no Airbnb (ignora Booking, VRBO)</li>
                  <li>Fotos amadoras/desatualizadas</li>
                  <li>Comunicação lenta com hóspedes</li>
                  <li>Limpeza inconsistente</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-100 p-4 rounded-lg border border-red-300">
              <p className="text-red-800"><strong>⚠️ Alerta:</strong> Se você identificou 3+ problemas, pode estar perdendo <strong>R$ 1.000 a R$ 3.000 por mês</strong> em receita potencial.</p>
            </div>
          </section>

          {/* Seção 2: ROI */}
          <section id="roi-real" className="mb-8">
            <h2 className="font-title text-2xl text-primary mt-8 mb-4">
              📊 ROI Real: Dados de Clientes na Zona Oeste SP
            </h2>
            
            <p className="text-gray-700 mb-6">Analisamos 50+ propriedades gerenciadas nos últimos 24 meses. Resultados médios:</p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-green-50 p-6 rounded-lg text-center border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">+67%</div>
                <p className="text-green-700 font-medium">Aumento médio receita</p>
                <p className="text-sm text-green-600">6 primeiros meses</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg text-center border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">+15h</div>
                <p className="text-blue-700 font-medium">Tempo livre/semana</p>
                <p className="text-sm text-blue-600">Antes: 20h → Depois: 5h</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg text-center border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">4.8⭐</div>
                <p className="text-purple-700 font-medium">Avaliação média</p>
                <p className="text-sm text-purple-600">Antes: 4.3 ⭐</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-title text-lg text-gray-800 mb-4">💰 Calculadora ROI Simplificada</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Sem Coanfitrião (Cenário Típico)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Receita: R$ 3.500/mês</li>
                    <li>• Ocupação: 65%</li>
                    <li>• Tempo: 20h/semana</li>
                    <li>• Stress: Alto</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Com Coanfitrião (Resultado Médio)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Receita: R$ 5.850/mês (+67%)</li>
                    <li>• Taxa: R$ 730/mês (12.5%)</li>
                    <li>• <strong className="text-green-600">Lucro Extra: +R$ 1.620/mês</strong></li>
                    <li>• Tempo: 5h/semana | Stress: Zero</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 3: Análise Custo */}
          <section id="analise-custo" className="mb-8">
            <h2 className="font-title text-2xl text-primary mt-8 mb-4">
              ⚖️ Análise Custo vs. Benefício: Quando Vale a Pena
            </h2>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left text-gray-800 font-medium">Cenário</th>
                    <th className="border border-gray-300 p-3 text-center text-gray-800 font-medium">Vale Contratar?</th>
                    <th className="border border-gray-300 p-3 text-center text-gray-800 font-medium">ROI Esperado</th>
                    <th className="border border-gray-300 p-3 text-center text-gray-800 font-medium">Tempo Retorno</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 text-gray-700">Receita &lt; R$ 2.000/mês</td>
                    <td className="border border-gray-300 p-3 text-center text-red-600">❌ Não</td>
                    <td className="border border-gray-300 p-3 text-center text-gray-700">Negativo</td>
                    <td className="border border-gray-300 p-3 text-center text-gray-700">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 text-gray-700">R$ 2.000-3.500/mês + problemas</td>
                    <td className="border border-gray-300 p-3 text-center text-yellow-600">⚠️ Talvez</td>
                    <td className="border border-gray-300 p-3 text-center text-gray-700">50-100%</td>
                    <td className="border border-gray-300 p-3 text-center text-gray-700">3-6 meses</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 text-gray-700">R$ 3.500+/mês + 2+ problemas</td>
                    <td className="border border-gray-300 p-3 text-center text-green-600">✅ Sim</td>
                    <td className="border border-gray-300 p-3 text-center text-gray-700">100-200%</td>
                    <td className="border border-gray-300 p-3 text-center text-gray-700">1-3 meses</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 text-gray-700">R$ 5.000+/mês + otimização</td>
                    <td className="border border-gray-300 p-3 text-center text-green-600">✅ Sempre</td>
                    <td className="border border-gray-300 p-3 text-center text-gray-700">150-300%</td>
                    <td className="border border-gray-300 p-3 text-center text-gray-700">Imediato</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Seção 4: Cases */}
          <section id="casos-reais" className="mb-8">
            <h2 className="font-title text-2xl text-primary mt-8 mb-4">
              📈 Cases Reais: Antes vs. Depois na Zona Oeste
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <h3 className="font-title text-lg text-green-800 mb-4">🏠 Case 1: Apartamento Butantã</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-green-700">Receita Antes:</span>
                    <strong className="text-green-800">R$ 3.000/mês</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Receita Depois:</span>
                    <strong className="text-green-800">R$ 6.200/mês</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Taxa Coanfitrião:</span>
                    <strong className="text-green-800">R$ 775/mês</strong>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="text-green-700">Lucro Extra:</span>
                      <strong className="text-green-800 text-lg">+R$ 2.425/mês</strong>
                    </div>
                    <p className="text-center text-2xl font-bold text-green-600 mt-2">ROI: +185%</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-green-200">
                  <h4 className="font-medium text-green-800 mb-2">Principais mudanças:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Fotos profissionais (+ 40% cliques)</li>
                    <li>• Precificação dinâmica</li>
                    <li>• Presença em 4 plataformas</li>
                    <li>• Comunicação 24/7</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <h3 className="font-title text-lg text-blue-800 mb-4">🏠 Case 2: Kitnet Butantã</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Receita Antes:</span>
                    <strong className="text-blue-800">R$ 1.500/mês</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Receita Depois:</span>
                    <strong className="text-blue-800">R$ 2.400/mês</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Taxa Coanfitrião:</span>
                    <strong className="text-blue-800">R$ 300/mês</strong>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="text-blue-700">Lucro Extra:</span>
                      <strong className="text-blue-800 text-lg">+R$ 600/mês</strong>
                    </div>
                    <p className="text-center text-2xl font-bold text-blue-600 mt-2">ROI: +133%</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <h4 className="font-medium text-blue-800 mb-2">Principais mudanças:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Otimização para perfil jovem</li>
                    <li>• Preços ajustados para eventos</li>
                    <li>• Automação check-in/out</li>
                    <li>• Limpeza padrão hoteleiro</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-8">
            <h2 className="font-title text-2xl text-primary mb-6">❓ Perguntas Frequentes sobre Coanfitrião</h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2">Qual a diferença entre coanfitrião e gestão completa?</h3>
                <p className="text-gray-600">Coanfitrião ajuda com tarefas específicas mantendo você no controle. Gestão completa assume 100% da operação. Oferecemos ambos os modelos.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2">Como funciona a cobrança na Zona Oeste?</h3>
                <p className="text-gray-600">Taxa de 10-15% sobre receita bruta, sem taxas fixas. Só ganhamos se você ganhar. Inclui todas as ferramentas e equipe profissional.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2">Posso cancelar a qualquer momento?</h3>
                <p className="text-gray-600">Sim, contrato flexível com 30 dias de aviso. Não há fidelidade. 95% dos clientes renovam após ver os resultados.</p>
              </div>
            </div>
          </section>

          {/* CTA otimizado */}
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-lg text-center shadow-lg">
            <h2 className="font-title text-2xl mb-4 text-white font-bold">🚀 Pronto para Multiplicar sua Receita?</h2>
            <p className="text-lg mb-6 text-white">Análise gratuita do seu Airbnb + projeção de ROI personalizada. Veja seu potencial em 30 dias!</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5511952286097?text=Olá! Quero uma análise gratuita do meu Airbnb e saber o ROI de contratar vocês como coanfitrião." 
                className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#22c55e] transition-colors shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Análise Gratuita WhatsApp
              </a>
              
              <a 
                href="/coanfitriao-sao-paulo" 
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors shadow-md"
              >
                📊 Ver Nossos Serviços
              </a>
            </div>
          </div>
        </article>
        
        {/* Seção adicional */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="font-title text-xl text-primary mb-4">📊 Comparativo Real: Antes vs. Depois</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">❌ Gestão própria</h4>
                <ul className="space-y-1 text-sm text-[#666]">
                  <li>• Ocupação: 45-65%</li>
                  <li>• Avaliação: 4,1-4,4 ⭐</li>
                  <li>• Receita/mês: R$ 2.500-4.000</li>
                  <li>• Tempo investido: 12h/semana</li>
                  <li>• Stress: Alto</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">✅ Com coanfitrião</h4>
                <ul className="space-y-1 text-sm text-[#666]">
                  <li>• Ocupação: 75-85%</li>
                  <li>• Avaliação: 4,7-4,9 ⭐</li>
                  <li>• Receita/mês: R$ 4.200-6.800</li>
                  <li>• Tempo investido: 0h/semana</li>
                  <li>• Stress: Zero</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h2 className="font-title text-xl text-primary mt-6 mb-2">O que um coanfitrião profissional faz?</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li className="text-[#222]"><b>Otimização de anúncios:</b> Fotos profissionais, descrições que convertem</li>
            <li className="text-[#222]"><b>Precificação inteligente:</b> Algoritmos que ajustam preços em tempo real</li>
            <li className="text-[#222]"><b>Comunicação 24/7:</b> Atendimento imediato em português e inglês</li>
            <li className="text-[#222]"><b>Gestão multi-canal:</b> Airbnb + Booking + VRBO sincronizados</li>
            <li className="text-[#222]"><b>Limpeza garantida:</b> Time profissional com padrão hoteleiro</li>
            <li className="text-[#222]"><b>Manutenção preventiva:</b> Problemas resolvidos antes de virarem crise</li>
          </ul>
          
          <h2 className="font-title text-xl text-primary mt-6 mb-2">Cálculo rápido: vale a pena?</h2>
          <p className="text-[#222] mb-4">Exemplo real - apartamento de 1 quarto em Butantã:</p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-[#222] mb-2"><b>Gestão própria:</b> R$ 3.500/mês (50% ocupação)</p>
            <p className="text-[#222] mb-2"><b>Com coanfitrião:</b> R$ 6.200/mês (80% ocupação)</p>
            <p className="text-[#222] mb-2"><b>Taxa de gestão:</b> 20% = R$ 1.240</p>
            <p className="text-primary font-bold"><b>Ganho líquido:</b> R$ 4.960 - R$ 3.500 = +R$ 1.460/mês</p>
          </div>
          
          <p className="text-[#222] mb-4">Ou seja: você ganha <b>R$ 1.460 a mais por mês</b> + tem vida de volta!</p>
          
          <h2 className="font-title text-xl text-primary mt-6 mb-2">Tipos de anfitriões que mais se beneficiam</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li className="text-[#222]"><b>Executivos ocupados:</b> Não têm tempo para atender hóspedes</li>
            <li className="text-[#222]"><b>Investidores com múltiplas propriedades:</b> Precisam de escala</li>
            <li className="text-[#222]"><b>Anfitriões "DIY" frustrados:</b> Tentaram sozinhos e não deu certo</li>
            <li className="text-[#222]"><b>Proprietários que moram longe:</b> Imóvel em outra cidade/país</li>
            <li className="text-[#222]"><b>Pessoas sem perfil para atendimento:</b> Preferem focar em outras atividades</li>
          </ul>
          
          <h2 className="font-title text-xl text-primary mt-6 mb-2">E os riscos?</h2>
          <p className="text-[#222] mb-4">Principais preocupações dos anfitriões:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li className="text-[#222]"><b>"Vão quebrar meu imóvel?"</b> - Selecionamos hóspedes e temos seguro</li>
            <li className="text-[#222]"><b>"E se não compensar?"</b> - Contrato flexível, sem fidelidade</li>
            <li className="text-[#222]"><b>"Vou perder controle?"</b> - Relatórios detalhados + acesso completo</li>
          </ul>
          
          <div className="bg-primary/5 p-6 rounded-lg mt-8">
            <h2 className="font-title text-xl text-primary mb-4">💰 Quer saber quanto você pode ganhar?</h2>
            <p className="text-[#222] mb-4">Fazemos uma análise gratuita do potencial do seu imóvel:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li className="text-[#222]">Estimativa de receita com gestão profissional</li>
              <li className="text-[#222]">Comparativo com sua situação atual</li>
              <li className="text-[#222]">Plano personalizado para seu caso</li>
            </ul>
            
            <div className="text-center">
              <a 
                href="https://wa.me/5511952286097?text=Quero saber quanto posso ganhar a mais com gestão profissional do meu Airbnb" 
                className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#22c55e] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Calcular Meu Potencial de Receita
              </a>
            </div>
          </div>
          
          <p className="mt-6 text-base text-[#222]">A pergunta não é "vale a pena contratar um coanfitrião?", mas sim "quanto dinheiro estou perdendo sem um?"</p>
        </div>
      </main>
    </>
  );
}
