import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="Tech Setup"
            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
          />
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-400">Tech Enthusiast & AI Developer</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm mb-8">
            <h2 className="text-2xl font-semibold mb-4">Background</h2>
            <p className="text-gray-300 mb-4">
              I'm a passionate technologist focused on artificial intelligence and cutting-edge development. 
              With years of experience in AI systems and software engineering, I create solutions that push 
              the boundaries of what's possible.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm mb-8">
            <h2 className="text-2xl font-semibold mb-4">My AI Systems</h2>
            <p className="text-gray-300 mb-4">
              I specialize in developing advanced AI systems, focusing on:
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Neural Networks</li>
              <li>Machine Learning Algorithms</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision Systems</li>
            </ul>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}