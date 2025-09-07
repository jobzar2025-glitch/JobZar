import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs?: FAQItem[];
}

const FAQSection = ({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about JobzaR services, training, and more.",
  faqs = [
    {
      question: "How much does training cost?",
      answer:
        "Training costs a once-off fee of R150. This gives you access to structured tutorials, video lessons, and certification tests that prepare you for different service areas.",
    },
    {
      question: "What kind of jobs are available?",
      answer:
        "We connect workers to a wide range of opportunities including domestic cleaning, ironing, laundry, childcare, gardening, and handyman services. Both part-time and full-time jobs are available.",
    },
    {
      question: "How do clients pay?",
      answer:
        "Clients pay securely through the Jobzar platform. Payments are processed online, ensuring both clients and workers are protected.",
    },
    {
      question: "Is the training online or in person?",
      answer:
        "All training is done online through the Jobzar Academy app. Workers can access tutorials, videos, and quizzes directly on their phones, anytime and anywhere.",
    },
    {
      question: "How long does the certification process take?",
      answer:
        "On average, the process takes 2–4 weeks, depending on how quickly you complete the tutorials and pass the tests. Once qualified, you receive a Jobzar certificate and a verified badge on your profile.",
    },
    {
      question: "Can I specialize in multiple service areas?",
      answer:
        "Yes. Workers can specialize in up to four service areas with the standard training package. Additional service areas can be added later by completing extra modules.",
    },
  ],
}: FAQSectionProps) => {
  return (
    <section className="w-full py-12 md:py-24 bg-slate-50" id="faq">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Common Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
