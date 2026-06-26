import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about-kitchen.jpg";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    meta: [
      { title: "Om oss — FoodByHunny" },
      {
        name: "description",
        content:
          "FoodByHunny erbjuder catering med inspiration från världens kök samt uthyrning av dekorationer för alla typer av evenemang.",
      },
      { property: "og:title", content: "Om oss — FoodByHunny" },
      { property: "og:url", content: "/om-oss" },
    ],
    links: [{ rel: "canonical", href: "/om-oss" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-12 px-6 bg-brand-cream border-b border-brand-green/5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="eyebrow block mb-4">Vår historia</span>
          <h1 className="font-serif text-5xl md:text-6xl">Om FoodByHunny</h1>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={aboutImg}
              alt="Kock som plattar upp en rätt"
              loading="lazy"
              width={1200}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-4xl leading-tight">
              Smaker som <span className="italic">förenar</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              FoodByHunny erbjuder catering med inspiration från världens kök samt uthyrning av dekorationer för både små och stora evenemang. Vi fokuserar på kvalitet, smak och personlig service.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Vi tror att mat är mer än bara näring – det är en bro mellan kulturer och ett sätt att skapa samhörighet. Varje uppdrag är unikt och vi anpassar menyn och dekorationen efter just era önskemål.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-brand-green/10">
              {[
                { n: "10+", l: "År av erfarenhet" },
                { n: "500+", l: "Genomförda event" },
                { n: "100%", l: "Personlig service" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-serif text-3xl text-brand-gold">{s.n}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-green text-brand-beige py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="eyebrow text-brand-gold block mb-4">Våra värderingar</span>
          <h2 className="font-serif text-4xl mb-12">Vad vi står för</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { t: "Kvalitet", d: "Vi handplockar råvaror och samarbetar med lokala leverantörer för bästa resultat." },
              { t: "Smak", d: "Varje rätt är komponerad med omsorg och inspirerad av världens rika matkulturer." },
              { t: "Service", d: "Vi finns med er från första samtal till sista gästen lämnar lokalen." },
            ].map((v) => (
              <div key={v.t} className="border border-brand-beige/10 p-8 hover:bg-brand-beige/5 transition-colors">
                <h3 className="font-serif text-2xl text-brand-gold mb-3">{v.t}</h3>
                <p className="text-brand-beige/70 leading-relaxed text-sm">{v.d}</p>
              </div>
            ))}
          </div>
          <Link
            to="/kontakt"
            className="inline-block mt-12 px-10 py-4 bg-brand-gold text-white hover:bg-brand-beige hover:text-brand-green uppercase tracking-[0.2em] text-xs font-bold transition-all"
          >
            Boka en konsultation
          </Link>
        </div>
      </section>
    </>
  );
}
