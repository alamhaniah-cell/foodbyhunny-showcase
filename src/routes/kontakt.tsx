import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — FoodByHunny" },
      {
        name: "description",
        content:
          "Kontakta FoodByHunny för catering eller dekorationsuthyrning. Vi återkommer inom 24 timmar med ett skräddarsytt förslag.",
      },
      { property: "og:title", content: "Kontakt — FoodByHunny" },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Namn krävs").max(100),
  email: z.string().trim().email("Ogiltig e-postadress").max(255),
  phone: z.string().trim().min(4, "Ange ett telefonnummer").max(40),
  date: z.string().trim().min(1, "Välj ett datum"),
  guests: z.string().trim().min(1, "Ange antal gäster").max(10),
  message: z.string().trim().min(1, "Skriv ett meddelande").max(1500),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Fyll i alla fält");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Tack! Vi återkommer inom 24 timmar.");
      form.reset();
    }, 700);
  }

  return (
    <>
      <section className="pt-20 pb-12 px-6 bg-brand-cream border-b border-brand-green/5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="eyebrow block mb-4">Kontakta oss</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Planera ditt event</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Berätta om ert evenemang så återkommer vi med ett skräddarsytt förslag inom 24 timmar.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-white shadow-elegant overflow-hidden flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="bg-brand-green text-brand-beige p-10 md:p-12 md:w-2/5 flex flex-col justify-between gap-12">
            <div>
              <h2 className="font-serif text-3xl mb-4">Hör av dig</h2>
              <p className="text-brand-beige/70 text-sm leading-relaxed">
                Vi svarar på alla förfrågningar inom ett dygn. Ring eller mejla oss gärna direkt.
              </p>
            </div>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="size-4 mt-1 text-brand-gold shrink-0" />
                <div>
                  <p className="eyebrow text-[10px] text-brand-beige/50 mb-1">E-post</p>
                  <a href="mailto:info@foodbyhunny.se" className="hover:text-brand-gold">info@foodbyhunny.se</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-4 mt-1 text-brand-gold shrink-0" />
                <div>
                  <p className="eyebrow text-[10px] text-brand-beige/50 mb-1">Telefon</p>
                  <a href="tel:+46701234567" className="hover:text-brand-gold">+46 70 123 45 67</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="size-4 mt-1 text-brand-gold shrink-0" />
                <div>
                  <p className="eyebrow text-[10px] text-brand-beige/50 mb-1">Plats</p>
                  <p>Stockholm, Sverige</p>
                </div>
              </li>
            </ul>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="size-10 grid place-items-center border border-brand-beige/15 hover:border-brand-gold hover:text-brand-gold transition-colors rounded-full">
                <Instagram className="size-4" />
              </a>
              <a href="#" aria-label="Facebook" className="size-10 grid place-items-center border border-brand-beige/15 hover:border-brand-gold hover:text-brand-gold transition-colors rounded-full">
                <Facebook className="size-4" />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="p-10 md:p-12 md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Namn" name="name" type="text" required />
            <Field label="E-post" name="email" type="email" required />
            <Field label="Telefon" name="phone" type="tel" required />
            <Field label="Datum för evenemang" name="date" type="date" required />
            <div className="md:col-span-2">
              <Field label="Antal gäster" name="guests" type="number" required />
            </div>
            <div className="md:col-span-2 space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                Meddelande
              </label>
              <textarea
                name="message"
                required
                maxLength={1500}
                rows={5}
                className="w-full border-b border-brand-green/15 py-2 focus:border-brand-gold outline-none bg-transparent text-sm resize-none transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="md:col-span-2 bg-brand-green text-brand-beige py-4 uppercase tracking-[0.25em] text-xs font-bold hover:bg-brand-gold transition-colors disabled:opacity-60"
            >
              {submitting ? "Skickar..." : "Skicka Förfrågan"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1">
      <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border-b border-brand-green/15 py-2 focus:border-brand-gold outline-none bg-transparent text-sm transition-colors"
      />
    </div>
  );
}
