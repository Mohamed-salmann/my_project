import { Link, useLocation } from "react-router";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button.tsx";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/gallery", label: "Gallery" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-orange-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+60123456789" className="flex items-center gap-2 hover:text-orange-100">
              <Phone className="w-4 h-4" />
              <span>+60 12-345 6789</span>
            </a>
            <a href="mailto:info@tamilfood.my" className="hidden sm:flex items-center gap-2 hover:text-orange-100">
              <Mail className="w-4 h-4" />
              <span>info@tamilfood.my</span>
            </a>
          </div>
          <div className="text-sm">Open Daily: 8:00 AM - 10:00 PM</div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-orange-600">
              தமிழ் <span className="text-gray-800">Samayal</span>
            </div>
            <div className="text-xs text-gray-600 hidden sm:block">Tamil Nadu Cuisine</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? "text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <Link to="/contact">Book Table</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    isActive(link.path)
                      ? "text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-orange-600 hover:bg-orange-700 w-full">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Book Table</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
