
import React from 'react';
import { Plane } from 'lucide-react';

interface FlightCardProps {
  date: string;
  time: string;
  departureCode: string;
  arrivalCode: string;
  flightNumber: string;
  price: string;
}

const FlightCard: React.FC<FlightCardProps> = ({
  date,
  time,
  departureCode,
  arrivalCode,
  flightNumber,
  price
}) => {
  return (
    <div className="bg-travel-blue rounded-xl p-4 text-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Flight Details</h3>
        <span className="text-xs font-bold">${price}</span>
      </div>
      
      <div className="text-xs text-blue-100">{date}, {time}</div>
      
      <div className="flex items-center justify-between mt-2">
        <div className="text-center">
          <span className="text-lg font-bold">{departureCode}</span>
        </div>
        
        <div className="flex-1 mx-3">
          <div className="relative flex items-center">
            <div className="h-[1px] bg-white flex-grow"></div>
            <div className="mx-1">
              <Plane className="h-4 w-4 rotate-90" />
            </div>
            <div className="h-[1px] bg-white flex-grow"></div>
          </div>
          <div className="text-center text-xs mt-1">{flightNumber}</div>
        </div>
        
        <div className="text-center">
          <span className="text-lg font-bold">{arrivalCode}</span>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
