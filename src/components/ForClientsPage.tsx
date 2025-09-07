import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Shield, Clock, Star, CreditCard } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const ForClientsPage = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Verified Workers",
      description:
        "All workers are trained, certified, and background-checked for your peace of mind.",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Quick Matching",
      description:
        "Get matched with qualified workers in your area within hours, not days.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-purple-600" />,
      title: "Secure Payments",
      description:
        "Pay safely online in South African Rands with our secure payment system.",
    },
  ];

  const services = [
    {
      category: "Household Services",
      items: [
        "House Cleaning",
        "Laundry & Ironing",
        "Cooking & Meal Prep",
        "Grocery Shopping",
      ],
    },
    {
      category: "Childcare Services",
      items: [
        "Babysitting",
        "After-school Care",
        "Homework Assistance",
        "Child Transportation",
      ],
    },
    {
      category: "Elderly Care",
      items: [
        "Companionship",
        "Medication Reminders",
        "Light Housekeeping",
        "Meal Preparation",
      ],
    },
    {
      category: "Garden & Outdoor",
      items: [
        "Garden Maintenance",
        "Lawn Mowing",
        "Plant Care",
        "Outdoor Cleaning",
      ],
    },
    {
      category: "Business Support",
      items: [
        "Office Cleaning",
        "Reception Services",
        "Data Entry",
        "Event Assistance",
      ],
    },
    {
      category: "Pet Care",
      items: ["Dog Walking", "Pet Sitting", "Pet Grooming", "Feeding Services"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20 px-4 mt-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
            Hire with Confidence
          </h1>
          <p className="text-xl text-green-700 mb-8">
            Connect with trained, certified, and reliable workers for all your
            household and business needs. Every worker on JobzaR has completed
            our comprehensive training program.
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
          >
            Find Workers Now
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Clients Choose JobzaR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works for Clients */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works for You
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Post Your Job Request
                </h3>
                <p className="text-gray-600">
                  Easily describe your household or business job requirements,
                  location, and preferred timing.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Get Matched with Certified Workers
                </h3>
                <p className="text-gray-600">
                  We connect you with trained and verified professionals in your
                  area who match your needs.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Pay Securely</h3>
                <p className="text-gray-600">
                  Make secure payments in South African Rands through our
                  protected payment platform.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Rate and Review</h3>
                <p className="text-gray-600">
                  Share your experience and help build community trust by rating
                  and reviewing workers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Services Available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{service.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center space-x-2"
                      >
                        <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Reliable Help?
          </h2>
          <p className="text-xl mb-8">
            Post your first job request today and get matched with certified
            workers in your area.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-green-600 bg-white hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Post a Job Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForClientsPage;
