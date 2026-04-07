import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is this different from running paid ads?",
    answer: "Ads need constant spend and often attract people who aren't ready to buy. We go directly to decision-makers through personalised outreach, so every conversation is with someone who actually fits your ideal client profile."
  },
  {
    question: "How soon will I see results?",
    answer: "Most clients start seeing their first qualified meetings within 2-3 weeks of campaign launch. From there, results build as we optimise targeting and messaging based on real data."
  },
  {
    question: "Do I need to provide the prospect lists?",
    answer: "No. We handle everything from defining your ideal customer profile and building verified lead lists to writing the outreach copy and managing the campaigns. You just show up to the meetings."
  },
  {
    question: "Will this come across as spammy?",
    answer: "Not at all. Every message is personalised and relevant to the recipient. We focus on starting genuine conversations, not blasting generic templates. Our approach is designed to build your reputation, not damage it."
  },
  {
    question: "What if the leads aren't a good fit?",
    answer: "We qualify every response before it reaches you. We filter based on intent, budget, and timeline so you're only meeting with prospects who are genuinely interested and ready to have a real conversation."
  },
  {
    question: "What platforms do you use for outreach?",
    answer: "We use a combination of cold email and LinkedIn outreach. Each campaign is built on dedicated domains with proper authentication (SPF, DKIM, DMARC) to ensure strong deliverability."
  },
  {
    question: "How much does it cost?",
    answer: "Our campaigns start from £2,000 per month. Book a free demo and we'll give you a clear breakdown based on your goals and target market."
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
            Common questions about how our outreach campaigns work
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
