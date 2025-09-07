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
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
          onClick={() => window.open("https://wa.me/27123456789", "_blank")}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} />
        </button>
      </div>
    </div>
  );
}

export default Home;
