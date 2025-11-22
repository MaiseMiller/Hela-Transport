import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 text-white`}> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold tracking-tight">Hela<span className="text-white">Transport</span></span>
          </a>

          {/* Desktop Navigation - translucent over hero */}
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="/" className="text-white/90 hover:text-white transition-colors duration-200">Home</a>
            <a href="/about" className="text-white/80 hover:text-white transition-colors duration-200">About</a>
            <a href="/features" className="text-white/80 hover:text-white transition-colors duration-200">Features</a>
            <a href="/contact" className="text-white/80 hover:text-white transition-colors duration-200">Contact</a>
            <a href="/booking" className="ml-2 bg-amber-300/90 text-brown-800 px-3 py-1.5 rounded-full font-medium shadow-sm hover:scale-105 transform transition">Book Now</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-2`}> 
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 space-y-1">
            <a href="/" className="block px-3 py-2 rounded-md text-white">Home</a>
            <a href="/about" className="block px-3 py-2 rounded-md text-white">About</a>
            <a href="/features" className="block px-3 py-2 rounded-md text-white">Features</a>
            <a href="/contact" className="block px-3 py-2 rounded-md text-white">Contact</a>
            <a href="/booking" className="block px-3 py-2 rounded-md bg-amber-300 text-brown-800 text-center">Book Now</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
