import React from 'react';
import PreRegisterForm from './PreRegisterForm';

const Hero = () => {
  return (
    <main className="flex-1 relative z-10">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-7xl font-bold text-white">
            Experience The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Future of Digital Interaction
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Join our innovative platform designed for everyone.
            Coming soon.
          </p>
          <PreRegisterForm />
        </div>
      </div>
    </main>
  );
};

export default Hero;