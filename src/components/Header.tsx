import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWorkerCTA = () => {
    window.location.href = '/for-workers';
  };

  const handleClientCTA = () => {
    window.location.href = '/for-clients';
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <div className="text-2xl md:text-3xl font-bold text-black">
              JobzaR
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <a
            href="#how-it-works"
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            How it Works
          </a>
          <a
            href="/for-workers"
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            For Workers
          </a>
          <a
            href="/for-clients"
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            For Clients
          </a>
          <a
            href="#why-us"
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            Why Us
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center space-x-3">
          <Button
            variant="outline"
            className="text-sm"
            onClick={handleWorkerCTA}
          >
            Start Your Journey
          </Button>
          <Button
            className="text-sm"
            onClick={handleClientCTA}
          >
            Hire with Confidence
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-3 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gradient-to-br from-blue-50 via-white to-green-50 border-t border-blue-100 shadow-xl">
          <div className="container mx-auto px-6 py-6">
            {/* Navigation Links */}
            <div className="space-y-1 mb-6">
              <a
                href="#how-it-works"
                className="block text-lg font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-blue-50 hover:shadow-sm transform hover:scale-105"
                onClick={toggleMenu}
              >
                🚀 How it Works
              </a>
              <a
                href="/for-workers"
                className="block text-lg font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-blue-50 hover:shadow-sm transform hover:scale-105"
                onClick={toggleMenu}
              >
                💼 For Workers
              </a>
              <a
                href="/for-clients"
                className="block text-lg font-semibold text-gray-800 hover:text-green-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-green-50 hover:shadow-sm transform hover:scale-105"
                onClick={toggleMenu}
              >
                🏠 For Clients
              </a>
              <a
                href="#why-us"
                className="block text-lg font-semibold text-gray-800 hover:text-purple-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-purple-50 hover:shadow-sm transform hover:scale-105"
                onClick={toggleMenu}
              >
                ⭐ Why Us
              </a>
              <a
                href="#faq"
                className="block text-lg font-semibold text-gray-800 hover:text-orange-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-orange-50 hover:shadow-sm transform hover:scale-105"
                onClick={toggleMenu}
              >
                ❓ FAQ
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full h-14 text-lg font-bold border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => {
                  toggleMenu();
                  handleWorkerCTA();
                }}
              >
                🎯 Start Your Journey
              </Button>
              <Button
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => {
                  toggleMenu();
                  handleClientCTA();
                }}
              >
                ✨ Hire with Confidence
              </Button>
            </div>

            {/* Decorative Element */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Connecting South Africa's Workforce</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;