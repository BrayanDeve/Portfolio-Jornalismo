"use client";

import { useState } from "react";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard indisponível — o botão "enviar e-mail" acima já cobre esse caso
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="text-sm font-medium text-ink/60 hover:text-terracotta-dark transition-colors duration-300 underline underline-offset-4"
    >
      {copied ? "e-mail copiado ✓" : `ou copie: ${email}`}
    </button>
  );
}
