import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  Star,
  BadgeCheck,
  Phone,
  Award,
  Sparkles,
  MapPin,
  Truck,
  HelpCircle,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { HeroSlider } from "@/components/site/HeroSlider";
import { CustomerSlider } from "@/components/site/CustomerSlider";
import { BreedCard } from "@/components/site/BreedCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I buy a puppy in Delhi NCR from The Puppy Shop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can browse our available puppies online or call/WhatsApp us at +91 96257 96546. You can visit our store in Gurugram or Delhi to meet the puppies in person, or request safe climate-controlled doorstep delivery anywhere across Delhi NCR."
      }
    },
    {
      "@type": "Question",
      "name": "Are all puppies vaccinated, dewormed, and KCI registered?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Every puppy from The Puppy Shop is 100% vet-checked, dewormed, vaccinated, and comes with a written health guarantee and genuine Kennel Club of India (KCI) pedigree paperwork."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide same-day home delivery for puppies in Delhi, Gurgaon, and Noida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide safe, sanitized, and climate-controlled home delivery right to your doorstep across all sectors in Delhi, Gurugram, Noida, Greater Noida, Faridabad, and Ghaziabad."
      }
    },
    {
      "@type": "Question",
      "name": "Which dog breeds are best for Delhi NCR apartments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Top apartment-friendly breeds in Delhi NCR include Shih Tzu, Toy Poodle, Maltipoo, Bichon Frise, French Bulldog, and Cavalier King Charles Spaniel due to their compact size, friendly temperament, and low shedding."
      }
    },
    {
      "@type": "Question",
      "name": "What health guarantee and vet support do you provide after purchase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide a comprehensive written health guarantee, free 1st-year veterinary consultation support, diet and vaccination charts, and lifetime guidance on nutrition and training."
      }
    },
    {
      "@type": "Question",
      "name": "Can I visit your pet store in Delhi NCR to interact with the puppies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our puppy centers in Sector 29 Gurugram and Delhi are open every day from 10:00 AM to 8:00 PM. We welcome families to meet and play with the puppies before adopting."
      }
    }
  ]
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Buy Puppies in Delhi NCR | Top Pet Shop in Delhi & Gurgaon - The Puppy Shop" },
      {
        name: "description",
        content:
          "Buy healthy, KCI registered & vet-checked puppies in Delhi NCR. 25+ pure breeds including Shih Tzu, Toy Poodle, Golden Retriever & Beagle with free 1st-year vet support and doorstep delivery across Delhi, Gurgaon, Noida & Faridabad.",
      },
      {
        name: "keywords",
        content:
          "buy puppies in Delhi NCR, puppies for sale in Delhi, best puppy pet shop Delhi, dog shop in Gurgaon, puppy shop Noida, buy Shih Tzu in Delhi, Golden Retriever puppy Delhi NCR, Toy Poodle puppy Gurgaon, KCI certified puppies Delhi, ethical dog breeders Delhi NCR",
      },
      { property: "og:title", content: "Buy Puppies in Delhi NCR | Top Pet Shop in Delhi & Gurgaon" },
      {
        property: "og:description",
        content:
          "Delhi NCR's #1 trusted home for healthy, vaccinated, KCI registered puppies with 100% health guarantee and home delivery across Delhi, Gurgaon, and Noida.",
      },
      { property: "og:url", content: "https://www.thepuppyshop.store/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thepuppyshop.store/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
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



      {/* Delhi NCR Coverage & Doorstep Delivery Hubs */}
      <section className="bg-slate-50/80 py-16 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-lime/20 px-3.5 py-1 text-xs font-black uppercase text-lime-dark tracking-wider">
              <Truck className="h-3.5 w-3.5" /> Doorstep Delivery & Store Visits
            </span>
            <h2 className="mt-3 font-display text-3xl font-black text-ink md:text-4xl">
              Buy Puppies in <span className="text-[#2b7ca9]">Delhi NCR</span> & Surrounding Areas
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              We offer safe, climate-controlled puppy delivery and welcome in-person visits to our puppy facilities across Delhi NCR.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "South & Central Delhi",
                areas: "Greater Kailash, Saket, Vasant Kunj, Hauz Khas, Defence Colony, South Ext, Connaught Place, Chanakyapuri",
                tag: "Same Day Delivery",
              },
              {
                region: "Gurugram / Gurgaon",
                areas: "Sector 29, Golf Course Road, DLF Phase 1-5, Sohna Road, Cyber City, Sushant Lok, Nirvana Country",
                tag: "Physical Store & Viewing",
              },
              {
                region: "Noida & Greater Noida",
                areas: "Sector 18, Sector 50, Sector 62, Sector 137, Noida Expressway, Greater Noida West, Gaur City",
                tag: "Doorstep Delivery",
              },
              {
                region: "West & North Delhi",
                areas: "Dwarka, Punjabi Bagh, Rohini, Pitampura, Janakpuri, Rajouri Garden, Paschim Vihar, Model Town",
                tag: "Express Delivery",
              },
              {
                region: "Faridabad & Ghaziabad",
                areas: "Sector 15 Faridabad, Green Field, Surajkund, Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension",
                tag: "Safe Transit Delivery",
              },
              {
                region: "All Delhi NCR Districts",
                areas: "Complete vaccination certificates, KCI pedigree, microchip, and initial puppy starter kit included.",
                tag: "100% Health Guarantee",
              },
            ].map((hub, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-5 shadow-xs transition-all duration-300 hover:border-[#2b7ca9]/50 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#2b7ca9] shrink-0" />
                    <h3 className="font-display text-base font-extrabold text-ink">{hub.region}</h3>
                  </div>
                  <span className="rounded-md bg-lime/20 px-2 py-0.5 text-[10px] font-extrabold text-lime-dark uppercase">
                    {hub.tag}
                  </span>
                </div>
                <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                  {hub.areas}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section for Delhi NCR */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-soft px-3.5 py-1 text-xs font-black uppercase text-pink-deep tracking-wider">
              <HelpCircle className="h-3.5 w-3.5" /> Got Questions?
            </span>
            <h2 className="mt-3 font-display text-3xl font-black text-ink md:text-4xl">
              Frequently Asked Questions About <span className="text-[#2b7ca9]">Buying Puppies in Delhi NCR</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Everything you need to know about puppy adoption, health certifications, and delivery in Delhi NCR.
            </p>
          </div>

          <div className="mt-10">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                {
                  id: "faq-1",
                  q: "How can I buy a puppy in Delhi NCR from The Puppy Shop?",
                  a: "You can browse our available puppies on our website or contact us directly via Phone / WhatsApp at +91 96257 96546. You can visit our store in Sector 29 Gurugram or Delhi to meet the puppies in person, or request safe climate-controlled doorstep delivery anywhere across Delhi NCR.",
                },
                {
                  id: "faq-2",
                  q: "Are all puppies vaccinated, dewormed, and KCI registered?",
                  a: "Yes! Every puppy from The Puppy Shop is 100% vet-checked, dewormed, and given age-appropriate vaccinations. We provide genuine Kennel Club of India (KCI) pedigree documentation, microchip verification, and a comprehensive health guarantee card.",
                },
                {
                  id: "faq-3",
                  q: "Do you provide same-day home delivery for puppies in Delhi, Gurgaon, and Noida?",
                  a: "Yes, we provide safe, sanitized, and climate-controlled home delivery right to your doorstep across all sectors in Delhi, Gurugram, Noida, Greater Noida, Faridabad, and Ghaziabad.",
                },
                {
                  id: "faq-4",
                  q: "Which dog breeds are best for Delhi NCR apartments?",
                  a: "Top apartment-friendly breeds in Delhi NCR include Shih Tzu, Toy Poodle, Maltipoo, Bichon Frise, French Bulldog, and Cavalier King Charles Spaniel due to their compact size, affectionate temperament, and low shedding habits.",
                },
                {
                  id: "faq-5",
                  q: "What health guarantee and vet support do you provide after purchase?",
                  a: "We provide a written health guarantee, free 1st-year veterinary consultation support, diet and vaccination schedules, and lifetime guidance for your puppy's grooming and nutrition.",
                },
                {
                  id: "faq-6",
                  q: "Can I visit your pet store in Delhi NCR to interact with the puppies?",
                  a: "Yes, our puppy centers in Sector 29 Gurugram and Delhi are open every day from 10:00 AM to 8:00 PM. We invite you and your family to meet, cuddle, and choose your puppy in a clean and safe environment.",
                },
              ].map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="rounded-2xl border border-border bg-card px-5 shadow-xs data-[state=open]:border-[#2b7ca9]/50"
                >
                  <AccordionTrigger className="py-4 text-left font-display text-base font-extrabold text-ink hover:no-underline hover:text-[#2b7ca9]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm text-muted-foreground leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
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

