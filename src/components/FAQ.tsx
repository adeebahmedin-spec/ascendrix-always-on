import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can I get started?",
    answer: "Most real estate professionals are up and running within 3-5 days. We handle the setup, training, and integration with your existing systems. No technical expertise required on your end."
  },
  {
    question: "Will the AI sound robotic or awkward to my leads?",
    answer: "Not at all. Our AI agents are trained to have natural, human-like conversations. Most callers don't realize they're speaking with AI. We customize the tone and responses to match your brand voice."
  },
  {
    question: "Can the AI handle complex questions or just basic inquiries?",
    answer: "Our AI handles everything from simple FAQs to qualifying leads, scheduling showings, answering property questions, discussing financing options, and more. For anything it can't handle, it seamlessly transfers to your team."
  },
  {
    question: "What happens if the AI can't answer a question?",
    answer: "The AI gracefully hands off to a human team member, providing them with full context of the conversation. You never lose a lead or frustrate a prospect."
  },
  {
    question: "How does this work for real estate agents?",
    answer: "Our AI responds to every lead inquiry instantly, day or night. It qualifies buyers by asking about budget, timeline, and preferences, then books showings directly on your calendar. You only meet pre-qualified prospects."
  },
  {
    question: "Can this help with commercial real estate?",
    answer: "Absolutely. The AI qualifies commercial leads based on budget, space requirements, and timeline. It handles tenant and investor inquiries 24/7, schedules property tours, and keeps your pipeline moving."
  },
  {
    question: "How does this benefit brokerages and agencies?",
    answer: "Every lead gets the same fast, professional response regardless of which agent it's assigned to. AI handles initial qualification so your agents focus on closings, not cold calls. New agents can hit the ground running."
  },
  {
    question: "What languages does your AI support?",
    answer: "Our AI agents speak 99+ languages fluently, making them perfect for serving diverse local communities and international buyers."
  },
  {
    question: "Is there a long-term contract?",
    answer: "No long-term commitments. We offer flexible monthly plans because we're confident you'll see the value quickly. Most clients see positive ROI within the first 30 days."
  },
  {
    question: "How much does it cost?",
    answer: "Pricing depends on your lead volume and specific needs. Book a free demo and we'll give you a custom quote along with a clear ROI projection based on your current lead flow."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16 animate-fade-in max-w-3xl mx-auto px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Everything you need to know about our AI agents
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg px-4 sm:px-6 border"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline text-sm sm:text-base py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
