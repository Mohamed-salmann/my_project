import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback.tsx";
import { Dialog, DialogContent } from "../components/ui/dialog.tsx";
import { X } from "lucide-react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1665660710687-b44c50751054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGluZGlhbiUyMGZvb2QlMjBkb3NhfGVufDF8fHx8MTc3MzMwOTg2OHww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Masala Dosa",
      category: "Food",
    },
    {
      src: "https://images.unsplash.com/photo-1742281257687-092746ad6021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW1pbCUyMG5hZHUlMjB0aGFsaSUyMG1lYWx8ZW58MXx8fHwxNzczMzA5ODY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Tamil Nadu Thali",
      category: "Food",
    },
    {
      src: "https://images.unsplash.com/photo-1689079564957-83e3641c7fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczMjEwNjAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Restaurant Interior",
      category: "Ambiance",
    },
    {
      src: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzczMjc0NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Hyderabadi Biryani",
      category: "Food",
    },
    {
      src: "https://images.unsplash.com/photo-1771541897176-44a3e01dc484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjdXJyeSUyMHNwaWNlc3xlbnwxfHx8fDE3NzMzMDk4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Spices and Ingredients",
      category: "Ingredients",
    },
    {
      src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGluZGlhbiUyMGJyZWFrZmFzdHxlbnwxfHx8fDE3NzMzMDk4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "South Indian Breakfast",
      category: "Food",
    },
    {
      src: "https://images.unsplash.com/photo-1700324638718-dade543770fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGV0dGluYWQlMjBjaGlja2VuJTIwZGlzaHxlbnwxfHx8fDE3NzMzMDk4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Chettinad Chicken",
      category: "Food",
    },
    {
      src: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkZXNzZXJ0JTIwc3dlZXR8ZW58MXx8fHwxNzczMzA5ODcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Indian Desserts",
      category: "Food",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl mb-4">Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            A visual journey through our restaurant, dishes, and the authentic flavors of Tamil Nadu
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                onClick={() => setSelectedImage(image.src)}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold">{image.alt}</p>
                    <p className="text-sm text-gray-200">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <div className="relative">
            {selectedImage && (
              <ImageWithFallback
                src={selectedImage}
                alt="Gallery Image"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Instagram Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Follow Us on Instagram</h2>

          <p className="text-gray-600 mb-6">
            Share your dining experience with us @karimmajuhotel
          </p>

          <div className="text-orange-600 text-xl">
            #KarimMajuHotel #AuthenticTamilFood #MalaysianIndianCuisine
          </div>

        </div>
      </section>
    </div>
  );
}