import { MessageCircle } from "lucide-react";

export function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/201284744633"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-lime/45 bg-lime text-slate-950 shadow-2xl shadow-[#092d20]/60 transition hover:scale-105 hover:bg-lime/90"
      aria-label="Contact BuiltIt on WhatsApp (opens in a new tab)"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
