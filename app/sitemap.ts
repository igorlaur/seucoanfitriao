import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://seucoanfitriao.com.br";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/servicos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/sobre`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contato`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/blog/limpeza-profissional`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/blog/decoracao-por-bairro-publico`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/blog/precificacao-inteligente`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/blog/checklist-anfitriao`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
