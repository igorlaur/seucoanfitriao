import { Metadata } from 'next';
import { Star, Shield, Users, TrendingUp, Award, Clock, MapPin, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Sobre Nós | Seu Coanfitrião - Empresa Superhost São Paulo",
  description: "Conheça a Seu Coanfitrião: empresa Superhost certificada especializada em gestão Airbnb em São Paulo. 9+ anos de experiência, nota 4.83/5 e resultados comprovados.",
  keywords: "sobre seu coanfitriao, empresa superhost, gestão airbnb são paulo, coanfitrião certificado",
};

export default function Sobre() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" fill="currentColor" />
            Empresa Superhost Certificada
          </div>
          <h1 className="font-title text-4xl md:text-5xl text-primary mb-6">
            Sobre o Seu Coanfitrião
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos uma empresa <strong className="text-primary">Superhost certificada</strong> especializada em gestão profissional de imóveis Airbnb em São Paulo, com mais de <strong>9 anos de experiência</strong> e resultados comprovados.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-yellow-600" fill="currentColor" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">4.83/5</h3>
            <p className="text-gray-600">Avaliação média</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">+30%</h3>
            <p className="text-gray-600">Aumento médio de receita</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">&lt; 24h</h3>
            <p className="text-gray-600">Tempo médio de resposta</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">150+</h3>
            <p className="text-gray-600">Propriedades gerenciadas</p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-title text-3xl text-primary mb-6">Nossa Missão</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Maximizar a rentabilidade dos proprietários através de gestão profissional, transparente e totalmente terceirizada de seus imóveis no Airbnb.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Acreditamos que cada propriedade tem um potencial único, e nossa expertise está em identificar e explorar esse potencial através de:
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Gestão 100% profissional e terceirizada</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Otimização contínua de preços e ocupação</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Atendimento aos hóspedes 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Limpeza e manutenção especializadas</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-blue-600 text-white p-8 rounded-xl">
            <h3 className="font-title text-2xl mb-6">Por que Superhost?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Certificação Oficial</h4>
                  <p className="text-blue-100 text-sm">Selo Superhost mantido consistentemente há mais de 3 anos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Padrão de Excelência</h4>
                  <p className="text-blue-100 text-sm">Mais de 95% de avaliações 5 estrelas dos hóspedes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Expertise Local</h4>
                  <p className="text-blue-100 text-sm">Especialistas na Zona Oeste de São Paulo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team/Approach Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="font-title text-3xl text-primary mb-4">Nossa Abordagem</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Combinamos experiência de mercado, tecnologia avançada e atendimento humanizado para entregar resultados superiores.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-title text-xl text-gray-900 mb-3">Análise de Dados</h3>
              <p className="text-gray-600 text-sm">
                Utilizamos dados do mercado local para otimizar preços, datas e estratégias de marketing em tempo real.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-title text-xl text-gray-900 mb-3">Atendimento Humano</h3>
              <p className="text-gray-600 text-sm">
                Cada hóspede recebe atenção personalizada, garantindo experiências memoráveis e avaliações positivas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-title text-xl text-gray-900 mb-3">Gestão Completa</h3>
              <p className="text-gray-600 text-sm">
                Do check-in à limpeza, cuidamos de cada detalhe para que você tenha apenas os benefícios.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-xl">
            <h2 className="font-title text-3xl mb-4">Pronto para Maximizar sua Receita?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Descubra como nossa gestão profissional pode transformar seu imóvel em um investimento de alto rendimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WPP || "5511952286097"}?text=${encodeURIComponent("Olá! Quero saber mais sobre a gestão profissional do Seu Coanfitrião.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors"
              >
                💬 Falar no WhatsApp
              </a>
              <a
                href="/contato"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                📋 Solicitar Proposta
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
