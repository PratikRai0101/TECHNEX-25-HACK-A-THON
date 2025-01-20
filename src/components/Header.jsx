import React from 'react';
import { Mail, Globe } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-opacity-90 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          YourBrand
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/features" className="hover:text-purple-600 transition-colors">Features</Link>
          <Link to="/testimonials" className="hover:text-purple-600 transition-colors">Testimonials</Link>
          <a href="#contact" className="flex items-center gap-2 hover:text-purple-600 transition-colors">
            <Mail className="w-4 h-4" />
            Contact Us
          </a>
          <ThemeToggle />
          <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-purple-600 hover:bg-purple-600 hover:text-white transition-all">
            <Globe className="w-4 h-4" />
            Explore Metaverse
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;