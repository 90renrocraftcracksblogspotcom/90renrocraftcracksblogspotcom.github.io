import React from 'react';
import SearchBar from '../components/SearchBar';
import { Gamepad2, Download, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="grid-background"></div>
      <div className="relative max-w-7xl mx-auto px-4 pt-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Welcome to Renro_Shares
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Cool games, apps, and AI stuff - all in one place!
          </p>
          <div className="flex justify-center mb-12">
            <SearchBar />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-gray-800/30 rounded-xl backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1 border border-purple-500/10">
            <div className="flex items-center gap-3 mb-4">
              <Gamepad2 className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-semibold">Games</h3>
            </div>
            <p className="text-gray-400">Download awesome games I've found and tested</p>
          </div>
          <div className="p-6 bg-gray-800/30 rounded-xl backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1 border border-purple-500/10">
            <div className="flex items-center gap-3 mb-4">
              <Download className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-semibold">Apps</h3>
            </div>
            <p className="text-gray-400">Cool apps and tools to try out</p>
          </div>
          <div className="p-6 bg-gray-800/30 rounded-xl backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1 border border-purple-500/10">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-semibold">AI Stuff</h3>
            </div>
            <p className="text-gray-400">Fun AI tools and experiments to play with</p>
          </div>
        </div>

        <div className="text-center p-8 bg-black/50 backdrop-blur-md rounded-xl border border-purple-500/20 mb-16">
          <h2 className="text-3xl font-bold mb-4">Hey there! 👋</h2>
          <p className="text-xl text-gray-300">
            I'm a 14-year-old who loves sharing cool stuff I find online.<br/>
            Feel free to check out my collection of games, apps, and AI tools!
          </p>
        </div>
      </div>
    </div>
  );
}