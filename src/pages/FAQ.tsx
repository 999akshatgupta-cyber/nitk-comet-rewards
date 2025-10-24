import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Perplexity Comet?",
      answer:
        "Perplexity Comet is an innovative AI assistant application that helps users with various tasks using advanced artificial intelligence. The app rewards new users who join through referral links, making it beneficial for both referrers and new users.",
    },
    {
      question: "How long does it take to receive the ₹59 reward?",
      answer:
        "The reward is processed instantly within a few minutes after you complete a valid signup. Once you sign in with your Google account on the Comet app, the payment will be sent to your linked UPI account automatically.",
    },
    {
      question: "Can I use multiple email addresses or devices?",
      answer:
        "No, only one valid account per student/laptop is allowed. We verify each signup to ensure fairness, and attempting to create multiple accounts will result in disqualification from the program without payment.",
    },
    {
      question: "How do I know this campaign is genuine?",
      answer:
        "This campaign is being run transparently by NITK students and is officially affiliated with Perplexity Comet. We operate with complete transparency and you can contact us directly if you have any concerns. Many students have already received their rewards successfully.",
    },
    {
      question: "Do I need to share any personal data?",
      answer:
        "No sensitive personal data is required from our end. You only need to use your Google account for signing into the Perplexity Comet app. All authentication and data handling is managed securely by Perplexity's official systems.",
    },
    {
      question: "What if I face technical issues during signup?",
      answer:
        "If you encounter any problems during the signup process, please reach out to us immediately via WhatsApp at the numbers provided on the Contact Us page, or visit us at Room No. 75. We're here to help you complete the process smoothly.",
    },
    {
      question: "Is there a limit to how many people can participate?",
      answer:
        "The campaign is open to all NITK students on a first-come, first-served basis. While we aim to accommodate everyone, the availability of rewards depends on the campaign budget and may be subject to change.",
    },
    {
      question: "When will the campaign end?",
      answer:
        "The campaign will run for a limited time. We will announce any changes or the end date through our official channels. We encourage you to participate as soon as possible to ensure you don't miss out.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about the campaign
          </p>
        </div>

        <Card className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="text-accent hover:text-accent/80 font-semibold underline"
          >
            Contact our team directly
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
