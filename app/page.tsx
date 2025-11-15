import Image from "next/image";
import { Phone, ShieldCheck, Sparkles, Users, Star } from "lucide-react";

const WPP_NUMBER = process.env.NEXT_PUBLIC_WPP || "5511952286097";
const WPP_MSG = encodeURIComponent("Olá! Gostaria de uma proposta personalizada para gestão do meu imóvel no Airbnb.");
const WPP_URL = `https://wa.me/${WPP_NUMBER}?text=${WPP_MSG}`;

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Capa com Foto de Fundo */}
      <section className="relative w-full h-[420px] md:h-[520px] flex items-center justify-center">
        <Image
          src="/living-studio-butanta.webp"
          alt="Foto do Living Studio Butantã, ambiente moderno e iluminado"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="object-cover w-full h-full"
          priority
        />
        {/* Overlay escuro para contraste */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Conteúdo centralizado */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="mb-4">
            <Image src="/airbnb-logo-0.png" alt="Logo Airbnb" width={56} height={56} className="mx-auto mb-2 rounded-full bg-white p-2 shadow-lg" />
          </div>
          <h1 className="font-title text-3xl md:text-5xl text-white mb-4 leading-tight drop-shadow-xl">
            Gestão Profissional de Imóveis para Airbnb<br />na Zona Oeste de São Paulo
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-6 max-w-2xl mx-auto">
            Transforme seu imóvel em renda extra sem dor de cabeça. Somos Superhost e cuidamos de tudo para você!
          </p>
          <a
            href={WPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-[#128C7E] transition focus:outline-none focus:ring-2 focus:ring-[#25D366]"
          >
            <Phone size={26} /> Fale Agora no WhatsApp
          </a>
        </div>
      </section>

      {/* Benefícios */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid md:grid-cols-4 gap-8">
        {[
          { icon: <ShieldCheck className="text-primary" size={32}/>, title: "Seguro AirCover", desc: "Proteção total para seu imóvel e tranquilidade para você." },
          { icon: <Sparkles className="text-secondary" size={32}/>, title: "Limpeza Profissional", desc: "Equipe especializada, padrão hoteleiro e vistoria pós-estadia." },
          { icon: <Users className="text-accent" size={32}/>, title: "Atendimento 24/7", desc: "Respostas rápidas e suporte completo para hóspedes." },
          { icon: <Star className="text-primary" size={32}/>, title: "Superhost", desc: "Histórico de alta performance e avaliações excelentes." },
        ].map((b, i) => (
          <div key={i} className="bg-[#FAF9F6] border border-[#ECECEC] rounded-xl shadow-card p-6 flex flex-col items-center text-center gap-3">
            {b.icon}
            <h3 className="font-title text-lg text-primary mb-1">{b.title}</h3>
            <p className="text-base text-[#222]">{b.desc}</p>
          </div>
        ))}
      </section>

      {/* Serviços */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h2 className="font-title text-3xl md:text-4xl text-primary mb-8 text-center">Soluções para Anfitriões</h2>
        <div className="flex justify-center">
          <div className="bg-[#FAF9F6] border border-[#ECECEC] rounded-xl shadow-card p-8 flex flex-col gap-4 max-w-2xl w-full">
            <h3 className="font-title text-xl text-primary mb-2">Deixe de se preocupar, foque no seu tempo!</h3>
            <p className="text-base text-[#222] mb-4">Você quer rentabilizar seu imóvel no Airbnb, mas não tem tempo para lidar com hóspedes, limpeza, precificação ou imprevistos? Nós resolvemos tudo para você, de forma profissional e transparente:</p>
            <ul className="list-disc pl-5 text-base text-[#222] space-y-2">
              <li>Gestão completa de reservas e comunicação com hóspedes</li>
              <li>Precificação inteligente para maximizar sua renda</li>
              <li>Equipe de limpeza especializada e vistoria pós-estadia</li>
              <li>Resolução rápida de imprevistos e suporte 24/7</li>
              <li>Otimização do anúncio e aumento da visibilidade</li>
              <li>Relatórios transparentes e acompanhamento de resultados</li>
            </ul>
            <p className="text-base text-[#222] mt-4">Deixe seu imóvel nas mãos de quem entende do mercado e garanta tranquilidade, segurança e retorno financeiro sem dor de cabeça.</p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h2 className="font-title text-3xl md:text-4xl text-primary mb-8 text-center">Depoimentos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[{
            nome: "Antonio L.",
            texto: "Profissionalismo impecável e retorno acima do esperado! Recomendo muito.",
          }, {
            nome: "Neide G.",
            texto: "Sempre disponíveis e resolutivos. Meu imóvel nunca esteve tão bem cuidado.",
          }, {
            nome: "Roberto F.",
            texto: "Equipe ágil, transparente e resultados reais. Superhost de verdade!",
          }].map((d, i) => (
            <blockquote key={i} className="bg-[#FAF9F6] border border-[#ECECEC] rounded-xl shadow-card p-6 text-base text-[#222] flex flex-col gap-2">
              <p className="text-lg font-title text-primary">“{d.texto}”</p>
              <span className="text-sm text-[#555]">{d.nome}</span>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col items-center justify-center gap-6 bg-muted rounded-xl shadow-card mb-12">
        <h2 className="font-title text-2xl md:text-3xl text-primary text-center">Receba uma proposta personalizada</h2>
        <p className="text-base text-foreground/80 text-center max-w-xl">Conte-nos sobre o seu imóvel e objetivos. Retornamos em até 24h.</p>
        <a
          href={WPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-[#128C7E] transition focus:outline-none focus:ring-2 focus:ring-[#25D366]"
        >
          <Phone size={26} /> Falar no WhatsApp
        </a>
      </section>
    </main>
  );
}
