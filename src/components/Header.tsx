import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart-store";

const nav = [
  { to: "/", label: "Hem" },
  { to: "/catering", label: "Catering" },
  { to: "/dekoration", label: "Dekoration" },
  { to: "/galleri", label: "Galleri" },
  { to: "/om-oss", label: "Om oss" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const count = useCart((s) => s.items.reduce((n, i) => n + i.qty, 0));
  const openCart = useCart((s) => s.open);
  const pathname = useRouterState({ select: (r) => r.location.pathname });

  return (
    <header className="sticky top-0 z-40 bg-brand-beige/85 backdrop-blur-md border-b border-brand-green/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="font-serif text-2xl tracking-tight font-bold text-brand-green shrink-0">
          FoodByHunny
        </Link>

        <nav className="hidden lg:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
          {nav.map((n) => {
            const active = n.to === "/" ? pathname === "/" : pathname.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`transition-colors hover:text-brand-gold ${active ? "text-brand-gold" : "text-brand-green"}`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={openCart}
            aria-label="Öppna varukorg"
            className="relative p-2 text-brand-green hover:text-brand-gold transition-colors"
          >
            <ShoppingBag className="size-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-brand-gold text-white text-[10px] font-bold w-4 h-4 rounded-full grid place-items-center">
                {count}
              </span>
            )}
          </button>
          <button
            className="lg:hidden p-2 text-brand-green"
            aria-label="Meny"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-green/5 bg-brand-beige">
          <nav className="flex flex-col px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-widest border-b border-brand-green/5 last:border-0 text-brand-green hover:text-brand-gold"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
