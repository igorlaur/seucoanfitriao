import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Seu Coanfitrião | Gestão de Airbnb na Zona Oeste de SP",
  description:
    "Empresa Superhost especializada em gestão de imóveis para Airbnb. Atendemos toda a Zona Oeste de São Paulo. Planos a partir de 10%.",
  metadataBase: new URL("https://seucoanfitriao.com.br"),
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
            <a href="/" className="font-title text-2xl md:text-3xl text-primary tracking-tight">Seu Coanfitrião</a>
            <nav className="flex gap-8 text-base md:text-lg font-medium">
              <a href="/" className="text-primary hover:underline">Principal</a>
              <a href="/blog" className="text-primary hover:underline">Guia do Anfitrião</a>
              <a href="/contato" className="text-primary hover:underline">Fale Conosco</a>
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
      </body>
    </html>
  );
}
