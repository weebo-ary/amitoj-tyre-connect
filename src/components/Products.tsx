import tyre1 from "@/assets/tyre-1.jpg";
import tyre2 from "@/assets/tyre-2.jpg";
import tyre3 from "@/assets/tyre-3.jpg";

const products = [
  {
    id: 1,
    name: "Premium Performance Tyres",
    description: "High-quality tyres designed for optimal performance and durability on all road conditions.",
    image: tyre1,
  },
  {
    id: 2,
    name: "Sport Performance Tyres",
    description: "Advanced grip technology and superior handling for enhanced driving dynamics.",
    image: tyre2,
  },
  {
    id: 3,
    name: "All-Terrain Tyres",
    description: "Rugged construction and aggressive tread pattern for off-road adventures.",
    image: tyre3,
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Our <span className="text-primary">Products</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
