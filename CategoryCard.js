import { LucideIcon } from "lucide-react";
import { useState } from "react";

export function CategoryCard({ icon: Icon, title, count, onClick, image }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative p-6 border border-gray-200 rounded-xl hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white group overflow-hidden"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        {image && (
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-20 group-hover:opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 group-hover:from-white/70 group-hover:to-white/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        {/* Icon Container with Animation */}
        <div 
          className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg"
          style={{
            boxShadow: isHovered ? '0 10px 30px -5px rgba(59, 130, 246, 0.5)' : '0 4px 15px -3px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Icon 
            size={36} 
            className="text-white transition-transform duration-500 group-hover:scale-110" 
          />
        </div>

        {/* Text Content */}
        <div className="space-y-2">
          <h3 className="font-bold text-xl text-gray-800 transition-all duration-300 group-hover:text-gray-900">
            {title}
          </h3>
          <p className="text-gray-600 font-medium transition-all duration-300 group-hover:text-gray-700">
            {count} Products
          </p>
        </div>

        {/* Hover Arrow */}
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-md">
          <svg 
            className="w-5 h-5 text-blue-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 group-hover:animate-shine" />
      </div>

      {/* Border Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-md group-hover:blur-lg"></div>
    </div>
  );
}

// Add this to your global CSS or Tailwind config for the shine animation
// @keyframes shine {
//   0% { transform: translateX(-100%) skewX(-12deg); }
//   100% { transform: translateX(200%) skewX(-12deg); }
// }
// .animate-shine {
//   animation: shine 1.5s ease-in-out;
// }