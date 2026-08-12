"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4.5 19.2c1.4-3.4 4.3-5.2 7.5-5.2s6.1 1.8 7.5 5.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.5 7l7.5 6 7.5-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCheck({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 12.5l4.5 4.5L19 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="24"
        className="animate-check-draw"
      />
    </svg>
  );
}

function IconAlert() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 shrink-0">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 7.5v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16.3" r="1" fill="currentColor" />
    </svg>
  );
}

function IconSpinner() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 animate-spin">
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeOpacity="0.25"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [shake, setShake] = useState(false);

  const nameValid = name.trim().length >= 2;
  const emailValid = EMAIL_REGEX.test(email.trim());

  function triggerShake() {
    setShake(true);
    window.setTimeout(() => setShake(false), 500);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!nameValid || !emailValid) {
      setNameTouched(true);
      setEmailTouched(true);
      triggerShake();
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Algo salió mal. Intenta de nuevo.");
        triggerShake();
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("No pudimos conectar. Revisa tu conexión e intenta de nuevo.");
      triggerShake();
    }
  }

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-geo-bg-alt/80 py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-geo-gradient opacity-60" />

      <div className="relative mx-auto max-w-2xl px-6">
        <Reveal>
          <div
            className={`rounded-3xl bg-geo-conic bg-[length:200%_200%] p-[3px] shadow-neon animate-gradient-text ${
              shake ? "animate-shake" : ""
            }`}
          >
            <div className="rounded-3xl bg-geo-bg-alt/95 px-6 py-12 text-center sm:px-12">
              {status === "success" ? (
                <div className="animate-pop-in flex flex-col items-center py-4">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-geo-cta shadow-neon-pink">
                    <span className="absolute inset-0 rounded-full border-2 border-geo-pink animate-ring-burst" />
                    <IconCheck className="h-8 w-8 text-geo-bg" />
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-extrabold text-white sm:text-3xl">
                    ¡Estás dentro, {name.trim().split(" ")[0]}!
                  </h2>
                  <p className="mt-3 max-w-sm text-white/60">
                    Te escribiremos a <span className="text-geo-cyan">{email}</span>{" "}
                    apenas abramos tu acceso al early access.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setName("");
                      setEmail("");
                      setNameTouched(false);
                      setEmailTouched(false);
                    }}
                    className="mt-6 font-display text-sm font-bold text-white/50 underline decoration-dotted underline-offset-4 hover:text-geo-cyan"
                  >
                    Registrar a otra persona
                  </button>
                </div>
              ) : (
                <>
                  <span className="font-display text-xs font-bold tracking-[0.3em] text-geo-yellow">
                    ÚLTIMO PASO
                  </span>
                  <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
                    Sé de los primeros en jugar
                  </h2>
                  <p className="mt-3 text-white/60">
                    Únete a la lista de espera y te avisamos apenas abramos el
                    early access.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="mt-8 flex flex-col gap-4 text-left"
                  >
                    <div>
                      <label
                        htmlFor="waitlist-name"
                        className="ml-1 font-display text-[11px] font-bold uppercase tracking-widest text-white/40"
                      >
                        Nombre
                      </label>
                      <div className="relative mt-1.5">
                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35">
                          <IconUser />
                        </span>
                        <input
                          id="waitlist-name"
                          type="text"
                          placeholder="Como quieres que te llamemos"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          onBlur={() => setNameTouched(true)}
                          disabled={status === "loading"}
                          className={`w-full rounded-full border bg-white/5 py-3 pl-11 pr-10 text-white placeholder:text-white/30 outline-none transition-colors disabled:opacity-60 ${
                            nameTouched && !nameValid
                              ? "border-geo-pink/70 focus:border-geo-pink"
                              : "border-white/15 focus:border-geo-cyan"
                          }`}
                        />
                        {nameTouched && nameValid && (
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-geo-cyan">
                            <IconCheck />
                          </span>
                        )}
                      </div>
                      {nameTouched && !nameValid && (
                        <p className="mt-1.5 ml-1 flex items-center gap-1.5 text-xs font-medium text-geo-pink">
                          <IconAlert /> Ingresa al menos 2 caracteres.
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="waitlist-email"
                        className="ml-1 font-display text-[11px] font-bold uppercase tracking-widest text-white/40"
                      >
                        Email
                      </label>
                      <div className="relative mt-1.5">
                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35">
                          <IconMail />
                        </span>
                        <input
                          id="waitlist-email"
                          type="email"
                          placeholder="tu@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onBlur={() => setEmailTouched(true)}
                          disabled={status === "loading"}
                          className={`w-full rounded-full border bg-white/5 py-3 pl-11 pr-10 text-white placeholder:text-white/30 outline-none transition-colors disabled:opacity-60 ${
                            emailTouched && !emailValid
                              ? "border-geo-pink/70 focus:border-geo-pink"
                              : "border-white/15 focus:border-geo-cyan"
                          }`}
                        />
                        {emailTouched && emailValid && (
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-geo-cyan">
                            <IconCheck />
                          </span>
                        )}
                      </div>
                      {emailTouched && !emailValid && (
                        <p className="mt-1.5 ml-1 flex items-center gap-1.5 text-xs font-medium text-geo-pink">
                          <IconAlert /> Ingresa un correo válido.
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="animate-pulse-glow mt-2 flex items-center justify-center gap-2 rounded-full bg-geo-cta px-7 py-3.5 font-display font-bold text-geo-bg transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                    >
                      {status === "loading" ? (
                        <>
                          <IconSpinner /> Enviando...
                        </>
                      ) : (
                        <>
                          <IconBolt /> Únete a la lista de espera
                        </>
                      )}
                    </button>

                    {status === "error" && message && (
                      <p
                        role="status"
                        className="flex items-center justify-center gap-1.5 text-sm font-medium text-geo-pink"
                      >
                        <IconAlert /> {message}
                      </p>
                    )}

                    <p className="text-center text-xs text-white/35">
                      Sin spam. Solo te escribimos cuando puedas jugar.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
