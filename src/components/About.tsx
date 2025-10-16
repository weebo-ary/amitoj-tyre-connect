const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="text-primary">Amitoj Agency</span>
          </h2>
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Amitoj Agency, we are committed to delivering premium quality tyres
              that ensure your safety and enhance your driving experience. With years
              of expertise in the automotive industry, we understand the critical role
              that tyres play in vehicle performance. Our carefully curated selection
              includes top brands known for their durability, grip, and reliability
              across all road conditions. Whether you need tyres for everyday commuting,
              high-performance driving, or all-terrain adventures, we provide expert
              guidance and exceptional service to help you find the perfect fit for
              your vehicle. Trust Amitoj Agency for tyres that go the distance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
