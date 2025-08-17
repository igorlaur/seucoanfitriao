
import Link from "next/link";

export const metadata = {
  title: "Guia do Anfitrião | Seu Coanfitrião",
  description: "Dicas, artigos e boas práticas para anfitriões de Airbnb."
};

const posts = [
  {
    slug: "nova-lei-alugueis-2026",
    title: "Nova Lei de Aluguéis 2026: Multas de até 70% para Proprietários",
    excerpt: "⚠️ URGENTE: Nova legislação traz multas pesadas para quem não declarar aluguéis. Saiba como se proteger antes que seja tarde.",
  },
  {
    slug: "erros-que-custam-dinheiro-airbnb",
    title: "5 Erros que Fazem Anfitriões Perderem Dinheiro no Airbnb",
    excerpt: "Descubra os 5 principais erros que anfitriões cometem e que custam até 40% da receita potencial. Evite esses erros comuns em São Paulo.",
  },
  {
    slug: "por-que-contratar-coanfitriao",
    title: "Por que Contratar um Coanfitrião Vale a Pena?",
    excerpt: "Descubra quando vale a pena contratar um coanfitrião profissional. ROI, benefícios e sinais de que você precisa de ajuda.",
  },
  {
    slug: "decoracao-por-bairro-publico",
    title: "Como decorar seu imóvel para cada tipo de bairro e público alvo de locação",
    excerpt: "Descubra como adaptar a decoração do seu imóvel para diferentes perfis de hóspedes e regiões. Podemos sugerir as melhores mobílias para cada cômodo, aumentando o potencial de locação.",
  },
  {
    slug: "precificacao-inteligente",
    title: "Precificação inteligente: maximize sua renda",
    excerpt: "Saiba como definir preços competitivos e atrair mais hóspedes sem perder lucratividade.",
  },
  {
    slug: "limpeza-profissional",
    title: "Limpeza profissional: o segredo das avaliações 5 estrelas",
    excerpt: "Veja como a limpeza impacta diretamente na experiência do hóspede e nas avaliações do seu imóvel.",
  },
  {
    slug: "checklist-anfitriao",
    title: "Checklist do anfitrião: tudo o que você precisa garantir",
    excerpt: "Organize sua rotina e evite imprevistos com um checklist prático para anfitriões de Airbnb.",
  },
];

export default function Blog() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="font-title text-3xl md:text-5xl text-primary mb-8 text-center">Guia do Anfitrião</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="bg-[#FAF9F6] border border-[#ECECEC] rounded-xl shadow-card p-6 flex flex-col gap-3">
            <h2 className="font-title text-xl text-primary mb-2">{post.title}</h2>
            <p className="text-base text-[#222] mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="inline-block bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-secondary transition w-fit">Ler artigo</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
