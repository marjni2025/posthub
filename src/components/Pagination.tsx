import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PaginationInfo } from '../types';

interface PaginationProps {
  paginationInfo: PaginationInfo;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  paginationInfo,
  onPageChange
}) => {
  const { currentPage, totalPages, hasNext, hasPrev } = paginationInfo;

  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!hasPrev}
        className="flex items-center gap-2 px-4 py-2 rounded-xl
                 bg-white/80 backdrop-blur-sm border border-accent-sage/30
                 text-accent-charcoal font-medium transition-all duration-200
                 hover:bg-accent-mint/20 hover:border-accent-mint/50
                 disabled:opacity-50 disabled:cursor-not-allowed
                 disabled:hover:bg-white/80 disabled:hover:border-accent-sage/30"
      >
        <ChevronLeft className="h-4 w-4" />
        Anterior
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
          const pageNumber = currentPage <= 3 
            ? i + 1 
            : currentPage + i - 2;
          
          if (pageNumber > totalPages) return null;
          
          return (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={`w-10 h-10 rounded-xl font-medium transition-all duration-200 ${
                pageNumber === currentPage
                  ? 'bg-accent-mint text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-sm border border-accent-sage/30 text-accent-charcoal hover:bg-accent-mint/20'
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNext}
        className="flex items-center gap-2 px-4 py-2 rounded-xl
                 bg-white/80 backdrop-blur-sm border border-accent-sage/30
                 text-accent-charcoal font-medium transition-all duration-200
                 hover:bg-accent-mint/20 hover:border-accent-mint/50
                 disabled:opacity-50 disabled:cursor-not-allowed
                 disabled:hover:bg-white/80 disabled:hover:border-accent-sage/30"
      >
        Siguiente
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};