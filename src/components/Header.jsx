import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-bold text-gray-900">
              World Ranks
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium
                ${location.pathname === '/' 
                  ? 'bg-gray-100 text-gray-900' 
                  : 'text-gray-500 hover:bg-gray-50'
                }`}
            >
              All Countries
            </Link>
            <Link
              to="/favorites"
              className={`px-3 py-2 rounded-md text-sm font-medium
                ${location.pathname === '/favorites' 
                  ? 'bg-gray-100 text-gray-900' 
                  : 'text-gray-500 hover:bg-gray-50'
                }`}
            >
              Favorites
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
