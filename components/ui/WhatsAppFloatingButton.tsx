import { MessageCircle } from "lucide-react";

export function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/201284744633"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-950/40 transition hover:scale-105 hover:bg-emerald-300"
      aria-label="Contact BuiltIt on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
