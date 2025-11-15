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
  const telefone = String(form.get("telefone") || "");
  const assunto = String(form.get("assunto") || "");
  const mensagem = String(form.get("mensagem") || "");

  if (!nome || !email || !mensagem) {
    return NextResponse.json({ ok: false, error: "Campos obrigatórios não preenchidos." }, { status: 400 });
  }

  // Validação básica de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ ok: false, error: "E-mail inválido." }, { status: 400 });
  }

  // Log dos dados recebidos (para debug)
  console.log("Contato recebido:", {
    nome,
    email,
    telefone: telefone || "Não informado",
    assunto: assunto || "Não especificado",
    mensagem
  });

  // Aqui você pode implementar o envio de email
  // Por exemplo, usando Resend, Nodemailer, etc.
  
  // Simulação de delay para melhor UX
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Sempre retorna sucesso se chegou até aqui
  return NextResponse.json({ 
    ok: true, 
    message: "Mensagem enviada com sucesso!" 
  });
}
