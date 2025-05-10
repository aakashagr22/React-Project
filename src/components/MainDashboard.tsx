
import React from 'react';
import { Clock, Search, Users } from 'lucide-react';
import StatusBar from './StatusBar';
import TripCard from './TripCard';
import FlightCard from './FlightCard';
import HotelCard from './HotelCard';
import ActivityItem from './ActivityItem';

const MainDashboard: React.FC = () => {
  return (
    <div className=" bg-travel-blue">
      {/* <StatusBar theme="blue" /> */}
      
      <div className="bg-travel-blue text-white p-5">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold">Hello Chhavi!</h2>
            <p className="text-xs text-blue-200">Ready for the trip?</p>
          </div>
          <div className="w-8 h-8 bg-travel-orange rounded-full flex items-center justify-center text-white">
            C
          </div>
        </div>
        
        <div className="mt-4">
          <h3 className="text-sm font-medium">Your upcoming Trip</h3>
          
          <TripCard
            image="/lovable-uploads/5a8fde3e-492a-4075-bf61-24e534810e89.png"
            city="TOKYO"
            country="Japan"
            date="May 20 - June 10"
            className="mt-2"
          />
          
          <div className="mt-4">
            <div className="bg-travel-blue rounded-xl p-4 text-white relative">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Flight details</h3>
                <span className="text-xs bg-white text-travel-blue px-2 py-0.5 rounded-full font-medium">$540.00</span>
              </div>
              
              <div className="text-xs text-blue-200">Jul 23, 10:00 AM</div>
              
              <div className="flex items-center justify-between mt-2">
                <div className="text-center">
                  <span className="text-lg font-bold">DEL</span>
                </div>
                
                <div className="flex-1 mx-3">
                  <div className="relative flex items-center">
                    <div className="h-[1px] bg-white flex-grow"></div>
                    <div className="mx-1">
                      <img src="/lovable-uploads/5a8fde3e-492a-4075-bf61-24e534810e89.png" className="h-6 w-auto" alt="airplane" />
                    </div>
                    <div className="h-[1px] bg-white flex-grow"></div>
                  </div>
                  <div className="text-center text-xs mt-1">JL8723</div>
                </div>
                
                <div className="text-center">
                  <span className="text-lg font-bold">NRT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-t-3xl flex-1 overflow-y-auto pb-16">
        <div className="p-5">
          <div>
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Accommodation</h3>
              <span className="text-travel-blue text-xs">See All</span>
            </div>
            
            <div className="flex gap-3 mt-3 overflow-x-auto pb-2">
              <HotelCard
                image="/lovable-uploads/5a8fde3e-492a-4075-bf61-24e534810e89.png"
                name="Shibuya Prince Hotel"
                price="120.00"
                rating={4.8}
                nights={5}
                className="w-40 flex-shrink-0"
              />
              <HotelCard
                image="/lovable-uploads/5a8fde3e-492a-4075-bf61-24e534810e89.png"
                name="Marcus Plaza Hotel"
                price="180.00"
                rating={4.3}
                nights={5}
                isConfirmed
                className="w-40 flex-shrink-0"
              />
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Activities</h3>
              <span className="text-xs bg-travel-green text-white px-2 py-1 rounded-full">$72.00</span>
            </div>
            
            <div className="flex gap-1 mt-3">
              <button className="px-3 py-1 bg-travel-blue text-white text-xs rounded-full font-medium">
                Day Trip
              </button>
              <button className="px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                Trekking
              </button>
              <button className="px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                City Tour
              </button>
            </div>
            
            <div className="mt-4 grid grid-cols-1 gap-4">
              <div className="flex gap-3 items-center">
                <div className="w-8 text-center">
                  <span className="text-sm font-medium">Sun</span>
                  <div className="bg-travel-blue text-white rounded-full w-8 h-8 flex items-center justify-center mt-1">
                    <span className="text-sm">09</span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-sm font-medium">Mon</span>
                  <div className="bg-gray-100 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                    <span className="text-sm">10</span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-sm font-medium">Tue</span>
                  <div className="bg-gray-100 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                    <span className="text-sm">11</span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-sm font-medium">Wed</span>
                  <div className="bg-gray-100 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                    <span className="text-sm">12</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-travel-blue bg-opacity-5 p-3 rounded-xl">
                <div className="flex gap-2">
                  <img 
                    src="/lovable-uploads/5a8fde3e-492a-4075-bf61-24e534810e89.png" 
                    alt="Sensoji Temple"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="text-xs font-medium">Sensoji Temple & Nakamise Street Guided Tour</div>
                    <div className="text-[10px] text-gray-500">Tokyo, Asakusa</div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-travel-blue" />
                        <span className="text-[10px] text-gray-500">3-4 hours</span>
                      </div>
                      <span className="text-travel-orange text-xs font-medium">$22.00</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-travel-blue bg-opacity-5 p-3 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-travel-blue mr-2" />
                    <div>
                      <div className="text-xs font-medium">Tokyo Sky Tree</div>
                      <div className="text-[10px] text-gray-500">Japan, Tokyo</div>
                    </div>
                  </div>
                  <div className="text-travel-orange font-semibold">
                    Free
                  </div>
                </div>
              </div>
              
              <div className="bg-travel-blue bg-opacity-5 p-3 rounded-xl">
                <div className="flex gap-2">
                  <img 
                    src="/lovable-uploads/5a8fde3e-492a-4075-bf61-24e534810e89.png" 
                    alt="Sensoji Temple"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="text-xs font-medium">Sensoji Temple & Shopping Street Tour</div>
                    <div className="text-[10px] text-gray-500">Tokyo, Asakusa</div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-travel-blue" />
                        <span className="text-[10px] text-gray-500">2-3 hours</span>
                      </div>
                      <span className="text-travel-orange text-xs font-medium">$50.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full bg-white px-4 pb-4 pt-2 border-t border-gray-100">
        <div className="flex justify-around">
          <button className="text-travel-blue flex flex-col items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#3366FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" stroke="#3366FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[10px] mt-1">Home</span>
          </button>
          <button className="text-gray-400 flex flex-col items-center">
            <Search className="h-6 w-6" />
            <span className="text-[10px] mt-1">Search</span>
          </button>
          <button className="text-gray-400 flex flex-col items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 2V6" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 2V6" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 10H21" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[10px] mt-1">Bookings</span>
          </button>
          <button className="text-gray-400 flex flex-col items-center">
            <Users className="h-6 w-6" />
            <span className="text-[10px] mt-1">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
