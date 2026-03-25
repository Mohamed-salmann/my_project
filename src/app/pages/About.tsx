
import { ImageWithFallback } from "../components/figma/ImageWithFallback.tsx";
import { Card, CardContent } from "../components/ui/card.tsx";
import { Award, Heart, Users, Clock } from "lucide-react";

export function About() {
  const milestones = [
    {
      year: "2018",
      title: "Our Beginning",
      description:
        "Karim Maju Hotel started with a simple dream – to serve delicious and affordable food with authentic taste to our local community.",
    },
    {
      year: "2019",
      title: "Customer Love",
      description:
        "Our hotel quickly became popular for its flavorful biryani, fresh meals, and friendly service.",
    },
    {
      year: "2021",
      title: "Menu Expansion",
      description:
        "We introduced new dishes including special chicken varieties, family meals, and traditional South Indian breakfasts.",
    },
    {
      year: "2023",
      title: "Improved Dining",
      description:
        "We renovated our hotel and expanded seating to give customers a comfortable dining experience.",
    },
    {
      year: "2025",
      title: "Online Service",
      description:
        "Karim Maju Hotel launched online ordering and delivery services for faster and easier food access.",
    },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer Satisfaction",
      description:
        "Our top priority is making every customer happy with delicious food and great service.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Food Quality",
      description:
        "We use fresh ingredients and maintain high cooking standards in every dish we serve.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Friendly Service",
      description:
        "Our team treats every customer like family and provides a welcoming dining experience.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Service",
      description:
        "We make sure our customers receive their food quickly without compromising quality.",
    },
  ];

  const chefs = [
    {
      name: "Chef Karim",
      title: "Head Chef",
      specialty: "Biryani & Special Meals",
      experience: "15 years",
    },
    {
      name: "Chef Rahman",
      title: "Breakfast Specialist",
      specialty: "Dosa, Idly & Parotta",
      experience: "12 years",
    },
    {
      name: "Chef Ahmed",
      title: "Grill Master",
      specialty: "Chicken Fry & Grills",
      experience: "10 years",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl mb-4">About Karim Maju Hotel</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Serving delicious and authentic food with love and quality every day
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-4xl mb-6">Our Story</h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  Karim Maju Hotel was founded with the goal of bringing tasty
                  and quality food to everyone. What started as a small local
                  hotel has grown into a popular food destination for families,
                  students, and workers who enjoy authentic flavors.
                </p>

                <p>
                  Our chefs carefully prepare every dish using fresh ingredients
                  and traditional cooking methods. From spicy biryani to
                  delicious curries and fresh meals, we focus on taste,
                  quality, and customer satisfaction.
                </p>

                <p>
                  Over the years, Karim Maju Hotel has built a strong
                  relationship with our customers by providing friendly
                  service and consistent food quality. Many of our customers
                  visit us regularly because they trust our taste and
                  hospitality.
                </p>

                <p>
                  At Karim Maju Hotel, food is not just about eating – it is
                  about enjoying good moments with friends, family, and loved
                  ones. We are proud to serve our community every day.
                </p>
              </div>
            </div>

            <div className="space-y-4">

              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1689079564957-83e3641c7fd8?auto=format&fit=crop&w=1080&q=80"
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1080&q=80"
                  alt="Food spices"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">

        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-8 pb-6">

                  <div className="inline-block p-4 bg-orange-100 rounded-full text-orange-600 mb-4">
                    {value.icon}
                  </div>

                  <h3 className="text-xl mb-2">{value.title}</h3>

                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>

                </CardContent>
              </Card>
            ))}

          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-orange-50">

        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Milestones that shaped our growth
            </p>
          </div>

          <div className="max-w-4xl mx-auto">

            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">

                <div className="flex-shrink-0 w-24">
                  <div className="text-3xl text-orange-600">
                    {milestone.year}
                  </div>
                </div>

                <div className="flex-1 pb-8 border-l-2 border-orange-300 pl-6 relative">

                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-orange-600 rounded-full" />

                  <h3 className="text-xl mb-2">{milestone.title}</h3>

                  <p className="text-gray-600">
                    {milestone.description}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Our Chefs */}
      <section className="py-16 bg-white">

        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Meet Our Chefs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced chefs who bring amazing flavors to your plate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

            {chefs.map((chef, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-8 pb-6">

                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">
                    {chef.name.split(" ")[1][0]}
                  </div>

                  <h3 className="text-xl mb-1">{chef.name}</h3>

                  <p className="text-orange-600 mb-2">{chef.title}</p>

                  <p className="text-gray-600 text-sm mb-1">
                    Specialty: {chef.specialty}
                  </p>

                  <p className="text-gray-500 text-sm">
                    {chef.experience} of experience
                  </p>

                </CardContent>
              </Card>
            ))}

          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">

        <div className="container mx-auto px-4 text-center">

          <h2 className="text-4xl mb-4">
            Enjoy the Taste of Karim Maju Hotel
          </h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit us today and enjoy our special dishes
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="/menu"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              View Our Menu
            </a>

            <a
              href="/contact"
              className="inline-block bg-orange-700 text-white px-8 py-3 rounded-md hover:bg-orange-800 transition-colors"
            >
              Book a Table
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}
