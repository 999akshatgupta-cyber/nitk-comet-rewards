import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Terms = () => {
  const terms = [
    "Only one referral is allowed per laptop/device to ensure fair distribution of rewards.",
    "The payout of ₹59 is given instantly upon successful verification of your signup.",
    "This offer is valid only for genuine new signups on Perplexity Comet.",
    "This campaign is affiliated with Perplexity Comet but is organized and managed by NITK students.",
    "Any attempt to create multiple fake accounts or misuse the referral system will result in disqualification without payment.",
    "The organizers reserve the right to verify the authenticity of signups before processing payments.",
    "All payments are made via UPI to the account linked during the signup process.",
    "By participating in this campaign, you agree to use Perplexity Comet's services in accordance with their terms of service.",
    "The campaign organizers are not responsible for any technical issues with the Perplexity Comet app or website.",
    "Rewards are subject to availability and the campaign may be modified or terminated at any time with prior notice.",
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Terms & Conditions
          </h1>
          <p className="text-xl text-muted-foreground">
            Please read these terms carefully before participating
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Campaign Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {terms.map((term, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground leading-relaxed">{term}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Alert className="border-accent/50 bg-accent/5">
          <AlertCircle className="h-4 w-4 text-accent" />
          <AlertDescription className="ml-2">
            <strong className="text-foreground">Need Help?</strong> If you have any questions or concerns
            regarding these terms, please reach out to our team directly through the Contact Us page.
            We're here to ensure a smooth and transparent experience for everyone.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default Terms;
