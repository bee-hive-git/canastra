import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, first_url } = body as { email?: string; first_url?: string };

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "invalid_email", message: "E-mail inválido" },
        { status: 400 },
      );
    }

    const formBody = new URLSearchParams({
      email,
      first_url: first_url || "",
    });

    const substackResponse = await fetch("https://canastraventures.substack.com/api/v1/free", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody.toString(),
    });

    if (substackResponse.ok) {
      return NextResponse.json(
        { success: true, message: "Inscrição realizada com sucesso" },
        { status: 200 },
      );
    }

    let errorText = "";

    try {
      errorText = await substackResponse.text();
    } catch {
      errorText = "";
    }

    console.error("Substack subscription error", {
      status: substackResponse.status,
      body: errorText,
    });

    const lower = errorText.toLowerCase();

    if (lower.includes("already") || lower.includes("subscribed")) {
      return NextResponse.json(
        { error: "already_subscribed", message: "E-mail já cadastrado" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "subscription_failed", message: "Erro ao processar inscrição" },
      { status: substackResponse.status },
    );
  } catch (error) {
    console.error("Erro na API de newsletter:", error);
    return NextResponse.json(
      { error: "internal_error", message: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}
