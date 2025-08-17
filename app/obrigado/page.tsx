import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Obrigado! Em breve entraremos em contato | Seu Coanfitrião",
  description: "Mensagem enviada com sucesso! Nossa equipe entrará em contato via WhatsApp para apresentar nossos serviços de gestão Airbnb.",
  robots: "noindex, nofollow"
};

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Ícone de sucesso */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="font-title text-3xl md:text-4xl text-primary mb-4">
          🎉 Obrigado pelo seu interesse!
        </h1>

        {/* Subtítulo */}
        <p className="text-xl text-gray-700 mb-6">
          Sua mensagem foi enviada com sucesso para nosso WhatsApp
        </p>

        {/* Informações sobre próximos passos */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="font-title text-xl text-primary mb-4">📱 Próximos passos:</h2>
          <div className="space-y-3 text-left">
            <div className="flex items-start space-x-3">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
              <p className="text-gray-700">Nossa equipe receberá sua mensagem no WhatsApp</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
              <p className="text-gray-700">Entraremos em contato em até 24h úteis</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
              <p className="text-gray-700">Apresentaremos uma proposta personalizada para seu imóvel</p>
            </div>
          </div>
        </div>

        {/* Benefícios reforçados */}
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="font-title text-lg text-primary mb-3">🏆 Por que escolher o Seu Coanfitrião?</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Empresa Superhost certificada</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Especialistas na Zona Oeste de SP</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Aumento médio de 30% na receita</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Gestão 100% terceirizada</span>
            </div>
          </div>
        </div>

        {/* CTA secundário */}
        <div className="space-y-4">
          <p className="text-gray-600">
            <strong>Não quer esperar?</strong> Chame agora mesmo no WhatsApp:
          </p>
          
          <a
            href="https://wa.me/5511952286097?text=Olá! Vi o site e gostaria de saber mais sobre os serviços de gestão Airbnb. Podem me ajudar?"
            className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Chamar no WhatsApp
          </a>
        </div>

        {/* Botão para voltar */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <a
            href="/"
            className="text-primary hover:text-blue-700 transition-colors"
          >
            ← Voltar para o site
          </a>
        </div>
      </div>
    </main>
  );
}
