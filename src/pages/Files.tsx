import React from 'react';
import SearchBar from '../components/SearchBar';
import { FileText, Folder, Download, Gamepad2, Cpu } from 'lucide-react';

const files = [
  {
    name: 'Minecraft Modpack 2024',
    type: 'game',
    date: '2024-03-15',
    size: '256 MB'
  },
  {
    name: 'Cool AI Chat Bot',
    type: 'ai',
    date: '2024-03-14',
    size: '15 MB'
  },
  {
    name: 'Awesome Games',
    type: 'folder',
    date: '2024-03-13',
    items: '8 games'
  }
];

export default function Files() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-24">
      <div className="grid-background"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            My Files
          </h1>
          <SearchBar />
        </div>

        <div className="bg-gray-800/30 rounded-xl backdrop-blur-sm border border-purple-500/10">
          <div className="grid grid-cols-12 p-4 text-gray-400 border-b border-gray-700/50">
            <div className="col-span-6">Name</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Size</div>
          </div>

          {files.map((file, index) => (
            <div 
              key={index} 
              className="grid grid-cols-12 p-4 hover:bg-purple-500/5 transition-colors items-center transform hover:scale-[1.01] duration-200"
            >
              <div className="col-span-6 flex items-center space-x-3">
                {file.type === 'folder' ? (
                  <Folder className="w-5 h-5 text-purple-400" />
                ) : file.type === 'game' ? (
                  <Gamepad2 className="w-5 h-5 text-green-400" />
                ) : file.type === 'ai' ? (
                  <Cpu className="w-5 h-5 text-blue-400" />
                ) : (
                  <FileText className="w-5 h-5 text-purple-400" />
                )}
                <span>{file.name}</span>
              </div>
              <div className="col-span-2">{file.type.toUpperCase()}</div>
              <div className="col-span-2">{file.date}</div>
              <div className="col-span-2 flex items-center justify-between">
                <span>{file.size || file.items}</span>
                <Download className="w-5 h-5 text-gray-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-300 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}