
import React from 'react';
import { Clock, MapPin, CalendarDays, Users } from 'lucide-react';
import TripCard from './TripCard';
// import HotelCard from './HotelCard';
import Header from './Header';


const WebDashboard: React.FC = () => {
  return (
    
    <div className="bg-[#15161a] text-white rounded-lg shadow-lg overflow-hidden">
      
      <div className="p-6">
       
        <Header />
        <div className="mt-6">
  <h3 className="text-lg font-medium text-white">Your upcoming Trip</h3>
  
  <div className="mt-4">
    <TripCard />
  </div>
</div>

           <div className="mt-4 rounded-xl overflow-hidden relative">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/lovable-uploads/air5.jpg" 
      alt="Tokyo Tower"
      className="w-full h-full object-cover"
    />
    {/* Dark overlay for better text visibility */}
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 p-5 text-white">
    <h3 className="font-medium text-lg">Flight details</h3>
    
    {/* <div className="flex justify-between items-center mb-4">
      <span className="text-sm bg-travel-blue px-3 py-1 rounded-full font-medium">$540.00</span>
    </div> */}
    
    <div className="text-sm text-gray-300">26.01.2025, 10:50 AM</div>
    
    <div className="flex items-center justify-between mt-4">
      <div className="text-center">
        <span className="text-2xl font-bold">DEL</span>
        <div className="text-xs text-gray-300 mt-1">New Delhi, India</div>
      </div>
      
      <div className="flex-1 mx-4">
        <div className="relative flex items-center">
          <div className="h-[1px] bg-gray-400 flex-grow"></div>
          <div className="mx-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90 text-white">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
            </svg>
          </div>
          <div className="h-[1px] bg-gray-400 flex-grow"></div>
        </div>
        <div className="text-center text-sm mt-1 text-gray-300"> • 7h 30m</div>
      </div>
      
      <div className="text-center">
        <span className="text-2xl font-bold">NRT</span>
        <div className="text-xs text-gray-300 mt-1">Narita, Tokyo</div>
      </div>
    </div>
    
   
  </div>
</div>
       
      </div>
      
      <div className="bg-[#15161a] p-6">
      <div>
  <div className="flex justify-between items-center">
    <h3 className="text-xl font-medium">Accommodation</h3>
    <span className="text-travel-blue text-sm cursor-pointer hover:underline">See All</span>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
    {/* Hotel Card 1 */}
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md">
      {/* Image with rating badge */}
      <div className="relative">
        <img 
          src="/lovable-uploads/hotel.avif" 
          alt="Shinagawa Prince Hotel"
          className="w-full h-48 object-cover"
        />
        {/* Rating badge */}
        <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full flex items-center">
          <span className="font-bold">⭐ 4.8</span>
          <span className="ml-1 text-xs">Excellent</span>
        </div>
      </div>
      
      {/* Details panel */}
      <div className="p-4 bg-gray-800">
        <h3 className="text-lg font-semibold">Shinagawa Prince Hotel</h3>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center text-gray-100">
            <CalendarDays className="h-4 w-4 mr-1" />
            <span className="text-sm">Check in: 26.01.2025, 6:00</span>
          </div>
          <span className="text-sm font-medium">2 nights</span>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <div className="flex items-center">
            {/* <Users className="h-4 w-4 text-gray-100 mr-1" /> */}
            <span className="text-sm text-gray-100">Check out: 28.01.2025, 8:00pm</span>
          </div>
          <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
            Confirmed
          </div>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <span className="text-gray-100 text-sm">Total price</span>
          <span className="font-bold">$240.00</span>
        </div>
      </div>
    </div>

    {/* Hotel Card 2 */}
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md">
      <div className="relative">
        <img 
          src="/lovable-uploads/exterior.jpg" 
          alt="Marcus Tokyo Hotel"
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full flex items-center">
          <span className="font-bold">⭐ 4.3</span>
          <span className="ml-1 text-xs">Very Good</span>
        </div>
      </div>
      
      <div className="p-4 bg-gray-800">
        <h3 className="text-lg font-semibold">Marcus Tokyo Hotel</h3>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center text-gray-100">
            <CalendarDays className="h-4 w-4 mr-1" />
            <span className="text-sm">Check in: 27.01.2025, 6:00am</span>
          </div>
          <span className="text-sm font-medium">2 nights</span>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <div className="flex items-center">
            {/* <Users className="h-4 w-4 text-gray-100 mr-1" /> */}
            <span className="text-sm text-gray-100">Check out: 29.01.2025, 12:00</span>
          </div>
          <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
            $180.00/night
          </div>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <span className="text-white-500 text-sm">Total price</span>
          <span className="font-bold">$360.00</span>
        </div>
      </div>
    </div>

        {/* Hotel Card 3 */}
        <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md">
      <div className="relative">
        <img 
          src="/lovable-uploads/hotel3.jpeg" 
          alt="Marcus Tokyo Hotel"
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full flex items-center">
          <span className="font-bold">⭐ 4.1</span>
          <span className="ml-1 text-xs"> Good</span>
        </div>
      </div>
      
      <div className="p-4 bg-gray-800">
        <h3 className="text-lg font-semibold">Marcus Tokyo Hotel</h3>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center text-gray-100">
            <CalendarDays className="h-4 w-4 mr-1" />
            <span className="text-sm">Check in: 26.01.2025, 11:00am</span>
          </div>
          <span className="text-sm font-medium">2 nights</span>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <div className="flex items-center">
            <Users className="h-4 w-4 text-gray-100 mr-1" />
            <span className="text-sm text-gray-100">Check out: 29.01.2025, 3:00pm</span>
          </div>
          <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
            $180.00/night
          </div>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <span className="text-white-500 text-sm">Total price</span>
          <span className="font-bold">$360.00</span>
        </div>
      </div>
    </div>
  </div>
</div>
        
<div className="bg-gray-800 p-6 rounded-2xl mt-4 mb-4 text-white max-w">
  {/* Header */}
  <div className="flex justify-between items-center">
    <h3 className="text-lg font-semibold">Activities</h3>
    <span className="text-xs text-[#B6FF5C] cursor-pointer hover:underline">See all</span>
  </div>

  {/* Day Plan & Activities count */}
  <div className="flex items-center gap-3 mt-4">
    <button className="px-4 py-1.5 bg-[#B6FF5C] text-black text-xs rounded-full font-semibold">
      Day Plan
    </button>
    <span className="px-3 py-1 border border-[#B6FF5C] text-[#B6FF5C] text-xs rounded-full font-semibold">
      14 Activities
    </span>
  </div>

  {/* Day selector */}
  <div className="flex gap-1 mt-4 overflow-x-auto">
    {[
      { month: 'JAN', day: '27', weekday: 'MON', active: true },
      { month: 'JAN', day: '28', weekday: 'TUE' },
      { month: 'JAN', day: '29', weekday: 'WED' },
      { month: 'JAN', day: '30', weekday: 'THU' },
      { month: 'JAN', day: '31', weekday: 'FRI' },
      { month: 'FEB', day: '01', weekday: 'SAT' },
    ].map((date, idx) => (
      <div
        key={idx}
        className={`flex flex-col items-center px-3 py-2 rounded-lg ${
          date.active ? 'bg-[#B6FF5C] text-black' : 'bg-[#2A2E3B] text-white opacity-60'
        }`}
      >
        <span className={`text-[10px] font-bold ${date.active ? 'text-black' : 'text-gray-300'}`}>
          {date.month}
        </span>
        <span className={`text-xs font-semibold ${date.active ? 'text-black' : 'opacity-60'}`}>
          {date.weekday}
        </span>
        <span className={`text-sm font-bold ${date.active ? 'text-black' : 'opacity-60'}`}>{date.day}</span>
      </div>
    ))}
  </div>

  {/* Selected day info */}
 
</div> <div className="p-2 mb-3   flex items-center">
    <div className="flex mt-2.5  p-1 rounded-lg h-7 w-50 bg-[#B6FF5C] ">
      <span className="text-sm text-black mr-3 font-semibold">Day 1</span>
      <h4 className="text-sm  text-black mr-1 font-semibold">27.01.2025</h4>
    </div><div>
    <span className="text-sm p-9 text-[#B6FF5C] font-semibold">3 Activities</span>
  </div></div>

<div className="border-solid border-2 border-[#B6FF5C] rounded-lg p-2 mb-4">
<div className="grid  grid-cols-1 gap-4">
  {/* Senso-ji Temple Activity */}
  <div className="bg-gray-800  rounded-xl">
    <div className="flex gap-4 ">
      <img 
        src="/lovable-uploads/senso.jpeg" 
        alt="Senso-ji Temple"
        className="w-30 h-50 object-cover rounded-lg"
      />
      <div className="flex-1">
        <div className="text-lg pt-7 font-medium">
          Senso-ji Temple &<br />
          Nakamise Shopping Street
        </div>
        <div className="flex flex-col gap-1 mt-8 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#B6FF5C]" />
            <span>Timing: 8:15 am Morning</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#B6FF5C]" />
            <span>Duration: 3 hours</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#B6FF5C]" />
            <span>Pick up: From Hotel</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Tokyo Sky Tree Activity */}
  <div className="bg-gray-800  rounded-xl">
    <div className="flex gap-4">
      <img 
        src="/lovable-uploads/tokyosky.jpeg" 
        alt="Tokyo Sky Tree"
        className="w-60 h-60  rounded-lg"
      />
      <div className="flex-1">
        <div className="text-lg  pt-7 font-medium">
          Tokyo Sky Tree
        </div>
        <div className="flex flex-col  gap-1  mt-7 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#B6FF5C]" />
            <span>Timing: 1:00 pm Afternoon</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#B6FF5C]" />
            <span>Duration: 3 hours</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#B6FF5C]" />
            <span>Pick up: From Nakamise Street</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Kimono Wearing Activity */}
  <div className="bg-gray-800  rounded-xl">
    <div className="flex gap-4">
      
      <img 
        src="/lovable-uploads/kimono wearing.jpg" 
        alt="Kimono Wearing"
        className="w-30 h-60 object-cover rounded-lg"
      />
      <div className="flex-1">
        <div className="text-lg pt-7  font-medium">
          Kimono Wearing
        </div>
        <div className="flex flex-col gap-1 pt-7 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#B6FF5C]" />
            <span>Timing: Anytime before 8:00pm</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#B6FF5C]" />
            <span>Duration: 1.2 hours</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#B6FF5C]" />
            <span>Pick up: From Hotel</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div></div>
      </div>
      {/* <div className="p-6"> */}
        {/* <WebForm /></div> */}
    </div>
  );
};

export default WebDashboard;
