
import { Link } from "react-router";
import { Button } from "../components/ui/button.tsx";
import { Card, CardContent } from "../components/ui/card.tsx";
import { ImageWithFallback } from "../components/figma/ImageWithFallback.tsx";
import { NewsletterSignup } from "../components/NewsletterSignup.tsx";
import { SEO } from "../components/SEO.tsx";
import { UtensilsCrossed, Award, Clock, Heart, ChefHat, Star } from "lucide-react";

export function Home() {
  const features = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Authentic Recipes",
      description: "Traditional Tamil Nadu recipes passed down through generations",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award Winning",
      description: "Recognized as the best South Indian restaurant in Malaysia",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Fresh Ingredients",
      description: "We use only the freshest spices and ingredients",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Service",
      description: "Fast and friendly service for dine-in and takeaway",
    },
  ];

  const specialties = [
    {
      name: "Masala Dosa",
      description: "Crispy rice crepe filled with spiced potato masala",
      image: "https://images.unsplash.com/photo-1665660710687-b44c50751054",
      price: "RM 12",
    },
    {
      name: "Chettinad Chicken",
      description: "Spicy chicken curry with aromatic Chettinad spices",
      image: "https://images.unsplash.com/photo-1700324638718-dade543770fa",
      price: "RM 18",
    },
    {
      name: "Hyderabadi Biryani",
      description: "Fragrant basmati rice with tender meat and spices",
      image: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c",
      price: "RM 22",
    },
    {
      name: "Tamil Nadu Thali",
      description: "Complete meal with variety of curries, rice, and sides",
      image: "https://images.unsplash.com/photo-1742281257687-092746ad6021",
      price: "RM 25",
    },
  ];

  const testimonials = [
    {
      name: "Raj Kumar",
      rating: 5,
      comment: "The best South Indian food I've had outside of India! The dosas are perfect.",
    },
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Authentic Tamil Nadu flavors. The Chettinad chicken is amazing!",
    },
    {
      name: "Ahmad bin Hassan",
      rating: 5,
      comment: "Great food, great service. My favorite restaurant!",
    },
  ];

  return (
    <div>

      <SEO description="Experience authentic Tamil Nadu cuisine. Karim Maju Hotel serves traditional dosas, biryanis, and thali meals." />

      {/* Hero Section */}

      <section className="relative h-[600px] flex items-center justify-center">

        <div className="absolute inset-0">

          <ImageWithFallback
            src="https://images.unsplash.com/photo-1689079564957-83e3641c7fd8"
            alt="Restaurant Interior"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

        </div>

        <div className="relative container mx-auto px-4 text-center text-white">

          <h1 className="text-5xl md:text-7xl mb-6">
            Welcome to <span className="text-orange-500">Karim Maju Hotel</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the authentic flavors of Tamil Nadu right here
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8">
              <Link to="/menu">View Menu</Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white">
              <Link to="/contact">Book a Table</Link>
            </Button>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="py-16 bg-gray-50">

        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {features.map((feature, index) => (

              <Card key={index} className="text-center hover:shadow-lg transition-shadow">

                <CardContent className="pt-8 pb-6">

                  <div className="inline-block p-4 bg-orange-100 rounded-full text-orange-600 mb-4">
                    {feature.icon}
                  </div>

                  <h3 className="text-xl mb-2">{feature.title}</h3>

                  <p className="text-gray-600">{feature.description}</p>

                </CardContent>

              </Card>

            ))}

          </div>

        </div>

      </section>

      {/* Specialties */}

      <section className="py-16">

        <div className="container mx-auto px-4">

          <div className="text-center mb-12">

            <h2 className="text-4xl mb-4">Our Specialties</h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our signature dishes crafted with authentic Tamil Nadu recipes and the finest ingredients
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {specialties.map((dish, index) => (

              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">

                <div className="relative h-48 overflow-hidden">

                  <ImageWithFallback
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                </div>

                <CardContent className="p-4">

                  <h3 className="text-xl mb-2">{dish.name}</h3>

                  <p className="text-gray-600 text-sm mb-3">{dish.description}</p>

                  <div className="flex justify-between items-center">

                    <span className="text-orange-600 text-xl">{dish.price}</span>

                    <Button asChild size="sm" variant="outline">
                      <Link to="/menu">Order Now</Link>
                    </Button>

                  </div>

                </CardContent>

              </Card>

            ))}

          </div>

          <div className="text-center mt-8">

            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">

              <Link to="/menu">

                <UtensilsCrossed className="w-5 h-5 mr-2" />
                View Full Menu

              </Link>

            </Button>

          </div>

        </div>

      </section>

      {/* Testimonials */}

      <section className="py-16">

        <div className="container mx-auto px-4">

          <div className="text-center mb-12">

            <h2 className="text-4xl mb-4">What Our Customers Say</h2>

            <p className="text-gray-600">Don't just take our word for it</p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {testimonials.map((testimonial, index) => (

              <Card key={index} className="hover:shadow-lg transition-shadow">

                <CardContent className="pt-6">

                  <div className="flex gap-1 mb-4">

                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                    ))}

                  </div>

                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.comment}"
                  </p>

                  <p className="font-semibold">
                    - {testimonial.name}
                  </p>

                </CardContent>

              </Card>

            ))}

          </div>

        </div>

      </section>

      <NewsletterSignup />

    </div>
  );
}
