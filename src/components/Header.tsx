import React from 'react';
import { FileText, Home } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-accent-sage/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-accent-pink to-accent-mint 
                           rounded-xl flex items-center justify-center group-hover:scale-105 
                           transition-transform duration-200">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-accent-charcoal">
                PostHub
              </h1>
              <p className="text-xs text-accent-charcoal/60">
                Publicaciones y Comentarios
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium 
                        transition-all duration-200 ${
                location.pathname === '/'
                  ? 'bg-accent-mint text-white'
                  : 'text-accent-charcoal hover:bg-accent-mint/20'
              }`}
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Inicio</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};