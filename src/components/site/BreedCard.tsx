import React from "react";
import { Phone } from "lucide-react";
import type { Breed } from "@/components/site/data";

interface BreedCardProps {
  breed: Breed;
  phone?: string;
}

export function BreedCard({ breed, phone = "+919625796546" }: BreedCardProps) {
  const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=Hi%20The%20Puppy%20Shop%2C%20I%20am%20interested%20in%20a%20${encodeURIComponent(breed.name)}%20puppy!`;
  const telUrl = `tel:${phone}`;

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-[#171349] border-2 border-[#171349] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Puppy Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-white">
        <img
          src={breed.image}
          alt={`${breed.name} puppy for sale`}
          loading="lazy"
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Dark Navy Breed Title Bar */}
      <div className="bg-[#171349] px-2 py-3 text-center">
        <h3 className="font-display text-sm sm:text-base font-bold text-white tracking-wide leading-tight truncate">
          {breed.name}
        </h3>
      </div>

      {/* Dual Side-by-Side Action CTAs */}
      <div className="grid grid-cols-2 w-full mt-auto">
        {/* Call Now Button */}
        <a
          href={telUrl}
          className="flex items-center justify-center gap-1.5 bg-[#ff8a00] hover:bg-[#e07900] text-white py-2.5 px-2 font-display text-xs sm:text-sm font-extrabold tracking-wide transition-colors active:scale-98"
          aria-label={`Call now to inquire about ${breed.name}`}
        >
          <Phone className="h-3.5 w-3.5 fill-current shrink-0" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-2 font-display text-xs sm:text-sm font-extrabold tracking-wide transition-colors active:scale-98"
          aria-label={`Chat on WhatsApp about ${breed.name}`}
        >
          <svg
            className="h-3.5 w-3.5 fill-current shrink-0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
