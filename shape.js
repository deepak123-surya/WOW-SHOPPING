import { useState, useEffect } from "react";
import { Check, ArrowRight, Ruler, Palette, Wrench, Star, Users, Clock, Zap, X, Play, RotateCw, ZoomIn, ZoomOut, Grid, Home } from "lucide-react";
import { ShoppingCart } from "lucide-react"
import { useMemo } from "react";

export function KitchenLayouts() {
  const [selectedLayout, setSelectedLayout] = useState("l-shaped");
  const [is3DViewOpen, setIs3DViewOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState('');
  const [isLayoutsPopupOpen, setIsLayoutsPopupOpen] = useState(false);
  const [showDetailedPage, setShowDetailedPage] = useState(false);
  const [isAppliancesPopupOpen, setIsAppliancesPopupOpen] = useState(false);
  const [selectedAppliances, setSelectedAppliances] = useState([]);
  const [activePointer, setActivePointer] = useState(null);
  const [pointerAppliances, setPointerAppliances] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCartNotification, setShowCartNotification] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [filteredAppliances, setFilteredAppliances] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [compareItems, setCompareItems] = useState([]);

  const kitchenLayouts = [
    {
      id: "l-shaped",
      name: "L-Shaped Kitchen",
      image: "https://images.jdmagicbox.com/quickquotes/images_main/modern-modular-l-shape-kitchen-design-with-a-glossy-finish-2217153503-ovqxb4cz.jpg",
      directionalImages: [
        "https://images.woodenstreet.de/image/data/modular%20kitchen/22.jpg"
      ],
      video3D: "https://assets.mixkit.co/videos/preview/mixkit-modern-kitchen-interior-3d-animation-43383-large.mp4",
      description: "Perfect for corner spaces, maximizes workflow efficiency with two adjacent walls",
      benefits: [
        { icon: Users, title: "Space Efficient", description: "Maximizes corner utilization" },
        { icon: Zap, title: "Workflow Optimized", description: "Efficient triangular workflow" },
        { icon: Star, title: "Versatile", description: "Fits small to medium spaces" },
        { icon: Clock, title: "Time Saving", description: "Reduces movement between stations" }
      ],
      idealFor: "Apartments, small homes, corner spaces",
      dimensions: "8' x 10' minimum",
      popularity: "Most Popular",
      category: "space-efficient",
      features: [
        "Corner cabinet solutions",
        "Efficient work triangle",
        "Ample counter space",
        "Easy appliance placement"
      ],
      pros: ["Great for small spaces", "Cost-effective", "Easy to maintain"],
      cons: ["Limited counter space", "Corner cabinets can be hard to access"],
      style: "Modern, Contemporary, Traditional"
    },
    {
      id: "u-shaped",
      name: "U-Shaped Kitchen",
      image: "https://ii1.pepperfry.com/assets/w23-pf-PlushModularUshapedKitcheninOystercolour1.jpg",
      directionalImages: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80"
      ],
      video3D: "https://assets.mixkit.co/videos/preview/mixkit-modern-kitchen-interior-3d-animation-43383-large.mp4",
      description: "Three walls of cabinetry and appliances create an efficient work triangle",
      benefits: [
        { icon: Users, title: "Maximum Storage", description: "Three walls of storage space" },
        { icon: Zap, title: "Optimal Workflow", description: "Perfect work triangle efficiency" },
        { icon: Star, title: "Multiple Cooks", description: "Space for multiple people" },
        { icon: Clock, title: "Organized", description: "Everything within easy reach" }
      ],
      idealFor: "Large families, spacious homes, serious cooks",
      dimensions: "10' x 12' minimum",
      popularity: "Premium",
      category: "efficient",
      features: [
        "Three-wall configuration",
        "Optimal work triangle",
        "Maximum storage capacity",
        "Multiple work zones"
      ],
      pros: ["Excellent storage", "Efficient workflow", "Great for multiple cooks"],
      cons: ["Requires more space", "Can feel enclosed", "Higher cost"],
      style: "Modern, Luxury, Traditional"
    },
    {
      id: "galley",
      name: "Galley Kitchen",
      image: "https://media.designcafe.com/wp-content/uploads/2020/07/14133130/galley-kitchen-design-with-lacquered-glass.jpg",
      directionalImages: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80"
      ],
      video3D: "https://assets.mixkit.co/videos/preview/mixkit-modern-kitchen-interior-3d-animation-43383-large.mp4",
      description: "Efficient corridor-style layout perfect for small spaces and single cooks",
      benefits: [
        { icon: Users, title: "Space Saving", description: "Ideal for narrow spaces" },
        { icon: Zap, title: "Linear Workflow", description: "Straight-line efficiency" },
        { icon: Star, title: "Compact", description: "Maximizes small footprints" },
        { icon: Clock, title: "Quick Access", description: "Everything within steps" }
      ],
      idealFor: "Apartments, small homes, narrow spaces",
      dimensions: "7' x 10' minimum",
      popularity: "Budget Friendly",
      category: "compact",
      features: [
        "Parallel countertops",
        "Efficient linear workflow",
        "Space-saving design",
        "Easy cleaning"
      ],
      pros: ["Great for small spaces", "Cost-effective", "Easy to navigate"],
      cons: ["Limited to one cook", "Can feel cramped", "Limited counter space"],
      style: "Modern, Minimalist, Contemporary"
    },
    {
      id: "island",
      name: "Island Kitchen",
      image: "https://media.designcafe.com/wp-content/uploads/2021/11/22194950/l-shaped-kitchen-layout-ideas-with-island.jpg",
      directionalImages: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80"
      ],
      video3D: "https://assets.mixkit.co/videos/preview/mixkit-modern-kitchen-interior-3d-animation-43383-large.mp4",
      description: "Central island provides additional workspace, storage, and social interaction space",
      benefits: [
        { icon: Users, title: "Social Hub", description: "Perfect for entertaining" },
        { icon: Zap, title: "Multi-functional", description: "Extra workspace and storage" },
        { icon: Star, title: "Versatile", description: "Various layout combinations" },
        { icon: Clock, title: "Efficient", description: "Centralized workflow" }
      ],
      idealFor: "Large homes, open floor plans, entertainers",
      dimensions: "12' x 15' minimum",
      popularity: "Luxury",
      category: "social",
      features: [
        "Central island workspace",
        "Additional storage",
        "Entertainment space",
        "Multiple configurations"
      ],
      pros: ["Great for entertaining", "Additional workspace", "Social interaction space"],
      cons: ["Requires large space", "Higher cost", "Can disrupt workflow"],
      style: "Modern, Contemporary, Farmhouse"
    },
    {
      id: "one-wall",
      name: "One-Wall Kitchen",
      image: "https://cloudfrontgharpediabucket.gharpedia.com/uploads/2018/04/Single-Wall-Kitchen-Layout-02-0503070003.jpg",
      directionalImages: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80"
      ],
      video3D: "https://assets.mixkit.co/videos/preview/mixkit-modern-kitchen-interior-3d-animation-43383-large.mp4",
      description: "All appliances and cabinets along a single wall, perfect for studio apartments",
      benefits: [
        { icon: Users, title: "Space Maximizing", description: "Ideal for very small spaces" },
        { icon: Zap, title: "Simple Layout", description: "Easy to design and install" },
        { icon: Star, title: "Open Feel", description: "Doesn't obstruct room flow" },
        { icon: Clock, title: "Cost Effective", description: "Minimal cabinetry needed" }
      ],
      idealFor: "Studio apartments, lofts, small spaces",
      dimensions: "6' x 8' minimum",
      popularity: "Budget",
      category: "minimal",
      features: [
        "Single wall configuration",
        "Space-saving design",
        "Open floor plan friendly",
        "Minimalist approach"
      ],
      pros: ["Very space efficient", "Lowest cost", "Easy to maintain"],
      cons: ["Limited counter space", "No work triangle", "Limited storage"],
      style: "Minimalist, Modern, Industrial"
    },
    {
      id: "peninsula",
      name: "Peninsula Kitchen",
      image: "https://www.khov.com/blog/wp-content/uploads/2021/09/75475_Four-Seasons-at-Sun-City-West_Saguaro_Kitchen-with-Peninsula-1600x1024.jpg",
      directionalImages: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80"
      ],
      video3D: "https://assets.mixkit.co/videos/preview/mixkit-modern-kitchen-interior-3d-animation-43383-large.mp4",
      description: "Connected countertop extension that creates additional workspace and separation",
      benefits: [
        { icon: Users, title: "Space Definition", description: "Defines kitchen area in open spaces" },
        { icon: Zap, title: "Island Alternative", description: "Island benefits without floor space" },
        { icon: Star, title: "Versatile", description: "Works with various layouts" },
        { icon: Clock, title: "Social", description: "Creates casual dining space" }
      ],
      idealFor: "Open floor plans, medium-sized homes",
      dimensions: "10' x 12' minimum",
      popularity: "Popular",
      category: "versatile",
      features: [
        "Connected counter extension",
        "Additional workspace",
        "Room separation",
        "Breakfast bar option"
      ],
      pros: ["Defines space", "Additional seating", "More affordable than island"],
      cons: ["Fixed position", "Limited mobility around it", "Can feel bulky"],
      style: "Transitional, Modern, Traditional"
    },
    {
      id: "g-shaped",
      name: "G-Shaped Kitchen",
      image: "https://www.regalokitchens.com/images/kitchen/g-shaped-kitchen/g-shaped-kitchen2.jpg",
      directionalImages: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80"
      ],
      video3D: "https://assets.mixkit.co/videos/preview/mixkit-modern-kitchen-interior-3d-animation-43383-large.mp4",
      description: "U-shaped kitchen with a peninsula extension, offering maximum storage and workspace",
      benefits: [
        { icon: Users, title: "Maximum Workspace", description: "Largest counter area available" },
        { icon: Zap, title: "Superior Storage", description: "Maximum cabinet space" },
        { icon: Star, title: "Multiple Zones", description: "Separate cooking and prep areas" },
        { icon: Clock, title: "Family Friendly", description: "Space for multiple cooks" }
      ],
      idealFor: "Large families, spacious homes, serious entertainers",
      dimensions: "12' x 15' minimum",
      popularity: "Luxury",
      category: "spacious",
      features: [
        "Four-wall involvement",
        "Maximum storage capacity",
        "Multiple work zones",
        "Entertainment ready"
      ],
      pros: ["Maximum storage", "Excellent for multiple cooks", "Luxurious feel"],
      cons: ["Requires large space", "Highest cost", "Can feel enclosed"],
      style: "Luxury, Traditional, Modern"
    },
    {
      id: "parallel",
      name: "Parallel Kitchen",
      image: "https://media.designcafe.com/wp-content/uploads/2020/09/11150811/underrated-tones-parallel-kitchen.jpg",
      directionalImages: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=600&q=80"
      ],
      video3D: "https://assets.mixkit.co/videos/preview/mixkit-modern-kitchen-interior-3d-animation-43383-large.mp4",
      description: "Two parallel countertops with a walkway in between, efficient for narrow spaces",
      benefits: [
        { icon: Users, title: "Narrow Space Optimized", description: "Perfect for long, narrow rooms" },
        { icon: Zap, title: "Efficient Workflow", description: "Short distances between stations" },
        { icon: Star, title: "Ample Storage", description: "Two full walls of cabinets" },
        { icon: Clock, title: "Organized", description: "Clear separation of zones" }
      ],
      idealFor: "Narrow spaces, apartments, efficient layouts",
      dimensions: "8' x 12' minimum",
      popularity: "Space Efficient",
      category: "efficient",
      features: [
        "Parallel countertops",
        "Efficient narrow space use",
        "Clear work zones",
        "Good storage capacity"
      ],
      pros: ["Great for narrow spaces", "Efficient workflow", "Good storage"],
      cons: ["Limited to one cook comfortably", "Can feel like a corridor", "Limited social interaction"],
      style: "Modern, Contemporary, Minimalist"
    }
  ];

  const brands = [
    { id: "bosch", name: "BOSCH" },
    { id: "siemens", name: "SIEMENS" },
    { id: "hafele", name: "HAFELE" },
    { id: "blaupunkt", name: "BLAUPUNKT" },
    { id: "kaff", name: "KAFF" },
    { id: "smeg", name: "SMEG" },
    { id: "elica", name: "ELICA" },
    { id: "faber", name: "FABER" },
    { id: "carasyl", name: "CARASYL" },
    { id: "hindware", name: "HINDWARE" },
  ];

   const priceRanges = [
    { id: "budget", name: "Budget (₹2,000 - ₹5,000)", min: 2000, max: 5000 },
    { id: "mid-range", name: "Mid-Range (₹5,000 - ₹15,000)", min: 5000, max: 15000 },
    { id: "premium", name: "Premium (₹15,000 - ₹30,000)", min: 15000, max: 30000 },
    { id: "luxury", name: "Luxury (₹30,000+)", min: 30000, max: Infinity }
  ];

  // Enhanced appliances data with comparison attributes
  const appliances = [
    {
      id: "refrigerator",
      name: "Refrigerator",
      images: ["https://thumbs.dreamstime.com/b/open-refrigerator-filled-food-kitchen-181250904.jpg"],
      description: "Modern refrigerator with advanced cooling technology",
      price: "₹45,000",
      priceValue: 45000,
      categories: ["storage", "essential"],
      brand: "siemens",
      availability: "in-stock",
      // Comparison attributes
      capacity: "300L",
      energyRating: "5 Star",
      warranty: "10 Years",
      dimensions: "60x65x180 cm",
      features: ["Frost Free", "Smart Inverter", "Door Cooling+"],
      color: "Stainless Steel",
      weight: "65 kg"
    },
    {
      id: "oven",
      name: "Oven",
      images: [
        "https://img.freepik.com/free-vector/microwave-oven-with-light-inside-isolated-white-background-kitchen-appliances_134830-658.jpg?semt=ais_incoming&w=740&q=80"
      ],
      description: "Built-in oven with multiple cooking modes",
      price: "₹32,499",
      priceValue: 32499,
      categories: ["cooking", "baking"],
      brand:"siemens",
      availability:"in-stock",
      // Comparison attributes
      capacity: "28L",
      energyRating: "4 Star",
      warranty: "2 Years",
      dimensions: "45x35x35 cm",
      features: ["Convection", "Grill", "Digital Display"],
      color: "Black",
      weight: "18 kg"
    },
    {
      id: "dishwasher",
      name: "Dishwasher",
      images: [
        "https://t3.ftcdn.net/jpg/01/75/92/48/360_F_175924879_yAKbY1LhHs0ustwbvgg3mgIQ6o8pqImf.jpg"
      ],
      description: "Energy efficient dishwasher with multiple wash cycles",
      price: "₹28,999",
      priceValue: 28999,
      categories: ["cleaning", "convenience"],
      brand:"hafele",
      availability:"in-stock",
      // Comparison attributes
      capacity: "12 Place Settings",
      energyRating: "5 Star",
      warranty: "5 Years",
      dimensions: "60x55x85 cm",
      features: ["Eco Wash", "Quick Wash", "Hygiene Plus"],
      color: "White",
      weight: "42 kg"
    },
    {
      id: "air-fryer",
      name: "Air Fryer",
      images: [
        "https://s.yimg.com/ny/api/res/1.2/IQ6vjRSiTJv7XFeMTeZYaA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk-/https://s.yimg.com/os/creatr-uploaded-images/2025-11/cda84e90-bfe9-11f0-af4d-3fc2787f033a"
      ],
      description: "Compact microwave with smart features",
      price: "₹12,499",
      priceValue: 12499,
      categories: ["cooking", "healthy"],
      brand:"hafele",
      availability:"in-stock",
      // Comparison attributes
      capacity: "4.1L",
      energyRating: "4 Star",
      warranty: "2 Years",
      dimensions: "32x28x30 cm",
      features: ["Rapid Air Technology", "Digital Touch", "7 Presets"],
      color: "Black",
      weight: "5.8 kg"
    },
    {
      id: "cooktop",
      name: "Cooktop",
      images: [
        "https://ankurelectricals.com/cdn/shop/files/1_e25d56de-3cd8-4528-be2c-e5c18fa1ebb0_1024x1024.png?v=1732357686"
      ],
      description: "Glass cooktop with precise temperature control",
      price: "₹18,999",
      priceValue: 18999,
      categories: ["cooking", "essential"],
      brand:"blaupunkt",
      availability:"in-stock",
      // Comparison attributes
      capacity: "N/A",
      energyRating: "5 Star",
      warranty: "5 Years",
      dimensions: "60x52x8 cm",
      features: ["Touch Control", "Child Lock", "Residual Heat Indicator"],
      color: "Black Glass",
      weight: "7.2 kg"
    },
    {
      id: "coffeemaker",
      name: "Coffee Machine",
      images: [
        "https://t3.ftcdn.net/jpg/06/21/57/48/360_F_621574815_ExL1BHDSMje4uY1PEfwhzAAKBM8PmUxl.jpg"
      ],
      description: "Powerful range hood with efficient ventilation",
      price: "₹9,999",
      priceValue: 9999,
      categories: ["beverage", "luxury"],
      brand:"blaupunkt",
      availability:"in-stock",
      // Comparison attributes
      capacity: "1.2L",
      energyRating: "3 Star",
      warranty: "1 Year",
      dimensions: "25x35x40 cm",
      features: ["Programmable", "Auto Clean", "Built-in Grinder"],
      color: "Silver",
      weight: "4.5 kg"
    },
    {
      id: "blender",
      name: "Blender",
      images: [
        "https://img.freepik.com/free-photo/tropical-smoothie-ingredients-blender_23-2151989775.jpg?semt=ais_hybrid&w=740&q=80"
      ],
      description: "High-speed blender for smoothies and soups",
      price: "₹6,499",
      priceValue: 6499,
      categories: ["preparation", "healthy"],
      brand:"kaff",
      availability:"in-stock",
      // Comparison attributes
      capacity: "1.5L",
      energyRating: "4 Star",
      warranty: "2 Years",
      dimensions: "20x20x45 cm",
      features: ["6 Speed Control", "Pulse Function", "BPA Free Jar"],
      color: "Red",
      weight: "3.2 kg"
    },
    {
      id: "toaster",
      name: "Toaster",
      images: [
        "https://www.shutterstock.com/image-photo/womans-hand-putting-bread-into-260nw-2488337531.jpg"
      ],
      description: "4-slice toaster with multiple browning settings",
      price: "₹3,999",
      priceValue: 3999,
      categories: ["breakfast", "essential"],
      brand:"kaff",
      availability:"in-stock",
      // Comparison attributes
      capacity: "4 Slices",
      energyRating: "3 Star",
      warranty: "1 Year",
      dimensions: "35x20x20 cm",
      features: ["Defrost Function", "Reheat", "Cancel Button"],
      color: "Silver",
      weight: "2.8 kg"
    },
    {
      id: "mixer",
      name: "Stand Mixer",
      images: [
        "https://images.unsplash.com/photo-1758565810987-ca8d617ea7be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbWl4ZXJ8ZW58MXx8fHwxNzYzMDU4NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      description: "Professional stand mixer for baking",
      price: "₹24,999",
      priceValue: 24999,
      categories: ["baking", "preparation"],
      brand:"smeg",
      availability:"in-stock",
      // Comparison attributes
      capacity: "4.5L Bowl",
      energyRating: "4 Star",
      warranty: "5 Years",
      dimensions: "35x25x40 cm",
      features: ["10 Speed Settings", "Tilt-Head", "Planetary Mixing"],
      color: "Metallic Blue",
      weight: "10.5 kg"
    },
    {
      id: "rice-cooker",
      name: "Rice Cooker",
      images: [
        "https://t4.ftcdn.net/jpg/10/29/61/71/360_F_1029617198_9PxZhGoJUgzHFl4yTugX8PWXZ8DH5gV8.jpg"
      ],
      description: "Automatic rice cooker with multiple functions",
      price: "₹5,499",
      priceValue: 5499,
      categories: ["cooking", "convenience"],
      brand:"elica",
      availability:"in-stock",
      // Comparison attributes
      capacity: "1.8L",
      energyRating: "5 Star",
      warranty: "2 Years",
      dimensions: "28x28x25 cm",
      features: ["Non-Stick Bowl", "Keep Warm", "Steam Function"],
      color: "White",
      weight: "2.3 kg"
    },
    {
      id: "juicer",
      name: "Juicer",
      images: [
        "https://img.freepik.com/free-photo/woman-preparing-juice-kitchen_1398-4888.jpg?semt=ais_hybrid&w=740&q=80"
      ],
      description: "Cold press juicer for fresh juices",
      price: "₹15,999",
      priceValue: 15999,
      categories: ["beverage", "healthy"],
      brand:"faber",
      availability:"in-stock",
      // Comparison attributes
      capacity: "1L",
      energyRating: "4 Star",
      warranty: "3 Years",
      dimensions: "25x20x45 cm",
      features: ["Slow Squeeze", "Pulp Control", "Easy Clean"],
      color: "Silver",
      weight: "6.7 kg"
    },
    {
      id: "kettle",
      name: "Electric Kettle",
      images: [
        "https://thumbs.dreamstime.com/b/modern-electric-glass-kettle-wooden-table-kitchen-boiling-water-making-tea-coffee-home-appliances-hot-drinks-white-cups-386251179.jpg"
      ],
      description: "Fast-boiling electric kettle",
      price: "₹2,999",
      priceValue: 2999,
      categories: ["beverage", "essential"],
      brand:"carasyl",
      availability:"in-stock",
      // Comparison attributes
      capacity: "1.7L",
      energyRating: "4 Star",
      warranty: "1 Year",
      dimensions: "20x20x25 cm",
      features: ["Auto Shut-off", "Boil-dry Protection", "360° Base"],
      color: "Stainless Steel",
      weight: "1.2 kg"
    },
    {
      id: "microwave",
      name: "Microwave",
      images: [
        "https://img.freepik.com/premium-photo/black-microwave-oven-sits-counter-with-bowl-fruit_1077802-139997.jpg"
      ],
      description: "Indoor electric grill for healthy cooking",
      price: "₹8,499",
      priceValue: 8499,
      categories: ["cooking", "healthy"],
      brand:"hindware",
      availability:"in-stock",
      // Comparison attributes
      capacity: "20L",
      energyRating: "4 Star",
      warranty: "2 Years",
      dimensions: "45x35x30 cm",
      features: ["Grill + Convection", "Auto Cook Menu", "Child Lock"],
      color: "Black",
      weight: "15 kg"
    },
    {
      id: "induction",
      name: "Induction",
      images: [
        "https://i.pinimg.com/736x/28/0a/3d/280a3df84ae21cdcbe319aff33c49b5e.jpg"
      ],
      description: "Multi-functional induction",
      price: "₹11,999",
      priceValue: 11999,
      categories: ["preparation", "convenience"],
      brand:"bosch",
      availability:"in-stock",
      // Comparison attributes
      capacity: "N/A",
      energyRating: "5 Star",
      warranty: "5 Years",
      dimensions: "30x30x6 cm",
      features: ["Touch Control", "Timer", "Auto Pan Detection"],
      color: "Black",
      weight: "2.1 kg"
    },
    {
      id: "Chimney",
      name: "Chimney",
      images: [
        "https://hindware.com/_next/image?url=https%3A%2F%2Fhindwarestg.blob.core.windows.net%2Fcontainer1%2Fproducts%2F525760.jpg&w=3840&q=75"
      ],
      description: "RO water purifier with UV protection",
      price: "₹16,499",
      priceValue: 16499,
      categories: ["essential", "health"],
      brand:"bosch",
      availability:"in-stock",
      // Comparison attributes
      capacity: "N/A",
      energyRating: "4 Star",
      warranty: "5 Years",
      dimensions: "90x60x30 cm",
      features: ["Auto Clean", "Touch Control", "LED Lights"],
      color: "Stainless Steel",
      weight: "18 kg"
    }
  ];

  // Different pointer positions for each layout type
  const layoutPointers = {
    "l-shaped": [
      {
        id: 1,
        top: "25%",
        left: "15%",
        title: "Storing Area",
        description: "Perfect place for storing",
        relevantAppliances: ["kettle", "blender", "toaster", "juicer"]
      },
      {
        id: 2,
        top: "50%",
        left: "30%",
        title: "Corner Cooking Station",
        description: "Ideal for cooktop",
        relevantAppliances: ["cooktop", "rice-cooker"]
      },
      {
        id: 3,
        top: "32%",
        left: "30%",
        title: "Ventilation Area",
        description: "Ample counter space for ventilation",
        relevantAppliances: ["Chimney"]
      },
      {
        id: 4,
        top: "53%",
        left: "55%",
        title: "Sink & Cleaning Zone",
        description: "Space for dishwasher and cleaning",
        relevantAppliances: ["dishwasher"]
      },
       {
        id: 5,
        top: "53%",
        left: "80%",
        title: "Food preparing",
        description: "Space to prepare food",
        relevantAppliances: ["oven","microwave"]
      },
       {
        id: 6,
        top: "70%",
        left: "25%",
        title: "Large storing area",
        description: "Space to store appliances",
        relevantAppliances: ["coffeemaker","air-fryer","mixer"]
      }
    ],
    "u-shaped": [
      {
        id: 1,
        top: "30%",
        left: "75%",
        title: "Primary Refrigeration",
        description: "Dedicated refrigerator wall",
        relevantAppliances: ["refrigerator"]
      },
      {
        id: 2,
        top: "48%",
        left: "32%",
        title: "Sink & Cleaning Zone",
        description: "Space for dishwasher and cleaning",
        relevantAppliances: ["dishwasher"]
      },
      {
        id: 3,
        top: "48%",
        left: "54%",
        title: "Cooking Area",
        description: "Space to cook food",
        relevantAppliances: ["cooktop", "rice-cooker"]
      },
      {
        id: 4,
        top: "62%",
        left: "25%",
        title: "Large storage space",
        description: "To store large appliances",
        relevantAppliances: ["coffeemaker","air-fryer","mixer"]
      },
         {
        id: 5,
        top: "33%",
        left: "54%",
        title: "Ventilation Area",
        description: "Ample counter space for ventilation",
        relevantAppliances: ["Chimney"]
      },
      {
        id: 6,
        top: "50%",
        left: "75%",
        title: "Food preparing",
        description: "Space to prepare food",
        relevantAppliances: ["oven","microwave"]
      },
    ],
    "galley": [
      {
        id: 1,
        top: "40%",
        left: "20%",
        title: "Compact Refrigeration",
        description: "Space-efficient refrigerator placement",
        relevantAppliances: ["refrigerator"]
      },
      {
        id: 2,
        top: "54%",
        left: "60%",
        title: "Linear Cooking",
        description: "Efficient cooktop and oven alignment",
        relevantAppliances: ["cooktop", "rice-cooker"]
      },
      {
        id: 3,
        top: "65%",
        left: "35%",
        title: "Wall Storage",
        description: "Optimized vertical storage",
        relevantAppliances: ["blender", "toaster", "kettle"]
      },
      {
        id: 4,
        top: "30%",
        left: "62%",
        title: "Ventilation",
        description: "Integrated ventilation space",
        relevantAppliances: ["Chimney"]
      },
       {
        id: 5,
        top: "40%",
        left: "41%",
        title: "Wall Oven",
        description: "Traditional oven placement",
        relevantAppliances: ["oven","microwave"]
      },
    ],
    "island": [
      {
        id: 1,
        top: "55%",
        left: "15%",
        title: "Wall Refrigeration",
        description: "Built-in refrigerator area",
        relevantAppliances: ["refrigerator"]
      },
      {
        id: 2,
        top: "45%",
        left: "45%",
        title: "Island Cooking",
        description: "Central island cooktop",
        relevantAppliances: ["cooktop","rice-cooker"]
      },
      {
        id: 3,
        top: "45%",
        left: "30%",
        title: "Wall Oven",
        description: "Built-in oven installation",
        relevantAppliances: ["oven","microwave"]
      },
      {
        id: 4,
        top: "60%",
        left: "25%",
        title: "Storing Area",
        description: "For Storage",
        relevantAppliances: ["blender", "mixer"]
      },
      {
        id: 5,
        top: "35%",
        left: "90%",
        title: "Storage to store large appliances",
        description: " to store large appliances",
        relevantAppliances: ["coffeemaker", "juicer", "kettle"]
      }
    ],
    "one-wall": [
      
      {
        id: 1,
        top: "40%",
        left: "15%",
        title: "Wall Refrigeration",
        description: "Used for cooling ",
        relevantAppliances: ["refrigerator"]
      },
      {
        id: 2,
        top: "53%",
        left: "55%",
        title: "Cooktop Zone",
        description: "Compact cooking area",
        relevantAppliances: ["cooktop", "rice-cooker"]
      },
      {
        id: 3,
        top: "45%",
        left: "88%",
        title: "Wall Oven",
        description: "Built-in oven space",
        relevantAppliances: ["oven"]
      },
        {
        id: 4,
        top: "38%",
        left: "55%",
        title: "Ventilazation",
        description: "Chimney area",
        relevantAppliances: ["Chimney"]
      },
       {
        id: 5,
        top: "25%",
        left: "40%",
        title: "Storage to store large appliances",
        description: " to store large appliances",
        relevantAppliances: ["coffeemaker", "juicer", "kettle"]
      },
      {
        id: 6,
        top: "53%",
        left: "35%",
        title: "Sink & Cleaning Zone",
        description: "Space for dishwasher and cleaning",
        relevantAppliances: ["dishwasher"]
      },
    ],
    "peninsula": [
      {
        id: 1,
        top: "35%",
        left: "15%",
        title: "Main Refrigeration",
        description: "Primary refrigerator location",
        relevantAppliances: ["refrigerator"]
      },
      {
        id: 2,
        top: "48%",
        left: "48%",
        title: "Peninsula Cooking",
        description: "Extended cooking area",
        relevantAppliances: ["cooktop","rice-cooker"]
      },
      {
        id: 3,
        top: "33%",
        left: "48%",
        title: "Wall Oven",
        description: "Traditional oven placement",
        relevantAppliances: ["oven"]
      },
      {
        id: 4,
        top: "55%",
        left: "60%",
        title: "Sink Area",
        description: "Cleaning area",
        relevantAppliances: ["dishwasher"]
      },
      {
        id: 5,
        top: "25%",
        left: "30%",
        title: "Storage to store large appliances",
        description: " to store large appliances",
        relevantAppliances: ["coffeemaker", "juicer", "kettle"]
      }
    ],
    "g-shaped": [
      {
        id: 1,
        top: "25%",
        left: "92%",
        title: "Primary Refrigeration",
        description: "Main refrigerator wall",
        relevantAppliances: ["refrigerator"]
      },
      {
        id: 2,
        top: "46%",
        left: "38%",
        title: "Central Cooking",
        description: "Main cooking station",
        relevantAppliances: ["cooktop"]
      },
      {
        id: 3,
        top: "65%",
        left: "48%",
        title: "Extended Storage",
        description: "Additional appliance storage",
        relevantAppliances: ["blender", "mixer", "toaster"]
      },
      {
        id: 4,
        top: "45%",
        left: "64%",
        title: "Cleaning Zone",
        description: "Washing Area",
        relevantAppliances: ["dishwasher"]
      },
      {
        id: 5,
        top: "40%",
        left: "85%",
        title: "Left Wall food preparing",
        description: "oven on left",
        relevantAppliances: ["oven"]
      },
      {
        id: 6,
        top: "25%",
        left: "38%",
        title: "Ventilazation",
        description: "Chimney area",
        relevantAppliances: ["Chimney"]
      },
    ],
    "parallel": [
      {
        id: 1,
        top: "35%",
        left: "38%",
        title: "Left Wall Refrigeration",
        description: "Refrigerator on left wall",
        relevantAppliances: ["refrigerator"]
      },
      {
        id: 2,
        top: "50%",
        left: "35%",
        title: "Left Wall food preparing",
        description: "oven on left",
        relevantAppliances: ["oven"]
      },
      {
        id: 3,
        top: "85%",
        left: "75%",
        title: "Right Wall Storage",
        description: "Appliance storage on right wall",
        relevantAppliances: ["blender", "mixer", "toaster"]
      },
      {
        id: 4,
        top: "70%",
        left: "88%",
        title: "Cooking area",
        description: "Area to cook food",
        relevantAppliances: ["cooktop","rice-cooker"]
      },
        {
        id: 5,
        top: "58%",
        left: "70%",
        title: "Sink Area",
        description: "Cleaning area",
        relevantAppliances: ["dishwasher"]
      },
      {
        id: 6,
        top: "15%",
        left: "88%",
        title: "Ventilazation",
        description: "Chimney area",
        relevantAppliances: ["Chimney"]
      },
      
    ]
  };

  // NEW: Filter appliances based on selected filters
  useEffect(() => {
    let filtered = [...appliances];


    // Filter by brand (you'll need to add brand property to your appliances)
    if (selectedBrand) {
      filtered = filtered.filter(appliance => 
        appliance.brand === selectedBrand // You'll need to add brand to your appliance objects
      );
    }

    // Filter by price range
    if (selectedPrice) {
      filtered = filtered.filter(appliance => {
        const price = parseInt(appliance.price.replace(/[^0-9]/g, ''));
        switch (selectedPrice) {
          case 'budget':
            return price >= 50000 && price <= 100000;
          case 'mid-range':
            return price > 100000 && price <= 250000;
          case 'premium':
            return price > 250000 && price <= 500000;
          case 'luxury':
            return price > 500000;
          default:
            return true;
        }
      });
    }

    // Filter by availability (you'll need to add availability property to your appliances)
    if (selectedAvailability) {
      filtered = filtered.filter(appliance => 
        appliance.availability === selectedAvailability // You'll need to add availability to your appliance objects
      );
    }

    setFilteredAppliances(filtered);
  }, [selectedBrand, selectedPrice, selectedAvailability]);

  // Initialize filtered appliances
  useEffect(() => {
    setFilteredAppliances(appliances.slice(0, 15));
  }, []);

  const selectedKitchen = kitchenLayouts.find(layout => layout.id === selectedLayout);
  const currentPointers = layoutPointers[selectedLayout] || [];

 // NEW: Handle filter changes
 
const handleBrandChange = (brandId) => {
  setSelectedBrand(brandId);
};

const handlePriceChange = (priceId) => {
  setSelectedPrice(priceId);
};

const handleAvailabilityChange = (availability) => {
  setSelectedAvailability(availability);
};

  
   // NEW: Clear all filters


const clearAllFilters = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  setSelectedBrand("");
  setSelectedPrice("");
  setSelectedAvailability("");
  setFilteredAppliances(appliances.slice(0, 15));
};


  const close3DView = () => {
    setIs3DViewOpen(false);
    setIsPlaying(false);
    setZoomLevel(1);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const resetView = () => {
    setZoomLevel(1);
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      layout: selectedLayout,
      brand: selectedBrand,
      price: selectedPrice,
      appliances: selectedAppliances
    });
    alert("Your preferences have been saved! Our team will contact you soon.");
  };

  // Function to open detailed page
  const openDetailedPage = (layoutId) => {
    setSelectedLayout(layoutId);
    setShowDetailedPage(true);
  };

  const closeDetailedPage = () => {
    setShowDetailedPage(false);
    setActivePointer(null);
    setPointerAppliances([]);
  };

  // MODIFIED: When layout is clicked, open detailed page directly
  const handleLayoutChange = (layoutId) => {
    openDetailedPage(layoutId);
    // setShowDetailedPage(true); // Open detailed page
    setIsLayoutsPopupOpen(false);
  };

  const openLayoutsPopup = (e) => {
    e.preventDefault();
    setIsLayoutsPopupOpen(true);
  };

  const closeLayoutsPopup = () => {
    setIsLayoutsPopupOpen(false);
  };

  // Appliance selection functions
  const openAppliancesPopup = () => {
    setIsAppliancesPopupOpen(true);
  };

  const closeAppliancesPopup = () => {
    setIsAppliancesPopupOpen(false);
  };

  const toggleApplianceSelection = (applianceId) => {
    setSelectedAppliances(prev => 
      prev.includes(applianceId)
        ? prev.filter(id => id !== applianceId)
        : [...prev, applianceId]
    );
  };

  const clearAppliancesSelection = () => {
    setSelectedAppliances([]);
  };

  // Handle pointer click
  const handlePointerClick = (pointer) => {
    setActivePointer(pointer);
    // Filter appliances based on relevant appliance IDs
    const relevantApps = appliances.filter(appliance => 
      pointer.relevantAppliances.includes(appliance.id)
    );
    setPointerAppliances(relevantApps);
  };

  // Close pointer modal
  const closePointerModal = () => {
    setActivePointer(null);
    setPointerAppliances([]);
  };

  // Function to add selected appliances to cart
  const addToCart = () => {
    if (selectedAppliances.length === 0) {
      alert("Please select at least one appliance before adding to cart.");
      return;
    }

    const newCartItems = selectedAppliances.map(applianceId => {
      const appliance = appliances.find(app => app.id === applianceId);
      return {
        id: appliance.id,
        name: appliance.name,
        price: appliance.price,
        image: appliance.images[0],
        quantity: 1
      };
    });

    setCartItems(prevItems => {
      // Combine existing items with new items, avoiding duplicates
      const existingItemsMap = new Map(prevItems.map(item => [item.id, item]));
      newCartItems.forEach(newItem => {
        if (existingItemsMap.has(newItem.id)) {
          // If item already exists, increase quantity
          const existingItem = existingItemsMap.get(newItem.id);
          existingItemsMap.set(newItem.id, {
            ...existingItem,
            quantity: existingItem.quantity + 1
          });
        } else {
          // Add new item
          existingItemsMap.set(newItem.id, newItem);
        }
      });
      return Array.from(existingItemsMap.values());
    });

    // Show success notification
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 3000);
  };

  // NEW: Function to view cart - opens modal instead of alert
  const viewCart = () => {
    setShowCartModal(true);
  };

  // NEW: Function to close cart modal
  const closeCartModal = () => {
    setShowCartModal(false);
  };

  // NEW: Function to remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  // NEW: Function to update item quantity
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // NEW: Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  // NEW: Format price with commas
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // NEW: Comparison functions
  const toggleCompareItem = (applianceId) => {
    setCompareItems(prev => {
      if (prev.includes(applianceId)) {
        return prev.filter(id => id !== applianceId);
      } else if (prev.length < 4) { // Limit to 4 items for comparison
        return [...prev, applianceId];
      } else {
        alert("You can compare up to 4 items at a time");
        return prev;
      }
    });
  };

  const openCompareModal = () => {
    if (compareItems.length < 2) {
      alert("Please select at least 2 items to compare");
      return;
    }
    setShowCompareModal(true);
  };

  const closeCompareModal = () => {
    setShowCompareModal(false);
  };

  const clearCompareItems = () => {
    setCompareItems([]);
  };

  // Comparison Modal Component
  const CompareModal = () => {
    const compareData = compareItems.map(id => appliances.find(app => app.id === id));
    
    const comparisonFields = [
      { key: 'price', label: 'Price', type: 'price' },
      { key: 'brand', label: 'Brand', type: 'text' },
      { key: 'capacity', label: 'Capacity', type: 'text' },
      { key: 'energyRating', label: 'Energy Rating', type: 'rating' },
      { key: 'warranty', label: 'Warranty', type: 'text' },
      { key: 'dimensions', label: 'Dimensions', type: 'text' },
      { key: 'weight', label: 'Weight', type: 'text' },
      { key: 'color', label: 'Color', type: 'text' },
      { key: 'features', label: 'Key Features', type: 'list' }
    ];

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl w-full max-w-7xl max-h-[90vh] overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900">Compare Appliances</h3>
            <button
              onClick={closeCompareModal}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="p-6 overflow-auto">
            <div className="grid gap-6" style={{ gridTemplateColumns: `200px repeat(${compareData.length}, 1fr)` }}>
              {/* Header Row */}
              <div className="sticky left-0 bg-white z-10"></div>
              {compareData.map((appliance, index) => (
                <div key={appliance.id} className="text-center">
                  <img
                    src={appliance.images[0]}
                    alt={appliance.name}
                    className="w-32 h-32 object-cover mx-auto mb-4 rounded-lg"
                  />
                  <h4 className="font-semibold text-gray-900 mb-2">{appliance.name}</h4>
                  <button
                    onClick={() => toggleCompareItem(appliance.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}

              {/* Comparison Rows */}
              {comparisonFields.map((field) => (
                <>
                  <div className="sticky left-0 bg-gray-50 p-4 font-semibold text-gray-900 border-t border-gray-200">
                    {field.label}
                  </div>
                  {compareData.map((appliance) => (
                    <div className="p-4 border-t border-gray-200">
                      {field.type === 'price' && (
                        <span className="text-green-600 font-bold">{appliance.price}</span>
                      )}
                      {field.type === 'rating' && (
                        <div className="flex items-center justify-center">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                            {appliance[field.key]}
                          </span>
                        </div>
                      )}
                      {field.type === 'list' && (
                        <ul className="text-sm text-gray-600 space-y-1">
                          {appliance[field.key].slice(0, 3).map((feature, idx) => (
                            <li key={idx}>• {feature}</li>
                          ))}
                        </ul>
                      )}
                      {field.type === 'text' && (
                        <span className="text-gray-700">{appliance[field.key]}</span>
                      )}
                    </div>
                  ))}
                </>
              ))}
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                Comparing {compareData.length} items
              </span>
              <div className="flex gap-3">
                <button
                  onClick={clearCompareItems}
                  className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={closeCompareModal}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Detailed Page Component - UPDATED with cart modal and compare functionality
  const DetailedPage = () => {
    if (!selectedKitchen) return null;

    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={closeDetailedPage}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to Layouts
              </button>
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900">{selectedKitchen.name}</h1>
                <p className="text-gray-600">{selectedKitchen.dimensions}</p>
              </div>
              <div className="flex items-center gap-3">
                {/* Compare Button */}
                {compareItems.length > 0 && (
                  <button
                    onClick={openCompareModal}
                    className="relative flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    <span>Compare ({compareItems.length})</span>
                  </button>
                )}
                {/* Cart Button in Header */}
                <button
                  onClick={viewCart}
                  className="relative flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ShoppingCart size={20} />
                  Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Notification */}
        {showCartNotification && (
          <div className="fixed top-20 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
            <div className="flex items-center gap-2">
              <Check size={20} />
              <span>Added {selectedAppliances.length} items to cart successfully!</span>
            </div>
          </div>
        )}

        {/* NEW: Cart Modal */}
        {showCartModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">Your Shopping Cart</h3>
                <button
                  onClick={closeCartModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {cartItems.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500 text-lg">Your cart is empty</p>
                    <p className="text-gray-400">Add some appliances to get started!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-green-600 font-bold">{item.price}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 p-2 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-green-600">
                      ₹{formatPrice(calculateTotal())}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={closeCartModal}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Continue Shopping
                    </button>
                    <button
                      onClick={() => {
                        alert('Proceeding to checkout!');
                        closeCartModal();
                      }}
                      className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Compare Modal */}
        {showCompareModal && <CompareModal />}

        {/* Main Content */}
        <div className="container mx-auto px-6 py-8">
          {/* Large Main Image Section with Dynamic Pointers */}
          <div className="mb-12">
            <div className="relative overflow-hidden shadow-2xl border border-gray-200 rounded-2xl">
              <img
                src={selectedKitchen.image}
                alt={selectedKitchen.name}
                className="w-full min-h-screen object-cover"
              />
              
              {/* Interactive Pointers - Dynamic based on layout */}
              {currentPointers.map((pointer) => (
                <button
                  key={pointer.id}
                  onClick={() => handlePointerClick(pointer)}
                  className="absolute w-8 h-8 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse"
                  style={{
                    top: pointer.top,
                    left: pointer.left,
                  }}
                >
                  {pointer.id}
                </button>
              ))}
            </div>
          </div>

          {/* Pointer Modal */}
          {activePointer && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl w-4px max-w-2xl max-h-[90vh] overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{activePointer.title}</h3>
                    <p className="text-gray-600">{activePointer.description}</p>
                  </div>
                  <button
                    onClick={closePointerModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="p-6 overflow-y-auto max-h-[60vh]">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Recommended Appliances</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pointerAppliances.map((appliance) => (
                      <div
                        key={appliance.id}
                        className={`group relative rounded-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-lg ${
                          selectedAppliances.includes(appliance.id)
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="aspect-square relative bg-gray-100">
                          <img
                            src={appliance.images[0]}
                            alt={appliance.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute top-2 right-2 flex flex-col gap-1">
                            {selectedAppliances.includes(appliance.id) && (
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <Check size={14} className="text-white" />
                              </div>
                            )}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleCompareItem(appliance.id);
                              }}
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                compareItems.includes(appliance.id)
                                  ? 'bg-orange-500 text-white'
                                  : 'bg-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white'
                              }`}
                            >
                              VS
                            </button>
                          </div>
                        </div>
                        
                        <div className="p-3">
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">
                            {appliance.name}
                          </h4>
                          <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                            {appliance.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-green-600 font-bold text-sm">
                              {appliance.price}
                            </span>
                            <button
                              onClick={() => toggleApplianceSelection(appliance.id)}
                              className={`text-xs px-3 py-1 rounded-lg font-medium transition-colors ${
                                selectedAppliances.includes(appliance.id)
                                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                              }`}
                            >
                              {selectedAppliances.includes(appliance.id) ? 'Selected' : 'Select'}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-2 border-t border-gray-200 bg-gray-50">
                  <button
                    onClick={closePointerModal}
                    className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

{/* Customization Section with Filter and Appliances Grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
  <div className="lg:col-span-1">
    <div className="bg-white rounded-2xl p-6 sticky top-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          Filter Appliances
        </h3>
        {(selectedBrand || selectedPrice || selectedAvailability) && (
          <button
            onClick={clearAllFilters}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium underline"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Brand Selection - Checkboxes */}
      <div className="mb-2">
        <label className="block text-sm font-semibold text-gray-900 mb-1">
          Preferred Brands
        </label>
        <div className="space-y-2 max-h-48 overflow-y-auto border border-white rounded-lg p-3">
          {brands.map((brand) => (
            <label key={brand.id} className="flex items-center gap-2 p-0.5 hover:bg-gray-50 rounded cursor-pointer">
              <input
                type="checkbox"
                value={brand.id}
                checked={selectedBrand === brand.id}
                onChange={(e) => {
                  e.preventDefault();
                  handleBrandChange(e.target.checked ? brand.id : "");
                }}
                className="w-3 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-sm text-gray-700">{brand.name}</span>
            </label>
          ))}
        </div>
      </div>
      
      {/* Price Range Selection - Checkboxes */}
      <div className="mb-2">
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          Price Range
        </label>
        <div className="space-y-1">
          {priceRanges.map((range) => (
            <label key={range.id} className="flex items-center gap-3 p-0.5 hover:bg-gray-50 rounded cursor-pointer">
              <input
                type="checkbox"
                value={range.id}
                checked={selectedPrice === range.id}
                onChange={(e) => {
                  e.preventDefault();
                  handlePriceChange(e.target.checked ? range.id : "");
                }}
                className="w-3 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-sm text-gray-700">{range.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability Section - Checkboxes */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-900 mb-4">
          Availability
        </label>
        <div className="space-y-2">
          <label className="flex items-center gap-3 p-0.5 hover:bg-gray-50 rounded cursor-pointer">
            <input
              type="checkbox"
              value="in-stock"
              checked={selectedAvailability === 'in-stock'}
              onChange={(e) => {
                e.preventDefault();
                handleAvailabilityChange(e.target.checked ? 'in-stock' : '');
              }}
              className="w-3 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
            />
            <span className="text-sm text-gray-700 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              In Stock
            </span>
          </label>
          <label className="flex items-center gap-3 p-0.5 hover:bg-gray-50 rounded cursor-pointer">
            <input
              type="checkbox"
              value="out-of-stock"
              checked={selectedAvailability === 'out-of-stock'}
              onChange={(e) => {
                e.preventDefault();
                handleAvailabilityChange(e.target.checked ? 'out-of-stock' : '');
              }}
              className="w-3 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-2"
            />
            <span className="text-sm text-gray-700 flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Out of Stock
            </span>
          </label>
          <label className="flex items-center gap-3 p-0.5 hover:bg-gray-50 rounded cursor-pointer">
            <input
              type="checkbox"
              value="pre-order"
              checked={selectedAvailability === 'pre-order'}
              onChange={(e) => {
                e.preventDefault();
                handleAvailabilityChange(e.target.checked ? 'pre-order' : '');
              }}
              className="w-3 h-4 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 focus:ring-2"
            />
            <span className="text-sm text-gray-700 flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Pre-Order
            </span>
          </label>
          <label className="flex items-center gap-3 p-0.5 hover:bg-gray-50 rounded cursor-pointer">
            <input
              type="checkbox"
              value="available-soon"
              checked={selectedAvailability === 'available-soon'}
              onChange={(e) => {
                e.preventDefault();
                handleAvailabilityChange(e.target.checked ? 'available-soon' : '');
              }}
              className="w-3 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span className="text-sm text-gray-700 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Available Soon
            </span>
          </label>
        </div>
      </div>

      {/* Filter Status */}
      {(selectedBrand || selectedPrice || selectedAvailability) && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800 font-medium mb-2">
            Active Filters:
          </p>
          <div className="space-y-1">
            {selectedBrand && (
              <div className="flex items-center gap-2 text-xs text-blue-700">
                <span className="bg-blue-100 px-2 py-1 rounded">Brand: {brands.find(b => b.id === selectedBrand)?.name}</span>
              </div>
            )}
            {selectedPrice && (
              <div className="flex items-center gap-2 text-xs text-blue-700">
                <span className="bg-blue-100 px-2 py-1 rounded">Price: {priceRanges.find(p => p.id === selectedPrice)?.name}</span>
              </div>
            )}
            {selectedAvailability && (
              <div className="flex items-center gap-2 text-xs text-blue-700">
                <span className="bg-blue-100 px-2 py-1 rounded">Availability: {
                  selectedAvailability === 'in-stock' ? 'In Stock' :
                  selectedAvailability === 'out-of-stock' ? 'Out of Stock' :
                  selectedAvailability === 'pre-order' ? 'Pre-Order' : 'Available Soon'
                }</span>
              </div>
            )}
          </div>
          <p className="text-xs text-blue-600 mt-2">
            Showing {filteredAppliances.length} of {appliances.length} appliances
          </p>
        </div>
      )}
    </div>
  </div>

            {/* Appliances Grid - Takes 2/3 of the width */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <div className="rounded-full flex items-center justify-center">
                      <Palette size={16} className="text-white" />
                    </div>
                    Recommended Appliances
                    {filteredAppliances.length < appliances.length && (
                      <span className="text-sm font-normal text-gray-500 ml-2">
                        (Filtered: {filteredAppliances.length} of {appliances.length})
                      </span>
                    )}
                  </h3>
                 
                  
                </div>
                
                {/* UPDATED: Appliances Grid using filteredAppliances with compare functionality */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredAppliances.length > 0 ? (
                    filteredAppliances.map((appliance) => (
                      <div
                        key={appliance.id}
                        className={`group relative rounded-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-lg ${
                          selectedAppliances.includes(appliance.id)
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-blue-300'
                        } ${
                          compareItems.includes(appliance.id)
                            ? 'ring-2 ring-orange-500'
                            : ''
                        }`}
                      >
                        <div className="aspect-square relative bg-gray-100">
                          <img
                            src={appliance.images[0]}
                            alt={appliance.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute top-2 right-2 flex flex-col gap-1">
                            {selectedAppliances.includes(appliance.id) && (
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <Check size={14} className="text-white" />
                              </div>
                            )}
                            <button
                              onClick={() => toggleCompareItem(appliance.id)}
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                compareItems.includes(appliance.id)
                                  ? 'bg-orange-500 text-white'
                                  : 'bg-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white'
                              }`}
                            >
                              VS
                            </button>
                          </div>
                        </div>
                        
                        <div className="p-3">
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">
                            {appliance.name}
                          </h4>
                          <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                            {appliance.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-green-600 font-bold text-sm">
                              {appliance.price}
                            </span>
                            <button
                              onClick={() => toggleApplianceSelection(appliance.id)}
                              className={`text-xs px-3 py-1 rounded-lg font-medium transition-colors ${
                                selectedAppliances.includes(appliance.id)
                                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                              }`}
                            >
                              {selectedAppliances.includes(appliance.id) ? 'Selected' : 'Select'}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-3 text-center py-8">
                      <p className="text-gray-500 text-lg">No appliances match your filters</p>
                      <button
                        onClick={clearAllFilters}
                        className="mt-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Clear all filters
                      </button>
                    </div>
                  )}
                </div>

                
            {/* View All Appliances Button and Cart Button */}

                <div className="mt-6 flex justify-between items-center">
                  <div className="flex gap-2">
                    <button
                      onClick={openAppliancesPopup}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-xl font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      <span>1</span>
                    </button>
                    <button
                      onClick={openAppliancesPopup}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-xl font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      <span>2</span>
                    </button>
                    <button
                      onClick={openAppliancesPopup}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-xl font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      <span>3</span>
                    </button>
                  </div>
                  
                  {/* Add to Cart Button */}
                  <button
                    onClick={addToCart}
                    disabled={selectedAppliances.length === 0}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedAppliances.length === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-green-600 text-white hover:bg-green-700 transform hover:scale-105 shadow-lg'
                    }`}
                  >
                    <ShoppingCart size={20} />
                    Add to Cart ({selectedAppliances.length})
                  </button>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    );
  };

  // Appliances Popup Component (unchanged)
  const AppliancesPopup = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl w-full max-w-6xl h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-3 h-8 bg-gradient-to-b from-green-500 to-blue-600 rounded-full"></div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Select Appliances
                </h3>
                <p className="text-gray-500">Choose your preferred kitchen appliances ({selectedAppliances.length} selected)</p>
              </div>
            </div>
            <button
              onClick={closeAppliancesPopup}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
            >
              <X size={24} />
            </button>
          </div>

          {/* Appliances Grid */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appliances.map((appliance) => (
                <div
                  key={appliance.id}
                  className={`group relative rounded-2xl overflow-hidden border-3 transition-all duration-300 ${
                    selectedAppliances.includes(appliance.id)
                      ? 'border-green-500 ring-4 ring-green-200 shadow-2xl'
                      : 'border-gray-200 hover:border-green-400 shadow-lg'
                  }`}
                >
                  <div className="aspect-[4/3] relative">
                    {/* Image Carousel */}
                    <div className="w-full h-full relative overflow-hidden">
                      <img
                        src={appliance.images[0]}
                        alt={appliance.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Selection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-bold text-lg">
                          {appliance.name}
                        </h3>
                        {selectedAppliances.includes(appliance.id) && (
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                            <Check size={18} className="text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-gray-200 text-sm leading-tight">
                        {appliance.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Selection Button */}
                  <button
                    onClick={() => toggleApplianceSelection(appliance.id)}
                    className={`w-full py-3 font-semibold transition-all duration-300 ${
                      selectedAppliances.includes(appliance.id)
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {selectedAppliances.includes(appliance.id) ? 'Selected' : 'Select'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-3xl">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-gray-600 font-medium">
                  Selected: <span className="text-green-600 font-bold">{selectedAppliances.length} appliances</span>
                </p>
                {selectedAppliances.length > 0 && (
                  <button
                    onClick={clearAppliancesSelection}
                    className="text-red-600 hover:text-red-700 text-sm font-medium mt-1"
                  >
                    Clear all
                  </button>
                )}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={closeAppliancesPopup}
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={closeAppliancesPopup}
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Confirm Selection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // If detailed page is open, show only the detailed page
  if (showDetailedPage) {
    return <DetailedPage />;
  }

  // Main Layout Selection Page (unchanged)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Kitchen Layout Design
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our complete collection of kitchen layouts designed to maximize space, 
            efficiency, and match your lifestyle. Each layout offers unique benefits 
            for different home configurations.
          </p>
        </div>

        {/* Layout Selection - All layouts in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {kitchenLayouts.map((layout) => (
            <button
              key={layout.id}
              onClick={() => handleLayoutChange(layout.id)}
              className={`group relative rounded-2xl overflow-hidden border-3 transition-all duration-500 hover:scale-105 ${
                selectedLayout === layout.id
                  ? 'border-blue-500 ring-4 ring-blue-200 scale-105 shadow-2xl'
                  : 'border-gray-300 hover:border-blue-400 shadow-lg'
              }`}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={layout.image}
                  alt={layout.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%239ca3af'%3EHD Image Loading...%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-bold text-lg text-left">
                      {layout.name}
                    </h3>
                    {layout.popularity && (
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        layout.popularity.includes('Luxury') || layout.popularity.includes('Premium') 
                          ? 'bg-purple-500 text-white'
                          : layout.popularity.includes('Popular')
                          ? 'bg-yellow-500 text-white'
                          : layout.popularity.includes('Budget')
                          ? 'bg-green-500 text-white'
                          : 'bg-blue-500 text-white'
                      }`}>
                        {layout.popularity}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-200 text-sm text-left leading-tight">
                    {layout.dimensions}
                  </p>
                </div>
                
                {/* Selection Indicator */}
                {selectedLayout === layout.id && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <Check size={18} className="text-white" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* View All Layouts Button removed since we're showing all layouts */}

      </div>

      {/* All Layouts Popup Modal - Still available for mobile users */}
      {isLayoutsPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-6xl h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    All Kitchen Layouts
                  </h3>
                  <p className="text-gray-500">Choose from our complete collection of {kitchenLayouts.length} kitchen designs</p>
                </div>
              </div>
              <button
                onClick={closeLayoutsPopup}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            {/* Layouts Grid */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {kitchenLayouts.map((layout) => (
                  <button
                    key={layout.id}
                    onClick={() => handleLayoutChange(layout.id)}
                    className={`group relative rounded-2xl overflow-hidden border-3 transition-all duration-500 hover:scale-105 ${
                      selectedLayout === layout.id
                        ? 'border-blue-500 ring-4 ring-blue-200 scale-105 shadow-2xl'
                        : 'border-gray-200 hover:border-blue-400 shadow-lg'
                    }`}
                  >
                    <div className="aspect-[4/3] relative">
                      <img
                        src={layout.image}
                        alt={layout.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="eager"
                        onError={(e) => {
                          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%239ca3af'%3EHD Image Loading...%3C/text%3E%3C/svg%3E";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      
                      {/* Content Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-white font-bold text-lg text-left">
                            {layout.name}
                          </h3>
                          {layout.popularity && (
                            <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                              {layout.popularity}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-200 text-sm text-left leading-tight">
                          {layout.dimensions}
                        </p>
                      </div>
                      
                      {/* Selection Indicator */}
                      {selectedLayout === layout.id && (
                        <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                          <Check size={18} className="text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-3xl">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <p className="text-gray-600 font-medium">
                    Currently selected: <span className="text-blue-600 font-bold">{selectedKitchen?.name}</span>
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={closeLayoutsPopup}
                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={closeLayoutsPopup}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Confirm Selection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Appliances Selection Popup */}
      {isAppliancesPopupOpen && <AppliancesPopup />}
    </div>
  );
} 