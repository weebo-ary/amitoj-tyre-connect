const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">Amitoj Agency</p>
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Amitoj Agency. All rights reserved.
          </p>
          <p className="text-sm mt-2 opacity-80">
            Premium Tyres. Trusted Performance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
