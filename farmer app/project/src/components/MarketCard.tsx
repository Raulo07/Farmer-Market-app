import React from 'react';
import { MapPin, Clock, ChevronRight } from 'lucide-react';
import { Market } from '../types';

interface MarketCardProps {
  market: Market;
  onClick: (market: Market) => void;
}

export function MarketCard({ market, onClick }: MarketCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
      onClick={() => onClick(market)}
    >
      <img 
        src={market.image} 
        alt={market.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{market.name}</h3>
        <p className="text-gray-600 mb-4">{market.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>{market.distance} miles away</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{market.hours}</span>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500">{market.address}</span>
          <ChevronRight className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}