import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logoUrl from "@/assets/logo.jpg?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const globalLdJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "PetStore",
      "@id": "https://www.thepuppyshop.store/#petstore",
      "name": "The Puppy Shop",
      "legalName": "The Puppy Shop Delhi NCR",
      "alternateName": ["The Puppy Shop India", "The Puppy Shop Delhi", "The Puppy Shop Gurugram"],
      "url": "https://www.thepuppyshop.store/",
      "logo": "https://www.thepuppyshop.store/logo.jpg",
      "image": "https://www.thepuppyshop.store/logo.jpg",
      "description": "Delhi NCR's #1 trusted pet shop for healthy, vaccinated, and KCI registered puppies. Serving Delhi, Gurugram, Noida, Greater Noida, Faridabad, and Ghaziabad with safe doorstep delivery.",
      "telephone": "+91 96257 96546",
      "email": "shopthepuppy@gmail.com",
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, UPI, Net Banking",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Sector 29",
          "addressLocality": "Gurugram",
          "addressRegion": "Haryana",
          "postalCode": "122001",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "South Delhi & Connaught Place Area",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110001",
          "addressCountry": "IN"
        }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.4595,
        "longitude": 77.0266
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "10:00",
          "closes": "20:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Delhi" },
        { "@type": "City", "name": "New Delhi" },
        { "@type": "City", "name": "Gurugram" },
        { "@type": "City", "name": "Noida" },
        { "@type": "City", "name": "Greater Noida" },
        { "@type": "City", "name": "Faridabad" },
        { "@type": "City", "name": "Ghaziabad" },
        { "@type": "AdministrativeArea", "name": "Delhi NCR" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "15480",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.thepuppyshop.store/#website",
      "url": "https://www.thepuppyshop.store/",
      "name": "The Puppy Shop",
      "description": "Buy healthy, KCI registered & vet-checked puppies in Delhi NCR.",
      "inLanguage": "en-IN"
    }
  ]
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Puppy Shop | Buy Puppies in Delhi NCR | Top Pet Shop" },
      {
        name: "description",
        content:
          "Delhi NCR's #1 trusted home for healthy, vaccinated, and vet-checked puppies. Buy KCI registered puppies in Delhi, Gurugram, Noida, Faridabad, and Ghaziabad.",
      },
      {
        name: "keywords",
        content:
          "buy puppies in Delhi NCR, puppies for sale Delhi, puppy pet shop in Delhi, dog shop Gurgaon, puppy for sale Noida, buy Shih Tzu Delhi, Golden Retriever puppy Delhi, Toy Poodle Delhi NCR, KCI registered puppies Delhi, ethical dog breeders Delhi NCR",
      },
      { name: "author", content: "The Puppy Shop" },
      { name: "google-site-verification", content: "googleb32bce7c05ea3e77" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "geo.region", content: "IN-DL" },
      { name: "geo.placename", content: "Delhi NCR, Gurugram, Noida, New Delhi" },
      { name: "geo.position", content: "28.6139;77.2090" },
      { name: "ICBM", content: "28.6139, 77.2090" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "The Puppy Shop" },
      { property: "og:title", content: "The Puppy Shop | Buy Puppies in Delhi NCR" },
      {
        property: "og:description",
        content:
          "Delhi NCR's trusted home for healthy, vaccinated, and vet-checked puppies with 100% health guarantee and home delivery.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.thepuppyshop.store/" },
      { property: "og:image", content: "https://www.thepuppyshop.store/logo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The Puppy Shop | Buy Puppies in Delhi NCR" },
      {
        name: "twitter:description",
        content:
          "Buy healthy, KCI registered & vet-checked puppies in Delhi, Gurugram, Noida, Faridabad, and Ghaziabad.",
      },
      { name: "twitter:image", content: "https://www.thepuppyshop.store/logo.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thepuppyshop.store/" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito+Sans:wght@400;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: logoUrl, type: "image/jpeg" },
      { rel: "shortcut icon", href: logoUrl, type: "image/jpeg" },
      { rel: "apple-touch-icon", href: logoUrl },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(globalLdJson),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { WhatsAppButton } from "@/components/site/WhatsAppButton";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <WhatsAppButton />
    </QueryClientProvider>
  );
}
