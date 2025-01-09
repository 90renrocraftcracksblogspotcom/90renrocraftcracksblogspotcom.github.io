import React from 'react';
import { Share2 } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2 group">
      <div className="relative">
        <Share2 className="w-8 h-8 text-purple-400 transform group-hover:rotate-12 transition-transform duration-300" />
        <div className="absolute inset-0 bg-purple-400/20 blur-xl rounded-full animate-pulse"></div>
      </div>
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
        Renro_Shares
      </span>
    </div>
  );
}