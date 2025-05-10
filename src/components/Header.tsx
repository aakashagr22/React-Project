import { useState } from 'react';
import { Sun, Moon } from 'lucide-react'; // Or use inline SVG

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="flex justify-between items-center ">
      {/* Greeting */}
      <div className="h-12.5 w-40.5 mt-13 ml-4.5">
                <h2 className="text-2xl  font-bold">Hello Chhavi!</h2>
                
                <p className="text-sm text-gray-400">Ready for the trip?</p>
              </div>

      {/* Icons */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsDark(!isDark)}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-[#2A2E3B] text-white hover:bg-[#3A3E4B]"
        >
          {isDark ? (
            <Sun className="h-5 w-5 text-white" />
          ) : (
            <Moon className="h-5 w-5 text-white" />
          )}
        </button>

        <div className="w-9 h-9 m-3 bg-travel-orange rounded-full flex items-center justify-center text-white text-lg">
  C
</div>
      </div>
    </div>
  );
};

export default Header;



        

// </div>