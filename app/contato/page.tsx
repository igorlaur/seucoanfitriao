"use client";
import { Phone, MapPin, Clock, CheckCircle } from "lucide-react";

export default function Contato() {
  const wpp = process.env.NEXT_PUBLIC_WPP || "5511952286097";
  const wppUrl = `https://wa.me/${wpp}?text=${encodeURIComponent("Olá! Vi o site e gostaria de saber mais sobre os serviços de gestão Airbnb. Podem me ajudar?")}`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header da página */}
        <div className="text-center mb-12">
          <h1 className="font-title text-4xl md:text-5xl text-primary mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre gestão Airbnb ou solicite uma proposta personalizada. 
            Nossa equipe Superhost está pronta para ajudar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* WhatsApp Section */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-8 shadow-lg">
            <h2 className="font-title text-3xl mb-4">
              💬 Fale Direto no WhatsApp
            </h2>
            <p className="text-green-50 mb-6 text-lg">
              Resposta em até 24h! Nossa equipe está online para atender você.
            </p>
            <a 
              href={wppUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-green-50 transition-colors shadow-md mb-6"
            >
              <Phone size={28} />
              Chamar no WhatsApp
            </a>
            
            <div className="border-t border-green-400 pt-6 mt-6">
              <p className="text-green-100 text-sm mb-2">
                <strong>Número direto:</strong>
              </p>
              <p className="text-white text-xl font-semibold">
                (11) 95228-6097
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Informações de contato */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-title text-2xl text-primary mb-6">
                📞 Informações de contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                  <Phone className="text-green-600" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-gray-600">(11) 95228-6097</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-red-50 rounded-lg">
                  <MapPin className="text-red-600" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Atendimento</p>
                    <p className="text-gray-600">Zona Oeste de São Paulo</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                  <Clock className="text-purple-600" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Horário</p>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-600 text-sm">WhatsApp 24h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefícios de entrar em contato */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-title text-xl text-primary mb-4">
                🎯 O que você ganha ao entrar em contato:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-900">Análise gratuita do seu imóvel</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-900">Projeção personalizada de receita</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-900">Consultoria inicial sem compromisso</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-900">Proposta comercial transparente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
