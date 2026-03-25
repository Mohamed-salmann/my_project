import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { Button } from "./ui/button.tsx";
import { Link } from "react-router";

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white py-3 px-4 relative animate-in slide-in-from-top">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1 justify-center">
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span className="text-sm md:text-base">
            <strong>Special Offer:</strong> Get 20% off on all Thali meals this weekend! 
            <Link to="/menu" className="underline ml-2 hover:text-orange-100">
              Order Now
            </Link>
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-orange-100 transition-colors p-1"
          aria-label="Close banner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
