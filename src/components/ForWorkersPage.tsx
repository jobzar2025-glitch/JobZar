import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Users, Award, Clock, Phone } from "lucide-react";

const ForWorkersPage = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/27611565699?text=Hi! I'm interested in starting my journey as a worker with JobzaR. Can you help me get started?", "_blank");
  };

  const skills = [
    "Domestic Work", "Gardening", "Cleaning", "Childcare", "Elderly Care",
    "Handyman Services", "Painting", "Plumbing", "Electrical Work", "Security"
  ];

  const benefits = [
    { icon: Award, title: "Professional Certification", desc: "Get certified for just R150" },
    { icon: Users, title: "Access to Clients", desc: "Connect with verified households and businesses" },
    { icon: Star, title: "Build Your Reputation", desc: "Earn ratings and reviews from satisfied clients" },
    { icon: Clock, title: "Flexible Schedule", desc: "Work when it suits you" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center">
              <div className="text-2xl md:text-3xl font-bold text-black">
                JobzaR
              </div>
            </a>
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Start Your <span className="text-blue-600">Professional Journey</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of skilled workers who have transformed their careers with JobzaR. 
            Get certified, connect with clients, and build a sustainable income.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
            onClick={handleWhatsAppContact}
          >
            Get Started Today - R150
          </Button>
        </div>
      </section>

      {/* How It Works for Workers */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works for Workers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <CardTitle>Register & Pay</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sign up and pay the one-time R150 certification fee to get started
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <CardTitle>Get Trained</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete our professional training program and receive your certification
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <CardTitle>Get Matched</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We connect you with verified clients who need your specific skills
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <CardTitle>Start Earning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Begin working with clients and build your reputation while earning income
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills We Certify */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills We Certify</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose JobzaR?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join JobzaR today and start your journey to professional success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4"
              onClick={handleWhatsAppContact}
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us on WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => window.location.href = '/'}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForWorkersPage;