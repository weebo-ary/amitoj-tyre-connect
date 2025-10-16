import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const whatsappLink = "https://wa.me/919201457156";

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map Placeholder */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
            <div className="w-full h-[400px] bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
                <p className="text-xl font-semibold text-muted-foreground">
                  Visit Our Location
                </p>
                <p className="text-muted-foreground mt-2">
                  Amitoj Agency Tyre Center
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="text-lg">+91 9201457156</span>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Need Assistance?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us on WhatsApp for quick support and inquiries about our
                premium tyre selection.
              </p>
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
