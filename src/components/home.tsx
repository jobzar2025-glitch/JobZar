import Header from "./Header";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import WhyUsSection from "./WhyUsSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import { MessageCircle } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <ProcessSection />
        <WhyUsSection />
        <FAQSection />
      </main>
      <Footer />

      {/* Fixed WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none border-2 border-white"
          onClick={() => window.open("https://wa.me/27611565699", "_blank")}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </button>
        {/* WhatsApp tooltip */}
        <div className="absolute bottom-16 right-0 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          💬 Need help? Chat with us!
        </div>
      </div>
    </div>
  );
}

export default Home;
