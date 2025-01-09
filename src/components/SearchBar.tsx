import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative max-w-xl w-full">
      <input
        type="text"
        placeholder="Search files..."
        className="w-full px-4 py-2 pl-10 bg-black/50 border border-gray-700 rounded-lg 
                 text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                 focus:ring-blue-500 focus:border-transparent"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
}