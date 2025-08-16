import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let form;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Formato inválido." }, { status: 400 });
  }
  const nome = String(form.get("nome") || "");
  const email = String(form.get("email") || "");
  const mensagem = String(form.get("mensagem") || "");

  if (!nome || !email || !mensagem) {
    return NextResponse.json({ ok: false, error: "Campos obrigatórios." }, { status: 400 });
  }

  // Sempre retorna sucesso se chegou até aqui
  return NextResponse.json({ ok: true });
}
