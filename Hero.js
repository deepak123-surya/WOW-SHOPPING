import { useState, useEffect } from "react";

export function Hero({ onNavbarColorChange }) {
  const [zoomLevel, setZoomLevel] = useState(100);

  // Single HD Kitchen Image with zoom effect
  const backgroundImage = "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Change navbar color when scrolled
      if (onNavbarColorChange) {
        onNavbarColorChange(scrollPosition > 100);
      }
    };

    // Zoom in/out animation
    const zoomInterval = setInterval(() => {
      setZoomLevel(prev => {
        if (prev >= 110) return 100;
        return prev + 0.1;
      });
    }, 50);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(zoomInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Single HD Background Image with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full transition-transform duration-30000 ease-in-out"
          style={{
            transform: `scale(${zoomLevel}%)`,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          {/* Animated Light Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-orange-500/3 animate-pulse-slow"></div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/15 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${20 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-center">
          {/* Main Title */}
          <div className="overflow-hidden mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-slide-up">
              Transform Your Experience 
              <span className="block bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent animate-gradient mt-2">
               Using Wow Appliances
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="overflow-hidden mb-8">
            {/* <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto animate-slide-up delay-200 font-light">
              Discover premium appliances that combine cutting-edge technology with elegant design. 
              Create the kitchen of your dreams with our expertly curated collection.
            </p> */}
          </div>

          {/* Action Buttons */}
        

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/20 animate-slide-up delay-600">
            
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-5 h-8 border border-amber-400/40 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-amber-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute top-16 right-8 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-6 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
}

// Clean CSS Animations
const styles = `
@keyframes float {
  0%, 100% { 
    transform: translateY(0px) translateX(0px); 
    opacity: 0.3;
  }
  50% { 
    transform: translateY(-15px) translateX(5px); 
    opacity: 0.6;
  }
}

@keyframes slide-up {
  0% { 
    opacity: 0;
    transform: translateY(40px);
  }
  100% { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradient {
  0%, 100% { 
    background-position: 0% 50%;
  }
  50% { 
    background-position: 100% 50%;
  }
}

@keyframes count-up {
  0% { 
    opacity: 0;
    transform: translateY(20px);
  }
  100% { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.03; }
  50% { opacity: 0.08; }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
  opacity: 0;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

.animate-count-up {
  animation: count-up 0.6s ease-out forwards;
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-400 {
  animation-delay: 0.4s;
}

.delay-600 {
  animation-delay: 0.6s;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}