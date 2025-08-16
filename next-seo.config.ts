import { DefaultSeoProps } from "next-seo";

const defaultSEO: DefaultSeoProps = {
  titleTemplate: "%s | Seu Coanfitrião",
  defaultTitle: "Seu Coanfitrião | Gestão de Airbnb na Zona Oeste de SP",
  description:
    "Empresa Superhost especializada em gestão de imóveis para Airbnb. Atendemos toda a Zona Oeste de São Paulo. Planos a partir de 10%.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seucoanfitriao.com.br",
    siteName: "Seu Coanfitrião",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Seu Coanfitrião",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    { name: "author", content: "Seu Coanfitrião" },
  ],
};

export default defaultSEO;
