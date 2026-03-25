import { useState } from "react";
import { Card, CardContent } from "../components/ui/card.tsx";
import { Input } from "../components/ui/input.tsx";
import { Textarea } from "../components/ui/textarea.tsx";
import { Button } from "../components/ui/button.tsx";
import { Label } from "../components/ui/label.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    toast.success("Reservation request submitted! We'll contact you shortly to confirm.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with us or book your table for an unforgettable dining experience
          </p>
        </div>
      </section>

      {/* Contact Information & Reservation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl mb-6">Get In Touch</h2>
              <div className="space-y-6 mb-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg mb-1">Address</h3>
                        <p className="text-gray-600">
                          123 Jalan Besar<br />
                          Kuala Lumpur, 50050<br />
                          Malaysia
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg mb-1">Phone</h3>
                        <p className="text-gray-600">
                          <a href="tel:+60123456789" className="hover:text-orange-600">
                            +60 12-345 6789
                          </a><br />
                          <a href="tel:+60198765432" className="hover:text-orange-600">
                            +60 19-876 5432
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg mb-1">Email</h3>
                        <p className="text-gray-600">
                          <a href="mailto:info@tamilfood.my" className="hover:text-orange-600">
                            info@tamilfood.my
                          </a><br />
                          <a href="mailto:reservations@tamilfood.my" className="hover:text-orange-600">
                            reservations@tamilfood.my
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg mb-1">Opening Hours</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Friday: 8:00 AM - 10:00 PM</p>
                          <p>Saturday - Sunday: 7:00 AM - 11:00 PM</p>
                          <p className="text-orange-600 mt-2">Open Daily, including Public Holidays</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9405649583456!2d101.69314931475398!3d3.1390238975969804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c701efeae7%3A0xf4d98e5b2f1c287d!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Reservation Form */}
            <div>
              <h2 className="text-3xl mb-6">Book a Table</h2>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+60 12-345 6789"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Date *</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Time *</Label>
                        <Input
                          id="time"
                          name="time"
                          type="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="guests">Number of Guests *</Label>
                      <Select
                        value={formData.guests}
                        onValueChange={(value) => setFormData({ ...formData, guests: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                          <SelectItem value="5">5 Guests</SelectItem>
                          <SelectItem value="6">6 Guests</SelectItem>
                          <SelectItem value="7">7 Guests</SelectItem>
                          <SelectItem value="8">8 Guests</SelectItem>
                          <SelectItem value="9+">9+ Guests (Large Group)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Special Requests (Optional)</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Any dietary restrictions, allergies, or special occasions we should know about?"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" size="lg">
                      Submit Reservation Request
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      * We'll confirm your reservation within 24 hours via email or phone
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="mt-6 bg-orange-50 border-orange-200">
                <CardContent className="pt-6">
                  <h3 className="text-lg mb-2">Reservation Policy</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Reservations are recommended, especially on weekends</li>
                    <li>• Please arrive within 15 minutes of your reservation time</li>
                    <li>• For groups of 9 or more, please call us directly</li>
                    <li>• Cancellations should be made at least 2 hours in advance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg mb-2">Do you offer delivery or takeaway?</h3>
                  <p className="text-gray-600">
                    Yes! We offer both delivery (through major food delivery platforms) and takeaway services. Call us to place your order directly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg mb-2">Can you accommodate dietary restrictions?</h3>
                  <p className="text-gray-600">
                    Absolutely! We can adjust spice levels and accommodate various dietary needs including vegetarian, vegan, and gluten-free options. Please inform us when booking.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg mb-2">Do you cater for events?</h3>
                  <p className="text-gray-600">
                    Yes, we provide catering services for weddings, corporate events, and private parties. Contact us for a customized menu and quote.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg mb-2">Is parking available?</h3>
                  <p className="text-gray-600">
                    Yes, we have parking available at the rear of the building, and there's also street parking nearby.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
