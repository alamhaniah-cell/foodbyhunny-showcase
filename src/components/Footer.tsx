import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-green text-brand-beige mt-24">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2 space-y-4">
          <h3 className="font-serif text-3xl font-bold">FoodByHunny</h3>
          <p className="text-brand-beige/70 max-w-md leading-relaxed">
            Catering med smaker från hela världen och exklusiv dekorationsuthyrning för livets alla stora ögonblick.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="#" aria-label="Instagram" className="size-10 grid place-items-center border border-brand-beige/15 hover:border-brand-gold hover:text-brand-gold transition-colors rounded-full">
              <Instagram className="size-4" />
            </a>
            <a href="#" aria-label="Facebook" className="size-10 grid place-items-center border border-brand-beige/15 hover:border-brand-gold hover:text-brand-gold transition-colors rounded-full">
              <Facebook className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Sidor</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/catering" className="hover:text-brand-gold transition-colors">Catering</Link></li>
            <li><Link to="/dekoration" className="hover:text-brand-gold transition-colors">Dekoration</Link></li>
            <li><Link to="/galleri" className="hover:text-brand-gold transition-colors">Galleri</Link></li>
            <li><Link to="/om-oss" className="hover:text-brand-gold transition-colors">Om oss</Link></li>
            <li><Link to="/kontakt" className="hover:text-brand-gold transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Kontakt</h4>
          <ul className="space-y-3 text-sm text-brand-beige/80">
            <li className="flex items-start gap-2"><Mail className="size-4 mt-0.5 shrink-0 text-brand-gold" />info@foodbyhunny.se</li>
            <li className="flex items-start gap-2"><Phone className="size-4 mt-0.5 shrink-0 text-brand-gold" />+46 70 123 45 67</li>
            <li className="flex items-start gap-2"><MapPin className="size-4 mt-0.5 shrink-0 text-brand-gold" />Stockholm, Sverige</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-beige/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-[10px] uppercase tracking-[0.25em] text-brand-beige/40 text-center">
          © {new Date().getFullYear()} FoodByHunny. Alla rättigheter reserverade.
        </div>
      </div>
    </footer>
  );
}
