
import React from 'react';
import { cn } from '@/lib/utils';

interface TravelOptionProps {
  icon: React.ReactNode;
  label: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

const TravelOption: React.FC<TravelOptionProps> = ({
  icon,
  label,
  selected = false,
  onClick,
  className
}) => {
  return (
    <button
      className={cn(
        "flex flex-col items-center justify-center p-3 rounded-xl transition-all",
        selected ? "bg-gray-800" : "bg-gray-700 bg-opacity-40",
        className
      )}
      onClick={onClick}
    >
      <div className={cn(
        "flex items-center justify-center w-8 h-8 rounded-full mb-1",
        selected ? "bg-travel-blue text-white" : "bg-gray-600 text-gray-300"
      )}>
        {icon}
      </div>
      <span className={cn(
        "text-xs font-medium",
        selected ? "text-white" : "text-gray-100"
      )}>
        {label}
      </span>
    </button>
  );
};

export default TravelOption;
