
import React from 'react';

interface StatusBarProps {
  theme?: 'dark' | 'light' | 'blue';
}

const StatusBar: React.FC<StatusBarProps> = ({ theme = 'dark' }) => {
  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  
  return (
    <div className="status-bar ">
      <div className={`text-xs font-medium ${textColor}`}>9:41</div>
      <div className="flex items-center space-x-1">
        <div className={`text-xs ${textColor}`}>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" 
              d="M17 0H1C0.447715 0 0 0.447716 0 1V11C0 11.5523 0.447715 12 1 12H17C17.5523 12 18 11.5523 18 11V1C18 0.447716 17.5523 0 17 0ZM16 2.5V9.5H2V2.5H16Z" 
              fill={theme === 'light' ? "black" : "white"} />
          </svg>
        </div>
        <div className={`text-xs ${textColor}`}>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2C9.65685 2 11 3.34315 11 5C11 6.65685 9.65685 8 8 8C6.34315 8 5 6.65685 5 5C5 3.34315 6.34315 2 8 2Z" 
              fill={theme === 'light' ? "black" : "white"} />
            <path fillRule="evenodd" clipRule="evenodd" 
              d="M0.34308 5.58408C0.12103 5.2825 0.12103 4.7175 0.34308 4.41592C2.04645 1.99934 4.89341 0.5 8 0.5C11.1066 0.5 13.9535 1.99934 15.6569 4.41592C15.879 4.7175 15.879 5.2825 15.6569 5.58408C13.9535 8.00066 11.1066 9.5 8 9.5C4.89341 9.5 2.04645 8.00066 0.34308 5.58408Z" 
              fill={theme === 'light' ? "black" : "white"} />
          </svg>
        </div>
        <div className={`flex items-center ${textColor}`}>
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke={theme === 'light' ? "black" : "white"} />
            <rect x="2" y="2" width="18" height="7" rx="1" fill={theme === 'light' ? "black" : "white"} />
            <rect x="22.5" y="3.5" width="1" height="5" rx="0.5" fill={theme === 'light' ? "black" : "white"} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
