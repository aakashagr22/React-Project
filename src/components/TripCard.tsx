
import React from 'react';
import { cn } from '@/lib/utils';

interface TripCardProps {
  image: string;
  city: string;
  country: string;
  date: string;
  duration?: string;
  className?: string;

}

// const TripCard: React.FC<TripCardProps> = ({
//   image,
//   city,
//   country,
//   date,
//   duration,
//   className
// }) => {
//   return (
//     <div className={cn(
//       "relative rounded-xl overflow-hidden",
//       className
//     )}>
//       <img 
//         src={image} 
//         alt={`${city}, ${country}`} 
//         className="w-full h-48 object-cover"
//       />
      
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
//         <h3 className="text-2xl absolute top-4 left-6 font-bold text-white">{city}</h3>
//         <div className="flex justify-between items-center">
//           <span className="text-sm absolute top-12 left-4 text-gray-200">{date}</span>
//           <div className="space-x-20 flex ">
//             <span className="text-xs text-white px-2 py-1  font-semibold">
//   {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock3 w-4 h-4 mr-1" style="color: rgb(209, 244, 98);"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16.5 12"></polyline></svg> */}
//              {duration}
//             </span>
//             <span>h1</span>
//             <span>h3</span>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TripCard;



const TripCard = () => (
  <div
    className="relative rounded-2xl overflow-hidden text-white"
    style={{
      backgroundImage: "url('/lovable-uploads/tokyo.jpeg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '240px',
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

    {/* Content */}
    <div className="absolute top-4 left-4 right-4">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-extrabold leading-none tracking-wide">TOKYO</h1>
          <p className="text-sm text-gray-200 mt-1">27.01.2025 - 02.02.2025</p>
        </div>
        <div className="bg-[#B6FF5C] text-black rounded-full p-1 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>

    {/* Footer icons */}
    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xl">
      <div className="flex items-center gap-2">
        <svg  xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#B6FF5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M12 8v4l3 3" />
        </svg>
        <div>8 Days Duration</div>
      </div>

      <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#B6FF5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-4-4h-1" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20H4v-2a4 4 0 014-4h1" />
          <circle cx="9" cy="7" r="4" />
          <circle cx="17" cy="7" r="4" />
        </svg>
        <span>4 (2M,2F)</span>
      </div>

      <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#B6FF5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16h6" />
        </svg>
        <span >14 Activities</span>
      </div>
    </div>
  </div>
);

export default TripCard;
