import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tyres.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/919201457156";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Premium Tyres.
            <br />
            <span className="text-primary">Trusted Performance.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Amitoj Agency – Your Tyre Partner.
          </p>
          <Button
            variant="hero"
            size="lg"
            className="text-lg px-8 py-6"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            Contact Us on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
