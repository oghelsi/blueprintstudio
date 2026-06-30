import { Instagram, Linkedin, Twitter } from "lucide-react";

const SITEMAP = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SPECIALISMS = [
  "Estate agencies",
  "Property developers",
  "Luxury brands",
  "Architecture studios",
];

export function Footer() {
  return (
    <footer className="relative border-t border-hairline bg-panel">
      <div className="container py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center border border-gold/60 text-gold">
                <span className="font-display text-base italic">B</span>
              </span>
              <span className="font-display text-lg tracking-wide text-bone">
                Blueprint <span className="text-gold">Studio</span>
              </span>
            </a>
            <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-mist">
              A web design studio dedicated to luxury real estate — building
              cinematic, high-performing websites for estate agents,
              developers and property brands.
            </p>
            <div className="mt-7 flex items-center gap-4">
              <SocialIcon Icon={Instagram} label="Instagram" />
              <SocialIcon Icon={Linkedin} label="LinkedIn" />
              <SocialIcon Icon={Twitter} label="Twitter / X" />
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-sans text-xs uppercase tracking-[0.18em] text-mist">
              Sitemap
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {SITEMAP.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-sans text-sm text-bone/80 hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-sans text-xs uppercase tracking-[0.18em] text-mist">
              Specialisms
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {SPECIALISMS.map((item) => (
                <li
                  key={item}
                  className="font-sans text-sm text-bone/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-mist">
            © {new Date().getFullYear()} Blueprint Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-sans text-xs text-mist hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-xs text-mist hover:text-gold">
              Terms of Service
            </a>
          </div>
        </div>

        <p className="mt-10 max-w-3xl font-sans text-[11px] leading-relaxed text-mist/50">
          Disclaimer: Portfolio imagery is used for demonstration and design
          presentation purposes only. Images may include licensed stock
          photography or conceptual visuals to showcase the quality and
          style of Blueprint Studio's web design services. They do not
          represent completed client projects unless explicitly stated.
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({
  Icon,
  label,
}: {
  Icon: typeof Instagram;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-mist transition-colors hover:border-gold hover:text-gold"
    >
      <Icon className="h-4 w-4" strokeWidth={1.5} />
    </a>
  );
}
