import React from 'react';
import { Calendar, DollarSign, Package } from 'lucide-react';
import { BuyingRequirement } from '../types';

interface RequirementCardProps {
  requirement: BuyingRequirement;
}

export function RequirementCard({ requirement }: RequirementCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">{requirement.productName}</h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Package className="text-gray-400" size={20} />
          <div>
            <p className="text-sm font-medium">Quantity Needed</p>
            <p className="text-gray-600">{requirement.quantity} {requirement.unit}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Calendar className="text-gray-400" size={20} />
          <div>
            <p className="text-sm font-medium">Frequency</p>
            <p className="text-gray-600">{requirement.frequency.charAt(0).toUpperCase() + requirement.frequency.slice(1)}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <DollarSign className="text-gray-400" size={20} />
          <div>
            <p className="text-sm font-medium">Price Range</p>
            <p className="text-gray-600">${requirement.priceRange.min} - ${requirement.priceRange.max} per {requirement.unit}</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm font-medium mb-2">Quality Requirements:</p>
          <ul className="list-disc list-inside space-y-1">
            {requirement.qualityRequirements.map((req, index) => (
              <li key={index} className="text-sm text-gray-600">{req}</li>
            ))}
          </ul>
        </div>

        {requirement.deadline && (
          <div className="mt-4 pt-4 border-t">
            <p className="text-sm text-red-600">
              Deadline: {requirement.deadline.toLocaleDateString()}
            </p>
          </div>
        )}
      </div>

      <button className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
        Contact Buyer
      </button>
    </div>
  );
}