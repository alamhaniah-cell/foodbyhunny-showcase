import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-banquet.jpg";
import africanImg from "@/assets/food-african.jpg";
import asianImg from "@/assets/food-asian.jpg";
import medImg from "@/assets/food-mediterranean.jpg";
import backdropImg from "@/assets/decor-backdrop.jpg";
import balloonsImg from "@/assets/decor-balloons.jpg";
import lightingImg from "@/assets/decor-lighting.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FoodByHunny — Catering & Dekorationsuthyrning" },
      {
        name: "description",
        content:
          "Välkommen till FoodByHunny. Catering med smaker från hela världen och exklusiv dekorationsuthyrning för bröllop, fester och företagsevent.",
      },
      { property: "og:title", content: "FoodByHunny — Catering & Dekoration" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Elegant cateringbord med ljus och blommor"
            width={1920}
            height={1280}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green/80 via-brand-green/50 to-brand-green/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-brand-beige animate-fade-in">
            <span className="eyebrow text-brand-gold mb-6 block">Catering · Dekoration · Event</span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6">
              Välkommen till <br />
              <span className="italic">FoodByHunny</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 opacity-90 font-light leading-relaxed max-w-xl">
              Vi erbjuder catering med smaker från hela världen och uthyrning av exklusiv dekoration för livets alla stora ögonblick.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/catering"
                className="px-8 py-4 bg-brand-gold hover:bg-brand-gold/90 text-white uppercase tracking-[0.2em] text-xs font-bold transition-all"
              >
                Beställ Catering
              </Link>
              <Link
                to="/dekoration"
                className="px-8 py-4 border border-brand-beige/60 hover:bg-brand-beige hover:text-brand-green text-brand-beige uppercase tracking-[0.2em] text-xs font-bold transition-all"
              >
                Hyr Dekoration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATERING TEASER */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="eyebrow block mb-4">Världens kök</span>
            <h2 className="font-serif text-4xl md:text-5xl">Utforska våra menyer</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Från krämig hummus till handgjord sushi – vi skapar oförglömliga smakupplevelser för ditt event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: africanImg, label: "Afrikansk Mat", title: "Marockansk Festbuffé", price: "Från 285 kr / person" },
              { img: medImg, label: "Medelhavet", title: "Mezze Deluxe", price: "Från 245 kr / person" },
              { img: asianImg, label: "Asiatisk Mat", title: "Premium Sushi Omakase", price: "Från 425 kr / person" },
            ].map((c) => (
              <Link
                key={c.title}
                to="/catering"
                className="group block"
              >
                <div className="overflow-hidden mb-4 aspect-[4/5] bg-secondary">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-end border-b border-brand-green/10 pb-4">
                  <div>
                    <span className="eyebrow text-[10px]">{c.label}</span>
                    <h3 className="font-serif text-xl mt-1">{c.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{c.price}</p>
                  </div>
                  <span className="text-brand-gold font-bold text-xs uppercase tracking-tighter group-hover:translate-x-1 transition-transform">
                    Se mer →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/catering"
              className="inline-block px-8 py-4 border border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-beige uppercase tracking-[0.2em] text-xs font-bold transition-all"
            >
              Se hela menyn
            </Link>
          </div>
        </div>
      </section>

      {/* DECORATION SECTION */}
      <section className="bg-brand-green py-24 px-6 text-brand-beige">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow text-brand-gold block mb-4">Event Design</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              Skapa magi med <span className="italic">rätt dekoration</span>
            </h2>
            <p className="text-brand-beige/70 mb-10 leading-relaxed">
              Vi hyr ut allt från eleganta backdrops till skräddarsydda ballongarrangemang och bordsdukningar. Oavsett om det är bröllop, baby shower eller företagsevent hjälper vi er att sätta stämningen.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { title: "Bröllop", text: "Allt för er stora dag" },
                { title: "Baby Shower", text: "Söta och stilfulla teman" },
                { title: "Födelsedagar", text: "Personliga firanden" },
                { title: "Företagsevent", text: "Professionell elegans" },
              ].map((c) => (
                <div key={c.title} className="border border-brand-beige/10 p-5 hover:bg-brand-beige/5 transition-colors">
                  <h4 className="text-brand-gold font-serif text-lg mb-1">{c.title}</h4>
                  <p className="text-brand-beige/60 text-xs">{c.text}</p>
                </div>
              ))}
            </div>
            <Link
              to="/dekoration"
              className="inline-block px-8 py-4 bg-brand-gold text-white hover:bg-brand-gold/90 uppercase tracking-[0.2em] text-xs font-bold transition-all"
            >
              Utforska dekoration
            </Link>
          </div>
          <div className="relative aspect-square">
            <img
              src={backdropImg}
              alt="Elegant bröllopsbackdrop"
              loading="lazy"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-brand-gold p-8 hidden md:block">
              <p className="text-white font-serif text-3xl leading-tight">
                100+
                <br />
                <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold">Artiklar</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow block mb-3">Inspiration</span>
              <h2 className="font-serif text-4xl">Från våra evenemang</h2>
            </div>
            <Link to="/galleri" className="text-brand-gold uppercase tracking-widest text-xs font-bold hover:underline">
              Se hela galleriet →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[balloonsImg, lightingImg, backdropImg, asianImg].map((src, i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden">
                <img
                  src={src}
                  alt="Galleribild"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto bg-brand-cream border border-brand-green/10 px-8 py-16 text-center">
          <span className="eyebrow block mb-4">Redo att börja planera?</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Låt oss skapa ert nästa evenemang</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Berätta om ert evenemang så återkommer vi med ett skräddarsytt förslag inom 24 timmar.
          </p>
          <Link
            to="/kontakt"
            className="inline-block px-10 py-4 bg-brand-green text-brand-beige hover:bg-brand-gold uppercase tracking-[0.2em] text-xs font-bold transition-all"
          >
            Kontakta oss
          </Link>
        </div>
      </section>
    </>
  );
}
