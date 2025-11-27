import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Shield, Truck, Clock, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300 mt-20">
      {/* Trust Badges Section */}
      <div className="bg-gray-750 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Truck className="text-green-400 mb-2" size={32} />
              <h4 className="text-white font-semibold mb-1">Free Shipping</h4>
              <p className="text-sm">On orders over $99</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="text-blue-400 mb-2" size={32} />
              <h4 className="text-white font-semibold mb-1">2-Year Warranty</h4>
              <p className="text-sm">Quality guaranteed</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="text-yellow-400 mb-2" size={32} />
              <h4 className="text-white font-semibold mb-1">24/7 Support</h4>
              <p className="text-sm">Always here to help</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="text-red-400 mb-2" size={32} />
              <h4 className="text-white font-semibold mb-1">Satisfaction</h4>
              <p className="text-sm">30-day returns</p>
            </div>
          </div>
        </div>
      </div> 

      

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <h3 className="text-white text-xl font-bold">WOW APPLIANCES</h3>
            </div>
            <p className="text-sm mb-4 leading-relaxed">
              Your trusted source for premium kitchen appliances since 2010. 
              We bring innovation and quality to every home with our curated 
              collection of smart kitchen solutions.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <Mail size={16} className="text-blue-400" />
              <span className="text-sm">support@wowappliances.com</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Phone size={16} className="text-green-400" />
              <span className="text-sm">1-800-WOW-APPLIANCE</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-red-400" />
              <span className="text-sm">123 Kitchen Street, Culinary City</span>
            </div>
          </div>
          
          {/* Shop Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Shop Categories</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                Kitchen Appliances
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                Large Appliances
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-yellow-400 rounded-full"></span>
                Laundry Care
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                Small Appliances
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                Smart Home Devices
              </a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Customer Service</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Information</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ & Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Product Manuals</a></li>
            </ul>
          </div>
          
          {/* About Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Our Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press & Media</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Showroom Locations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Professional Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bulk Orders</a></li>
            </ul>
          </div>
          
          {/* Newsletter & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Stay Connected</h4>
            <p className="text-sm mb-4">Subscribe for exclusive deals and new product launches</p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded text-gray-900 text-sm bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium">
                  Join
                </button>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h5 className="text-white font-medium mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook size={18} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <Twitter size={18} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <Instagram size={18} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <Youtube size={18} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-center md:text-left">
              <p>&copy; 2010-2025 Wow Appliances. All rights reserved.</p>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm justify-center">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="text-sm mr-2">We accept:</span>
              <div className="flex gap-1">
                <div className="w-8 h-5 bg-gray-700 rounded border border-gray-600 flex items-center justify-center text-xs font-bold text-white">VISA</div>
                <div className="w-8 h-5 bg-gray-700 rounded border border-gray-600 flex items-center justify-center text-xs font-bold text-white">MC</div>
                <div className="w-8 h-5 bg-gray-700 rounded border border-gray-600 flex items-center justify-center text-xs font-bold text-white">AMEX</div>
                <div className="w-8 h-5 bg-gray-700 rounded border border-gray-600 flex items-center justify-center text-xs text-white">PP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}