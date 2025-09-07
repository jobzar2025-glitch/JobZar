import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep = (
  { number, title, description }: ProcessStepProps = {
    number: 1,
    title: "Step Title",
    description: "Step description goes here",
  },
) => {
  return (
    <div className="flex items-start space-x-4 mb-8">
      <div className="flex-shrink-0">
        <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

interface ProcessColumnProps {
  title: string;
  subtitle: string;
  steps: {
    title: string;
    description: string;
  }[];
  ctaText: string;
  ctaAction?: () => void;
}

const ProcessColumn = (
  { title, subtitle, steps, ctaText, ctaAction }: ProcessColumnProps = {
    title: "Process Title",
    subtitle: "Process subtitle",
    steps: [
      { title: "Step 1", description: "Description for step 1" },
      { title: "Step 2", description: "Description for step 2" },
      { title: "Step 3", description: "Description for step 3" },
      { title: "Step 4", description: "Description for step 4" },
    ],
    ctaText: "Call to Action",
  },
) => {
  return (
    <Card className="h-full bg-background">
      <CardContent className="pt-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        <div className="mb-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        <button
          onClick={ctaAction}
          className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          {ctaText}
        </button>
      </CardContent>
    </Card>
  );
};

const ProcessSection = () => {
  const workerSteps = [
    {
      title: "Pay training fee",
      description: "Pay a once-off training fee of only R150.",
    },
    {
      title: "Complete tutorials",
      description:
        "Complete digital tutorials and assessments at your own pace.",
    },
    {
      title: "Earn certification",
      description:
        "Receive your JobzaR Certification badge to showcase your skills.",
    },
    {
      title: "Get matched with clients",
      description:
        "Start receiving job opportunities that match your skills and location.",
    },
  ];

  const clientSteps = [
    {
      title: "Post job request",
      description: "Easily post your household or business job requirements.",
    },
    {
      title: "Get matched with certified workers",
      description:
        "We connect you with trained and verified professionals in your area.",
    },
    {
      title: "Pay securely",
      description:
        "Make secure payments in South African Rands through our platform.",
    },
    {
      title: "Rate and review workers",
      description: "Share your experience to help build community trust.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/30" id="how-it-works">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            JobzaR makes it simple to either find work or hire qualified help
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:pr-4">
            <ProcessColumn
              title="For Workers"
              subtitle="Turn your skills into income with these simple steps"
              steps={workerSteps}
              ctaText="Start Your Journey"
              ctaAction={() => (window.location.href = "/for-workers")}
            />
          </div>

          <div className="md:pl-4">
            <ProcessColumn
              title="For Clients"
              subtitle="Find reliable, certified help for your needs"
              steps={clientSteps}
              ctaText="Hire with Confidence"
              ctaAction={() => (window.location.href = "/for-clients")}
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
            <CheckCircle size={20} />
            <span className="font-medium">
              All workers are trained and certified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
