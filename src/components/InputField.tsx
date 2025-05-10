
import React from 'react';
import { cn } from '@/lib/utils';

interface InputFieldProps {
  icon: React.ReactNode;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  isDark?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  icon,
  placeholder,
  value,
  onChange,
  className,
  isDark = false
}) => {
  return (
    <div className={cn(
      "flex items-center gap-2 rounded-full px-4 py-3",
      isDark ? "bg-gray-800" : "bg-gray-100",
      className
    )}>
      <div className={isDark ? "text-gray-400" : "text-gray-500"}>
        {icon}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          "bg-transparent border-none focus:outline-none flex-1 text-sm",
          isDark ? "text-white placeholder:text-gray-400" : "text-black placeholder:text-gray-500"
        )}
      />
    </div>
  );
};

export default InputField;
