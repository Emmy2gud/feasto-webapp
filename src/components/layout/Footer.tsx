import feastoLogo from "@/assets/logo/logo.png";
import { FinalCTASection } from "../home/FinalCTASection";

const platformLinks = ["Vendor Login", "Runner Program", "Campus Hubs"];
const supportLinks = ["Help Center", "Safety Portal", "Contact Us"];
const companyLinks = ["About Us", "Careers", "Privacy"];
const socialLinks = ["Twitter", "Instagram", "LinkedIn"];

export function Footer() {
  return (
    <footer className="bg-[#0a0f1d] px-6 py-20 lg:px-20">
      <div className="bg-[#0a0f1d]">
        <FinalCTASection />
      </div>
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-16">
          {/* Main Footer Content */}
          <div className="grid gap-10 border-t border-white/10 pt-16 sm:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-4">
                <img src={feastoLogo} alt="Feasto Logo" className="h-10 w-10" />
                <span className="font-inter text-[32px] font-semibold leading-[1] tracking-[-0.0375em] text-white">
                  Feasto
                </span>
              </div>
              <p className="text-base font-normal leading-[1.625] text-[hsl(var(--slate-500))]">
                Redefining university logistics
                <br />
                through innovation and
                <br />
                community.
              </p>
            </div>

            {/* Platform Links */}
            <div className="flex flex-col gap-8">
              <span className="text-xs font-bold uppercase tracking-[2.4px] text-primary">
                Platform
              </span>
              <div className="flex flex-col gap-4">
                {platformLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-base font-normal text-[hsl(var(--slate-400))] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Support Links */}
            <div className="flex flex-col gap-8">
              <span className="text-xs font-bold uppercase tracking-[2.4px] text-primary">
                Support
              </span>
              <div className="flex flex-col gap-4">
                {supportLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-base font-normal text-[hsl(var(--slate-400))] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div className="flex flex-col gap-8">
              <span className="text-xs font-bold uppercase tracking-[2.4px] text-primary">
                Company
              </span>
              <div className="flex flex-col gap-4">
                {companyLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-base font-normal text-[hsl(var(--slate-400))] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-12 sm:flex-row">
            <p className="text-sm font-normal text-[hsl(var(--slate-500))]">
              © 2024 CampusDash Technologies. Built for Scholars.
            </p>

            {/* Social Links */}
            <div className="flex gap-10">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm font-normal text-[hsl(var(--slate-500))] hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
