import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Star, Users, CheckCircle, Phone, Search } from "lucide-react";

const ForClientsPage = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/27611565699?text=Hi! I'm interested in hiring skilled workers through JobzaR. Can you help me find the right person?", "_blank");
  };

  const services = [
    "Domestic Workers", "Gardeners", "Cleaners", "Childcare Providers", "Elderly Care",
    "Handymen", "Painters", "Plumbers", "Electricians", "Security Guards"
  ];

  const benefits = [
    { icon: Shield, title: "Verified Workers", desc: "All workers are certified and background checked" },
    { icon: Star, title: "Quality Guaranteed", desc: "Rated workers with proven track records" },
    { icon: Clock, title: "Quick Matching", desc: "Find the right worker within 24 hours" },
    { icon: Users, title: "Trusted Platform", desc: "Thousands of successful job matches" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
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
            Hire with <span className="text-green-600">Complete Confidence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with certified, skilled workers who have been professionally trained and verified. 
            Find the perfect match for your household or business needs.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
            onClick={handleWhatsAppContact}
          >
            Find Workers Now
          </Button>
        </div>
      </section>

      {/* How It Works for Clients */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works for Clients</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <CardTitle>Tell Us Your Needs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Contact us with your specific requirements and job details
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <CardTitle>Get Matched</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We match you with certified workers who fit your specific needs
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <CardTitle>Interview & Select</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Meet potential workers and choose the best fit for your requirements
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <CardTitle>Start Working</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Begin working with your chosen worker with ongoing support from JobzaR
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Services Available</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <Search className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <span className="text-sm font-medium">{service}</span>
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
                  <benefit.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
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

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Sarah M.</CardTitle>
                <CardDescription>Cape Town</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "JobzaR helped me find an amazing domestic worker. The certification process gave me confidence in their professionalism."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">John D.</CardTitle>
                <CardDescription>Johannesburg</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Quick, reliable service. Found a skilled gardener within 24 hours. Highly recommend JobzaR!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Maria L.</CardTitle>
                <CardDescription>Durban</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "The workers are well-trained and professional. JobzaR made hiring so much easier and safer."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Worker?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get matched with certified, skilled workers today
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
              className="text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-green-600"
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

export default ForClientsPage;