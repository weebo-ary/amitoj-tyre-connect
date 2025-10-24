import { Shield, Award, Users, Clock } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Genuine Products",
      description: "100% authentic tyres from authorized dealers"
    },
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Serving customers since 2008"
    },
    {
      icon: Users,
      title: "10,000+ Happy Customers",
      description: "Trusted by vehicle owners across NCR"
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Fast installation and delivery"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{badge.title}</h3>
                <p className="text-muted-foreground text-sm">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
