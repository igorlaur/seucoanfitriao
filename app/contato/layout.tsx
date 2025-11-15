// app/contato/layout.tsx  (server)
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contato | Seu Coanfitrião - Gestão Airbnb São Paulo",
  description: "Entre em contato com nosso time especializado em gestão Airbnb. WhatsApp, formulário e atendimento personalizado para proprietários em São Paulo.",
  keywords: "contato airbnb, gestão airbnb são paulo, whatsapp airbnb, coanfitrião contato",
  openGraph: {
    title: "Contato | Seu Coanfitrião",
    description: "Fale com nossa equipe Superhost. Atendimento especializado para gestão Airbnb em São Paulo.",
    type: "website",
  }
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
