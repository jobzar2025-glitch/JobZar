import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onWorkerCTAClick?: () => void;
  onClientCTAClick?: () => void;
}

const HeroSection = ({
  onWorkerCTAClick = () => (window.location.href = "/for-workers"),
  onClientCTAClick = () => (window.location.href = "/for-clients"),
}: HeroSectionProps) => {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-50 to-blue-100 min-h-[600px] flex items-center py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background overlay with subtle pattern */}
      <div className="absolute inset-0 bg-opacity-10 bg-blue-200 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=70')] bg-cover bg-center opacity-10"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto z-10 relative">
        <div className="max-w-3xl mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Empowering South Africa's Workforce, One Job at a Time
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl text-blue-700 mb-8 font-medium">
              Train. Certify. Connect. Work.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base"
              onClick={onWorkerCTAClick}
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-base"
              onClick={onClientCTAClick}
            >
              Hire with Confidence
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 z-0">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="w-[500px] h-[400px] bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80')] bg-cover bg-center rounded-l-3xl shadow-xl opacity-90"></div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80')] bg-cover bg-center rounded-xl shadow-lg border-4 border-white"></div>
        </motion.div>
      </div>

      {/* Mobile image (visible on smaller screens) */}
      <div className="lg:hidden w-full mt-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="w-full h-48 bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80')] bg-cover bg-center rounded-xl shadow-lg mx-auto max-w-sm"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
