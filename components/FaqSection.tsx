// components/FaqSection.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Clock, CreditCard, Box, Users, Cog, Home } from "lucide-react"; // Import more icons

const faqs = [
  { icon: Clock, question: "How long does a typical project take?", answer: "Project timelines vary based on complexity. Small projects: 2-4 weeks, Medium: 1-3 months, Large: 3-6+ months." },
  { icon: CreditCard, question: "What are your payment terms?", answer: "We typically work with a 30-40-30 payment structure: upfront deposit, milestone payment, and final delivery payment." },
  { icon: Box, question: "Do you provide post-launch support?", answer: "Yes! We offer comprehensive maintenance and support packages for all our projects, including bug fixes and updates." },
  { icon: Users, question: "Do you work with international clients?", answer: "Absolutely! We serve clients globally and are experienced in remote collaboration across different time zones." },
  { icon: Cog, question: "What technologies do you use?", answer: "We use modern tech stacks including React, Node.js, Python, Kotlin, AWS, and more based on project needs." },
  { icon: Home, question: "Can I visit your office?", answer: "Yes! We welcome office visits. Please schedule an appointment in advance to ensure availability." },
];

export const FaqSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-extrabold text-center text-foreground">Frequently Asked Questions</h2>
      <div className="flex justify-center my-4">
        <div className="w-20 h-1 bg-blue-600 rounded-full" />
      </div>
      <p className="text-lg text-muted-foreground text-center mt-4 mb-12">
        Quick answers to common questions about our services
      </p>

      <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="bg-white p-6 rounded-2xl shadow-lg border-none hover:shadow-xl transition-shadow">
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center gap-3">
                 {/* Simple icon mapping */}
                 {index === 0 && <HelpCircle className="w-6 h-6 text-red-500 bg-red-100 p-1 rounded-md" />}
                 {index === 1 && <CreditCard className="w-6 h-6 text-yellow-500 bg-yellow-100 p-1 rounded-md" />}
                 {index === 2 && <Box className="w-6 h-6 text-blue-500 bg-blue-100 p-1 rounded-md" />}
                 {index === 3 && <Users className="w-6 h-6 text-green-500 bg-green-100 p-1 rounded-md" />}
                 {index === 4 && <Cog className="w-6 h-6 text-purple-500 bg-purple-100 p-1 rounded-md" />}
                 {index === 5 && <Home className="w-6 h-6 text-orange-500 bg-orange-100 p-1 rounded-md" />}
                 <span className="font-semibold text-gray-800">{faq.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-muted-foreground text-sm">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};