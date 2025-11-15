export default function PropostaConsultoria() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header da empresa */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">SEU COANFITRIÃO</h1>
              <p className="text-gray-600">Consultoria Estratégica Imobiliária</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">📱 (11) 95228-6097</p>
              <p className="text-sm text-gray-600">🌐 seucoanfitriao.com.br</p>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white p-8 mb-8 shadow-xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">
              🏢 TRANSFORME SEU PROJETO DE KITNETS
            </h1>
            <h2 className="text-xl mb-6 text-blue-100">
              Em um Negócio Lucrativo e Estratégico
            </h2>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
              <p className="text-lg font-semibold">
                ⚡ Consultoria Completa - Feira de Santana
              </p>
            </div>
          </div>
        </div>

        {/* Dor do Cliente */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
          <h3 className="text-xl font-bold text-red-800 mb-4">
            ⚠️ Você está enfrentando essas dúvidas?
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-red-700">
            <div className="space-y-2">
              <p>❌ "Qual a margem de lucro ideal para kitnets?"</p>
              <p>❌ "Como definir estratégia de divulgação eficaz?"</p>
              <p>❌ "Questões tributárias me deixam perdido"</p>
            </div>
            <div className="space-y-2">
              <p>❌ "Energia individualizada ou rateada?"</p>
              <p>❌ "Qual software de gestão usar?"</p>
              <p>❌ "Como estruturar juridicamente?"</p>
            </div>
          </div>
        </div>

        {/* Solução */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
          <h3 className="text-xl font-bold text-green-800 mb-4">
            ✅ A Solução Está Aqui!
          </h3>
          <p className="text-green-700 text-lg">
            Consultoria estratégica completa que aborda <strong>TODOS os pontos críticos</strong> do seu projeto de kitnets, 
            garantindo <strong>segurança, lucratividade e visibilidade</strong> no mercado.
          </p>
        </div>

        {/* Proposta Principal */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8 border">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              📋 PROPOSTA COMERCIAL
            </h2>
            <p className="text-lg text-gray-600">Consultoria Completa de Kitnets</p>
            <p className="text-blue-600 font-semibold mt-4">Prezado Marcelo,</p>
            <p className="text-gray-600 mt-2">
              Conforme conversamos, segue a proposta de consultoria completa voltada para o projeto de kitnets em Feira de Santana.
            </p>
          </div>

          {/* Escopo */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              🎯 1. ESCOPO DA CONSULTORIA
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600 font-bold">💰</span>
                  <span className="text-gray-700">Análise de viabilidade financeira e definição de margem de lucro</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600 font-bold">🎯</span>
                  <span className="text-gray-700">Definição de público-alvo ideal</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600 font-bold">📊</span>
                  <span className="text-gray-700">Estudo: aluguel temporada x tradicional</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600 font-bold">📢</span>
                  <span className="text-gray-700">Estratégia de divulgação completa</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-green-600 font-bold">💻</span>
                  <span className="text-gray-700">Softwares de gestão e controle</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-green-600 font-bold">⚡</span>
                  <span className="text-gray-700">Estudo de custos de energia</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-green-600 font-bold">💧</span>
                  <span className="text-gray-700">Estudo de custos de água</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-green-600 font-bold">📋</span>
                  <span className="text-gray-700">Relatório final + plano estratégico</span>
                </div>
              </div>
            </div>
          </div>

          {/* Prazos */}
          <div className="mb-8 bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              ⏰ 2. PRAZOS DE ENTREGA
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700">📅 <strong>Prazo estimado:</strong> até 30 dias corridos após início</p>
              <p className="text-gray-700">🔄 <strong>Entregas parciais:</strong> para alinhamento contínuo</p>
            </div>
          </div>

          {/* Investimento */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-xl mb-8 text-center">
            <h3 className="text-2xl font-bold mb-4">💎 3. INVESTIMENTO</h3>
            <div className="text-4xl font-bold mb-2">R$ 3.500,00</div>
            <p className="text-green-100 mb-4">Valor da consultoria completa</p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="font-semibold">💳 Forma de Pagamento:</p>
              <p>50% na aprovação da proposta • 50% na entrega final</p>
            </div>
          </div>

          {/* Diferenciais */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              ⭐ 4. NOSSOS DIFERENCIAIS
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-2">🏆</div>
                <h4 className="font-bold text-blue-800">Experiência</h4>
                <p className="text-sm text-blue-600">Especialistas em Airbnb e imóveis</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl mb-2">📞</div>
                <h4 className="font-bold text-green-800">Suporte</h4>
                <p className="text-sm text-green-600">15 dias pós-entrega inclusos</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl mb-2">📊</div>
                <h4 className="font-bold text-purple-800">Reunião Final</h4>
                <p className="text-sm text-purple-600">Apresentação detalhada inclusa</p>
              </div>
            </div>
          </div>

          {/* Observações */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              📝 5. OBSERVAÇÕES IMPORTANTES
            </h3>
            <div className="space-y-2 text-gray-700">
              <p>⚖️ Aspectos jurídicos e tributários analisados em conjunto com advogado especializado</p>
              <p>🎯 Inclui reunião de apresentação final com análise detalhada e recomendações práticas</p>
              <p>🤝 Suporte de até 15 dias após entrega do relatório</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">🚀 VAMOS COMEÇAR?</h3>
            <p className="text-xl mb-6 text-blue-100">
              Transforme suas dúvidas em estratégias vencedoras!
            </p>
            <div className="space-y-4">
              <p className="text-lg">📱 <strong>(11) 95228-6097</strong></p>
              <p className="text-lg">📧 <strong>contato@seucoanfitriao.com.br</strong></p>
              <p className="text-blue-100 mt-4">
                Coloco-me à disposição para esclarecer dúvidas e ajustar a proposta conforme sua necessidade.
              </p>
            </div>
          </div>

          {/* Assinatura */}
          <div className="text-center mt-8 pt-6 border-t">
            <p className="text-lg font-semibold text-gray-800">Atenciosamente,</p>
            <p className="text-xl font-bold text-blue-600 mt-2">Igor Laur</p>
            <p className="text-gray-600">Especialista em Consultoria Imobiliária</p>
            <p className="text-sm text-gray-500 mt-2">Seu Coanfitrião - Feira de Santana</p>
          </div>
        </div>
      </div>
    </div>
  )
}
