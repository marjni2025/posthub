import React from 'react';
import { Search } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Buscar publicaciones..."
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-accent-charcoal/60" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 border border-accent-sage/30 rounded-xl 
                 bg-white/80 backdrop-blur-sm text-accent-charcoal
                 placeholder-accent-charcoal/60 focus:outline-none 
                 focus:ring-2 focus:ring-accent-mint focus:border-transparent
                 transition-all duration-200 hover:bg-white/90"
      />
    </div>
  );
};