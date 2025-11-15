'use client'

import { useEffect } from 'react'

export default function PropostaKitnets() {
  useEffect(() => {
    // Muda o título da página para o PDF
    document.title = 'Proposta Comercial - Consultoria de Kitnets'
  }, [])

  const downloadPDF = () => {
    // Força cores EXATAS antes da impressão
    const style = document.createElement('style')
    style.textContent = `
      @media print {
        * { 
          -webkit-print-color-adjust: exact !important; 
          color-adjust: exact !important; 
          print-color-adjust: exact !important;
        }
        
        /* Esconde elementos no-print e logos */
        .no-print {
          display: none !important;
        }
        
        /* Esconde qualquer logo ou branding */
        img[src*="logo"], 
        [class*="logo"],
        svg[class*="logo"],
        .logo,
        header,
        nav {
          display: none !important;
        }
        
        /* Remove a primeira página com o logo se existir */
        body > div:first-child {
          display: none !important;
        }
        
        /* Remove qualquer div que contenha logo */
        div:has(img[src*="logo"]),
        div:has([class*="logo"]),
        div:has(svg) {
          display: none !important;
        }
        
        /* Força apenas o conteúdo da proposta */
        body {
          margin: 0 !important;
          padding: 0 !important;
        }
        
        /* Inicia o PDF direto do conteúdo da proposta */
        #proposal-content {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }
        
        /* Gradientes com cores EXATAS */
        .bg-gradient-to-r.from-blue-600.to-blue-800 {
          background: linear-gradient(90deg, #2563eb 0%, #1e40af 100%) !important;
        }
        
        .bg-gradient-to-r.from-green-500.to-green-600 {
          background: linear-gradient(90deg, #10b981 0%, #059669 100%) !important;
        }
        
        /* Força texto branco sobre fundos coloridos */
        .text-white {
          color: #ffffff !important;
        }
        
        /* Força texto amarelo */
        .text-yellow-300 {
          color: #fde047 !important;
        }
        
        .text-yellow-200 {
          color: #fef08a !important;
        }
      }
    `
    document.head.appendChild(style)
    
    setTimeout(() => {
      window.print()
      document.head.removeChild(style)
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Conteúdo da Proposta - incluído no PDF */}
        <div id="proposal-content">
          {/* Hero */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white p-4 md:p-8 mb-8 shadow-xl">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                🏢 PROPOSTA COMERCIAL
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 text-blue-100">
                Consultoria Completa de Kitnets
              </h2>
              <div className="bg-blue-900 bg-opacity-50 rounded-lg p-3 md:p-4 inline-block">
                <p className="text-lg md:text-xl lg:text-2xl font-semibold text-yellow-300">
                  📍 Feira de Santana - Bahia
                </p>
              </div>
            </div>
          </div>

          {/* Carta ao Cliente */}
          <div className="bg-white rounded-xl shadow-xl p-4 md:p-8 mb-8 border">
            <div className="mb-6">
              <p className="text-blue-600 font-semibold text-xl md:text-2xl lg:text-3xl">Prezado Marcelo,</p>
              <p className="text-gray-800 mt-4 leading-relaxed text-base md:text-lg lg:text-xl">
                Conforme conversamos, segue a proposta de consultoria completa voltada para o projeto de kitnets em Feira de Santana. 
                O objetivo é estruturar uma análise estratégica que abrange desde a viabilidade financeira até a presença digital, 
                garantindo segurança, lucratividade e maior visibilidade para seu empreendimento.
              </p>
            </div>

            {/* 1. Escopo */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 flex items-center">
                🎯 1. Escopo da Consultoria
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600 font-bold text-lg">•</span>
                  <span className="text-gray-800 text-base md:text-lg lg:text-xl">Análise de viabilidade financeira e definição de margem de lucro</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600 font-bold text-lg">•</span>
                  <span className="text-gray-800 text-base md:text-lg lg:text-xl">Definição de público-alvo ideal</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600 font-bold text-lg">•</span>
                  <span className="text-gray-800 text-base md:text-lg lg:text-xl">Estudo de viabilidade aluguel por temporada x aluguel tradicional</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600 font-bold text-lg">•</span>
                  <span className="text-gray-800 text-base md:text-lg lg:text-xl">Estratégia de divulgação</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600 font-bold text-lg">•</span>
                  <span className="text-gray-800 text-base md:text-lg lg:text-xl">Análise do estilo de mobília</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-green-600 font-bold text-lg">•</span>
                  <span className="text-gray-800 text-base md:text-lg lg:text-xl">Sugestão de softwares de gestão para controle de aluguéis e regulamentos</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-green-600 font-bold text-lg">•</span>
                  <span className="text-gray-800 text-base md:text-lg lg:text-xl">Estudo de custos de energia (individualizada x rateada)</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-green-600 font-bold text-lg">•</span>
                  <span className="text-gray-800 text-base md:text-lg lg:text-xl">Estudo de custos de água (individualizada x rateada)</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600 font-bold text-lg">•</span>
                  <span className="text-gray-800 text-base md:text-lg lg:text-xl">Relatório final com plano de ação estratégico</span>
                </div>
              </div>
            </div>

            {/* 2. Prazos */}
            <div className="mb-8 bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                ⏰ 2. Prazos de Entrega
              </h3>
              <div className="space-y-2">
                <p className="text-gray-800">📅 <strong>Prazo estimado:</strong> até 30 dias corridos após início do trabalho</p>
                <p className="text-gray-800">🔄 <strong>Entregas parciais:</strong> podem ser realizadas para alinhamento</p>
              </div>
            </div>

            {/* 3. Investimento */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-yellow-300 p-4 md:p-8 rounded-xl mb-8 text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-yellow-300">💎 3. Investimento</h3>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-yellow-300">12x de R$ 335,15</div>
              <p className="text-lg md:text-xl lg:text-2xl text-yellow-200 mb-4">ou R$ 3.497,00 à vista</p>
              <p className="text-yellow-200 mb-4 text-base md:text-lg lg:text-xl">O valor para realização da consultoria completa</p>
              <div className="bg-green-800 bg-opacity-50 rounded-lg p-3 md:p-4">
                <p className="font-semibold text-yellow-300 text-base md:text-lg lg:text-xl">💳 Forma de pagamento:</p>
                <p className="text-yellow-300 text-base md:text-lg lg:text-xl">50% na aprovação da proposta e 50% na entrega final do relatório</p>
              </div>
            </div>

            {/* 4. Observações */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                📝 4. Observações
              </h3>
              <div className="space-y-2 text-gray-800">
                <p>⚖️ Aspectos jurídicos e tributários devem ser analisados em conjunto com advogado especializado</p>
                <p>🎯 Inclui reunião de apresentação final com análise detalhada e recomendações práticas</p>
                <p>🤝 Suporte de até 15 dias após entrega do relatório</p>
              </div>
            </div>

            {/* Encerramento */}
            <div className="text-center border-t pt-6">
              <p className="text-gray-800 mb-4">
                Coloco-me à disposição para esclarecer dúvidas e ajustar a proposta conforme sua necessidade.
              </p>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-800">Atenciosamente,</p>
                <p className="text-xl font-bold text-blue-600">Igor Laur</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTÃO BAIXAR PDF - PRINCIPAL */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 text-center mb-8 rounded-xl shadow-xl no-print">
          <h2 className="text-white text-2xl mb-4 font-bold">📄 DOWNLOAD DA PROPOSTA</h2>
          <button 
            onClick={downloadPDF}
            style={{
              backgroundColor: '#fbbf24',
              color: '#000000',
              padding: '20px 40px',
              fontSize: '18px',
              fontWeight: 'bold',
              border: '2px solid #f59e0b',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
            }}
          >
            📄 BAIXAR PDF DA PROPOSTA
          </button>
          <p className="text-green-100 mt-4 text-sm">Clique para gerar e baixar o PDF da proposta completa</p>
        </div>

        {/* Call to Action - não incluído no PDF */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl no-print mb-8">
          <h3 className="text-2xl font-bold mb-4 text-white">🚀 VAMOS COMEÇAR?</h3>
          <p className="text-xl mb-6 text-blue-100">
            Entre em contato para dar início à consultoria!
          </p>
          <div className="space-y-2">
            <p className="text-lg text-white">📱 <strong>(11) 96630-6867</strong></p>
            <p className="text-lg text-white">📧 <strong>contato@seucoanfitriao.com.br</strong></p>
          </div>
        </div>

        {/* Botão de Download PDF - Fixo na parte inferior */}
        <div className="fixed bottom-6 right-6 z-50 no-print">
          <button 
            onClick={downloadPDF}
            className="bg-green-600 text-white px-6 py-4 rounded-full text-lg font-bold hover:bg-green-700 shadow-2xl animate-pulse"
          >
            📄 Baixar PDF
          </button>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        /* Estilos para tela */
        @media screen and (max-width: 430px) {
          html {
            font-size: 18px;
          }
          body {
            font-size: 18px;
          }
        }
        
        /* Estilos para impressão - CSS muito específico */
        @media print {
          @page {
            margin: 1cm;
            size: A4;
          }
          
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          body {
            font-family: Arial, sans-serif !important;
            font-size: 16px !important;
            line-height: 1.4 !important;
            color: #000000 !important;
            background: white !important;
            margin: 0 !important;
            padding: 20px !important;
          }
          
          .no-print {
            display: none !important;
          }
          
          /* Remove qualquer footer que possa aparecer */
          footer {
            display: none !important;
          }
          
          /* Força gradiente azul EXATO com classe completa */
          .bg-gradient-to-r.from-blue-600.to-blue-800 {
            background: linear-gradient(90deg, #2563eb 0%, #1e40af 100%) !important;
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          /* Força gradiente verde EXATO com classe completa */
          .bg-gradient-to-r.from-green-500.to-green-600 {
            background: linear-gradient(90deg, #10b981 0%, #059669 100%) !important;
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          /* Selectors alternativos para garantir que funcionem */
          [class*="from-blue-600"][class*="to-blue-800"] {
            background: linear-gradient(90deg, #2563eb 0%, #1e40af 100%) !important;
          }
          
          [class*="from-green-500"][class*="to-green-600"] {
            background: linear-gradient(90deg, #10b981 0%, #059669 100%) !important;
          }
          
          /* Cores de texto EXATAS */
          .text-white {
            color: #ffffff !important;
          }
          
          .text-yellow-300 {
            color: #fde047 !important;
          }
          
          .text-yellow-200 {
            color: #fef08a !important;
          }
          
          .text-blue-100 {
            color: #dbeafe !important;
          }
          
          .text-green-100 {
            color: #dcfce7 !important;
          }
          
          .text-gray-800 {
            color: #1f2937 !important;
          }
          
          .text-blue-600 {
            color: #2563eb !important;
          }
          
          /* Fundos coloridos EXATOS */
          .bg-blue-50 {
            background-color: #eff6ff !important;
            -webkit-print-color-adjust: exact !important;
          }
          
          .bg-green-50 {
            background-color: #f0fdf4 !important;
            -webkit-print-color-adjust: exact !important;
          }
          
          .bg-gray-50 {
            background-color: #f9fafb !important;
            -webkit-print-color-adjust: exact !important;
          }
          
          .bg-yellow-50 {
            background-color: #fefce8 !important;
            -webkit-print-color-adjust: exact !important;
          }
          
          .bg-white {
            background-color: #ffffff !important;
            -webkit-print-color-adjust: exact !important;
          }
          
          /* Cores dos pontos de marcação */
          .text-blue-600 {
            color: #2563eb !important;
          }
          
          .text-green-600 {
            color: #059669 !important;
          }
          
          .text-gray-600 {
            color: #4b5563 !important;
          }
          
          /* Títulos grandes */
          h1 {
            font-size: 28px !important;
            font-weight: bold !important;
            margin-bottom: 16px !important;
          }
          
          h2 {
            font-size: 24px !important;
            font-weight: bold !important;
            margin-bottom: 14px !important;
          }
          
          h3 {
            font-size: 20px !important;
            font-weight: bold !important;
            margin-bottom: 12px !important;
          }
          
          /* Textos grandes */
          p, span, div {
            font-size: 16px !important;
            line-height: 1.4 !important;
            margin-bottom: 8px !important;
          }
          
          /* Valor principal gigante */
          .text-4xl, .text-5xl, .text-6xl {
            font-size: 32px !important;
            font-weight: bold !important;
          }
          
          /* Bordas e espaçamentos */
          .rounded-xl, .rounded-lg {
            border-radius: 8px !important;
          }
          
          .p-8, .p-4 {
            padding: 16px !important;
          }
          
          .mb-8, .mb-4 {
            margin-bottom: 16px !important;
          }
          
          /* Lista de itens com cores de fundo */
          .bg-blue-50 {
            padding: 12px !important;
            margin-bottom: 8px !important;
            border-radius: 6px !important;
          }
          
          .bg-green-50 {
            padding: 12px !important;
            margin-bottom: 8px !important;
            border-radius: 6px !important;
          }
          
          .bg-gray-50 {
            padding: 12px !important;
            margin-bottom: 8px !important;
            border-radius: 6px !important;
          }
          
          .bg-yellow-50 {
            padding: 12px !important;
            margin-bottom: 8px !important;
            border-radius: 6px !important;
          }
          
          /* Avaliações no PDF - TAMANHO GRANDE MAS CONTROLADO */
          img {
            max-width: 100% !important;
            width: 100% !important;
            height: auto !important;
            min-height: 400px !important;
            page-break-inside: avoid !important;
            object-fit: contain !important;
          }
          
          /* Container das avaliações - DENTRO DO LAYOUT */
          .space-y-8 > div {
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 20px 0 !important;
            page-break-inside: avoid !important;
            padding: 20px !important;
            overflow: hidden !important;
          }
          
          /* Imagens das avaliações - GRANDES MAS CONTIDAS */
          .space-y-8 img {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 auto !important;
            display: block !important;
            border-radius: 8px !important;
            min-height: 400px !important;
            object-fit: contain !important;
          }
        }
      `}</style>
    </div>
  )
}
