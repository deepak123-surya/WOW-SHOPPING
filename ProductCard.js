import { ChevronRight, Star, Shield, ShoppingCart } from "lucide-react";

export function ProductCard({ product, onClick, onAddToCart }) {
  return (
    <div 
      className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105"
      onClick={onClick}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%239ca3af'%3EImage not available%3C/text%3E%3C/svg%3E";
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Top Badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        {product.badge && (
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            {product.badge}
          </span>
        )}
        {product.originalPrice && (
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            SAVE ₹{(product.originalPrice - product.price).toFixed(0)}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{product.name}</h3>
          <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            {product.description}
          </p>
        </div>
        
        {/* Product Info - Hidden by default, shown on hover */}
        <div className="space-y-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-300">
          {/* Price Section */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-300 line-through">₹{product.originalPrice}</span>
            )}
          </div>

          {/* Rating Section */}
          {product.rating && (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-200">
                {product.rating} ({product.reviews}+ reviews)
              </span>
            </div>
          )}

          {/* Warranty & Features */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Shield size={16} className="text-green-400" />
              <span className="text-gray-200">2-Year Warranty</span>
            </div>
            {product.category && (
              <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs border border-blue-500/30">
                {product.category}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart?.(product);
              }}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </button>
            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
        
        {/* Default View (Hidden on hover) */}
        <div className="flex items-center justify-between group-hover:opacity-0 transition-opacity duration-300">
          <span className="text-blue-300 font-medium text-sm">
            Explore Collection
          </span>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <ChevronRight size={20} className="text-white" />
          </div>
        </div>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 group-hover:animate-shine" />
      </div>
    </div>
  );
}

// Add this CSS animation for the shine effect
const styles = `
@keyframes shine {
  0% {
    transform: translateX(-100%) skewX(-12deg);
  }
  100% {
    transform: translateX(200%) skewX(-12deg);
  }
}

.animate-shine {
  animation: shine 1.5s ease-in-out;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

// Usage example with sample data:
export function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Professional Stand Mixer",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviews: 342,
      image: "https://images.unsplash.com/photo-1758565810987-ca8d617ea7be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbWl4ZXJ8ZW58MXx8fHwxNzYzMDU4NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Mixers",
      badge: "Best Seller",
      description: "Professional-grade mixer with 10-speed control"
    },
    {
      id: 2,
      name: "Premium Espresso Machine",
      price: 549.99,
      originalPrice: 699.99,
      rating: 4.9,
      reviews: 521,
      image: "https://images-cdn.ubuy.co.in/6846a1527a8ca5d099061e94-espresso-machine-with-grinder.jpg",
      category: "Coffee Makers",
      badge: "New",
      description: "Automatic espresso machine with built-in grinder"
    },
    {
      id: 3,
      name: "High-Speed Blender Pro",
      price: 179.99,
      rating: 4.7,
      reviews: 289,
      image: "https://tribest.com/cdn/shop/files/DPS-2200RD-B_main.jpg?v=1735852478",
      category: "Blenders",
      description: "Commercial-grade blender with 2000W motor"
    },
    {
      id: 4,
      name: "Modern Toaster Oven",
      price: 129.99,
      originalPrice: 169.99,
      rating: 4.6,
      reviews: 178,
      image: "https://www.shutterstock.com/image-photo/womans-hand-putting-bread-into-260nw-2488337531.jpg",
      category: "Toasters",
      description: "4-slice toaster with convection baking"
    },
    {
      id: 5,
      name: "Digital Air Fryer XL",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.8,
      reviews: 612,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28MyAr3DDSTDOtBwCX0AFrvDhMali63UI3A&s",
      category: "Air Fryers",
      badge: "Hot Deal",
      description: "Large capacity air fryer with digital controls"
    }
  ];

  const handleAddToCart = (product) => {
    console.log(`Added to cart: ${product.name}`);
    // Add your cart logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Kitchen Appliances</h2>
          <p className="text-xl text-gray-300">Discover our premium collection of modern kitchen essentials</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onClick={() => console.log(`Clicked ${product.name}`)}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}