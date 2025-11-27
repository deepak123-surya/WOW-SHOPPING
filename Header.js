import { ShoppingCart, Search, Menu, User, ChevronDown, X, Mail, Lock, Eye, EyeOff, Zap, Star, Heart, Plus, Minus, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../components/assets/logo2.png";

export function Header({ cartCount, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);
  const [isAppliancesDropdownOpen, setIsAppliancesDropdownOpen] = useState(false);
  const [isAppliancesModalOpen, setIsAppliancesModalOpen] = useState(false); // New state for appliances modal
  const [isOrderNowPopupOpen, setIsOrderNowPopupOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isWinterOffersOpen, setIsWinterOffersOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [authFormData, setAuthFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [cartItems, setCartItems] = useState([]);

  // Winter offers data
  const winterOffers = [
    "❄️ Winter Special: Get 25% OFF on all refrigerators! Limited time offer.",
    "🔥 Hot Deal: Buy any oven & get free installation worth ₹5,000!",
    "🎁 Festive Bonanza: Additional 10% OFF on appliances above ₹50,000!",
    "⭐ Exclusive: Extended warranty FREE on all kitchen appliances!"
  ];

  // Regular Kitchen Appliances Data
  const kitchenAppliances = [
    {
      id: 1,
      name: "French Door Refrigerator",
      category: "Refrigerators",
      price: "₹89,999",
      warranty: "10 Years Compressor",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&h=400&q=80",
      features: ["Smart Cooling", "Water Dispenser", "Energy Efficient"]
    },
    {
      id: 2,
      name: "Stainless Steel Oven",
      category: "Ovens",
      price: "₹45,999",
      warranty: "5 Years Comprehensive",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1556912164-f61267e49c09?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&h=400&q=80",
      features: ["Convection", "Self-Cleaning", "Digital Controls"]
    },
    {
      id: 3,
      name: "Professional Blender",
      category: "Blenders",
      price: "₹12,499",
      warranty: "3 Years Motor",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&h=400&q=80",
      features: ["2000W Motor", "8 Speeds", "Stainless Steel"]
    },
    {
      id: 4,
      name: "Smart Dishwasher",
      category: "Dishwashers",
      price: "₹67,999",
      warranty: "7 Years",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1586987177716-902361c3c4d5?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&h=400&q=80",
      features: ["WiFi Connected", "Quiet Operation", "Energy Star"]
    },
    {
      id: 5,
      name: "Induction Cooktop",
      category: "Cooktops",
      price: "₹23,999",
      warranty: "4 Years",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1605495725941-5f1bb5a6f84e?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&h=400&q=80",
      features: ["Touch Controls", "Safety Lock", "Rapid Heating"]
    },
    {
      id: 6,
      name: "Microwave Oven",
      category: "Microwaves",
      price: "₹18,499",
      warranty: "3 Years",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&h=400&q=80",
      features: ["Grill Function", "Auto Cook", "Child Lock"]
    },
    {
      id: 7,
      name: "Coffee Maker",
      category: "Coffee Makers",
      price: "₹15,999",
      warranty: "2 Years",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&h=400&q=80",
      features: ["Programmable", "Built-in Grinder", "Thermal Carafe"]
    },
    {
      id: 8,
      name: "Food Processor",
      category: "Food Processors",
      price: "₹9,999",
      warranty: "2 Years",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1594489570656-4e8bbe8d6837?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&h=400&q=80",
      features: ["Multiple Blades", "Large Capacity", "Pulse Function"]
    }
  ];

  // Winter Offers Appliances with Discounts
  const winterOfferAppliances = [
    {
      id: 101,
      name: "Winter Special Refrigerator",
      category: "Refrigerators",
      originalPrice: "₹99,999",
      price: "₹74,999",
      discount: "25% OFF",
      warranty: "12 Years Compressor",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&h=400&q=80",
      features: ["Smart Inverter", "Frost Free", "Energy Saver"]
    },
    {
      id: 102,
      name: "Winter Warmer Oven",
      category: "Ovens",
      originalPrice: "₹52,999",
      price: "₹39,749",
      discount: "25% OFF",
      warranty: "6 Years Comprehensive",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1556912164-f61267e49c09?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&h=400&q=80",
      features: ["Winter Baking Mode", "Quick Preheat", "Holiday Recipes"]
    },
    {
      id: 103,
      name: "Hot Soup Blender Pro",
      category: "Blenders",
      originalPrice: "₹14,999",
      price: "₹11,249",
      discount: "25% OFF",
      warranty: "4 Years Motor",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&h=400&q=80",
      features: ["Soup Maker", "Heating Function", "Winter Recipes"]
    },
    {
      id: 104,
      name: "Festive Dishwasher",
      category: "Dishwashers",
      originalPrice: "₹74,999",
      price: "₹59,999",
      discount: "20% OFF",
      warranty: "8 Years",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1586987177716-902361c3c4d5?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&h=400&q=80",
      features: ["Holiday Load", "Sanitize Cycle", "Quiet 42dB"]
    },
    {
      id: 105,
      name: "Winter Induction Cooktop",
      category: "Cooktops",
      originalPrice: "₹27,999",
      price: "₹20,999",
      discount: "25% OFF",
      warranty: "5 Years",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1605495725941-5f1bb5a6f84e?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&h=400&q=80",
      features: ["Winter Cooking", "Instant Heat", "Safety Features"]
    },
    {
      id: 106,
      name: "Festive Microwave Combo",
      category: "Microwaves",
      originalPrice: "₹21,999",
      price: "₹16,499",
      discount: "25% OFF",
      warranty: "4 Years",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&h=400&q=80",
      features: ["Grill+Convection", "Auto Defrost", "Winter Settings"]
    },
    {
      id: 107,
      name: "Winter Coffee Maker Deluxe",
      category: "Coffee Makers",
      originalPrice: "₹18,999",
      price: "₹14,249",
      discount: "25% OFF",
      warranty: "3 Years",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&h=400&q=80",
      features: ["Hot Chocolate", "Winter Brew", "Keep Warm"]
    },
    {
      id: 108,
      name: "Holiday Food Processor",
      category: "Food Processors",
      originalPrice: "₹11,999",
      price: "₹8,999",
      discount: "25% OFF",
      warranty: "3 Years",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1594489570656-4e8bbe8d6837?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&h=400&q=80",
      features: ["Festive Prep", "Dough Maker", "Large Bowl"]
    },
    {
      id: 109,
      name: "Winter Warming Kettle",
      category: "Kettles",
      originalPrice: "₹4,999",
      price: "₹3,749",
      discount: "25% OFF",
      warranty: "2 Years",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&h=400&q=80",
      features: ["Quick Boil", "Temperature Control", "Keep Warm"]
    },
    {
      id: 110,
      name: "Festive Toaster Oven",
      category: "Toasters",
      originalPrice: "₹8,999",
      price: "₹6,749",
      discount: "25% OFF",
      warranty: "2 Years",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&h=400&q=80",
      features: ["Bagel Function", "Frozen Setting", "Compact Design"]
    }
  ];

  // Categorize appliances for the appliances modal
  const categorizedAppliances = {
    ovens: kitchenAppliances.filter(item => 
      item.category.toLowerCase().includes('oven') || item.name.toLowerCase().includes('oven')
    ),
    hobs: kitchenAppliances.filter(item => 
      item.category.toLowerCase().includes('cooktop') || item.name.toLowerCase().includes('cooktop') || 
      item.category.toLowerCase().includes('hob') || item.name.toLowerCase().includes('hob')
    ),
    dishwashers: kitchenAppliances.filter(item => 
      item.category.toLowerCase().includes('dishwasher') || item.name.toLowerCase().includes('dishwasher')
    ),
    refrigerators: kitchenAppliances.filter(item => 
      item.category.toLowerCase().includes('refrigerator') || item.name.toLowerCase().includes('refrigerator')
    ),
    smallAppliances: kitchenAppliances.filter(item => 
      item.category.toLowerCase().includes('blender') || item.category.toLowerCase().includes('coffee') || 
      item.category.toLowerCase().includes('food processor') || item.category.toLowerCase().includes('microwave') ||
      item.name.toLowerCase().includes('blender') || item.name.toLowerCase().includes('coffee') ||
      item.name.toLowerCase().includes('food processor') || item.name.toLowerCase().includes('microwave')
    )
  };

  // Scroll effect handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add to cart function
  const addToCart = (appliance) => {
    const existingItem = cartItems.find(item => item.id === appliance.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === appliance.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...appliance, quantity: 1 }]);
    }
    
    // Show success message
    alert(`${appliance.name} added to cart!`);
  };

  // Remove from cart function
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Update quantity function
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Calculate total cart count
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ''));
    return total + (price * item.quantity);
  }, 0);

  const handleAuthButtonClick = (mode) => {
    setIsLoginMode(mode === 'login');
    setIsAuthModalOpen(true);
    setIsAuthDropdownOpen(false);
    setIsMenuOpen(false);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setAuthFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    setShowPassword(false);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (isLoginMode) {
      console.log("Login:", { email: authFormData.email, password: authFormData.password });
      alert("Login successful!");
    } else {
      if (authFormData.password !== authFormData.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      console.log("Signup:", authFormData);
      alert("Account created successfully!");
    }
    closeAuthModal();
  };

  const handleAuthFormChange = (e) => {
    setAuthFormData({
      ...authFormData,
      [e.target.name]: e.target.value
    });
  };

  const toggleAuthMode = () => {
    setIsLoginMode(!isLoginMode);
    setAuthFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    setShowPassword(false);
  };

  // Open Appliances Modal
  const openAppliancesModal = () => {
    setIsAppliancesModalOpen(true);
    setIsAppliancesDropdownOpen(false);
    setIsMenuOpen(false);
  };

  // Close Appliances Modal
  const closeAppliancesModal = () => {
    setIsAppliancesModalOpen(false);
  };

  const openOrderNowPopup = () => {
    setIsOrderNowPopupOpen(true);
    setIsMenuOpen(false);
  };

  const closeOrderNowPopup = () => {
    setIsOrderNowPopupOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
    setIsMenuOpen(false);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Open Winter Offers
  const openWinterOffers = () => {
    setIsWinterOffersOpen(true);
    setIsMenuOpen(false);
  };

  // Close Winter Offers
  const closeWinterOffers = () => {
    setIsWinterOffersOpen(false);
  };

  // Winter Offers Banner Component
  const WinterOffersBanner = () => (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-2 relative overflow-hidden">
      {/* Moving offers text */}
      <div className="flex items-center">
        <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap">
          {winterOffers.map((offer, index) => (
            <span key={index} className="text-sm font-medium">
              {offer}
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap">
          {winterOffers.map((offer, index) => (
            <span key={index} className="text-sm font-medium">
              {offer}
            </span>
          ))}
        </div>
      </div>
      
      {/* Claim Offer Button */}
      <button 
        onClick={openWinterOffers}
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors shadow-md z-10"
      >
        Claim Offer 🎁
      </button>
      
      {/* Gradient overlay for smooth edges */}
      <div className="absolute right-16 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-600 to-transparent z-5"></div>
    </div>
  );

  // Modern Auth Modal Component
  const AuthModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-6">
          <button
            onClick={closeAuthModal}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-white/10"
          >
            <X size={20} />
          </button>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <User size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {isLoginMode ? "Welcome Back" : "Create Account"}
            </h3>
            <p className="text-blue-100">
              {isLoginMode ? "Sign in to your account" : "Join us today for the best experience"}
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleAuthSubmit} className="p-6 space-y-4">
          {!isLoginMode && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  name="name"
                  value={authFormData.name}
                  onChange={handleAuthFormChange}
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required={!isLoginMode}
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                value={authFormData.email}
                onChange={handleAuthFormChange}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={authFormData.password}
                onChange={handleAuthFormChange}
                placeholder="Enter your password"
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {!isLoginMode && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={authFormData.confirmPassword}
                  onChange={handleAuthFormChange}
                  placeholder="Confirm your password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required={!isLoginMode}
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {isLoginMode ? "Sign In" : "Create Account"}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={toggleAuthMode}
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              {isLoginMode ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="bg-gray-50 p-4 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            By continuing, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );

  // Appliances Modal Component
  const AppliancesModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-7xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-3 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                Kitchen Appliances
              </h3>
              <p className="text-gray-500">Browse our categorized collection of premium kitchen appliances</p>
            </div>
          </div>
          <button
            onClick={closeAppliancesModal}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        {/* Categories Navigation */}
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto gap-1 p-4">
            {Object.keys(categorizedAppliances).map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-xl font-medium text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap capitalize"
                onClick={() => {
                  const element = document.getElementById(category);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {category === 'smallAppliances' ? 'Small Appliances' : category}
                <span className="ml-2 text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                  {categorizedAppliances[category].length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Appliances Grid by Category */}
        <div className="flex-1 overflow-y-auto p-6">
          {Object.keys(categorizedAppliances).map((category) => (
            <div key={category} id={category} className="mb-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 capitalize border-b pb-2">
                {category === 'smallAppliances' ? 'Small & Countertop Appliances' : category}
                <span className="ml-3 text-sm font-normal text-gray-500">
                  ({categorizedAppliances[category].length} products)
                </span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categorizedAppliances[category].map((appliance) => (
                  <div key={appliance.id} className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img
                        src={appliance.image}
                        alt={appliance.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                          <Heart size={16} className="text-gray-600" />
                        </button>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <div className="bg-black/70 text-white px-2 py-1 rounded-lg text-sm font-medium">
                          {appliance.category}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h5 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {appliance.name}
                      </h5>
                      
                      {/* Rating and Price */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1">
                          <Star size={16} className="text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-gray-700">{appliance.rating}</span>
                        </div>
                        <span className="text-lg font-bold text-blue-600">{appliance.price}</span>
                      </div>

                      {/* Warranty */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                          <Zap size={10} className="text-green-600" />
                        </div>
                        <span className="text-sm text-green-600 font-medium">{appliance.warranty}</span>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {appliance.features.slice(0, 2).map((feature, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <button 
                        onClick={() => addToCart(appliance)}
                        className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={16} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gradient-to-r from-orange-50 to-red-50 rounded-b-3xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-gray-600 font-medium">
                Total Appliances: <span className="text-orange-600 font-bold">{kitchenAppliances.length} products</span>
              </p>
              <p className="text-sm text-gray-500">All appliances come with manufacturer warranty and expert support</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={closeAppliancesModal}
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Continue Shopping
              </button>
              <button 
                onClick={() => {
                  if (totalCartCount > 0) {
                    openCart();
                    closeAppliancesModal();
                  } else {
                    alert("Your cart is empty! Add some appliances first.");
                  }
                }}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Cart ({totalCartCount})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Winter Offers Popup Component
  const WinterOffersPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-7xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                🎁 Winter Special Offers
              </h3>
              <p className="text-gray-500">Exclusive discounts on premium kitchen appliances for the winter season</p>
            </div>
          </div>
          <button
            onClick={closeWinterOffers}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        {/* Winter Offers Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {winterOfferAppliances.map((appliance) => (
              <div key={appliance.id} className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  {appliance.discount}
                </div>
                
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={appliance.image}
                    alt={appliance.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Heart size={16} className="text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-black/70 text-white px-2 py-1 rounded-lg text-sm font-medium">
                      {appliance.category}
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h5 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {appliance.name}
                  </h5>
                  
                  {/* Price with Discount */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-bold text-blue-600">{appliance.price}</span>
                    <span className="text-sm text-gray-500 line-through">{appliance.originalPrice}</span>
                  </div>

                  {/* Rating and Warranty */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{appliance.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap size={14} className="text-green-600" />
                      <span className="text-sm text-green-600 font-medium">{appliance.warranty}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {appliance.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => addToCart(appliance)}
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 rounded-lg font-medium hover:from-red-600 hover:to-orange-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 rounded-b-3xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-gray-600 font-medium">
                Winter Cart: <span className="text-blue-600 font-bold">{totalCartCount} items</span>
              </p>
              <p className="text-sm text-gray-500">All winter offers come with extended warranty and free installation</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  closeWinterOffers();
                  openOrderNowPopup();
                }}
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                View All Appliances
              </button>
              <button 
                onClick={() => {
                  if (totalCartCount > 0) {
                    openCart();
                    closeWinterOffers();
                  } else {
                    alert("Your cart is empty! Add some winter special items first.");
                  }
                }}
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Winter Cart ({totalCartCount})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Order Now Popup Component
  const OrderNowPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-7xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                Order Kitchen Appliances
              </h3>
              <p className="text-gray-500">Browse {kitchenAppliances.length} premium kitchen appliances with warranty & ratings</p>
            </div>
          </div>
          <button
            onClick={closeOrderNowPopup}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        {/* Appliances Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {kitchenAppliances.map((appliance) => (
              <div key={appliance.id} className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={appliance.image}
                    alt={appliance.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Heart size={16} className="text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-black/70 text-white px-2 py-1 rounded-lg text-sm font-medium">
                      {appliance.category}
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h5 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {appliance.name}
                  </h5>
                  
                  {/* Rating and Price */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{appliance.rating}</span>
                    </div>
                    <span className="text-lg font-bold text-blue-600">{appliance.price}</span>
                  </div>

                  {/* Warranty */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                      <Zap size={10} className="text-green-600" />
                    </div>
                    <span className="text-sm text-green-600 font-medium">{appliance.warranty}</span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {appliance.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => addToCart(appliance)}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-3xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-gray-600 font-medium">
                Cart: <span className="text-blue-600 font-bold">{totalCartCount} items</span>
              </p>
              <p className="text-sm text-gray-500">All appliances come with manufacturer warranty</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={closeOrderNowPopup}
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Continue Shopping
              </button>
              <button 
                onClick={() => {
                  if (totalCartCount > 0) {
                    openCart();
                    closeOrderNowPopup();
                  } else {
                    alert("Your cart is empty! Add some items first.");
                  }
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Cart ({totalCartCount})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Cart Popup Component
  const CartPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-3 h-8 bg-gradient-to-b from-green-500 to-blue-600 rounded-full"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                Your Shopping Cart
              </h3>
              <p className="text-gray-500">{totalCartCount} items in your cart</p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h4>
              <p className="text-gray-500 mb-6">Add some amazing appliances to get started!</p>
              <button
                onClick={() => {
                  closeCart();
                  openWinterOffers();
                }}
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:from-red-600 hover:to-orange-600 transition-colors mr-2"
              >
                Winter Offers
              </button>
              <button
                onClick={() => {
                  closeCart();
                  openAppliancesModal();
                }}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
              >
                Browse Appliances
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-semibold text-gray-900 truncate">{item.name}</h5>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="text-lg font-bold text-blue-600">{item.price}</p>
                    {item.originalPrice && (
                      <p className="text-sm text-gray-500 line-through">{item.originalPrice}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-semibold text-gray-900 min-w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors p-2 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-3xl">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <p className="text-2xl font-bold text-gray-900">
                  Total: ₹{totalPrice.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">Including all taxes and shipping</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    closeCart();
                    openAppliancesModal();
                  }}
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Browse More
                </button>
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Winter Offers Banner */}
      <WinterOffersBanner />
      
      <header className={`border-b sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900 border-gray-800' 
          : 'bg-[#549696] border-gray-200'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              {/* Modern WOW APPLIANCES Logo */}
              <div className="flex items-center gap-15">
                <div className="relative">
                  <img src={logo} alt="logo" className="w-full h-[60px]"/>
                </div>
              </div>
              
              <nav className="hidden md:flex gap-6">
                <a 
                  href="#" 
                  className={`transition-colors ${
                    isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 font-semibold hover:text-gray-900'
                  }`}
                >
                  Home
                </a>
                
                {/* Appliances Dropdown */}
                <div className="relative">
                  <button 
                    onClick={openAppliancesModal}
                    className={`flex items-center gap-1 transition-colors ${
                      isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 font-semibold hover:text-gray-900'
                    }`}
                  >
                    <span>Appliances</span>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform ${isAppliancesDropdownOpen ? 'rotate-180' : ''} ${
                        isScrolled ? 'text-gray-300' : 'text-gray-600'
                      }`} 
                    />
                  </button>
                </div>

                <a 
                  href="#" 
                  className={`transition-colors ${
                    isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 font-semibold hover:text-gray-900'
                  }`}
                >
                  Visit
                </a>
              </nav>
            </div>

            <div className="flex items-center gap-4 flex-1 max-w-md">
              <div className="relative flex-1">
                <Search 
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors ${
                    isScrolled ? 'text-gray-400' : 'text-gray-400'
                  }`} 
                  size={20} 
                />
                <input 
                  type="search" 
                  placeholder="Search appliances..." 
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors ${
                    isScrolled 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500' 
                      : 'border-gray-300 focus:ring-blue-500'
                  }`}
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Auth Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsAuthDropdownOpen(!isAuthDropdownOpen)}
                  className={`flex items-center gap-2 p-2 border rounded-lg hover:bg-gray-50 transition-colors ${
                    isScrolled 
                      ? 'border-gray-700 text-gray-300 hover:bg-gray-800' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <User size={20} className={isScrolled ? 'text-gray-300' : 'text-gray-700 '} />
                  <span className={`hidden sm:block ${isScrolled ? 'text-gray-300' : 'text-gray-700'}`}>
                    Account
                  </span>
                </button>

                {isAuthDropdownOpen && (
                  <div className="absolute right-0 top-12 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    <button 
                      onClick={() => handleAuthButtonClick('login')}
                      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Login
                    </button>
                    <button 
                      onClick={() => handleAuthButtonClick('signup')}
                      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>

              {/* Cart Button */}
              <button 
                onClick={openCart}
                className={`relative p-2 border rounded-lg hover:bg-gray-50 transition-colors ${
                  isScrolled 
                    ? 'border-gray-700 text-gray-300 hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <ShoppingCart size={20} className={isScrolled ? 'text-gray-300' : 'text-gray-700'} />
                {totalCartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalCartCount}
                  </span>
                )}
              </button>

              {/* Order Now Button - Opens Appliances Popup */}
              <button 
                onClick={openOrderNowPopup}
                className={`hidden md:block px-4 py-2 rounded-lg font-medium transition-colors shadow-md ${
                  isScrolled 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Order Now
              </button>

              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMenuOpen(true)}
                className={`md:hidden p-2 border rounded-lg hover:bg-gray-50 transition-colors ${
                    isScrolled 
                      ? 'border-gray-700 text-gray-300 hover:bg-gray-800' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <Menu size={20} className={isScrolled ? 'text-gray-300' : 'text-gray-700'} />
              </button>

              {/* Mobile menu overlay */}
              {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
                  <div className={`fixed right-0 top-0 h-full w-64 shadow-lg ${
                    isScrolled ? 'bg-gray-900' : 'bg-white'
                  }`}>
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                      <span className={`text-lg font-semibold ${isScrolled ? 'text-white' : 'text-gray-900'}`}>
                        Menu
                      </span>
                      <button 
                        onClick={() => setIsMenuOpen(false)}
                        className={`p-1 rounded-lg ${isScrolled ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100'}`}
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <div className="p-4 space-y-4">
                      <a 
                        href="#" 
                        className={`block py-2 transition-colors ${isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
                      >
                        Home
                      </a>
                      <button 
                        onClick={() => {
                          openAppliancesModal();
                          setIsMenuOpen(false);
                        }}
                        className={`block w-full text-left py-2 transition-colors ${isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
                      >
                        Appliances
                      </button>
                      <a 
                        href="#" 
                        className={`block py-2 transition-colors ${isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
                      >
                        Visit
                      </a>
                      <button 
                        onClick={() => {
                          handleAuthButtonClick('login');
                          setIsMenuOpen(false);
                        }}
                        className={`block w-full text-left py-2 transition-colors ${isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
                      >
                        Login
                      </button>
                      <button 
                        onClick={() => {
                          handleAuthButtonClick('signup');
                          setIsMenuOpen(false);
                        }}
                        className={`block w-full text-left py-2 transition-colors ${isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Appliances Modal */}
      {isAppliancesModalOpen && <AppliancesModal />}

      {/* Winter Offers Popup */}
      {isWinterOffersOpen && <WinterOffersPopup />}

      {/* Order Now Popup */}
      {isOrderNowPopupOpen && <OrderNowPopup />}

      {/* Cart Popup */}
      {isCartOpen && <CartPopup />}

      {/* Modern Auth Modal */}
      {isAuthModalOpen && <AuthModal />}

      {/* Add CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </>
  );
}