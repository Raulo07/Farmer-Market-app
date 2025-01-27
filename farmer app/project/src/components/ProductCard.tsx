import React from 'react';
import { ShoppingCart, TrendingUp } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  showBulkOptions?: boolean;
}

export function ProductCard({ product, showBulkOptions = false }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">{product.category}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-sm ${
          product.inStock
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Regular Price:</span>
          <span className="font-semibold">${product.price}/{product.unit}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Minimum Order:</span>
          <span>{product.minimumOrder} {product.unit}</span>
        </div>

        {showBulkOptions && product.bulkPricing && (
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={16} className="text-green-600" />
              <h4 className="font-semibold">Bulk Pricing</h4>
            </div>
            <div className="space-y-1">
              {product.bulkPricing.map((pricing, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span>{pricing.quantity}+ {product.unit}</span>
                  <span className="font-medium">${pricing.price}/{product.unit}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <button className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
        <ShoppingCart size={16} />
        {showBulkOptions ? 'Request Bulk Quote' : 'Add to Cart'}
      </button>
    </div>
  );
}