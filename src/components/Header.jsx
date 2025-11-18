import { useState, useEffect } from 'react';
// Remove this line: import "./index.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-blue-900 shadow-2xl py-2' : 'bg-blue-900 py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo on Left Side */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              {/* Logo Image Container */}
              {/* <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300 border-2 border-blue-300"> */}
                {/* <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ND</span>
                </div> */}
              {/* </div> */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            
            {/* School Name - Hidden on mobile, visible on desktop */}
            <div className={`hidden md:block transition-all duration-500 ${isScrolled ? 'opacity-100' : 'opacity-100'}`}>
              <h1 className="text-lg font-bold text-white leading-tight">Nava Deep<br />Primary & High School</h1>
              <p className="text-xs text-blue-200 font-medium">Established 1988</p>
            </div>
          </div>

          {/* Navigation on Right Side */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-white font-semibold hover:text-blue-200 transition-all duration-300">
              Home
            </a>
            <a href="/about" className="text-white font-semibold hover:text-blue-200 transition-all duration-300">
              About Us
            </a>
            <a href="/academics" className="text-white font-semibold hover:text-blue-200 transition-all duration-300">
              Academics
            </a>
            <a href="/facilities" className="text-white font-semibold hover:text-blue-200 transition-all duration-300">
              Facilities
            </a>
            <a href="/events" className="text-white font-semibold hover:text-blue-200 transition-all duration-300">
              Events
            </a>
            <a href="/contact" className="text-white font-semibold hover:text-blue-200 transition-all duration-300">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-3 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'mb-1.5'}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-blue-900 transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {/* Mobile Logo */}
            <div className="mb-8">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">ND</span>
                </div>
              </div>
              <h2 className="text-white text-xl font-bold text-center">Nava Deep School</h2>
              <p className="text-blue-200 text-sm text-center">Established 1988</p>
            </div>

            {/* Mobile Navigation Items */}
            <a href="#home" className="text-2xl text-white font-semibold hover:text-blue-200 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#about-us" className="text-2xl text-white font-semibold hover:text-blue-200 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
              About Us
            </a>
            <a href="#academics" className="text-2xl text-white font-semibold hover:text-blue-200 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
              Academics
            </a>
            <a href="#facilities" className="text-2xl text-white font-semibold hover:text-blue-200 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
              Facilities
            </a>
            <a href="#events" className="text-2xl text-white font-semibold hover:text-blue-200 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
              Events
            </a>
            <a href="#contact" className="text-2xl text-white font-semibold hover:text-blue-200 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>

          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;