import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

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
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
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
            <nav className="flex gap-8 text-base md:text-lg font-medium">
              <Link href="/" className="text-primary hover:underline">Principal</Link>
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
          </div>
        </header>

        <main className="min-h-[70vh]">{children}</main>

        <footer className="border-t border-muted mt-12 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-8 text-base text-muted text-center">
            <p>
              © {new Date().getFullYear()} Seu Coanfitrião — Gestão de Imóveis Airbnb. Todos os direitos reservados.
            </p>
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
