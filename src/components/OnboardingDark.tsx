
import React, { useState } from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';
import StatusBar from './StatusBar';
import InputField from './InputField';
import DropdownField from './DropdownField';
import TravelOption from './TravelOption';

const OnboardingDark: React.FC = () => {
  const [travelOption, setTravelOption] = useState<string>('solo');
  
  return (
    <div className="w-full h-full flex flex-col relative bg-travel-dark">
      <StatusBar />
      
      <div className="p-5 text-white">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-travel-orange">Plan Your Journey, Your Way!</h2>
          <p className="text-sm text-gray-400 mt-1">Let's create your personalized travel plan</p>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-2 block">Where would you like to go?</label>
            <InputField 
              icon={<MapPin className="h-5 w-5" />} 
              placeholder="Enter Destination"
              isDark
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">How long will you stay?</label>
            <DropdownField 
              icon={<Calendar className="h-5 w-5" />} 
              placeholder="Select Duration"
              isDark
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Who are you traveling with?</label>
            <div className="flex justify-between mt-2">
              <TravelOption 
                icon={<Users className="h-5 w-5" />} 
                label="Solo" 
                selected={travelOption === 'solo'}
                onClick={() => setTravelOption('solo')}
              />
              <TravelOption 
                icon={<Users className="h-5 w-5" />} 
                label="Couple" 
                selected={travelOption === 'couple'}
                onClick={() => setTravelOption('couple')}
              />
              <TravelOption 
                icon={<Users className="h-5 w-5" />} 
                label="Family" 
                selected={travelOption === 'family'}
                onClick={() => setTravelOption('family')}
              />
              <TravelOption 
                icon={<Users className="h-5 w-5" />} 
                label="Friends" 
                selected={travelOption === 'friends'}
                onClick={() => setTravelOption('friends')}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full p-5">
        <button className="w-full bg-travel-blue rounded-full py-3 text-white font-medium">
          Continue
        </button>
      </div>
    </div>
  );
};

export default OnboardingDark;
