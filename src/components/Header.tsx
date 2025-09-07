import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-primary">
            JobzaR
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
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
        <div className="hidden md:flex items-center space-x-3">
          <Button
            variant="outline"
            className="text-sm"
            onClick={() => (window.location.href = "/for-workers")}
          >
            Start Your Journey
          </Button>
          <Button
            className="text-sm"
            onClick={() => (window.location.href = "/for-clients")}
          >
            Hire with Confidence
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#how-it-works"
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              How it Works
            </a>
            <a
              href="/for-workers"
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              For Workers
            </a>
            <a
              href="/for-clients"
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              For Clients
            </a>
            <a
              href="#why-us"
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Why Us
            </a>
            <a
              href="#faq"
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              FAQ
            </a>
            <div className="flex flex-col space-y-3 pt-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => (window.location.href = "/for-workers")}
              >
                Start Your Journey
              </Button>
              <Button
                className="w-full"
                onClick={() => (window.location.href = "/for-clients")}
              >
                Hire with Confidence
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
