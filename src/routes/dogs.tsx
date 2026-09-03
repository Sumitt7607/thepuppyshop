import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BreedCard } from "@/components/site/BreedCard";
import { breeds } from "@/components/site/data";

export const Route = createFileRoute("/dogs")({
  head: () => ({
    meta: [
      { title: "Dog Breeds & Puppies Available | The Puppy Shop" },
      {
        name: "description",
        content:
          "Browse small, medium and large breed puppies available in Delhi NCR with health records and KCI papers.",
      },
      { property: "og:title", content: "Dog Breeds & Puppies Available | The Puppy Shop" },
      {
        property: "og:description",
        content: "Small, medium and large breed puppies available now in Delhi NCR.",
      },
    ],
  }),
  component: Dogs,
});

const groups = ["Small Breed", "Medium Breed", "Large Breed"] as const;

function Dogs() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-pink py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold text-ink md:text-5xl">
            Puppies for Sale
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-ink/70">
            Every puppy listed below is currently available, vaccinated and ready to meet you at our
            Delhi & Gurgaon stores.
          </p>
        </div>
      </section>

      {groups.map((g) => (
        <section key={g} className="mx-auto max-w-7xl px-4 py-10">
          <h2 className="font-display text-2xl font-extrabold text-ink">{g}s</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
            {breeds
              .filter((b) => b.size === g)
              .map((b) => (
                <BreedCard key={b.name} breed={b} />
              ))}
          </div>
        </section>
      ))}
      <Footer />
    </div>
  );
}
