import { Phone, Star, Check } from "lucide-react";
import heroBgBanner from "@/assets/hero-bg-banner.jpg";

export function HeroBanner() {
  const phone = "+919625796546";
  const telUrl = `tel:${phone}`;
  const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=Hi%20The%20Puppy%20Shop%2C%20I%20am%20interested%20in%20buying%20a%20puppy!`;

  return (
    <section className="relative w-full overflow-hidden bg-[#051c38] text-white min-h-[520px] sm:min-h-[580px] flex items-center">
      {/* Background Banner Image */}
      <img
        src={heroBgBanner}
        alt="The Puppy Shop Hero Background"
        className="absolute inset-0 h-full w-full object-cover object-[82%_center] sm:object-center"
      />
      
      {/* Gradient overlay to ensure 100% crisp legibility matching mobile screenshot */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04162e]/95 via-[#051c38]/85 to-[#051c38]/35 sm:from-[#04162e]/90 sm:via-[#051c38]/70 sm:to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 md:py-16 lg:py-20 w-full">
        <div className="max-w-xl lg:max-w-2xl flex flex-col items-start space-y-3.5 sm:space-y-5 z-10">
          
          {/* Top Subtitle Label */}
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-black tracking-widest text-slate-300 uppercase drop-shadow-sm">
            <span className="text-[#ff6b35]">✦</span> WELCOME TO THE PUPPY SHOP
          </div>

          {/* Orange Badge */}
          <div className="inline-flex items-center rounded-lg bg-[#ff6b35] px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white shadow-md">
            Trusted Puppy Shop • Delhi NCR & Pan India
          </div>

          {/* Main Headline matching reference layout */}
          <h1 className="font-display text-3xl font-black leading-[1.12] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-md">
            Dogs & Puppies For Sale{" "}
            <span className="block text-[#ff6b35] mt-0.5 sm:mt-1">
              In Delhi NCR & All Over India
            </span>
          </h1>

          {/* Description Subtext */}
          <p className="text-xs sm:text-sm md:text-base font-medium leading-relaxed text-slate-200 drop-shadow-sm max-w-lg">
            Healthy, vaccinated and family-friendly puppies from popular breeds.
            Call or WhatsApp our team for current availability, price, photos and delivery.
          </p>

          {/* Micro Feature Badges in 1 row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
            <div className="flex items-center gap-1.5 rounded-lg border border-white/20 bg-[#051c38]/80 px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-slate-100 backdrop-blur-md">
              <Star className="h-3.5 w-3.5 fill-white text-white" />
              <span>Trusted Puppy Support</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg border border-white/20 bg-[#051c38]/80 px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-slate-100 backdrop-blur-md">
              <Check className="h-3.5 w-3.5 text-white stroke-[2.5]" />
              <span>Health & Care Guidance</span>
            </div>
          </div>

          {/* Side-by-Side Call & WhatsApp Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2 sm:pt-4 w-full max-w-sm sm:max-w-md">
            {/* Call Now Button */}
            <a
              href={telUrl}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#ff6b35] px-4 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-extrabold text-white shadow-lg transition-all duration-300 hover:bg-[#e05825] active:scale-95"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
              <span>Call Now</span>
            </a>

            {/* WhatsApp Us Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#7c3aed] px-4 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-extrabold text-white shadow-lg transition-all duration-300 hover:bg-[#6d28d9] active:scale-95"
            >
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
