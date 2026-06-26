import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";

import african from "@/assets/food-african.jpg";
import arabic from "@/assets/food-arabic.jpg";
import asian from "@/assets/food-asian.jpg";
import european from "@/assets/food-european.jpg";
import mediterranean from "@/assets/food-mediterranean.jpg";
import american from "@/assets/food-american.jpg";
import desserts from "@/assets/gallery-desserts.jpg";
import event from "@/assets/gallery-event.jpg";
import balloons from "@/assets/decor-balloons.jpg";
import table from "@/assets/decor-table.jpg";
import flowers from "@/assets/decor-flowers.jpg";
import lighting from "@/assets/decor-lighting.jpg";
import backdrop from "@/assets/decor-backdrop.jpg";

type Cat = "Alla" | "Catering" | "Bufféer" | "Efterrätter" | "Evenemang" | "Dekorationer";

const items: { src: string; alt: string; cat: Cat }[] = [
  { src: african, alt: "Afrikansk catering", cat: "Catering" },
  { src: arabic, alt: "Arabisk mezze", cat: "Catering" },
  { src: asian, alt: "Sushi platter", cat: "Catering" },
  { src: european, alt: "Europeisk huvudrätt", cat: "Catering" },
  { src: mediterranean, alt: "Medelhavsbuffé", cat: "Bufféer" },
  { src: american, alt: "BBQ-buffé", cat: "Bufféer" },
  { src: desserts, alt: "Dessertbord", cat: "Efterrätter" },
  { src: event, alt: "Bröllopsfest", cat: "Evenemang" },
  { src: balloons, alt: "Ballongdekor", cat: "Dekorationer" },
  { src: table, alt: "Bordsdekoration", cat: "Dekorationer" },
  { src: flowers, alt: "Blomsterarrangemang", cat: "Dekorationer" },
  { src: lighting, alt: "Ljusdekorationer", cat: "Dekorationer" },
  { src: backdrop, alt: "Bröllopsbackdrop", cat: "Dekorationer" },
];

const cats: Cat[] = ["Alla", "Catering", "Bufféer", "Efterrätter", "Evenemang", "Dekorationer"];

export const Route = createFileRoute("/galleri")({
  head: () => ({
    meta: [
      { title: "Galleri — FoodByHunny" },
      {
        name: "description",
        content:
          "Bilder från våra cateringuppdrag, bufféer, efterrätter, evenemang och dekorationer.",
      },
      { property: "og:title", content: "Galleri — FoodByHunny" },
      { property: "og:url", content: "/galleri" },
    ],
    links: [{ rel: "canonical", href: "/galleri" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [filter, setFilter] = useState<Cat>("Alla");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = items.filter((i) => filter === "Alla" || i.cat === filter);

  return (
    <>
      <section className="pt-20 pb-12 px-6 bg-brand-cream border-b border-brand-green/5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="eyebrow block mb-4">Inspiration</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Galleri</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ett urval från våra cateringuppdrag och dekorationer för bröllop, fester och företagsevent.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {cats.map((c) => (
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

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((it, i) => (
              <button
                key={i}
                onClick={() => setLightbox(it.src)}
                className="block w-full break-inside-avoid overflow-hidden group cursor-zoom-in"
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-brand-green/95 backdrop-blur-sm grid place-items-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-brand-beige p-2 hover:text-brand-gold"
            aria-label="Stäng"
            onClick={() => setLightbox(null)}
          >
            <X className="size-6" />
          </button>
          <img
            src={lightbox}
            alt="Förstorad bild"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
