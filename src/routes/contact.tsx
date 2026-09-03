import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | The Puppy Shop, Gurugram" },
      {
        name: "description",
        content:
          "Call, WhatsApp or visit The Puppy Shop in Sector 29, Gurugram to meet available puppies in Delhi NCR.",
      },
      { property: "og:title", content: "Contact Us | The Puppy Shop, Gurugram" },
      {
        property: "og:description",
        content: "Visit our Gurugram store or call us to book a puppy viewing.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-pink py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold text-ink md:text-5xl">Contact Us</h1>
          <p className="mt-3 text-sm text-ink/70">We reply to every enquiry within an hour.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-2">
        <div className="space-y-5">
          {[
            [Phone, "Call or WhatsApp", "+91 96257 96546"],
            [Mail, "Email", "shopthepuppy@gmail.com"],
            [MapPin, "Address", "Delhi & Gurgaon"],
            [Clock, "Open", "Every day, 10:00 AM – 8:00 PM"],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Phone;
            return (
              <div key={t as string} className="flex gap-4 rounded-2xl bg-card p-5 shadow-[var(--shadow-soft)]">
                <I className="h-6 w-6 shrink-0 text-pink-deep" />
                <div>
                  <p className="font-display font-extrabold text-ink">{t as string}</p>
                  <p className="text-sm text-muted-foreground">{d as string}</p>
                </div>
              </div>
            );
          })}
        </div>

        <form
          className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="font-display text-2xl font-extrabold text-ink">Enquire about a puppy</h2>
          <div className="mt-5 space-y-4">
            <input
              required
              placeholder="Your name"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-lime"
            />
            <input
              required
              type="tel"
              placeholder="Phone number"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-lime"
            />
            <input
              placeholder="Breed you're looking for"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-lime"
            />
            <textarea
              rows={4}
              placeholder="Tell us about your family and home"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-lime"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-lime px-6 py-3 font-display font-extrabold text-primary-foreground"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
}
