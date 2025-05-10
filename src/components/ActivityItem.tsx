
import React from 'react';
import { cn } from '@/lib/utils';

interface ActivityItemProps {
  image: string;
  name: string;
  location: string;
  price: string;
  duration: string;
  tickets: number;
  rating?: number;
  className?: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  image,
  name,
  location,
  price,
  duration,
  tickets,
  rating,
  className
}) => {
  return (
    <div className={cn(
      "bg-white rounded-xl overflow-hidden",
      className
    )}>
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-32 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
          {duration}
        </div>
      </div>
      
      <div className="p-3">
        <h4 className="font-medium text-sm line-clamp-2">{name}</h4>
        <p className="text-xs text-gray-500 mt-1">{location}</p>
        
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(Math.min(tickets, 3))].map((_, i) => (
                <div 
                  key={i} 
                  className="w-5 h-5 rounded-full bg-gray-200 border border-white flex items-center justify-center text-[8px]"
                >
                  {i + 1}
                </div>
              ))}
              {tickets > 3 && (
                <div className="w-5 h-5 rounded-full bg-gray-300 border border-white flex items-center justify-center text-[8px]">
                  +{tickets - 3}
                </div>
              )}
            </div>
            <span className="text-xs font-medium">{tickets} tickets</span>
          </div>
          
          <div className="text-travel-orange font-semibold text-sm">
            ${price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
