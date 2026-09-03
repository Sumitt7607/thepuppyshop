import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, HeartHandshake, ShieldCheck, Stethoscope, Star, BadgeCheck, Phone, Award, Sparkles } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { HeroSlider } from "@/components/site/HeroSlider";
import { CustomerSlider } from "@/components/site/CustomerSlider";
import { BreedCard } from "@/components/site/BreedCard";

import { breeds, reviews } from "@/components/site/data";
import customer1 from "@/assets/customer-1.jpg";
import customer2 from "@/assets/customer-2.jpg";
import customer3 from "@/assets/customer-3.jpg";
import customer4 from "@/assets/customer-4.jpg";
import customer5 from "@/assets/customer-5.jpg";
import customer9 from "@/assets/customer-9.jpg";

import shihtzu from "@/assets/breed-shihtzu.jpg";
import beagle from "@/assets/breed-beagle.jpg";
import gsd from "@/assets/breed-gsd.jpg";
import cavalier from "@/assets/breed-cavalier.jpg";
import bichon from "@/assets/breed-bichon.jpg";
import husky from "@/assets/breed-husky.jpg";

const categoryBanners = [
  {
    title: "Small Breed Puppies",
    subtitle: "for apartments and compact homes",
    img: shihtzu,
    link: "/dogs",
  },
  {
    title: "Medium Breed Puppies",
    subtitle: "for balanced companionship and activity",
    img: beagle,
    link: "/dogs",
  },
  {
    title: "Large Breed Puppies",
    subtitle: "for active families and spacious homes",
    img: gsd,
    link: "/dogs",
  },
  {
    title: "Truly Devoted Companion",
    subtitle: "loyal & loving lifelong family members",
    img: cavalier,
    link: "/dogs",
  },
  {
    title: "Adorable, Fluffy, and Full of Expression",
    subtitle: "playful pups with irresistible charm",
    img: bichon,
    link: "/dogs",
  },
  {
    title: "I Am Adopted",
    subtitle: "Puppies that have found their families",
    img: husky,
    link: "/reviews",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Puppies for Sale in Delhi NCR | The Puppy Shop" },
      {
        name: "description",
        content:
          "Buy healthy, vet-checked puppies in Delhi NCR. 25+ breeds, KCI papers, free first-year vet support. Trusted by 15,000+ families.",
      },
      { property: "og:title", content: "Puppies for Sale in Delhi NCR | The Puppy Shop" },
      {
        property: "og:description",
        content: "Healthy, vaccinated puppies from Delhi NCR's most loved puppy home.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero slider + real customer photo grid */}
      <section className="w-full">
        <div className="grid lg:grid-cols-[2fr_1fr]">
          <HeroSlider />
          <div className="grid grid-cols-2 grid-rows-2">
            {[customer1, customer2, customer4, customer5].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Happy customers with their new puppies"
                loading="lazy"
                className="h-full min-h-[130px] w-full object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Customer pairs slider */}
      <CustomerSlider />

      {/* Trust strip */}
      <section className="bg-lime">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 text-center md:grid-cols-4">
          {[
            ["15,000+", "Happy Families"],
            ["25+", "Available Breeds"],
            ["100%", "Vet Checked"],
            ["12 yrs", "Of Experience"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-2xl font-extrabold text-primary-foreground md:text-3xl">
                {n}
              </p>
              <p className="text-xs font-bold tracking-wide text-primary-foreground/80 uppercase">
                {l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust strip */}

      {/* Buy Healthy Puppies for Sale in Delhi NCR Section */}
      <section className="bg-background py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-left">
            <p className="font-display text-base font-extrabold text-lime-dark tracking-wide">
              Buy Healthy Puppies for Sale in Delhi NCR
            </p>
            <h2 className="mt-1 font-display text-3xl font-black text-[#2b7ca9] md:text-4xl">
              Best Puppy Pet Shop in Delhi
            </h2>
            <div className="mt-4">
              <Link
                to="/dogs"
                className="inline-block rounded-md bg-[#9ec044] px-6 py-2.5 font-display text-xs font-black tracking-wider text-white uppercase shadow-sm transition-colors hover:bg-[#8cb838]"
              >
                ALL PUPPIES FOR SALE
              </Link>
            </div>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
            {breeds.map((b) => (
              <BreedCard key={b.name} breed={b} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose The Puppy Shop - Redesigned Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-pink-soft/20 to-background py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-12">
          {/* Left Column: Title & Benefit Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-lime/20 px-3.5 py-1 text-xs font-black uppercase text-lime-dark tracking-wider">
                🏆 #1 Pet Shop in Delhi NCR
              </span>
              <h2 className="mt-3 font-display text-3xl font-black text-ink md:text-4xl lg:text-5xl leading-tight">
                Why Choose <span className="text-[#2b7ca9]">The Puppy Shop?</span>
              </h2>
              <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                Delhi NCR's most trusted puppy home. We combine ethical breeding, rigorous health checks, and lifetime care support.
              </p>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2">
              {[
                {
                  title: "Trusted by 15,000+ Families",
                  desc: "A decade of bringing happy puppies to homes across Delhi NCR.",
                  icon: Award,
                  color: "bg-[#2b7ca9]/10 text-[#2b7ca9]",
                },
                {
                  title: "100% Healthy & Vaccinated",
                  desc: "Every puppy is vet-checked, dewormed and fully vaccinated.",
                  icon: ShieldCheck,
                  color: "bg-lime/20 text-lime-dark",
                },
                {
                  title: "KCI Registered Pedigrees",
                  desc: "Genuine papers and transparent breeder details with every pup.",
                  icon: BadgeCheck,
                  color: "bg-[#2b7ca9]/10 text-[#2b7ca9]",
                },
                {
                  title: "Safe Home Delivery Across NCR",
                  desc: "Safe, climate-controlled transport right to your doorstep.",
                  icon: Sparkles,
                  color: "bg-lime/20 text-lime-dark",
                },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className={`group flex items-start gap-3.5 rounded-2xl border border-border/70 bg-card p-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#2b7ca9]/40 hover:shadow-md ${
                      item.fullWidth ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-extrabold ${item.color} transition-transform duration-300 group-hover:scale-110`}>
                      <IconComp className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-extrabold text-ink group-hover:text-[#2b7ca9] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Premium Photo Collage + Floating Trust Badges */}
          <div className="relative lg:col-span-5 pb-6">
            {/* Background Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-pink-soft/50 to-lime/20 blur-2xl opacity-60 -z-10" />

            <div className="relative grid grid-cols-2 gap-3.5">
              {/* Top Large Photo */}
              <div className="col-span-2 relative group overflow-hidden rounded-2xl ring-4 ring-white shadow-lg">
                <img
                  src={customer9}
                  alt="Happy couple with their new puppy"
                  loading="lazy"
                  width={900}
                  height={700}
                  className="h-64 sm:h-72 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white">
                  <span className="font-display text-xs font-extrabold drop-shadow-md">
                    Verified Puppy Parent
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-extrabold">
                    ⭐ 4.9 / 5 Rating
                  </span>
                </div>
              </div>

              {/* Bottom Left Photo */}
              <div className="group overflow-hidden rounded-2xl ring-4 ring-white shadow-md">
                <img
                  src={customer1}
                  alt="Mother and daughter with puppy"
                  loading="lazy"
                  width={900}
                  height={700}
                  className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom Right Photo */}
              <div className="group overflow-hidden rounded-2xl ring-4 ring-white shadow-md">
                <img
                  src={customer3}
                  alt="Couple with Shih Tzu puppy"
                  loading="lazy"
                  width={900}
                  height={700}
                  className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Floating Trust Card Badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-11/12 rounded-xl bg-card/95 backdrop-blur-md border border-border p-3 shadow-xl flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime/20 text-lime-dark font-extrabold">
                  ✓
                </span>
                <div>
                  <p className="font-display font-extrabold text-ink leading-tight">100% Health Certified</p>
                  <p className="text-[10px] text-muted-foreground">KCI Pedigree & Vet Support</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="rounded-lg bg-[#2b7ca9] px-3 py-1.5 font-display text-[11px] font-extrabold text-white shadow-xs hover:bg-[#206084] transition-colors shrink-0"
              >
                Visit Store
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-pink-soft py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-3">
          {[
            [Stethoscope, "Health Guarantee", "Written health guarantee with every puppy we hand over."],
            [ShieldCheck, "Ethical Breeding", "Only home-raised litters from verified, audited breeders."],
            [HeartHandshake, "Lifetime Support", "Training, nutrition and grooming guidance for life."],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Stethoscope;
            return (
              <div key={t as string} className="rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)]">
                <I className="h-9 w-9 text-pink-deep" />
                <h3 className="mt-4 font-display text-xl font-extrabold text-ink">{t as string}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d as string}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reviews with real customer photos */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-center font-display text-3xl font-extrabold text-ink md:text-4xl">
          Happy Customer Reviews
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
          Real stories and pictures from families who brought home their puppies from The Puppy Shop.
        </p>
        <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <blockquote key={r.name} className="flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: r.rating || 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-lime/20 px-2.5 py-0.5 text-xs font-bold text-lime-dark">
                    <BadgeCheck className="h-3.5 w-3.5" /> Verified Parent
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/80 italic">"{r.text}"</p>
              </div>
              <footer className="flex items-center gap-3 border-t border-border/60 bg-pink-soft/40 p-4">
                <img
                  src={r.image}
                  alt={r.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-pink-deep/30"
                />
                <div>
                  <p className="font-display text-sm font-extrabold text-ink">{r.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {r.city} • <span className="font-semibold text-pink-deep">{r.breed}</span>
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>


      {/* 6 Feature Banners Grid Section */}
      <section className="w-full bg-border/40 py-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {categoryBanners.map((card, idx) => (
            <Link
              key={idx}
              to={card.link}
              className="group relative h-64 sm:h-72 w-full overflow-hidden block"
            >
              <img
                src={card.img}
                alt={card.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/35 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white leading-snug drop-shadow-md">
                  {card.title}
                </h3>
                {card.subtitle && (
                  <p className="mt-2 text-xs sm:text-sm font-medium text-white/90 max-w-xs drop-shadow-sm">
                    {card.subtitle}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>



      {/* CTA */}
      <section className="bg-lime">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-12 text-center">
          <h2 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">
            Ready to meet your new best friend?
          </h2>
          <p className="max-w-xl text-sm text-primary-foreground/85">
            Visit our Delhi & Gurgaon stores or call us and we'll help you pick the perfect puppy for your
            family.
          </p>
          <Link
            to="/contact"
            className="rounded-full bg-ink px-8 py-3 font-display font-extrabold text-background"
          >
            Book a Visit
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

