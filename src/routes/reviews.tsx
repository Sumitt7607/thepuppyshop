import { createFileRoute } from "@tanstack/react-router";
import { Star, BadgeCheck } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { reviews } from "@/components/site/data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | The Puppy Shop" },
      {
        name: "description",
        content:
          "Read what Delhi NCR families say about buying their puppies from The Puppy Shop — health, honesty and after-sale support.",
      },
      { property: "og:title", content: "Customer Reviews | The Puppy Shop" },
      {
        property: "og:description",
        content: "Real reviews from 15,000+ happy puppy parents across Delhi NCR.",
      },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-pink-soft py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold text-ink md:text-5xl">
            Happy Customer Reviews
          </h1>
          <p className="mt-3 text-sm text-ink/70">
            Real photos & stories from 15,000+ happy puppy parents across Delhi NCR since 2013.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <blockquote
              key={i}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={r.image}
                  alt={`${r.name} with puppy`}
                  className="h-56 w-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-lime-dark backdrop-blur-md shadow-sm">
                    <BadgeCheck className="h-3.5 w-3.5" /> Verified Parent
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-amber-400">
                      {Array.from({ length: r.rating || 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-pink-deep bg-pink-soft px-2.5 py-0.5 rounded-full">
                      {r.breed}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink/80 italic">"{r.text}"</p>
                </div>
                <footer className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-base font-extrabold text-ink">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.city}, Delhi NCR</p>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

