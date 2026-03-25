import { useState } from "react";
import { Card, CardContent } from "./ui/card.tsx";
import { Input } from "./ui/input.tsx";
import { Button } from "./ui/button.tsx";
import { Mail } from "lucide-react";
import { toast } from "sonner";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing!", {
        description: "You'll receive our latest updates and special offers.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto bg-white/95 backdrop-blur">
          <CardContent className="pt-8 pb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                <Mail className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-3xl text-center mb-2">Join Our Newsletter</h3>
            <p className="text-center text-gray-600 mb-6">
              Get exclusive offers, new menu updates, and special event invitations delivered to your inbox
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" className="bg-orange-600 hover:bg-orange-700 whitespace-nowrap">
                Subscribe Now
              </Button>
            </form>
            <p className="text-xs text-center text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
