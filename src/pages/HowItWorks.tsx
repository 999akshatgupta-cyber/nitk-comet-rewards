import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Download, LogIn, IndianRupee } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: QrCode,
      title: "Step 1: Click Referral Link",
      description: "Click on the referral link provided to access the official Perplexity Comet website with your unique tracking.",
    },
    {
      icon: Download,
      title: "Step 2: Download Comet App",
      description: "Download the Comet app from the website using your Google account. Make sure you're logged in to your Google account.",
    },
    {
      icon: LogIn,
      title: "Step 3: Sign In",
      description: "Open the Comet app and sign in using the same Google account you used to download it. This is crucial for verification.",
    },
    {
      icon: IndianRupee,
      title: "Step 4: Receive ₹59",
      description: "Once verified, you'll receive your ₹59 reward instantly via UPI. Payment is processed within minutes!",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            How to Earn ₹59 Instantly
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps and get your reward in minutes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-2 border-border/50 hover:border-accent/50 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-accent/10 group"
            >
              {/* Number badge */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center text-background font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                {index + 1}
              </div>
              
              <CardContent className="pt-8 pb-8 px-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <step.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-secondary/80 to-secondary/40 backdrop-blur-sm border-2 border-accent/20 shadow-xl">
          <CardContent className="pt-8 pb-8 px-6 md:px-8">
            <h3 className="font-bold text-2xl mb-6 text-foreground flex items-center gap-2">
              <span className="text-accent">⚠️</span> Important Notes
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-xl">•</span>
                <span className="text-muted-foreground leading-relaxed">Make sure to use the same Google account for downloading and signing in</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-xl">•</span>
                <span className="text-muted-foreground leading-relaxed">The reward is processed instantly upon successful verification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-xl">•</span>
                <span className="text-muted-foreground leading-relaxed">Only one referral per device/laptop is allowed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-xl">•</span>
                <span className="text-muted-foreground leading-relaxed">Only students who don't already have Comet installed are eligible</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-xl">•</span>
                <span className="text-muted-foreground leading-relaxed">Contact us immediately if you face any issues during the process</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HowItWorks;
