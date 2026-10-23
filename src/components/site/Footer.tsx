import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="mt-16 bg-[#171349] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="The Puppy Shop Logo"
                className="h-11 w-11 object-cover rounded-xl ring-2 ring-white/20 shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-display text-xl font-black text-white group-hover:text-[#ff8a00] transition-colors">
                The Puppy Shop
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-white/80">
              Delhi NCR's trusted home for healthy, vaccinated, and vet-checked puppies. Bringing joy to thousands of families.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-extrabold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-white/80">
              <li>
                <Link to="/" className="hover:text-[#ff8a00] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dogs" className="hover:text-[#ff8a00] transition-colors">
                  Available Puppies
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#ff8a00] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-[#ff8a00] transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#ff8a00] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Breeds */}
          <div>
            <h4 className="font-display text-sm font-extrabold text-white uppercase tracking-wider">
              Popular Breeds
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-white/80">
              <li>
                <Link to="/dogs" className="hover:text-[#ff8a00] transition-colors">
                  Yorkshire Terrier & Toy Pom
                </Link>
              </li>
              <li>
                <Link to="/dogs" className="hover:text-[#ff8a00] transition-colors">
                  Shih Tzu & Chihuahua
                </Link>
              </li>
              <li>
                <Link to="/dogs" className="hover:text-[#ff8a00] transition-colors">
                  Beagle & Cocker Spaniel
                </Link>
              </li>
              <li>
                <Link to="/dogs" className="hover:text-[#ff8a00] transition-colors">
                  German Shepherd & Husky
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-sm font-extrabold text-white uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="mt-3 space-y-2.5 text-xs text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#ff8a00] shrink-0 mt-0.5" />
                <span>Address: Delhi & Gurgaon</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#ff8a00] shrink-0" />
                <a href="tel:+919625796546" className="hover:text-[#ff8a00] transition-colors">
                  +91 96257 96546
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#ff8a00] shrink-0" />
                <a href="mailto:shopthepuppy@gmail.com" className="hover:text-[#ff8a00] transition-colors">
                  shopthepuppy@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Delhi NCR Local SEO Locations Banner */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <h4 className="font-display text-xs font-extrabold text-[#ff8a00] uppercase tracking-wider">
            Puppies Available Across Delhi NCR Locations:
          </h4>
          <p className="mt-2 text-[11px] leading-relaxed text-white/70">
            Delhi • New Delhi • South Delhi • Hauz Khas • Saket • Greater Kailash • Vasant Kunj • Dwarka • Rohini • Punjabi Bagh • Janakpuri • Gurugram / Gurgaon • Sector 29 • Golf Course Road • DLF Phase 1-5 • Sohna Road • Cyber City • Noida • Sector 18 Noida • Sector 62 Noida • Noida Expressway • Greater Noida • Faridabad • Ghaziabad • Indirapuram • Vaishali
          </p>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-white/60">
          <p>© {new Date().getFullYear()} The Puppy Shop. All Rights Reserved.</p>

        </div>
      </div>
    </footer>
  );
}
