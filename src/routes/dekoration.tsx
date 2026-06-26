import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { decorations, decorCategories, type DecorCategory } from "@/lib/decoration-data";
import { useCart } from "@/lib/cart-store";

export const Route = createFileRoute("/dekoration")({
  head: () => ({
    meta: [
      { title: "Dekorationsuthyrning — FoodByHunny" },
      {
        name: "description",
        content:
          "Hyr exklusiv dekoration för bröllop, baby shower, dop, födelsedagar och företagsevent — ballonger, blommor, bakgrunder, ljus och mer.",
      },
      { property: "og:title", content: "Dekorationsuthyrning — FoodByHunny" },
      { property: "og:url", content: "/dekoration" },
    ],
    links: [{ rel: "canonical", href: "/dekoration" }],
  }),
  component: DecorationPage,
});

const occasions = [
  "Bröllop",
  "Födelsedagar",
  "Baby Shower",
  "Dop",
  "Företagsevent",
  "Festlokaler",
];

function DecorationPage() {
  const [filter, setFilter] = useState<DecorCategory | "Alla">("Alla");
  const add = useCart((s) => s.add);
  const openCart = useCart((s) => s.open);

  const filtered = useMemo(
    () => decorations.filter((d) => filter === "Alla" || d.category === filter),
    [filter],
  );

  return (
    <>
      <section className="pt-20 pb-12 px-6 bg-brand-cream border-b border-brand-green/5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="eyebrow block mb-4">Uthyrning</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Dekoration som lyfter eventet</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vi hyr ut allt du behöver för att förvandla lokalen — från ballongbågar och blomster­arrangemang till stolar, bordsdukningar och ljussättning.
          </p>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-12 px-6 bg-brand-beige">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl text-center mb-8">Vi dekorerar för</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {occasions.map((o) => (
              <div
                key={o}
                className="border border-brand-green/10 bg-brand-cream py-6 text-center text-sm font-medium hover:border-brand-gold hover:text-brand-gold transition-colors"
              >
                {o}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {(["Alla", ...decorCategories] as const).map((c) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((d) => (
              <article key={d.id} className="group bg-brand-cream border border-brand-green/5">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl">{d.name}</h3>
                    <span className="text-xs font-bold text-brand-gold whitespace-nowrap mt-1">
                      {d.price} kr
                    </span>
                  </div>
                  <span className="eyebrow text-[10px] mb-3 block">{d.category}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{d.description}</p>
                  <button
                    onClick={() => {
                      add(
                        {
                          id: d.id,
                          name: d.name,
                          price: d.price,
                          unit: "st",
                          image: d.image,
                          kind: "decoration",
                        },
                        1,
                      );
                      toast.success(`${d.name} lades till`, {
                        action: { label: "Visa", onClick: openCart },
                      });
                    }}
                    className="w-full py-3 bg-brand-green text-brand-beige text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-brand-gold transition-colors"
                  >
                    Boka
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
