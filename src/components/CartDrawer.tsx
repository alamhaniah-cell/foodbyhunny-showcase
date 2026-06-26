import { Link } from "@tanstack/react-router";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-store";

export function CartDrawer() {
  const { isOpen, close, items, remove, setQty, total } = useCart();

  return (
    <>
      <div
        aria-hidden
        onClick={close}
        className={`fixed inset-0 z-50 bg-brand-green/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-brand-beige shadow-elegant transition-transform duration-500 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-green/10">
          <h2 className="font-serif text-2xl">Din Varukorg</h2>
          <button onClick={close} aria-label="Stäng varukorg" className="p-2 hover:text-brand-gold">
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full grid place-items-center text-center text-muted-foreground">
              <div>
                <p className="font-serif text-xl mb-2">Varukorgen är tom</p>
                <p className="text-sm">Utforska vår meny och börja planera ditt event.</p>
              </div>
            </div>
          ) : (
            <ul className="divide-y divide-brand-green/10">
              {items.map((i) => (
                <li key={i.id} className="py-4 flex gap-4">
                  <img
                    src={i.image}
                    alt={i.name}
                    loading="lazy"
                    className="size-20 object-cover rounded-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-base truncate">{i.name}</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {i.price} kr / {i.unit}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => setQty(i.id, i.qty - 1)}
                        aria-label="Minska"
                        className="size-7 grid place-items-center border border-brand-green/15 hover:border-brand-gold"
                      >
                        <Minus className="size-3" />
                      </button>
                      <span className="text-sm w-8 text-center font-medium">{i.qty}</span>
                      <button
                        onClick={() => setQty(i.id, i.qty + 1)}
                        aria-label="Öka"
                        className="size-7 grid place-items-center border border-brand-green/15 hover:border-brand-gold"
                      >
                        <Plus className="size-3" />
                      </button>
                      <button
                        onClick={() => remove(i.id)}
                        aria-label="Ta bort"
                        className="ml-auto p-1 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-medium text-sm">{i.qty * i.price} kr</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-brand-green/10 px-6 py-5 space-y-4 bg-brand-cream">
            <div className="flex justify-between items-baseline">
              <span className="eyebrow">Estimerad summa</span>
              <span className="font-serif text-2xl">{total()} kr</span>
            </div>
            <Link
              to="/kontakt"
              onClick={close}
              className="block text-center bg-brand-green text-brand-beige py-4 uppercase tracking-[0.25em] text-xs font-bold hover:bg-brand-gold transition-colors"
            >
              Skicka Förfrågan
            </Link>
            <p className="text-[11px] text-muted-foreground text-center">
              Detta är en offertförfrågan – vi återkommer med skräddarsytt förslag inom 24 h.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
