import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Minus, Plus, Search, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { cuisines, dishes, type Cuisine } from "@/lib/catering-data";
import { useCart } from "@/lib/cart-store";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering — FoodByHunny" },
      {
        name: "description",
        content:
          "Utforska vår catering med smaker från hela världen — afrikansk, arabisk, asiatisk, europeisk, medelhavet och amerikansk mat.",
      },
      { property: "og:title", content: "Catering — FoodByHunny" },
      { property: "og:url", content: "/catering" },
    ],
    links: [{ rel: "canonical", href: "/catering" }],
  }),
  component: CateringPage,
});

function CateringPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Cuisine | "Alla">("Alla");
  const [qtys, setQtys] = useState<Record<string, number>>({});
  const add = useCart((s) => s.add);
  const openCart = useCart((s) => s.open);

  const filtered = useMemo(() => {
    return dishes.filter((d) => {
      const matchCuisine = filter === "Alla" || d.cuisine === filter;
      const matchQuery =
        !query ||
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.description.toLowerCase().includes(query.toLowerCase());
      return matchCuisine && matchQuery;
    });
  }, [query, filter]);

  const setQty = (id: string, n: number) =>
    setQtys((p) => ({ ...p, [id]: Math.max(1, n) }));

  return (
    <>
      <section className="pt-20 pb-12 px-6 bg-brand-cream border-b border-brand-green/5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="eyebrow block mb-4">Vår Meny</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Catering för varje smak</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bläddra bland våra rätter från hela världen. Välj antal personer och lägg till i varukorgen så återkommer vi med ett skräddarsytt offertförslag.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Search + Filter */}
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between mb-12">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Sök maträtt..."
                className="w-full bg-brand-cream border border-brand-green/10 pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {(["Alla", ...cuisines] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 text-[11px] uppercase tracking-widest font-medium border transition-colors ${
                    filter === c
                      ? "bg-brand-green text-brand-beige border-brand-green"
                      : "bg-transparent text-brand-green border-brand-green/15 hover:border-brand-gold"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-24">Inga rätter matchade din sökning.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {filtered.map((d) => {
                const qty = qtys[d.id] ?? 10;
                return (
                  <article key={d.id} className="group flex flex-col">
                    <div className="aspect-[4/5] overflow-hidden mb-5 bg-secondary">
                      <img
                        src={d.image}
                        alt={d.name}
                        loading="lazy"
                        width={800}
                        height={1000}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-serif text-xl leading-tight">{d.name}</h3>
                        <span className="text-xs font-bold text-brand-gold whitespace-nowrap mt-1">
                          {d.price} kr
                        </span>
                      </div>
                      <span className="eyebrow text-[10px] mb-3">{d.cuisine}</span>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                        {d.description}
                      </p>
                      <div className="flex items-center gap-3 mt-auto">
                        <div className="flex items-center border border-brand-green/15 h-11">
                          <button
                            onClick={() => setQty(d.id, qty - 1)}
                            aria-label="Minska"
                            className="px-3 h-full hover:text-brand-gold"
                          >
                            <Minus className="size-3" />
                          </button>
                          <span className="px-3 text-xs font-medium w-10 text-center">{qty}</span>
                          <button
                            onClick={() => setQty(d.id, qty + 1)}
                            aria-label="Öka"
                            className="px-3 h-full hover:text-brand-gold"
                          >
                            <Plus className="size-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => {
                            add(
                              {
                                id: d.id,
                                name: d.name,
                                price: d.price,
                                unit: "person",
                                image: d.image,
                                kind: "catering",
                              },
                              qty,
                            );
                            toast.success(`${d.name} lades till i varukorgen`, {
                              action: { label: "Visa", onClick: openCart },
                            });
                          }}
                          className="flex-1 h-11 bg-brand-green text-brand-beige text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-gold transition-colors flex items-center justify-center gap-2"
                        >
                          <ShoppingBag className="size-3" /> Lägg i korg
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
