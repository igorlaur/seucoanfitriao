export const metadata = {
  title: "Coanfitrião Airbnb São Paulo | Gestão Profissional de Hospedagens SP",
  description: "Coanfitrião profissional para Airbnb em São Paulo. Aumente sua receita em até 40% com nossa gestão completa. Zona Oeste, Pinheiros, Vila Madalena.",
  keywords: "coanfitrião airbnb são paulo, gestão airbnb sp, coanfitrião zona oeste, airbnb pinheiros vila madalena"
};

export default function CoantritriaoSaoPaulo() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="font-title text-3xl md:text-5xl text-primary mb-4">
          Coanfitrião Airbnb em São Paulo
        </h1>
        <p className="text-xl text-[#444] mb-6">
          Gestão profissional que aumenta sua receita em até <span className="font-bold text-primary">40%</span>
        </p>
        <p className="text-lg text-[#666] mb-8">
          Especializada na Zona Oeste de SP: Pinheiros, Vila Madalena, Butantã, Vila Olímpia
        </p>
        <a 
          href="https://wa.me/5511952286097?text=Olá! Gostaria de saber mais sobre os serviços de coanfitrião para meu Airbnb em São Paulo." 
          className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#22c55e] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 Consulta Gratuita WhatsApp
        </a>
      </section>

      {/* Por que escolher section */}
      <section className="mb-12">
        <h2 className="font-title text-2xl md:text-3xl text-primary text-center mb-8">
          Por que escolher nosso serviço de coanfitrião?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-title text-lg text-primary mb-2">Aumento da Receita</h3>
            <p className="text-[#666]">Otimização de preços e ocupação para maximizar seus ganhos</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl mb-3">⭐</div>
            <h3 className="font-title text-lg text-primary mb-2">Avaliações 5 Estrelas</h3>
            <p className="text-[#666]">Padrão de excelência que garante hóspedes satisfeitos</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="font-title text-lg text-primary mb-2">Status Superhost</h3>
            <p className="text-[#666]">Estratégias para alcançar e manter o selo de qualidade</p>
          </div>
        </div>
      </section>

      {/* Serviços section */}
      <section className="mb-12">
        <h2 className="font-title text-2xl md:text-3xl text-primary text-center mb-8">
          Serviços completos de coanfitrião
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-title text-xl text-primary mb-4">Gestão Operacional</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-[#444]">Criação e otimização de anúncios</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-[#444]">Gestão de reservas e calendários</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-[#444]">Comunicação 24/7 com hóspedes</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-[#444]">Check-in e check-out automatizados</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-title text-xl text-primary mb-4">Serviços Especializados</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-[#444]">Limpeza profissional padrão hoteleiro</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-[#444]">Precificação inteligente e dinâmica</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-[#444]">Fotografia profissional do imóvel</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-[#444]">Relatórios financeiros detalhados</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Regiões atendidas */}
      <section className="mb-12">
        <h2 className="font-title text-2xl md:text-3xl text-primary text-center mb-8">
          Regiões atendidas em São Paulo
        </h2>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-primary/5 rounded-lg">
            <h3 className="font-medium text-primary">Pinheiros</h3>
            <p className="text-sm text-[#666]">Centro financeiro</p>
          </div>
          <div className="p-4 bg-primary/5 rounded-lg">
            <h3 className="font-medium text-primary">Vila Madalena</h3>
            <p className="text-sm text-[#666]">Vida noturna</p>
          </div>
          <div className="p-4 bg-primary/5 rounded-lg">
            <h3 className="font-medium text-primary">Butantã</h3>
            <p className="text-sm text-[#666]">Universitário</p>
          </div>
          <div className="p-4 bg-primary/5 rounded-lg">
            <h3 className="font-medium text-primary">Vila Olímpia</h3>
            <p className="text-sm text-[#666]">Corporativo</p>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="mb-12 bg-primary/5 p-8 rounded-lg">
        <h2 className="font-title text-2xl md:text-3xl text-primary text-center mb-8">
          Resultados comprovados
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">40%</div>
            <p className="text-[#666]">Aumento médio na receita</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.9</div>
            <p className="text-[#666]">Avaliação média dos imóveis</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">85%</div>
            <p className="text-[#666]">Taxa de ocupação média</p>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="mb-12">
        <h2 className="font-title text-2xl md:text-3xl text-primary text-center mb-8">
          Como funciona nosso serviço
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="font-medium mb-2">Análise gratuita</h3>
            <p className="text-sm text-[#666]">Avaliamos o potencial do seu imóvel</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="font-medium mb-2">Setup completo</h3>
            <p className="text-sm text-[#666]">Criamos e otimizamos seu anúncio</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="font-medium mb-2">Gestão 24/7</h3>
            <p className="text-sm text-[#666]">Cuidamos de tudo para você</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
            <h3 className="font-medium mb-2">Relatórios mensais</h3>
            <p className="text-sm text-[#666]">Transparência total nos resultados</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="font-title text-2xl md:text-3xl text-primary text-center mb-8">
          Perguntas frequentes sobre coanfitrião
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-medium text-primary mb-2">Quanto custa o serviço de coanfitrião?</h3>
            <p className="text-[#666]">Nossos honorários são baseados em percentual da receita, garantindo que só ganhamos quando você ganha. Entre em contato para uma proposta personalizada.</p>
          </div>
          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-medium text-primary mb-2">Quanto tempo leva para ver resultados?</h3>
            <p className="text-[#666]">Normalmente observamos melhorias na ocupação e receita a partir do segundo mês de gestão, com resultados plenos em 3-6 meses.</p>
          </div>
          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-medium text-primary mb-2">Trabalham com outros sites além do Airbnb?</h3>
            <p className="text-[#666]">Sim! Gerenciamos anúncios no Airbnb, Booking.com, VRBO e outras plataformas para maximizar sua exposição.</p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="text-center bg-primary text-white p-8 rounded-lg">
        <h2 className="font-title text-2xl md:text-3xl mb-4">
          Pronto para transformar seu imóvel em uma máquina de receita?
        </h2>
        <p className="text-xl mb-6">
          Consulta gratuita para avaliar o potencial do seu Airbnb em São Paulo
        </p>
        <a 
          href="https://wa.me/5511952286097?text=Olá! Quero uma consulta gratuita sobre serviços de coanfitrião para meu Airbnb em São Paulo." 
          className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 Falar com Especialista Agora
        </a>
      </section>
    </main>
  );
}
