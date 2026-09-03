import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import customer1 from "@/assets/customer-1.jpg";
import customer2 from "@/assets/customer-2.jpg";
import customer3 from "@/assets/customer-3.jpg";
import customer4 from "@/assets/customer-4.jpg";
import customer5 from "@/assets/customer-5.jpg";
import customer6 from "@/assets/customer-6.jpg";
import customer7 from "@/assets/customer-7.jpg";
import customer8 from "@/assets/customer-8.jpg";
import customer9 from "@/assets/customer-9.jpg";
import customer10 from "@/assets/customer-10.jpg";
import customer11 from "@/assets/customer-11.jpg";

interface PhotoItem {
  img: string;
  name: string;
  pup: string;
}

interface SlideSet {
  photos: PhotoItem[];
}

const slideSets: SlideSet[] = [
  {
    photos: [
      { img: customer1, name: "Ananya & Family", pup: "Golden Doodle" },
      { img: customer6, name: "Sneha & Bruno", pup: "Toy Poodle" },
      { img: customer7, name: "The Sharma Family", pup: "Maltipoo" },
      { img: customer8, name: "Vikram & Simba", pup: "Golden Retriever" },
      { img: customer9, name: "Divya & Sameer", pup: "Golden Retriever" },
      { img: customer10, name: "Kavya & Honey", pup: "Golden Retriever" },
    ],
  },
  {
    photos: [
      { img: customer2, name: "Master Aarav", pup: "Toy Poodle" },
      { img: customer3, name: "Priya & Karan", pup: "Shih Tzu" },
      { img: customer4, name: "Rohit & Family", pup: "Cavapoo" },
      { img: customer5, name: "Rohan & Neha", pup: "Siberian Husky" },
      { img: customer11, name: "Riya & Yash", pup: "Golden Retriever" },
      { img: customer10, name: "Kavya & Honey", pup: "Golden Retriever" },
    ],
  },
  {
    photos: [
      { img: customer6, name: "Sneha & Bruno", pup: "Toy Poodle" },
      { img: customer7, name: "The Sharma Family", pup: "Maltipoo" },
      { img: customer8, name: "Vikram & Simba", pup: "Golden Retriever" },
      { img: customer9, name: "Divya & Sameer", pup: "Golden Retriever" },
      { img: customer11, name: "Riya & Yash", pup: "Golden Retriever" },
      { img: customer10, name: "Kavya & Honey", pup: "Golden Retriever" },
    ],
  },
];

export function CustomerSlider() {
  const [index, setIndex] = useState(0);

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + slideSets.length) % slideSets.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => go(1), 4000);
    return () => clearInterval(timer);
  }, [go]);

  return (
    <section className="relative w-full overflow-hidden bg-ink py-2">
      {/* Full Width Slider Viewport */}
      <div className="relative h-72 sm:h-80 md:h-[360px] lg:h-[400px] w-full overflow-hidden">
        {slideSets.map((set, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              i === index
                ? "opacity-100 translate-x-0 z-10"
                : i < index
                ? "opacity-0 -translate-x-full z-0 pointer-events-none"
                : "opacity-0 translate-x-full z-0 pointer-events-none"
            }`}
          >
            {/* Full Width Grid of Photos spanning screen edge-to-edge */}
            <div className="grid h-full w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-1.5 px-1.5">
              {set.photos.map((photo, pIdx) => (
                <div
                  key={pIdx}
                  className="group relative h-full w-full overflow-hidden rounded-lg bg-card/10"
                >
                  <img
                    src={photo.img}
                    alt={`${photo.name} with ${photo.pup}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle Dark Gradient with Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                    <span className="w-fit rounded bg-pink-deep/90 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-xs">
                      {photo.pup}
                    </span>
                    <p className="mt-1 font-display text-xs sm:text-sm font-extrabold drop-shadow-sm leading-tight">
                      {photo.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Left & Right Chevron Control Buttons */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous photos slide"
          className="absolute top-1/2 left-3 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/80 text-ink shadow-lg transition-all hover:bg-background hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next photos slide"
          className="absolute top-1/2 right-3 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/80 text-ink shadow-lg transition-all hover:bg-background hover:scale-110 active:scale-95"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Slider Pagination Dots Bar Overlay */}
      <div className="flex items-center justify-center gap-2 py-2">
        {slideSets.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to customer slide set ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index
                ? "w-7 bg-lime"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
