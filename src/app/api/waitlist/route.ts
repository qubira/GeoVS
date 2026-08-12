import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo inválido." }, { status: 400 });
  }

  const { name, email } = (body ?? {}) as { name?: unknown; email?: unknown };

  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json(
      { error: "Ingresa un nombre válido." },
      { status: 400 }
    );
  }

  if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json(
      { error: "Ingresa un correo válido." },
      { status: 400 }
    );
  }

  try {
    await prisma.waitlist.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
      },
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        { error: "Ese correo ya está en la lista de espera." },
        { status: 409 }
      );
    }

    console.error("Error al guardar en waitlist:", error);
    return NextResponse.json(
      { error: "Algo salió mal. Intenta de nuevo en un momento." },
      { status: 500 }
    );
  }
}
