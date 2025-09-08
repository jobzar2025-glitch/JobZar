import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle, Star, Users, Award } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const ForWorkersPage = () => {
  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Get Certified",
      description:
        "Complete our R150 training program and earn your JobzaR certification badge.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Find Work",
      description:
        "Connect with households and businesses looking for your skills.",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: "Build Reputation",
      description:
        "Earn ratings and reviews to build your professional reputation.",
    },
  ];

  const services = [
    "Housekeeping & Cleaning",
    "Childcare & Babysitting",
    "Gardening & Landscaping",
    "Elderly Care",
    "Pet Care",
    "Cooking & Meal Preparation",
    "Business Support",
    "Event Assistance",
    "Hospitality Services",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 sm:py-20 px-4 mt-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            Start Your Journey as a Certified Worker
          </h1>
          <p className="text-lg sm:text-xl text-blue-700 mb-6 sm:mb-8 px-2">
            Join thousands of South Africans who have transformed their skills
            into sustainable income through JobzaR's affordable certification
            program.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 text-base sm:px-8 sm:py-6 sm:text-lg"
          >
            Begin Training - Only R150
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Why Choose JobzaR?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <CardTitle className="text-lg sm:text-xl">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Your Training Journey
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Pay Training Fee</h3>
                <p className="text-gray-600">
                  Pay a once-off training fee of only R150 to access all our
                  digital training materials.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Complete Tutorials
                </h3>
                <p className="text-gray-600">
                  Complete digital tutorials and assessments at your own pace
                  using your smartphone or computer.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Earn Certification
                </h3>
                <p className="text-gray-600">
                  Receive your JobzaR Certification badge to showcase your
                  verified skills to potential clients.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Get Matched with Clients
                </h3>
                <p className="text-gray-600">
                  Start receiving job opportunities that match your skills and
                  location preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Services You Can Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 p-4 bg-green-50 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-800">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Earning?</h2>
          <p className="text-xl mb-8">
            Join the JobzaR community today and turn your skills into a
            sustainable income.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-blue-600 bg-white hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Start Your Training Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForWorkersPage;
