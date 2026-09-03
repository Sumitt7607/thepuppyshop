import { ChevronLeft, ChevronRight, Phone, Star, Check } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import heroBgBanner from "@/assets/hero-bg-banner.jpg";

interface Slide {
  url: string;
  alt: string;
  isBanner?: boolean;
}

const slides: Slide[] = [
  {
    url: heroBgBanner,
    alt: "Dogs & Puppies For Sale In Delhi NCR & All Over India",
    isBanner: true,
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  const phone = "+919625796546";
  const telUrl = `tel:${phone}`;
  const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=Hi%20The%20Puppy%20Shop%2C%20I%20am%20interested%20in%20buying%20a%20puppy!`;

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  return (
    <div className="group relative w-full h-full min-h-[420px] sm:min-h-[480px] md:min-h-[520px] overflow-hidden bg-[#051c38] shadow-lg flex flex-col justify-center">
      {/* Background Image Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <img
            src={s.url}
            alt={s.alt}
            className="h-full w-full object-cover object-[82%_center] sm:object-center"
          />
          {/* Dark gradient overlay for crystal clear text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#04162e]/95 via-[#051c38]/80 to-transparent pointer-events-none" />
        </div>
      ))}

      {/* Text Content Overlay over the Left Side of the Banner */}
      <div className="relative z-10 p-5 sm:p-7 md:p-9 max-w-lg lg:max-w-xl flex flex-col items-start space-y-3 sm:space-y-4 text-white">
        {/* Subtitle */}
        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-black tracking-widest text-slate-300 uppercase drop-shadow-sm">
          <span className="text-[#ff6b35]">✦</span> WELCOME TO THE PUPPY SHOP
        </div>

        {/* Orange Badge */}
        <div className="inline-flex items-center rounded-lg bg-[#ff6b35] px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-bold text-white shadow-md">
          Trusted Puppy Shop • Delhi NCR & Pan India
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.12] tracking-tight text-white drop-shadow-md">
          Dogs & Puppies For Sale{" "}
          <span className="block text-[#ff6b35] mt-0.5">
            In Delhi NCR & All Over India
          </span>
        </h1>

        {/* Description Subtext */}
        <p className="text-[11px] sm:text-xs md:text-sm font-medium leading-relaxed text-slate-200 drop-shadow-sm max-w-md hidden sm:block">
          Healthy, vaccinated and family-friendly puppies from popular breeds.
          Call or WhatsApp our team for current availability, price, photos and delivery.
        </p>

        {/* Micro Feature Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-0.5">
          <div className="flex items-center gap-1 rounded-lg border border-white/20 bg-[#051c38]/80 px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-slate-100 backdrop-blur-md">
            <Star className="h-3 w-3 fill-white text-white" />
            <span>Trusted Puppy Support</span>
          </div>
          <div className="flex items-center gap-1 rounded-lg border border-white/20 bg-[#051c38]/80 px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-slate-100 backdrop-blur-md">
            <Check className="h-3 w-3 text-white stroke-[2.5]" />
            <span>Health & Care Guidance</span>
          </div>
        </div>

        {/* Call & WhatsApp Action Buttons */}
        <div className="flex items-center gap-2.5 pt-2 w-full max-w-xs sm:max-w-sm">
          {/* Call Now Button */}
          <a
            href={telUrl}
            className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-[#ff6b35] px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-extrabold text-white shadow-lg transition-all duration-300 hover:bg-[#e05825] active:scale-95"
          >
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Us Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-[#7c3aed] px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-extrabold text-white shadow-lg transition-all duration-300 hover:bg-[#6d28d9] active:scale-95"
          >
            <svg
              className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* Slider Prev/Next Controls */}
      {slides.length > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="absolute top-1/2 left-2 sm:left-3 z-20 grid h-8 w-8 sm:h-10 sm:w-10 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next slide"
            className="absolute top-1/2 right-2 sm:right-3 z-20 grid h-8 w-8 sm:h-10 sm:w-10 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* Slider Dot Indicators */}
          <div className="absolute bottom-3 right-4 z-20 flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-[#ff6b35]" : "w-2 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
