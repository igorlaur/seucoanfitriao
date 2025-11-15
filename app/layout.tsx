import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./components/MobileMenu";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Seu Coanfitrião | Gestão de Airbnb na Zona Oeste de SP",
  description:
    "Empresa Superhost especializada em gestão de imóveis para Airbnb. Atendemos toda a Zona Oeste de São Paulo. Planos a partir de 10%.",
  metadataBase: new URL("https://seucoanfitriao.com.br"),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seucoanfitriao.com.br',
    title: 'Seu Coanfitrião | Gestão de Airbnb na Zona Oeste de SP',
    description: 'Empresa Superhost especializada em gestão de imóveis para Airbnb. Atendemos toda a Zona Oeste de São Paulo. Planos a partir de 10%.',
    siteName: 'Seu Coanfitrião',
    images: [
      {
        url: '/logo1.png',
        width: 1200,
        height: 630,
        alt: 'Seu Coanfitrião - Gestão de Airbnb',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seu Coanfitrião | Gestão de Airbnb na Zona Oeste de SP',
    description: 'Empresa Superhost especializada em gestão de imóveis para Airbnb. Atendemos toda a Zona Oeste de São Paulo. Planos a partir de 10%.',
    images: ['/logo1.png'],
  },
  keywords: [
    'gestão airbnb',
    'airbnb zona oeste sp',
    'hospedagem são paulo',
    'superhost',
    'aluguel temporada',
    'butantã',
    'pinheiros',
    'vila madalena',
    'perdizes',
    'lapa'
  ],
  authors: [{ name: 'Seu Coanfitrião' }],
  creator: 'Seu Coanfitrião',
  publisher: 'Seu Coanfitrião',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://seucoanfitriao.com.br',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased bg-background text-foreground font-sans`}>
        {/* Google Analytics (gtag.js) condicional */}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}</Script>
          </>
        ) : null}

        {/* Schema Markup - LocalBusiness */}
        <Script id="schema-local-business" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Seu Coanfitrião",
              "description": "Empresa Superhost especializada em gestão de imóveis para Airbnb na Zona Oeste de São Paulo",
              "url": "https://seucoanfitriao.com.br",
              "logo": "https://seucoanfitriao.com.br/logo1.png",
              "image": "https://seucoanfitriao.com.br/logo1.png",
              "telephone": "+55 11 95228-6097",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR",
                "areaServed": "Zona Oeste de São Paulo"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": -23.5505,
                  "longitude": -46.6333
                },
                "geoRadius": "20000"
              },
              "sameAs": [
                "https://wa.me/5511952286097"
              ],
              "priceRange": "$$",
              "openingHours": "Mo-Su 08:00-22:00"
            }
          `}
        </Script>

        {/* Schema Markup - Service */}
        <Script id="schema-service" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Gestão de Airbnb São Paulo",
              "description": "Serviços profissionais de coanfitrião para Airbnb em São Paulo com foco na Zona Oeste",
              "provider": {
                "@type": "Organization",
                "name": "Seu Coanfitrião",
                "url": "https://seucoanfitriao.com.br"
              },
              "areaServed": {
                "@type": "Place",
                "name": "São Paulo, SP"
              },
              "category": "Gestão de Propriedades",
              "serviceType": "Coanfitrião Airbnb",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "BRL"
              }
            }
          `}
        </Script>

        {/* Schema Markup - Organization */}
        <Script id="schema-organization" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Seu Coanfitrião",
              "url": "https://seucoanfitriao.com.br",
              "logo": "https://seucoanfitriao.com.br/logo1.png",
              "description": "Gestão profissional de propriedades Airbnb em São Paulo com foco em maximizar receita e satisfação dos hóspedes",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-95228-6097",
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
              },
              "founder": {
                "@type": "Person",
                "name": "Seu Coanfitrião"
              },
              "foundingDate": "2024",
              "knowsAbout": [
                "Gestão Airbnb",
                "Hospedagem São Paulo",
                "Coanfitrião",
                "Revenue Management",
                "Limpeza Profissional"
              ]
            }
          `}
        </Script>

        {/* Header Moderno */}
        <header className="w-full border-b border-muted bg-white sticky top-0 z-30 shadow-sm">
          <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo1.svg" 
                alt="Seu Coanfitrião" 
                width={180} 
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </Link>
            
            {/* Menu Desktop */}
            <nav className="hidden md:flex gap-8 text-base md:text-lg font-medium">
              <Link href="/" className="text-primary hover:underline">Principal</Link>
              <Link href="/coanfitriao-sao-paulo" className="text-primary hover:underline">Coanfitrião SP</Link>
              <Link href="/blog" className="text-primary hover:underline">Guia do Anfitrião</Link>
              <a 
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WPP || "5511952286097"}?text=${encodeURIComponent("Olá! Gostaria de falar com a Seu Coanfitrião.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Fale Conosco
              </a>
            </nav>

            {/* Menu Mobile Component */}
            <MobileMenu />
          </div>
        </header>

        <main className="min-h-[70vh]">{children}</main>

        {/* Footer Moderno */}
        <footer className="bg-slate-900 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
          </div>

          <div className="relative z-10">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                
                {/* Company Info */}
                <div className="lg:col-span-1">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Seu Coanfitrião
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Empresa <strong className="text-yellow-400">Superhost certificada</strong> especializada em gestão de imóveis Airbnb em São Paulo. 
                      Maximizamos sua receita com gestão 100% terceirizada.
                    </p>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                      <span className="text-slate-300 text-sm">(11) 95228-6097</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-slate-300 text-sm">Zona Oeste, São Paulo</span>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Nossos Serviços</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="/coanfitriao-sao-paulo" className="text-slate-300 hover:text-white transition-colors text-sm">
                        Gestão Completa Airbnb
                      </a>
                    </li>
                    <li>
                      <a href="/blog/consultoria-airbnb-sao-paulo" className="text-slate-300 hover:text-white transition-colors text-sm">
                        Consultoria Especializada
                      </a>
                    </li>
                    <li>
                      <a href="/blog/limpeza-profissional" className="text-slate-300 hover:text-white transition-colors text-sm">
                        Limpeza Profissional
                      </a>
                    </li>
                    <li>
                      <a href="/blog/precificacao-inteligente" className="text-slate-300 hover:text-white transition-colors text-sm">
                        Precificação Inteligente
                      </a>
                    </li>
                    <li>
                      <a href="/servicos" className="text-slate-300 hover:text-white transition-colors text-sm">
                        Todos os Serviços
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Recursos</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="/blog" className="text-slate-300 hover:text-white transition-colors text-sm">
                        Guia do Anfitrião
                      </a>
                    </li>
                    <li>
                      <a href="/blog/como-ser-superhost-airbnb" className="text-slate-300 hover:text-white transition-colors text-sm">
                        Como ser Superhost
                      </a>
                    </li>
                    <li>
                      <a href="/blog/erros-que-custam-dinheiro-airbnb" className="text-slate-300 hover:text-white transition-colors text-sm">
                        Erros que Custam Dinheiro
                      </a>
                    </li>
                    <li>
                      <a href="/blog/checklist-anfitriao" className="text-slate-300 hover:text-white transition-colors text-sm">
                        Checklist do Anfitrião
                      </a>
                    </li>
                    <li>
                      <a href="/blog/nova-lei-alugueis-2026" className="text-slate-300 hover:text-white transition-colors text-sm">
                        Nova Lei dos Aluguéis
                      </a>
                    </li>
                  </ul>
                </div>

                {/* CTA & Social */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Fale Conosco</h4>
                  <p className="text-slate-300 text-sm mb-4">
                    Receba uma análise gratuita do seu imóvel e descubra como aumentar sua receita.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_WPP || "5511952286097"}?text=${encodeURIComponent("Olá! Vi o site e gostaria de saber mais sobre gestão Airbnb.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full justify-center"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>

                  {/* Horarios */}
                  <div className="text-slate-400 text-xs">
                    <p className="mb-1">⏰ <strong>Atendimento:</strong></p>
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>WhatsApp: 24h todos os dias</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Section */}
            <div className="border-t border-slate-800">
              <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      </div>
                      <span className="text-yellow-400 font-semibold text-sm">Superhost Certificado</span>
                    </div>
                    <div className="text-slate-400 text-xs">
                      <span>🛡️ Empresa licenciada • 🏆 +30% receita média • ⭐ 98% satisfação</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-slate-400 text-xs">
                    <a href="/sobre" className="hover:text-white transition-colors">Sobre</a>
                    <a href="/contato" className="hover:text-white transition-colors">Contato</a>
                    <span>•</span>
                    <span>Prestadores de Serviços Especializados</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-slate-800">
              <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <p className="text-slate-400 text-sm">
                    © {new Date().getFullYear()} <strong>Seu Coanfitrião</strong>. Todos os direitos reservados.
                  </p>
                  <div className="flex items-center gap-4 text-slate-400 text-sm">
                    <span>Gestão profissional de imóveis Airbnb em São Paulo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Botão Flutuante WhatsApp */}
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WPP || "5511952286097"}?text=${encodeURIComponent("Olá! Gostaria de falar com a Seu Coanfitrião.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
          title="Fale conosco no WhatsApp"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
