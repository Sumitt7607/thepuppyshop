import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import customer1 from "@/assets/customer-1.jpg";
import customer4 from "@/assets/customer-4.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | The Puppy Shop, Delhi NCR" },
      {
        name: "description",
        content:
          "The Puppy Shop has helped 15,000+ Delhi NCR families bring home healthy puppies since 2013. Learn about our ethical breeding standards.",
      },
      { property: "og:title", content: "About Us | The Puppy Shop, Delhi NCR" },
      {
        property: "og:description",
        content: "Ethical breeding, vet-checked puppies and lifetime support since 2013.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-pink py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold text-ink md:text-5xl">About Us</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-extrabold text-ink">
            A home for puppies, not a shop
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            The Puppy Shop started in 2013 with one simple belief: a puppy should join your
            family healthy, socialised and genuinely loved. We work with a small circle of audited
            home breeders across India, and every litter is raised indoors with people around.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Before a puppy goes home, it is examined by our in-house vet, dewormed, vaccinated and
            microchipped. You receive the full medical file, KCI paperwork where applicable, and a
            direct line to our team for the rest of your puppy's life.
          </p>
        </div>
        <div className="grid gap-4">
          <img src={customer1} alt="Family with their puppy" loading="lazy" width={900} height={700} className="h-56 w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]" />
          <img src={customer4} alt="Father and son with a puppy" loading="lazy" width={900} height={700} className="h-56 w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]" />
        </div>
      </section>

      <section className="bg-pink-soft py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-3">
          {[
            ["Ethical sourcing", "No puppy mills. Ever. Every breeder is visited and audited by our team."],
            ["Health first", "Vet checks, vaccinations, deworming and a written health guarantee."],
            ["Lifetime guidance", "Training, food charts and grooming advice whenever you need it."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)]">
              <h3 className="font-display text-xl font-extrabold text-ink">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

