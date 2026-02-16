import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/EddLogo_1764621333195.jpeg";

function TopBar() {
  return (
    <div className="w-full bg-gray-900 text-gray-300 text-xs py-2 z-[60] relative">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href="mailto:info@eedconsult.com"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail size={13} />
            <span>info@eedconsult.com</span>
          </a>
          <a
            href="tel:+233558075023"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone size={13} />
            <span>+233 558075023</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Product", href: "#product" },
    { name: "Pricing", href: "#pricing" },
    { name: "Case Studies", href: "#case-studies" },
  ];

  return (
    <>
      <TopBar />
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-4 top-0"
            : "bg-transparent py-6 top-8"
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2">
              <img src={logo} alt="EED Consult" className="h-12 w-auto object-contain" />
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              className="bg-primary hover:bg-blue-700 text-white font-medium px-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-700 py-2 border-b border-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-2">
              <Button
                className="w-full bg-primary"
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
