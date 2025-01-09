import React from 'react';
import { Link } from 'react-router-dom';
import { Files, User, Home } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="transform hover:scale-105 transition-transform duration-300">
            <Logo />
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className="nav-icon group">
              <Home className="w-5 h-5 text-gray-300 group-hover:text-purple-400 transform group-hover:scale-110 transition-all duration-300" />
            </Link>
            <Link to="/files" className="nav-icon group">
              <Files className="w-5 h-5 text-gray-300 group-hover:text-purple-400 transform group-hover:scale-110 transition-all duration-300" />
            </Link>
            <Link to="/about" className="nav-icon group">
              <User className="w-5 h-5 text-gray-300 group-hover:text-purple-400 transform group-hover:scale-110 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}