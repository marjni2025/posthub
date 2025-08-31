import React from 'react';
import { Search, FileText } from 'lucide-react';

interface EmptyStateProps {
  type: 'search' | 'posts';
  message?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ type, message }) => {
  const Icon = type === 'search' ? Search : FileText;
  const defaultMessage = type === 'search' 
    ? 'No se encontraron publicaciones que coincidan con tu búsqueda'
    : 'No hay publicaciones disponibles';

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 bg-accent-sage/20 rounded-full flex items-center 
                     justify-center mb-4 animate-pulse-subtle">
        <Icon className="h-8 w-8 text-accent-charcoal/40" />
      </div>
      <p className="text-lg font-medium text-accent-charcoal/60 mb-2">
        {message || defaultMessage}
      </p>
      {type === 'search' && (
        <p className="text-sm text-accent-charcoal/40">
          Intenta con otros términos de búsqueda
        </p>
      )}
    </div>
  );
};