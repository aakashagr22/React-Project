
import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface DropdownFieldProps {
  icon: React.ReactNode;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  isDark?: boolean;
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  icon,
  placeholder,
  value,
  onChange,
  className,
  isDark = false
}) => {
  return (
    <div className={cn(
      "flex items-center justify-between rounded-full px-4 py-3",
      isDark ? "bg-gray-800" : "bg-gray-100",
      className
    )}>
      <div className="flex items-center gap-2">
        <div className={isDark ? "text-gray-400" : "text-gray-500"}>
          {icon}
        </div>
        <span className={cn(
          "text-sm",
          value ? (isDark ? "text-white" : "text-black") : (isDark ? "text-gray-400" : "text-gray-500")
        )}>
          {value || placeholder}
        </span>
      </div>
      <ChevronDown className={cn(
        "h-4 w-4",
        isDark ? "text-gray-400" : "text-gray-500"
      )} />
    </div>
  );
};

export default DropdownField;
