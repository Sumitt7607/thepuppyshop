import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BreedCard } from "@/components/site/BreedCard";
import { breeds } from "@/components/site/data";

const dogsItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Puppies for Sale in Delhi NCR",
  "description": "Available healthy, vaccinated, and KCI registered puppy breeds in Delhi, Gurgaon, and Noida.",
  "itemListElement": breeds.map((b, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product",
      "name": `${b.name} Puppy in Delhi NCR`,
      "description": `Pure breed ${b.name} (${b.size}) puppy available with health check, vaccination, and KCI certification at The Puppy Shop.`,
      "image": `https://www.thepuppyshop.store${b.image}`,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "PetStore",
          "name": "The Puppy Shop Delhi NCR"
        }
      }
    }
  }))
};

export const Route = createFileRoute("/dogs")({
  head: () => ({
    meta: [
      { title: "Dog Breeds & Puppies for Sale in Delhi NCR | The Puppy Shop" },
      {
        name: "description",
        content:
          "Browse 25+ healthy small, medium, and large breed puppies available for sale in Delhi NCR. Buy KCI registered Shih Tzu, Golden Retriever, Toy Poodle, Beagle, Labrador & Husky with vet certificates.",
      },
      {
        name: "keywords",
        content:
          "puppies for sale in Delhi NCR, buy dog breeds Delhi, Shih Tzu puppy Gurgaon, Golden Retriever puppy Noida, Toy Poodle Delhi, Beagle puppy Delhi NCR, Labrador puppy sale Delhi, KCI registered dogs Delhi",
      },
      { property: "og:title", content: "Dog Breeds & Puppies for Sale in Delhi NCR | The Puppy Shop" },
      {
        property: "og:description",
        content:
          "Browse healthy, vaccinated small, medium & large breed puppies available now in Delhi, Gurugram, and Noida.",
      },
      { property: "og:url", content: "https://www.thepuppyshop.store/dogs" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thepuppyshop.store/dogs" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(dogsItemListSchema),
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
            Puppies for Sale in Delhi NCR
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-ink/70 leading-relaxed">
            Explore 25+ pure breed puppies available with complete veterinary health certification, vaccinations, and KCI pedigree. Visit our Delhi & Gurgaon puppy stores or book safe doorstep delivery across Delhi NCR.
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
