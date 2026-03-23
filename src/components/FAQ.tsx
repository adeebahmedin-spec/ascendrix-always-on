import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is this service for?",
    answer: "We work with Real estate companies such as brokerages/agents, developers, commercial real estate firms, and many other real estate professionals who want a consistent flow of qualified meetings."
  },
  {
    question: "How is this different from running ads?",
    answer: "Ads require ongoing spend and often attract unqualified leads. Our approach uses direct, personalised outreach to specific decision-makers so every conversation is with someone who fits your ideal client profile."
  },
  {
    question: "How quickly will I start seeing meetings?",
    answer: "Most clients start seeing their first qualified meetings within 2-3 weeks of campaign launch. Results build over time as we refine targeting and messaging based on real data."
  },
  {
    question: "Do I need to provide the prospect lists?",
    answer: "No. We handle everything — from identifying your ideal prospects and building targeted lists to crafting the messaging and managing the outreach. You just show up to the meetings."
  },
  {
    question: "Will this make my company look spammy?",
    answer: "Not at all. Every message is personalised and relevant to the recipient. We focus on starting genuine conversations, not blasting generic templates. Our approach is designed to build your reputation, not harm it."
  },
  {
    question: "What if the leads aren't qualified?",
    answer: "We qualify every response before it reaches you. We filter based on budget, intent, and timeline so you're only meeting with prospects who are genuinely interested and ready to have a serious conversation."
  },
  {
    question: "Is there a long-term contract?",
    answer: "We offer flexible monthly plans. We're confident you'll see the value, so we don't lock you into long commitments."
  },
  {
    question: "How much does it cost?",
    answer: "Pricing depends on your target market and campaign scope. Book a free strategy call and we'll give you a clear breakdown based on your goals."
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
            Everything you need to know about our lead generation service
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
