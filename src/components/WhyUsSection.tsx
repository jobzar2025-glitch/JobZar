import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, Users, Zap, Heart, TrendingUp } from "lucide-react";

const WhyUsSection = () => {
  const reasons = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Verified & Trained Workers",
      description:
        "Every worker completes our comprehensive R150 training program and certification process, ensuring quality and reliability.",
    },
    {
      icon: <Award className="w-12 h-12 text-green-600" />,
      title: "Affordable Certification",
      description:
        "At only R150, our training program is accessible to all South Africans, creating opportunities for economic empowerment.",
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: "Community-Focused",
      description:
        "We're built by South Africans, for South Africans. We understand local needs and create solutions that work for our communities.",
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      title: "Quick & Easy Matching",
      description:
        "Our smart matching system connects clients with the right workers quickly, saving time and ensuring the best fit for every job.",
    },
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: "Empowering Lives",
      description:
        "We're not just a platform - we're creating sustainable livelihoods and helping families build better futures across South Africa.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-indigo-600" />,
      title: "Growing Network",
      description:
        "Join thousands of workers and clients who are already part of the JobzaR community, creating opportunities every day.",
    },
  ];

  return (
    <section
      className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50"
      id="why-us"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Choose JobzaR?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just a job platform - we're a movement to empower
            South Africa's workforce and create meaningful connections between
            skilled workers and those who need their services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <CardTitle className="text-lg">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-md max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To create a thriving ecosystem where every South African has
              access to dignified work opportunities and quality services. We
              believe that by investing in training and certification, we can
              build trust, create jobs, and strengthen communities across our
              beautiful country.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
