"use client";
import { useState } from "react";

export const metadata = {
  title: "Contato | Seu Coanfitrião",
  description: "Fale com nosso time — WhatsApp e formulário de contato.",
};

export default function Contato() {
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contato", { method: "POST", body: form });
    const data = await res.json();
    setStatus(data.ok ? "Enviado com sucesso!" : data.error || "Erro ao enviar");
    if (data.ok) e.currentTarget.reset();
  };

  const wpp = process.env.NEXT_PUBLIC_WPP || "5511999999999";
  const wppUrl = `https://wa.me/${wpp}?text=${encodeURIComponent("Olá! Gostaria de falar com a Seu Coanfitrião.")}`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Contato</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">Preencha o formulário ou fale conosco diretamente no WhatsApp.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <form onSubmit={onSubmit} className="rounded-lg border p-6 space-y-4">
          <div>
            <label className="text-sm">Nome</label>
            <input name="nome" required className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <div>
            <label className="text-sm">E-mail</label>
            <input type="email" name="email" required className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <div>
            <label className="text-sm">Mensagem</label>
            <textarea name="mensagem" rows={4} required className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700">Enviar</button>
          {status && <p className="text-sm text-muted-foreground">{status}</p>}
        </form>

        <div className="rounded-lg border p-6">
          <h2 className="font-semibold">WhatsApp</h2>
          <a href={wppUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 rounded-md bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700">Fale agora</a>
          <div className="mt-6 text-sm">
            <p>E-mail: contato@seucoanfitriao.com.br</p>
          </div>
        </div>
      </div>
    </div>
  );
}
