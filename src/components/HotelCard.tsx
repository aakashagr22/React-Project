
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HotelCardProps {
  image: string;
  name: string;
  price: string;
  rating: number;
  nights: number;
  isConfirmed?: boolean;
  className?: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
  image,
  name,
  price,
  rating,
  nights,
  isConfirmed = false,
  className
}) => {
  return (
    <div className={cn(
      "rounded-xl overflow-hidden bg-white shadow-sm",
      className
    )}>
      <img 
        src={image} 
        alt={name}
        className="w-full h-24 object-cover"
      />
      
      <div className="p-3">
        <h4 className="font-medium text-sm line-clamp-2">{name}</h4>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center text-xs text-gray-500">
            <span>Check in</span>
            <span className="mx-1">•</span>
            <span>{nights} nights</span>
          </div>
          <div className="flex items-center">
            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-medium ml-1">{rating}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-3">
          <div className="bg-gray-100 rounded-md px-2 py-1">
            <span className="text-xs font-medium">{nights} nights</span>
          </div>
          {isConfirmed ? (
            <div className="bg-travel-green bg-opacity-10 text-travel-green rounded-md px-2 py-1">
              <span className="text-xs font-medium">Confirmed</span>
            </div>
          ) : (
            <div className="bg-travel-orange bg-opacity-10 text-travel-orange rounded-md px-2 py-1">
              <span className="text-xs font-medium">${price}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
