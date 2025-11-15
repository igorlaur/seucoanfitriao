import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proposta Comercial - Consultoria de Kitnets',
  description: 'Proposta comercial para consultoria completa de kitnets em Feira de Santana',
}

export default function PropostaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
