import { X, Plus, Minus, Trash2 } from "lucide-react";

export function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Cart panel */}
      <div className="absolute right-0 top-0 h-full w-full sm:max-w-lg bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-semibold">Shopping Cart ({items.length})</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col h-full mt-6">
            {items.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500 mb-4">Your cart is empty</p>
                  <button 
                    onClick={onClose}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto -mx-6 px-6">
                  {items.map((item) => (
                    <div key={item.id} className="mb-4 pb-4 border-b">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                          <img 
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='12' fill='%239ca3af'%3EImage%3C/text%3E%3C/svg%3E";
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <h4 className="text-sm font-medium">{item.name}</h4>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                            >
                              <Trash2 size={14} className="text-gray-500" />
                            </button>
                          </div>
                          <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                className="w-7 h-7 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="w-7 h-7 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mt-4 p-6">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="border-t my-2"></div>
                    <div className="flex justify-between">
                      <span className="font-medium">Total</span>
                      <span className="text-xl font-bold">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  {subtotal < 100 && subtotal > 0 && (
                    <p className="text-sm text-gray-500 mb-4">
                      Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  )}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-colors font-medium">
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}