import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">JobzaR</h3>
            <p className="text-gray-300 mb-4">
              Empowering South Africa's workforce by connecting skilled workers
              with households and businesses through affordable certification.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a
                  href="mailto:jobsar2025@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  jobsar2025@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <div className="flex flex-col text-gray-300">
                  <span>066 411 1406</span>
                  <span>065 895 7077</span>
                  <span>061 156 5699</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-gray-300">South Africa</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/for-workers"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  For Workers
                </a>
              </li>
              <li>
                <a
                  href="/for-clients"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  For Clients
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Housekeeping</li>
              <li className="text-gray-300">Childcare</li>
              <li className="text-gray-300">Gardening</li>
              <li className="text-gray-300">Business Support</li>
              <li className="text-gray-300">Hospitality</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 JobzaR. All rights reserved. Connecting South Africa's
            workforce with opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
