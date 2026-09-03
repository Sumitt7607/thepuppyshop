import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/dogs", label: "Dogs" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="The Puppy Shop Logo"
            className="h-11 w-11 sm:h-12 sm:w-12 object-cover rounded-2xl shadow-sm ring-2 ring-pink-deep/20 transition-transform duration-300 group-hover:scale-105"
          />

          <span className="leading-tight">
            <span className="block font-display text-lg sm:text-xl font-black text-[#171349] group-hover:text-pink-deep transition-colors">
              The Puppy Shop
            </span>
            <span className="block text-[10px] tracking-widest text-muted-foreground uppercase font-bold">
              Puppies for sale in Delhi NCR
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-bold text-ink transition-colors hover:text-pink-deep"
              activeProps={{ className: "text-pink-deep" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+919625796546"
            className="flex items-center gap-2 rounded-xl bg-[#ff6b35] px-4 py-2 text-xs sm:text-sm font-extrabold text-white shadow-md transition-all hover:bg-[#e05825] hover:scale-105 active:scale-95"
          >
            <Phone className="h-4 w-4 fill-current" /> Call Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-xl bg-[#0b192e] text-white transition-colors hover:bg-[#152847] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-4 py-3 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-bold text-ink hover:bg-accent"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+919625796546"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#ff6b35] px-5 py-2.5 text-sm font-extrabold text-white shadow-md hover:bg-[#e05825]"
          >
            <Phone className="h-4 w-4 fill-current" /> Call Now (+91 96257 96546)
          </a>
        </nav>
      )}
    </header>
  );
}
