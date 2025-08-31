import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  message = 'Cargando...' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 gap-4">
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div className="w-full h-full border-3 border-accent-sage/30 
                       border-t-accent-mint rounded-full"></div>
      </div>
      <p className="text-accent-charcoal/60 font-medium">{message}</p>
    </div>
  );
};